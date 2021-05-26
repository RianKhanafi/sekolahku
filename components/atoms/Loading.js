import {Spinner} from 'native-base';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Loading({style, label, ...props}) {
  return (
    <View style={[styles.container, styles.horizontal, style]}>
      <ActivityIndicator color="#B4B4B4" size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
