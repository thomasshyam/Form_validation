import React from 'react';
import { StyleSheet,TouchableOpacity, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons';
import { useFormikContext} from 'formik';


import AppTextInput from './AppTextInput';

function DateField({props,name,icon, ...otherProps}) {
    const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [text, setText] = React.useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let formatDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        props.setDate(formatDate);
        console.log(formatDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    
    return (
        <>
            <TouchableOpacity onPress={() => setShow(!show)}>
            <AppTextInput 
                style={styles.inputdate}
                editable={false}
                name='date'
                // value={text}
                onChangeText={handleChange(name)}
                onBlur={()=>setFieldTouched(name)}
                {...otherProps}
            />    
                {icon && (
                    <Entypo
                        name={icon}
                        size={20}
                        color="darkgrey"
                        style={styles.icon}
                    onFocus={showDatepicker}
                    />
                )}
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="calendar"
                    onChange={onChange}
                />
            )}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: "90%",
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: "lightgrey",
        // padding: 15,
        marginVertical: 10,
    },
    inputdate: {
        // flex: 1,
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon: {
        position: 'absolute',
        right: 30,
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default DateField;