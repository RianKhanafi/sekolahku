import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {AuthContext} from './context/AuthContext';
import {UserContext} from './context/UserContext';
import {useAuth} from './hooks/useAuth';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import MainStackNavigator from './navigators/MainTabsNavigator';
import SplashScreen from './screens/SplashScreen';

const RootStack = createStackNavigator();

export default function () {
  const {auth, state} = useAuth();

  const renderScreen = () => {
    if (state.loading) {
      return <RootStack.Screen name="Splash" component={SplashScreen} />;
    }
  };

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        {/* contain or application */}
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {renderScreen()}
          {!state.user ? (
            <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
          ) : (
            <RootStack.Screen name="MainStack">
              {() => (
                <UserContext.Provider value={state.user}>
                  <MainStackNavigator />
                </UserContext.Provider>
              )}
            </RootStack.Screen>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
