import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import QuizzComponent from '../../components/QuizzComponent';

export default function NotesQuizz() {
    const navigation = useNavigation();
    const [quizzIndex, setQuizzIndex] = useState(0);

    const quizzData = [
        {
            question: "Dans la notation musicale, la _____ est placée au début de la portée pour indiquer la hauteur",
            options: ['clef', 'note', 'musique'],
            correctOptionIndex: 0, // Index of the correct option in the options array
            nextScreen: "NotesQuizz2"
        },
        {
            question: "Une _____ est un symbole graphique placé sur une portée musicale pour représenter la durée et la hauteur d'un son",
            options: ['note', 'clef', 'portée'],
            correctOptionIndex: 2, // Index of the correct option in the options array
            nextScreen: "NotesQuizz3"
        },
        {
            question: "Dans la partition, la clef de sol est souvent utilisée pour indiquer la hauteur des notes sur la _____",
            options: ['portée', 'plage', 'ligne'],
            correctOptionIndex: 1, // Index of the correct option in the options array
            nextScreen: "NotesQuizz3"
        },
        {
            question: "Bravo tu as réussi le quizz !",
            options: [],
            correctOptionIndex: 1, // Index of the correct option in the options array
            nextScreen: "NotesQuizz3"
        },
        // Add more quiz data as needed
    ];

    const handleButtonPress = () => {
        if (quizzIndex < quizzData.length - 1) {
            setQuizzIndex(prevIndex => prevIndex + 1);
        } else {
            navigation.navigate('HomeScreen');
        }
    };

    const currentQuizzData = quizzData[quizzIndex];

    return (
        <QuizzComponent
            question={currentQuizzData.question}
            options={currentQuizzData.options}
            correctOptionIndex={currentQuizzData.correctOptionIndex}
            nextScreen={currentQuizzData.nextScreen}
            onCorrectAnswerPress={handleButtonPress}
            isLastPage={quizzIndex === quizzData.length - 1}
        />
    );
}
