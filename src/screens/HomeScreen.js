import React, {useContext } from 'react';
import { View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import ThemeContext from '../styles/ThemeContext';


export default function HomeScreen() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();


    return(
        <View style={globalStyles.container}>
        <Text>HomeScreen</Text>
        </View>
    )
}