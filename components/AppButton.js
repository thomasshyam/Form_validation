import React from 'react';
import {  Text, StyleSheet, TouchableOpacity,Keyboard  } from 'react-native';



function AppButton({title,onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}  >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width:150,
        height:40,
        alignSelf:"center",
        borderRadius:10,
        alignItems  : "center",
        justifyContent: "center",
        backgroundColor:'#C5E5CB',
        top:10,
    },
    text:{
        color: "#fff",
        fontSize: 20,
    }
})
export default AppButton;