import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import ThemeContext from '../styles/ThemeContext';
import SoundLogo from '../components/SoundLogo';
import CourseCard from '../components/CourseCard';

export default function HomeScreen() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();

    

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={globalStyles.container}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: '15%' }}>

                <SoundLogo />
                <Text style={[globalStyles.text_semibold, { marginVertical:'10%' }]}>Découvre la musique en t’amusant ! </Text>
                <CourseCard
                    title="Découverte de la lecture de notes"
                    description="Apprend à lire les notes"
                    difficulty="easy"
                    courseType="cours"
                    onPress={() => navigation.navigate('Course1')}
                />
                <CourseCard
                    title="Mini jeu sur notes"
                    description="Apprend à placer les notes"
                    difficulty="easy"
                    courseType="Mini jeu"
                    onPress={() => navigation.navigate('NotesQuizz')}
                />
                <CourseCard
                    title="Cours sur les rythmes"
                    description="Apprend les différents types de rythme"
                    difficulty="medium"
                    courseType="cours"
                    onPress={() => navigation.navigate('Course2')}
                />
                <CourseCard
                    title="Cours sur les rythmes"
                    description="Apprend à reproduire un rythme"
                    difficulty="hard"
                    courseType="Mini jeu"
                    onPress={() => navigation.navigate('DragDrop')}
                />
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
});
