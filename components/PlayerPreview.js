import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const PlayerPreview = ({player, onPress}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#E0E0E0"
      style={styles.tile}>
      <View style={styles.tileContent}>
        <Text style={styles.name}>
          {player.first_name} {player.last_name}
        </Text>
        <Text style={styles.position}>Position: {player.position}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: 'white',
    elevation: 1, // Lighter box shadow on Android
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1}, // Adjust the height for a softer shadow
    shadowOpacity: 0.05, // Very subtle shadow opacity on iOS
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#FFA500',
  },
  tileContent: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  position: {
    fontSize: 16,
    color: 'grey',
  },
  team: {
    fontSize: 16,
    color: 'grey',
  },
});

export default PlayerPreview;
