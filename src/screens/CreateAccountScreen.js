import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SoundLogo from '../components/SoundLogo';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import ThemeContext from '../styles/ThemeContext';

const MIN_USERNAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 6;

export default function CreateAccountScreen() {
    const globalStyles = React.useContext(ThemeContext);
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
        if (text.length < MIN_USERNAME_LENGTH) {
            setUsernameError(`Username must be at least ${MIN_USERNAME_LENGTH} characters.`);
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (text.length < MIN_PASSWORD_LENGTH) {
            setPasswordError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
        } else {
            setPasswordError('');
        }
    };

    const saveCredentialsToFile = async () => {
        try {
            if (username.trim() === '' || password.trim() === '') {
                Alert.alert('Error', 'Username and password cannot be empty.');
                return;
            }
    
            if (username.length < MIN_USERNAME_LENGTH) {
                Alert.alert('Error', `Username must be at least ${MIN_USERNAME_LENGTH} characters.`);
                return;
            }
    
            if (password.length < MIN_PASSWORD_LENGTH) {
                Alert.alert('Error', `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
                return;
            }
    
            // Retrieve existing credentials from storage
            const existingCredentials = await AsyncStorage.getItem('credentials');
            const parsedCredentials = existingCredentials ? JSON.parse(existingCredentials) : [];
    
            // Check if username already exists
            const existingUser = parsedCredentials.find((user) => user.username === username);
            if (existingUser) {
                Alert.alert('Error', 'Username already exists.');
                return;
            }
    
            // Save new credentials
            const newCredentials = [...parsedCredentials, { username, password }];
            await AsyncStorage.setItem('credentials', JSON.stringify(newCredentials));
    
            // Navigate to login screen
            navigation.navigate('LogScreen');
        } catch (error) {
            console.error('Error saving credentials:', error);
        }
    };
    

    return (
        <View style={globalStyles.container}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: '15%' }}>
                <SoundLogo />
                <View style={{ alignItems: 'center', marginTop: '10%' }}>
                    <Text style={[globalStyles.text, { color: 'grey' }]}> Create an Account on </Text>
                    <Text style={[globalStyles.title, { marginBottom: '10%' }]}> Doremi Lingo </Text>
                </View>
                <TextInputComponent label="Nom d'utilisateur" value={username} onChangeText={handleUsernameChange} error={usernameError} />
                <TextInputComponent label="Mot de passe" isSecure={true} value={password} onChangeText={handlePasswordChange} error={passwordError} />
                <View style={{ marginTop: '10%' }}>
                    <ButtonComponent title="Créer mon compte" onPress={saveCredentialsToFile} />
                </View>
            </View>
        </View>
    );
}
