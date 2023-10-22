import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {bballApiFunctions} from '../api/api';
import PlayerPreview from '../components/PlayerPreview';
import {debounce} from '../utils/helper';

const HomeScreen = ({navigation}) => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [query, setQuery] = useState('');

  const setSearchDelay = useCallback(
    debounce(q => {
      setQuery(q);
    }, 100),
    [],
  );

  useEffect(() => {
    const get_players = async () => {
      if (query !== '') {
        let tmp = await bballApiFunctions.searchPlayer(query);
        setPlayers(tmp);
      } else {
        let tmp = await bballApiFunctions.getPlayers();
        // console.log('data => ', tmp);
        setPlayers(tmp);
      }
    };
    get_players();
  }, []);

  useEffect(() => {
    const autocomplete = async () => {
      if (query === '') {
        return;
      }
      try {
        let tmp = await bballApiFunctions.searchPlayer(query);
        setPlayers(tmp);
      } catch (error) {
        console.error(error);
      }
    };
    autocomplete();
  }, [query]);

  return (
    <View style={styles.container}>
      {players ? (
        <View style={styles.listSearch}>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="Search for a player"
            onChangeText={text => setSearchDelay(text)}
          />
          <FlatList
            data={players}
            keyExtractor={(item, index) => `${item.label}_${index}`}
            renderItem={({item}) => (
              <PlayerPreview
                player={item}
                onPress={() => navigation.navigate('PlayerDetails', {item})}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Loading....</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Change height to flex to occupy the entire screen
    backgroundColor: 'rgba(255, 165, 0, 0.3)', // Lighter background color with some orange accents
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    padding: 10,
    color: 'black',
    backgroundColor: 'white', // Input background color
    borderRadius: 5, // Rounded corners for the input box
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
  listSearch: {
    flex: 1,
    backgroundColor: '#FA8320',
    padding: 20,
  },
});
