/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from './app/views/splashScreen';

const Brilliant = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: () => ({
      header: null,
    })


  },

}, {
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    headerTitleStyle: { color: 'white' },

  },
});

const App = createAppContainer(Brilliant)

export default App;
