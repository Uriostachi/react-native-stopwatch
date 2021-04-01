import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './src/reducers/index';

import HomeScreen from './src/screens/HomeScreen';
import ChronoScreen from './src/screens/ChronoScreen';

const store = createStore(reducer);

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chrono" component={ChronoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const App = () => ( <Nav /> );

export default App;