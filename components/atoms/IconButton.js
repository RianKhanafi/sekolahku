import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../src/theme';

export default function IconButton({title, style, source, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Image style={styles.image} source={source} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.light.secondLightColor,
    padding: 21,
    width: '100%',
    borderRadius: 13,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
  image: {
    marginRight: 20,
  },
});
