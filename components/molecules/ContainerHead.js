import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {defaultMargin} from '../../src/theme';
import Container from '../atoms/Container';

export default function ContainerHead({children, source}) {
  return (
    <View>
      <Container style={styles.container}>
        <View style={styles.childrenContainer}>{children}</View>
        <View style={styles.imageContainer}>
          <Image style={styles.imagebackground} source={source} />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 250,
    padding: defaultMargin,
    display: 'flex',
    flexDirection: 'row',
  },
  childrenContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  imagebackground: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: defaultMargin,
    opacity: 0.3,
  },
});
