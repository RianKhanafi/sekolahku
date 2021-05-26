import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function InputChecker({style, type, value, checked = true}) {
  const checker = () => {
    let keyValidate = '';
    switch (type) {
      case 'Password':
        keyValidate =
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value,
          );
        const custTitle =
          'Password harus mengandung huruf besar, kecil, sepesial karakter, dan setidaknya mengandung 6 karakter';
        return validate(keyValidate, value, custTitle);
      case 'Email':
        keyValidate =
          !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value,
          );
        return validate(keyValidate, value);
      case 'Phone':
        return 'nomor belum diisi';
      default:
        return false;
    }
  };

  const validate = (keyValidate, data, custTitle) => {
    if (!data) return `${type} tidak boleh kosong`;
    if (keyValidate) {
      return `${type} ${custTitle ? custTitle : 'Tidak valid'}`;
    }
    return false;
  };

  if (!checker() || !checked) {
    return <View></View>;
  }

  if (value === null) {
    return <View></View>;
  }

  return <Text style={[styles.checker, style]}>{checker()}</Text>;
}

const styles = StyleSheet.create({
  checker: {
    color: '#EB4545',
    fontSize: 13,
  },
});
