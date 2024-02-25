import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogScreen from '../screens/LogScreen'; 
import HomeScreen from '../screens/HomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import NotesGame from '../screens/LectureScreens/NotesGame';
import DragDropScreen from '../utils/DragDropScreen';
import Course1 from '../screens/LectureScreens/Course1';
import Course2 from '../screens/LectureScreens/Course2';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogScreen" component={LogScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name = "DragDrop" component={DragDropScreen} options={{ headerShown: false }} />

      <Stack.Screen name = "Course1" component={Course1} options={{ headerShown: false }} />
      <Stack.Screen name="NotesGame" component={NotesGame} options={{ headerShown: false }} />
      <Stack.Screen name = "Course2" component={Course2} options={{ headerShown: false }} />

      
    </Stack.Navigator>
  );
};

export default StackNavigator;
