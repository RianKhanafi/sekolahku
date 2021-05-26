import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../src/theme';

export default function Divider({style}) {
  return <View style={[styles.divider, style]}></View>;
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 0.3,
    backgroundColor: theme.light.secondLightColor,
  },
});
