import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogScreen from '../screens/LogScreen'; 
import HomeScreen from '../screens/HomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogScreen" component={LogScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
      
      {/* Add all the others screen here */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
