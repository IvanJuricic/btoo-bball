// CustomLoading.js
import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const CustomLoading = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#FA8320',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  },
});

export default CustomLoading;
