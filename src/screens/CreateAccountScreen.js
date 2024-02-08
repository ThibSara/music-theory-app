import React, {useContext } from 'react';
import { View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import ThemeContext from '../styles/ThemeContext';


export default function CreateAccountScreen() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();


    return(
        <View style={globalStyles.container}>
        <Text>CreateAccountScreen</Text>
        </View>
    )
}