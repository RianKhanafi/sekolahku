import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Badge, ContainerHead, Heading} from '../../components';

export default function Class() {
  return (
    <ContainerHead source={require('../../assets/future/class.png')}>
      <Heading style={styles.schoolname}>SMP Takhassus Al-qur’an</Heading>
      <Heading style={styles.classlabel}>Kelas 10 A</Heading>
      <View style={styles.badgeSection}>
        <Badge style={styles.badge} label="25 Siswa" color="blue" />
        <Badge style={styles.badge} label="25 Siswa" color="blue" />
      </View>
    </ContainerHead>
  );
}

const styles = StyleSheet.create({
  schoolname: {
    fontWeight: '600',
    fontSize: 25,
    marginTop: 20,
  },
  classlabel: {
    marginTop: 20,
  },
  badgeSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  badge: {
    marginTop: 30,
    marginRight: 5,
  },
});
