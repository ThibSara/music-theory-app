import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  SoundButton  from './src/utils/SoundButton';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text> Hello there !! </Text>
      <SoundButton soundKey="do"/>
      <SoundButton soundKey="re"/>
      <SoundButton soundKey="mi"/>
      <SoundButton soundKey="fa"/>
      <SoundButton soundKey="sol"/>
      <SoundButton soundKey="la"/>
      <SoundButton soundKey="si"/>
      <SoundButton soundKey="do_octave"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});