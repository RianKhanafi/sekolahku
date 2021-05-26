import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Badge({label, color = 'blue', style}) {
  return (
    <View style={[styles.container, styles[color], style]}>
      <Text style={styles.textColor}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
  },
  blue: {
    backgroundColor: '#297ED8',
  },
  textColor: {
    color: '#fff',
  },
});
