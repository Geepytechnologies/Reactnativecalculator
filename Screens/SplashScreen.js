import React, { useEffect } from 'react'

import { Image , View, StyleSheet, Animated, Easing, Button, Text, TouchableOpacity} from 'react-native' 

export default function SplashScreen({navigation}) {
   
    useEffect(()=>{
        StartScaleFunction();
        StartScaleFunc();
        setTimeout(()=> {
           navigation.replace('Calculator')
        },1500);
    },[])

    let scaleValueHolder = new Animated.Value(0)
    const StartScaleFunction = () => {
       scaleValueHolder.setValue(0);
       Animated.timing(scaleValueHolder, {
           toValue: 1,
           duration: 400,
           easing: Easing.ease,
           useNativeDriver: false
       }).start()
    }
    // signatext animation
    const StartScaleFunc = () => {
       scaleValueHolder.setValue(0);
       Animated.timing(scaleValueHolder, {
           toValue: 1,
           duration: 1000,
           easing: Easing.bounce,
           useNativeDriver: false
       }).start()
    }

    
    return (
        <View style={styles.container}>
            <View style={{height: 100, alignItems: 'center'}}>
               <Animated.Image 
                    style={[styles.image,
                        {
                            transform: [
                                {
                                    translateX: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 2]
                                    })
                                },
                                {
                                    translateY: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 2]
                                    })
                                },
                                {
                                    scaleX: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 1.5]
                                    })
                                },
                                {
                                    scaleY: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 1.5]
                                    })
                                }
                            ]
                        }
                    ]}
                    source={require('../assets/images/calclogo-min.png')}
                />
            </View>
            <View>
                <Animated.Image 
                    style={[styles.imagetext,
                        {
                       transform: [
                                {
                                    translateX: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1]
                                    })
                                },
                                {
                                    translateY: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [50, -10]
                                    })
                                },
                                {
                                    scaleX: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 1.5]
                                    })
                                },
                                {
                                    scaleY: scaleValueHolder.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 1.5]
                                    })
                                }
                            ]
                        }
                    ]}
                    source={require('../assets/images/signatext-min.png')}
                />
                </View>
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
        width: 100,
        height: 100
    },
    imagetext: {
        width: 100,
        height: 50,
        marginTop: 9
    }
})