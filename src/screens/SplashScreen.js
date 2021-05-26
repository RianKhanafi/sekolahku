import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Heading} from '../../components';
import {theme} from '../theme';
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />

      <Image
        style={styles.splasimg}
        source={require('../../assets/images/splashbackground.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAECFF',
  },
  image: {
    width: 204,
    height: 80,
  },
  headin: {
    fontWeight: 'bold',
    color: theme.light.mainColor,
    marginTop: 25,
  },
  splasimg: {
    position: 'absolute',
    bottom: -100,
    left: 80,
    right: 0,
    width: 430,
    height: 430,
    opacity: 0.5,
  },
});
