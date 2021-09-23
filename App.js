import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import MealsNavigator from './src/navigation/MealsNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Oswald': require('./assets/fonts/Oswald-Medium.ttf'),
    'Oswald-bold': require('./assets/fonts/Oswald-Bold.ttf'),
    'Oswald-light': require('./assets/fonts/Oswald-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
