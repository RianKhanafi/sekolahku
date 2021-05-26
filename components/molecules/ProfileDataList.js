import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-ionicons';

export default function ProfileDataList({label, icon, title, style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.label}>
        <Icon style={styles.labelIcon} name={icon} size={16} />
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
  },
  labelIcon: {
    color: '#297ED8',
    marginRight: 5,
  },
  labelText: {
    color: '#297ED8',
  },
  title: {
    fontSize: 15.5,
    fontWeight: '300',
  },
});
