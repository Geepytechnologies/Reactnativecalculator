//import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import React from 'react'
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import FormulaScreen from './Screens/FormulaScreen';
//import Animate from './Screens/Animate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Signacalc'>
        <stack.Screen name='Signacalc' component={SplashScreen} options={{headerShown: false}}/>
        <stack.Screen name='Calculator' component={HomeScreen} options={{headerShown: false}}/>
        <stack.Screen name='formulars' component={FormulaScreen} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
    
  )
  
}
<StatusBar Style='light'/>


