import {Input, Item, Label} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import InputChecker from './InputChecker';

export default function InputText({style, label, ...props}) {
  return (
    <View>
      <Item floatingLabel style={style}>
        <Label style={[style, styles.input]}>{label}</Label>
        <Input {...props} style={style} />
      </Item>
      {/* <InputChecker type={label} value={props.value} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontWeight: '500',
  },
});
