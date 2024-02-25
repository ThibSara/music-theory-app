import React, { useContext } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import ThemeContext from '../../styles/ThemeContext';


export default function Course2() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <View>
            <Text>Course2</Text>   
        </View>
    );
}
