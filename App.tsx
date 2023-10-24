/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CustomTabNavigator from './navigation/TabNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <CustomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default App;
