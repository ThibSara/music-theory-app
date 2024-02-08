import React, { useRef, useContext } from 'react';
import { View, Image,Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


import SoundLogo from '../components/SoundLogo';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import ThemeContext from '../styles/ThemeContext';


export default function LogScreen() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();

    const navigateToHomeScreen = () => {
        navigation.navigate('HomeScreen'); // Navigate to the CreateAccountScreen
      };
    
      const navigateToCreateAccountScreen = () => {
        navigation.navigate('CreateAccountScreen'); // Navigate to the CreateAccountScreen
      };

    return(
        <View style={globalStyles.container}>
        <View style={{ flex: 1, alignItems:'center', marginTop:'15%', gap:'15%'}}>
        <SoundLogo />
        <View style ={{alignItems:'center',marginTop:'10%'}}>
        <Text style={[globalStyles.text, {color:'grey' }]}> Welcome on</Text>
        <Text style={[globalStyles.title, {marginBottom:'10%' }]}> Doremi Lingo !</Text>
        </View>

        <TextInputComponent  label="Nom d'utilisateur" />
        <TextInputComponent label="Mot de passe" isSecure={true} />
        <View style={{marginTop:'10%'}}>
        <ButtonComponent onPress={navigateToHomeScreen}/>
        </View>

        <Pressable onPress={navigateToCreateAccountScreen}>
            <Text style={[globalStyles.text,{color : 'grey'}]} >Créer un compte</Text>
        </Pressable>
        </View>
        </View>
    )
}
