import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AlphabetsScreen,
  MenuScreen,
  NumbersScreen,
  WelcomeScreen,
} from '../../modules';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Alphabets" component={AlphabetsScreen} />
      <Stack.Screen name="Numbers" component={NumbersScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
