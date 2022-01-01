import { StatusBar } from 'expo-status-bar';
import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import FormulaScreen from './Screens/FormulaScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='splash' headerMode ='none'>
        <stack.Screen name='splash' component={SplashScreen} />
        <stack.Screen name='home' component={HomeScreen} />
        <stack.Screen name='formular' component={FormulaScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}


