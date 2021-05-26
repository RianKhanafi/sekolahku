import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../src/theme';
import Container from '../atoms/Container';
import {RoundedImage} from '../atoms/RoundedImage';

export function ItemButton({text, source, imgWidth}) {
  return (
    <View style={styles.container}>
      <Container style={styles.content}>
        <RoundedImage source={source} style={[styles.image, imgWidth]} />
      </Container>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 75,
    alignItems: 'center',
  },
  content: {
    width: 75,
    height: 75,
    backgroundColor: '#CAECFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontWeight: '500',
    marginTop: 10,
  },
});
