import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({navigation}) {
  const onAnimationEnd = () => {
    navigation.replace('Content');
  };

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="zoomIn"
        style={styles.title}
        duration={3000}
        onAnimationEnd={onAnimationEnd} // Callback when the animation is completed
      >
        Rick'n'Morty Basketball Universe
      </Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8320',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fffe',
    marginVertical: 10,
    textAlign: 'center',
    padding: 20,
  },
});
