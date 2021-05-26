import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Divider,
  Heading,
  IconButton,
  InputText,
  Loading,
} from '../../components';
import TextButton from '../../components/atoms/TextButton';
import {AuthContext} from '../context/AuthContext';
import {defaultMargin} from '../theme';
import {sleep} from '../utils/sleep';
export function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);

  /** state section **/
  const [inputLogin, setInputLogin] = useState({
    identifier: 'riankhanafi@gmail.com',
    password: 'Rian123',
  });
  const [loading, setLoading] = useState(false);

  /** onChange section**/
  const onChangeText = name => e => {
    setInputLogin({
      ...inputLogin,
      [name]: e,
    });
  };

  const loginPressed = async () => {
    setLoading(true);
    try {
      await sleep(2100);
      await login(inputLogin);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.margin}>
            <Heading>Masuk untuk</Heading>
            <Heading>kemudahan pembelajaran</Heading>
            <View style={styles.form}>
              <InputText
                label="NISN/Email"
                style={styles.input}
                value={inputLogin.identifier}
                onChangeText={onChangeText('identifier')}
              />
              <InputText
                label="Password"
                secureTextEntry
                value={inputLogin.password}
                onChangeText={onChangeText('password')}
                style={styles.input}
              />
            </View>
            {loading ? (
              <Loading style={styles.button} />
            ) : (
              <Button
                title="Login"
                style={styles.button}
                onPress={loginPressed}
              />
            )}
            <TextButton
              style={styles.signinQuest}
              title="Belum punya akun?"
              pressedTitle="Daftar"
              onPress={() => navigation.navigate('Registration')}
            />
          </View>
          <Divider />

          <View style={styles.margin}>
            <Heading style={styles.ormorefast}>Atau lebih </Heading>
            <IconButton
              source={require('../../assets/social/google.png')}
              title="Masuk dengan google"
              style={styles.iconButton}
            />
            <IconButton
              source={require('../../assets/social/facebook.png')}
              title="Masuk dengan facebook"
              style={styles.iconButton}
            />
            <IconButton
              source={require('../../assets/social/twitter.png')}
              title="Masuk dengan twitter"
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
