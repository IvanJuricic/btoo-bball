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
        //console.log('data => ', tmp);
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
                onPress={() => navigation.navigate('Details', {item})}
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
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    color: 'black',
  },
  listSearch: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});
