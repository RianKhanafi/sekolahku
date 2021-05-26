import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../src/theme';

export default function Container({style, children}) {
  return <View style={[styles.thumbnailHead, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  thumbnailHead: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#E5F6FF',
  },
});
