import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const PlayerPreview = ({player, onPress}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#E0E0E0"
      style={styles.tile}>
      <View style={styles.tileContent}>
        <Text style={styles.label}>{player.first_name}</Text>
        <Text style={styles.value}>{player.last_name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: 'white',
    elevation: 5, // Box shadow on Android
    shadowColor: 'black', // Box shadow on iOS
    shadowOffset: {width: 0, height: 2}, // Box shadow on iOS
    shadowOpacity: 0.2, // Box shadow on iOS
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tileContent: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontSize: 16,
    color: 'grey',
  },
});

export default PlayerPreview;
