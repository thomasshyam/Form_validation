import React from 'react';

import { StyleSheet,SafeAreaView,View,Text  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function Screen({children,style}) {
    return (
        <View style={styles.screen}>
            {/* <View style={{backgroundColor:"#C5E5CB", height:300,  }} /> */}
            <LinearGradient
                colors={['#C5E5CB', '#fff']}
                start={[0.4, 0.3]}
                end={[0.4, 0.4]}
                style={{
                    height: 800,
                    width: '100%',
                    opacity: 0.7,
                }}
            >
            {children}
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        top:60,
        opacity:1,
    },
})

export default Screen;