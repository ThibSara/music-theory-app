import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import ThemeContext from '../styles/ThemeContext';
import { Card } from 'react-native-paper';

import easy from '../../assets/images/course_difficulty/easy.png';
import medium from '../../assets/images/course_difficulty/medium.png';
import hard from '../../assets/images/course_difficulty/hard.png';
import book from '../../assets/images/icons/book.png';
import play from '../../assets/images/icons/play.png';


const windowWidth = Dimensions.get('window').width;

export default function CourseCard(props) {
    const globalStyles = React.useContext(ThemeContext);
    const { title, description,courseType,difficulty, onPress } = props;

    let difficultyImage;

    switch (difficulty){
        case 'easy':
            difficultyImage = easy;
            break;
        case 'medium':
            difficultyImage = medium;
            break;
        case 'hard':
            difficultyImage = hard;
            break;
        default:
            difficultyImage = easy;
        break;
    }

    let courseTypeImage;
    switch (courseType){
        case 'cours':
            courseTypeImage = book;
            break;
        case 'Mini jeu':
            courseTypeImage = play;
            break;
        default:
            courseTypeImage = book;
            break;
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Card style={styles.container}>
                <View style = {styles.TitleWrapper}>
                    <Image source={courseTypeImage} style={styles.book_image} />
                    <Text style={globalStyles.text_semibold}>{title}</Text>
                </View>
                <Text style={[globalStyles.text, { color: 'grey', marginTop:20 }]}>{description}</Text>
                <View style={styles.courseType}>
                    <View style={styles.courseWrapper}>
                        <Text style={globalStyles.text}>{courseType}</Text>
                    </View>
                    <View style={styles.difficultyWrapper}>
                        <Text style={globalStyles.text}>Difficulté</Text>
                        <Image source={difficultyImage} style={styles.difficultyIcon} />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.8, 
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 7,
    },
    courseType: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    courseWrapper: {
        backgroundColor: 'lightgrey',
        borderRadius: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 2,
        marginTop:10,
    },
    difficultyWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    difficultyIcon: {
        marginLeft: 5,
    },
    book_image:{

        marginRight: 10,
    },
    TitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
