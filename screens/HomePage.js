import React,{useState} from 'react';
import { StyleSheet, View, Text,Keyboard,Button,Alert  } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import AppButton from '../components/AppButton';
import DateField from '../components/DatePick';

const validationSchema = Yup.object().shape({
    rewardName : Yup.string().required().label('RewardName').min(3),
     rewardDescription: Yup.string().required().min(5).max(60).label('RewardDescription'),
     AdditionalInfo : Yup.string().required().min(5).max(20).label('AdditionalInfo'),
     kudos: Yup.string().required().min(2).label('Kudos'),
     carbon: Yup.string().required().min(2).label('Carbon'),
    //  datePicker: Yup.string().required().label('DatePicker'),
});


function SampleForm(props) {

    const [enteredText, setEnteredText] = useState('');
    const [goal, setGoal] = useState('');
    const [date,setDate ] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(new Date(currentDate));

        let tempDate = new Date(currentDate);
        let formatDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(formatDate);

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
        <Screen >
            <View style={styles.formBackground}>
                <Text style={styles.Text}>Sample Form</Text>
                <Formik
                    style={styles.form}
                    initialValues={{
                        rewardName: '',
                        rewardDescription: '',
                        AdditionalInfo: '',
                        kudos: '',
                        carbon: '',
                        // validTill: '',
                        date: '',
                    }}
                    onSubmit={(values) => 
                        // console.log(values)
                        // alert(JSON.stringify(values, null, 7,))
                        Alert.alert(
                            'Reward Details',
                            'Reward Name: ' + values.rewardName + '\n' +
                            'Reward Description: ' + values.rewardDescription + '\n' +
                            'Additional Info: ' + values.AdditionalInfo + '\n' +
                            'Kudos: ' + values.kudos + '\n' +
                            'Carbon: ' + values.carbon + '\n' +
                            // 'Valid Till: ' + values.validTill + '\n' +
                            'Date: ' + date.toString() + '\n',

                            [
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed'), style: 'ok'},
                            ],
                            {cancelable: false},
                        )
                    }
                    validationSchema={validationSchema}
                >
                { ({handleChange,handleSubmit,errors,setFieldTouched,touched}) => (
                <>
                
                    <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Reward Name"
                    name="rewardName"
                    style={styles.input}
                    />
                    <AppFormField
                        multiline
                        label="Description"
                        numberOfLines={3}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Reward Description"
                        name="rewardDescription"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Additional Information"
                    style={styles.input}
                    name="AdditionalInfo"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Kudos"
                    keyboardType="numeric"
                    style={styles.input}
                    name="kudos"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Carbon"
                    keyboardType="numeric"
                    style={styles.input}
                    name="carbon"
                />
                <DateField
                    label="Valid Till"
                    name="validTill"
                    style={styles.input}
                    onPress={showDatepicker}
                    icon="calendar"
                    placeholder="Select Date"
                />
                <AppButton
                    title="Save Changes"
                    onPress={handleSubmit}
                    style={styles.button}
                    

                />
                    </>
                )}
                </Formik>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    formBackground: {
        position: "absolute",
        backgroundColor: '#fff',
        flex: 1,
        width: '85%',
        height: '85%',
        alignSelf: 'center',
        borderWidth: 0.5,
        top: 40,
        borderColor: 'lightgrey',
    },
    Text: {
        // top: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    form: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    input: {
        fontSize: 20,
        height: 20,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginLeft: 30,
    },
    Button: {
        width: '30%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    datePicker: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
  },
})
export default SampleForm;