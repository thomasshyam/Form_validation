import React,{useState} from 'react';
import { StyleSheet, TextInput,View,Platform,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function AppTextInput({icon,...otherProps}) {

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholderTextColor="darkgrey"
                {...otherProps} />
                <TouchableOpacity>
                {icon && (
                <Entypo
                    name={icon}
                    size={20}
                    color="darkgrey"
                    style={styles.icon}
                />
            )}
                </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
        width: "90%",
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: "lightgrey",
        padding: 15,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        fontSize: 20,
        color: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon: {
        marginLeft: 130,
    }
})

export default AppTextInput;