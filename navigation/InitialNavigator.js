import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomTabNavigator from './TabNavigator';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const InitialStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Content"
        component={CustomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default InitialStackNavigator;
