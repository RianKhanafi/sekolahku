import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {
  Button,
  Divider,
  Error,
  Heading,
  IconButton,
  InputChecker,
  InputText,
  Loading,
} from '../../components';
import TextButton from '../../components/atoms/TextButton';
import {AuthContext} from '../context/AuthContext';
import {defaultMargin} from '../theme';
import {sleep} from '../utils/sleep';

const initialState = {
  username: null,
  email: null,
  password: null,
  name: null,
  phone: null,
  school: null,
};

export function RegisterScreen({navigation}) {
  const {register} = React.useContext(AuthContext);

  /** State section **/
  const [regiesterData, setRegisterData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  /** State onChnage **/
  const onChangeText = name => value => {
    setRegisterData({
      ...regiesterData,
      [name]: value,
      ...(name === 'name' && {username: value}),
    });
  };

  /** Action section  **/
  const registerPressed = async () => {
    setLoading(true);
    try {
      await register(regiesterData);
      navigation.pop();
    } catch (e) {
      showMessage({
        message: e.message,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.margin}>
            <Heading>Buat akun baru untuk</Heading>
            <Heading>kemudahan pembelajaran</Heading>
            <View style={styles.form}>
              {/* <InputChecker pre/> */}
              <InputText
                label="Nama lengkap"
                onChangeText={onChangeText('name')}
                value={regiesterData.name}
                style={styles.input}
              />
              <InputText
                label="Username"
                onChangeText={onChangeText('username')}
                value={regiesterData.name}
                style={styles.input}
                disabled
              />
              <InputText
                label="Phone"
                keyboardType="number-pad"
                onChangeText={onChangeText('phone')}
                value={regiesterData.phone}
                style={styles.input}
              />
              <InputText
                label="Email"
                keyboardType="email-address"
                onChangeText={onChangeText('email')}
                value={regiesterData.email}
                style={styles.input}
              />
              <InputText
                label="Password"
                secureTextEntry
                style={styles.input}
                value={regiesterData.password}
                onChangeText={onChangeText('password')}
              />
            </View>
            {loading ? (
              <Loading style={styles.button} />
            ) : (
              <Button
                title="Daftar"
                style={styles.button}
                onPress={registerPressed}
              />
            )}
            {/* <View style={styles.signinQuest}> */}
            <TextButton
              style={styles.signinQuest}
              title="Sudah punya akun?"
              pressedTitle="Login"
              onPress={() => navigation.navigate('Login')}
            />
            {/* </View> */}
          </View>
          <Divider />

          <View style={styles.margin}>
            <Heading style={styles.ormorefast}>Atau lebih </Heading>
            <IconButton
              source={require('../../assets/social/google.png')}
              title="Daftar dengan google"
              style={styles.iconButton}
            />
            <IconButton
              source={require('../../assets/social/facebook.png')}
              title="Daftar dengan facebook"
              style={styles.iconButton}
            />
            <IconButton
              source={require('../../assets/social/twitter.png')}
              title="Daftar dengan twitter"
              style={styles.iconButton}
            />
          </View>
          <View style={styles.topContent}>
            <Text style={styles.top}>Dengan mendaftar, kamu setuju dengan</Text>
            <Text style={styles.top}>syarat danketentuan</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  margin: {
    margin: defaultMargin,
  },
  form: {
    marginTop: 40,
    marginBottom: 15,
  },
  input: {
    marginVertical: 7,
    // marginTop: 20,
  },
  button: {
    marginVertical: 40,
  },
  iconButton: {
    marginVertical: 10,
  },
  topContent: {
    marginTop: 5,
    marginBottom: 30,
  },
  top: {
    textAlign: 'center',
  },
  signinQuest: {
    marginTop: -23,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ormorefast: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '500',
  },
});
