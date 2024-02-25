import React, { useContext } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import ThemeContext from '../../styles/ThemeContext';


export default function Course1() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <View>
            <Text>Course1</Text>   
        </View>
    );
}
