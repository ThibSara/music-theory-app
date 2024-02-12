import React, { useState, useContext } from 'react';
import { View, Text, Pressable, Alert } from 'react-native'; // Import Alert from 'react-native'
import { useNavigation } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import SoundLogo from '../components/SoundLogo';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import ThemeContext from '../styles/ThemeContext';


export default function LogScreen() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
      try {
          // Retrieve stored credentials from AsyncStorage
          const storedCredentialsString = await AsyncStorage.getItem('credentials');
          if (!storedCredentialsString) {
              Alert.alert('Error', 'No stored credentials found.');
              return;
          }

          // Parse stored credentials
          const storedCredentials = JSON.parse(storedCredentialsString);

          // Check if entered username and password match stored credentials
          const foundUser = storedCredentials.find((cred) => cred.username === username && cred.password === password);

          if (!foundUser) {
              Alert.alert('Error', 'Invalid username or password.');
              return;
          }

          // Navigate to the home screen
          navigation.navigate('HomeScreen');
      } catch (error) {
          console.error('Error logging in:', error);
      }
  };

  const navigateToCreateAccountScreen = () => {
      navigation.navigate('CreateAccountScreen');
  };

    return(
        <View style={globalStyles.container}>
        <View style={{ flex: 1, alignItems:'center', marginTop:'15%', gap:'15%'}}>
        <SoundLogo />
        <View style ={{alignItems:'center',marginTop:'10%'}}>
        <Text style={[globalStyles.text, {color:'grey' }]}> Welcome on</Text>
        <Text style={[globalStyles.title, {marginBottom:'10%' }]}> Doremi Lingo !</Text>
        </View>

        <TextInputComponent label="Username" value={username} onChangeText={setUsername} />
                <TextInputComponent label="Password" isSecure={true} value={password} onChangeText={setPassword} />
                <View style={{ marginTop: '10%' }}>
                    <ButtonComponent title="Log In" onPress={handleLogin} />
                </View>
                <Pressable onPress={navigateToCreateAccountScreen}>
                    <Text style={[globalStyles.text, { color: 'grey' }]}>Create an account</Text>
                </Pressable>
            </View>
        </View>
    )
}
