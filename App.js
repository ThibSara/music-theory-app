import React, { useRef } from 'react';
import {SafeAreaView } from 'react-native';
import SoundButton from './src/utils/SoundButton';
import LogScreen from './src/screens/LogScreen';
import globalStyles from './src/styles/globalStyles';
import ThemeContext from './src/styles/ThemeContext';



export default function App() {

  return (
    <ThemeContext.Provider value={globalStyles}>
    <SafeAreaView style={globalStyles.container}>
      <LogScreen/>
      </SafeAreaView>
   </ThemeContext.Provider>
  );
}


