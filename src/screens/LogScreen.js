import React, { useRef, useContext } from 'react';
import { View, Image,Text, Pressable} from 'react-native';
import Logo from '../../assets/images/logo.png';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import ThemeContext from '../styles/ThemeContext';


export default function LogScreen() {
    const globalStyles = useContext(ThemeContext);

    return(
        <View style={globalStyles.container}>
        <View style={{ flex: 1, alignItems:'center', marginTop:'15%', gap:'15%'}}>
        <Image source={Logo} style= {{marginBottom:"15%"}} />
        <Text style={[globalStyles.title, {marginBottom:'10%' }]}> Doremi Lingo !
    </Text>
        <TextInputComponent  label="Nom d'utilisateur" />
        <TextInputComponent label="Mot de passe" isSecure={true} />
        <View style={{marginTop:'10%'}}>
        <ButtonComponent/>
        </View>

        <Pressable onPress={() => console.log("Créer un compte pressed")}>
            <Text style={[globalStyles.text,{color : 'grey'}]} >Créer un compte</Text>
        </Pressable>
        </View>
        </View>
    )
}
