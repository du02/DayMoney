import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Ubuntu_700Bold,Ubuntu_400Regular, useFonts } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';

import Home from './src/views/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if(!fontsLoaded) return <AppLoading />

  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
  },
});
