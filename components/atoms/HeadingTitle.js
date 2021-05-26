import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../src/theme';

export default function HeadingTitle({title, subtitle, style, ...props}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.light.whiteColor,
  },
  subtitle: {
    color: theme.light.whiteColor,
    marginTop: -4,
  },
});
