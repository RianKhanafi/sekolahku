import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../src/theme';

export default function Button({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.light.mainColor,
    padding: 21,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  text: {
    color: theme.light.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
