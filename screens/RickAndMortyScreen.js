import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rickAndMortyApiFunctions} from '../api/api';
import CustomLoading from '../components/CustomLoading';

const RickAndMortyScreen = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const getRMData = async () => {
    try {
      await rickAndMortyApiFunctions.fetchRickCharacter().then(res => {
        setLoading(false);
        setCharacter(res);
      });
    } catch (error) {
      console.log('error getting rm data => ', error);
    }
  };

  const onGenerate = () => {
    setLoading(true);
    getRMData();
  };

  useEffect(() => {
    getRMData();
  }, []);
  return (
    <View style={styles.container}>
      {character && loading === false ? (
        <View style={styles.container}>
          <Image source={{uri: character.image}} style={styles.image} />
          <Text style={styles.name}>Name: {character.name}</Text>
          <Text style={styles.species}>Species: {character.species}</Text>
          <TouchableOpacity style={styles.button} onPress={() => onGenerate()}>
            <Text style={styles.buttonText}>Get new character</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <CustomLoading />
      )}
      <Text style={styles.infoText}>
        Data gathered from RickAndMorty public API using GraphQL
      </Text>
    </View>
  );
};

export default RickAndMortyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8320',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50, // Make the image round
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#eee',
  },
  species: {
    fontSize: 18,
    color: '#eee',
  },
  infoText: {
    marginTop: 16,
    fontSize: 12,
    color: '#666', // Gray text color
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
  },
  button: {
    backgroundColor: '#fffe',
    width: '90%', // Set the width as needed
    height: '10%', // Set the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10, // Optional: Add rounded corners
    padding: 10,
  },
  buttonText: {
    color: 'darkgrey',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
