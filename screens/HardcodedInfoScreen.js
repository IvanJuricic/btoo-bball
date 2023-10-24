import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HARDCODED_TEXT} from '../assets/strings';

const HardcodedInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{HARDCODED_TEXT}</Text>
    </View>
  );
};

export default HardcodedInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8320',
    padding: 10,
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color: '#fffe', // Dark text color
  },
});
