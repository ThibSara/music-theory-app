import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../styles/ThemeContext';
import LottieView from "lottie-react-native";


export default function QuizzComponent({ question, options, correctOptionIndex, onCorrectAnswerPress, isLastPage }) {
    const navigation = useNavigation();
    const globalStyles = React.useContext(ThemeContext);

    const handleButtonPress = (index) => {
        if (index === correctOptionIndex) {
            onCorrectAnswerPress();
        }
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 20, alignItems: 'center', marginTop: '25%' }} >
            <Text style={[globalStyles.text_semibold, { marginVertical: '25%' }]}>{question}</Text>
            <View style={styles.buttonContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.button} onPress={() => handleButtonPress(index)}>
                        <Text style={styles.buttonText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>

      </View>
            {isLastPage && (
                <View  style={{alignContent:'center', alignItems:'center'}}>
                <TouchableOpacity style = {{ backgroundColor:'#F17C15',padding: 10, borderRadius: 5,alignItems: 'center'}} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.buttonText} >Retour à la page d'accueil</Text>
                </TouchableOpacity>
                <LottieView
                source={require("../../assets/lotties/splash.json")}
                style={styles.animation}
                autoPlay
              />
              </View>
            )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#F73893',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    animation: {
      width: 100,
      height: 300,
    },
});
