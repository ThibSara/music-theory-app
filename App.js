import React, { useRef } from 'react';
import {SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import SoundButton from './src/utils/SoundButton';
import globalStyles from './src/styles/globalStyles';
import StackNavigator from './src/navigation/StackNavigator'; 
import ThemeContext from './src/styles/ThemeContext';



export default function App() {

  return (
    <NavigationContainer>
    <ThemeContext.Provider value={globalStyles}>
    <StackNavigator />
   </ThemeContext.Provider>
   </NavigationContainer>
  );
}


