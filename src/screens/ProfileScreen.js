import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';
import {Button, ProfileDataList} from '../../components';
import {RoundedImage} from '../../components/atoms/RoundedImage';
import {AuthContext} from '../context/AuthContext';
import {UserContext} from '../context/UserContext';
import {defaultMargin, theme} from '../theme';

export default function ProfileScreen() {
  const {logout} = React.useContext(AuthContext);
  const user = React.useContext(UserContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.imageContent}>
              <RoundedImage
                style={styles.image}
                source={require('../../assets/images/user.png')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>Profile</Text>
            <ProfileDataList
              style={styles.list}
              icon="person"
              label="Username"
              title={user?.user?.name}
            />
            <ProfileDataList
              style={styles.list}
              icon="person"
              label="Username"
              title={user?.user?.username}
            />
            <ProfileDataList
              style={styles.list}
              icon="call"
              label="Phone"
              title={user?.user?.phone}
            />
            <ProfileDataList
              style={styles.list}
              icon="mail"
              label="Email"
              title={user?.user?.email}
            />
            <ProfileDataList
              style={styles.list}
              icon="swap"
              label="Role"
              title={user?.user?.role?.name}
            />
            <ProfileDataList
              style={styles.list}
              icon="calendar"
              label="Tanggal Terdaftar"
              title={user?.user?.created_at}
            />
            <ProfileDataList
              style={styles.list}
              icon="checkmark-circle-outline"
              label="Konfirmasi"
              title={
                user?.user?.confirmed ? 'Terkonfirmasi' : 'Belum terkonfirmasi'
              }
            />
          </View>
          <View style={styles.logout}>
            <Icon
              name="log-out"
              style={styles.logoutIcon}
              onPress={() => logout()}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
          <View style={styles.button}>
            <Button title="Ubah data Personal" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  imageContent: {
    width: 140,
    height: 140,
    borderWidth: 0.8,
    borderColor: theme.light.mainColor,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // marginVertical: 40,
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.light.whiteColor,
  },
  image: {
    width: 125,
    height: 125,
    borderWidth: 1.4,
    borderColor: theme.light.mainColor,
  },
  body: {
    marginTop: 20,
    minHeight: 300,
    width: '100%',
    padding: defaultMargin,
    backgroundColor: theme.light.whiteColor,
  },
  list: {
    marginTop: 20,
  },
  button: {
    margin: defaultMargin,
  },
  logout: {
    padding: defaultMargin,
    marginVertical: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    color: '#EB4545',
  },
  logoutIcon: {
    color: '#EB4545',
    marginRight: 15,
  },
});
