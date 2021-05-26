import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../src/theme';

export default function TextButton({title, pressedTitle, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text>
        {title} <Text style={styles.pressedTitle}>{pressedTitle}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
  pressedTitle: {
    color: theme.light.mainColor,
    fontWeight: '500',
  },
});
