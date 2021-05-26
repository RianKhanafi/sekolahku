import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../auth/Login';
import {RegisterScreen} from '../auth/Register';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export default function () {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* contoh penggunaan lainnya misal -> perbedaan mode CARD, MODAL */}
      <AuthStack.Screen name="LoginStack">
        {() => (
          <LoginStack.Navigator
            mode="card"
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen name="Login" component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={'Registration'} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
