import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


export default function SplashScreen({ navigation }) {
    useEffect(() => {
        // Navigate to the main screen after a certain duration (e.g., 2 seconds)
        const timer = setTimeout(() => {
            navigation.replace('LogScreen'); // Replace SplashScreen with your main screen name
        }, 2000); // Adjust the duration as needed

        // Clear the timer on unmount to prevent memory leaks
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
        <LottieView
          source={require("../../assets/lotties/splash.json")}
          style={styles.animation}
          autoPlay
        />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 100,
        height: 300,
      },
});
