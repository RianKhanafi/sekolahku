import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {CardSchedule, Heading, HeadingTitle} from '../../components';
import {RoundedImage} from '../../components/atoms/RoundedImage';
import Container from '../../components/atoms/Container';
import {AuthContext} from '../context/AuthContext';
import {UserContext} from '../context/UserContext';
import {defaultMargin, theme} from '../theme';
import {ItemButton} from '../../components/molecules/ItemButton';

export default function HomeScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  const user = React.useContext(UserContext);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Icon
  //         name="log-out"
  //         style={{marginRight: 10}}
  //         onPress={() => logout()}
  //       />
  //     ),
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Container style={styles.thumbnailHead}>
            <View style={styles.boxSize}>
              <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
              />
              <View style={styles.welcomecontent}>
                <Text style={styles.welcome}>Selamat Belajar,</Text>
                <Text style={styles.name}>Aninda Sabyan</Text>
              </View>
            </View>

            <Image
              style={styles.logoImage}
              source={require('../../assets/images/logoImage.png')}
            />

            <View style={styles.livecontent}>
              <Image
                style={styles.liveimage}
                source={require('../../assets/images/live.png')}
              />
              <Text style={styles.liveText}>kelas berlangsung</Text>
            </View>
          </Container>
          <View style={[styles.futuremenu]}>
            <ItemButton
              source={require('../../assets/future/camera.png')}
              text="Absen"
            />
            <ItemButton
              source={require('../../assets/future/jadwal.png')}
              text="Absen"
            />
            <ItemButton
              source={require('../../assets/future/class.png')}
              text="Absen"
            />
            <ItemButton
              source={require('../../assets/future/job.png')}
              text="Absen"
            />
          </View>

          <Container style={styles.scheduleContainer}>
            <View style={styles.boxSize}>
              <Heading>Jadwal hari ini</Heading>

              <View style={styles.mapelContainer}>
                <CardSchedule
                  clock="07:30 - 09:00"
                  title="Bahasa Indonesia"
                  subtitle="Guru: Sri indrayu"
                />
                <CardSchedule
                  clock="07:30 - 09:00"
                  title="Bahasa Indonesia"
                  subtitle="Guru: Sri indrayu"
                />
                <CardSchedule
                  clock="07:30 - 09:00"
                  title="Bahasa Indonesia"
                  subtitle="Guru: Sri indrayu"
                />
                <CardSchedule
                  clock="07:30 - 09:00"
                  title="Bahasa Indonesia"
                  subtitle="Guru: Sri indrayu"
                />
              </View>
            </View>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxSize: {
    margin: defaultMargin,
    marginTop: 30,
  },
  thumbnailHead: {
    minHeight: 217,
  },
  logo: {
    width: 100,
    height: 40,
  },
  welcomecontent: {
    marginVertical: 40,
  },
  welcome: {
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  logoImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 180,
    height: 180,
    opacity: 0.5,
  },
  livecontent: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: -20,
    height: 50,
    width: '50%',
    backgroundColor: '#297ED8',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    position: 'absolute',
  },
  liveText: {
    color: '#fff',
    fontWeight: '500',
  },
  liveimage: {
    width: 30,
    height: 30,
  },
  futuremenu: {
    height: 160,
    marginTop: 40,
    margin: defaultMargin,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleContainer: {
    minHeight: 300,
    backgroundColor: '#F8F8F8',
  },
  mapelContainer: {
    marginTop: 30,
  },
});
