import React, { useContext } from 'react';


import CourseComponent from '../../components/CourseComponent';
import portee from '../../../assets/images/course_images/portee.png';
import lecture_notes from '../../../assets/images/course_images/lecture_notes.png';
import notes from '../../../assets/images/course_images/notes.png';
import portee_notes from '../../../assets/images/course_images/portee_notes.png';

export default function Course2() {


    const courseData = [
        { id: 1, title: 'La portée', img: portee, description: 'La portée se compose de 5 lignes et 4 interlignes. On compte les interlignes en partant du bas de la portée' },
        { id: 2, title: 'La portée et les notes', img: portee_notes, description: 'La musique s’écrit au moyen de notes disposées sur la portée. Les sons graves sont en bas de la portée et les sons aigus en haut' },
        { id: 3, title: 'La note', img: notes, description: 'Les hampes ne doivent pas (trop) sortir de la portée. C’est pourquoi elles peuvent être dirigées vers le haut ou le bas suivant si elles sont placées au dessus ou en dessous de la 3ième ligne de la portée.' },
        { id: 4, title: 'Lecture de note', img: lecture_notes, description: 'Ainsi vous pouvez apprendre à lire les notes !' },
    ];

    return (
    <CourseComponent courseData={courseData} />
    );
}
