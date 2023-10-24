import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CustomStackNavigator from './StackNavigator';
import HardcodedInfoScreen from '../screens/HardcodedInfoScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeIcon = <Icon name="home" size={25} color="#900" />;
const InfoIcon = <Icon name="info" size={25} color="#900" />;

const Tab = createMaterialBottomTabNavigator();

const CustomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="Main"
        component={CustomStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return HomeIcon;
          },
        }}
      />
      <Tab.Screen
        name="Info"
        component={HardcodedInfoScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return InfoIcon;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
