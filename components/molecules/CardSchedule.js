import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CardSchedule({clock, title, subtitle}) {
  return (
    <View style={[styles.container, styles.mapelLight]}>
      <View style={[styles.clock, styles.clockLight]}>
        <Text style={styles.clockText}>{clock}</Text>
      </View>
      <View style={styles.mapel}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    display: 'flex',
    flexDirection: 'row',
  },
  clock: {
    width: 125,
    padding: 10,
    borderLeftWidth: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockText: {
    textAlign: 'center',
    fontSize: 16,
  },
  mapel: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  clockLight: {
    backgroundColor: '#F1F1F1',
    borderColor: '#EBEBEB',
  },
  mapelLight: {
    backgroundColor: '#EBEBEB',
  },
  title: {
    fontWeight: '600',
    fontSize: 17.2,
  },
  subtitle: {
    fontSize: 13,
  },
});
