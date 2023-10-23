import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose whether you want to explore best basketball players or random
        Rick And Morty information
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PlayerSearch')}>
        <Text style={styles.buttonText}>Basketball</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RickAndMorty')}>
        <Text style={styles.buttonText}>Rick and Morty</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8320',
  },
  button: {
    backgroundColor: '#fffe',
    width: '90%', // Set the width as needed
    height: '10%', // Set the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10, // Optional: Add rounded corners
  },
  buttonText: {
    color: 'darkgrey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fffe',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
