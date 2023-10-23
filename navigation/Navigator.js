import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlayerDetailsScreen from '../screens/PlayerDetailsScreen';
import SplashScreen from '../screens/SplashScreen';
import PlayersSearchScreen from '../screens/PlayersSearchScreen';
import RickAndMortyScreen from '../screens/RickAndMortyScreen';

const Stack = createNativeStackNavigator();

const CustomNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlayerSearch"
        component={PlayersSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlayerDetails"
        component={PlayerDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RickAndMorty"
        component={RickAndMortyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CustomNavigator;
