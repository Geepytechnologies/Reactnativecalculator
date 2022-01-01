import React from 'react'

import { Image , View, StyleSheet, Animated, Easing, Button} from 'react-native' 

export default function SplashScreen({navigation}) {
    setTimeout(()=> {
       navigation.navigate('home')
    },2000);
    let rotateValueHolder = new Animated.Value(0)
    const StartRotateFunction = () =>{
       rotateValueHolder.setValue(0);
       Animated.timing(rotateValueHolder, {
           toValue: 1,
           duration: 1000,
           easing: Easing.linear,
           useNativeDriver: false
       }).start(()=> StartRotateFunction())
    }
    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View style={styles.container}>
           <Animated.Image 
              style={[styles.image,
                {transform: [{rotate: RotateData}]}
            ]}
              source={require('../assets/signacalc.png')}
           />
           </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 400,
        height: 400
    },
    imagetext: {
        width: 300,
        height: 300
    }
})