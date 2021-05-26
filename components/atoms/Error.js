import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Error({error, message, style, onPress}) {
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    if (error) {
      setOpenError(true);

      setTimeout(() => {
        setOpenError(false);
      }, 2100);
    }
  }, [error]);

  if (openError)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
      </View>
    );

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EB4545',
    padding: 10,
    width: '100%',
  },
  text: {
    color: '#fff',
  },
});
