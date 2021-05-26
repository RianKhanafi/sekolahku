import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Icon from 'react-native-ionicons';
import {theme} from '../theme';
import ProfileScreen from '../screens/ProfileScreen';
import Class from '../screens/ClassScreen';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HS() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

export default function () {
  return (
    <>
      {/* <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name={'HomeScreen'} component={HomeScreen} />
      </MainStack.Navigator> */}
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#297ED8',
          inactiveTintColor: '#373737',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({color}) => (
              <Icon name="chatbubbles" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Class"
          component={Class}
          options={{
            tabBarLabel: 'Kelas',
            tabBarIcon: ({color}) => (
              <Icon name="desktop" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
