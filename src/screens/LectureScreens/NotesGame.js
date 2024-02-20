import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../../styles/ThemeContext';

import blanche from '../../../assets/images/notes/blanche.png';
import noire from '../../../assets/images/notes/noire.png';
import croche from '../../../assets/images/notes/croche.png';
import vide from '../../../assets/images/notes/vide.png';
import play from '../../../assets/images/icons/play.png';

export default function NotesGame() {
    const globalStyles = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: '20%' }}>

                <Text style={globalStyles.title}>Jeu sur les notes</Text>
                <Text style={globalStyles.text_semibold}>essaye de recréer le même rythme !</Text>

                <Image source={play} style={{ width: 50, height: 50 }} />

                <View style={{ marginTop: '10%' }}>


                <View style={styles.Container}>
                    <Image source={vide} />
                    <Image source={vide} />
                    <Image source={vide} />
                    <Image source={vide} />
                </View>


                <View style={styles.notesContainer}>
                    <Image source={blanche} />
                    <Image source={croche} />
                    <Image source={noire} />
                    <Image source={croche} />
                </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    notesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',

    },
    Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10%',
    },
});
