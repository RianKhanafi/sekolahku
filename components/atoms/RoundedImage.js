import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export function RoundedImage({source, style}) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 150,
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
