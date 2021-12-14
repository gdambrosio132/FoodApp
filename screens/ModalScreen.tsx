import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { AsyncStorage } from 'react-native';


export default function ModalScreen() {


  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('food');
      if (value !== null) {
        // We have data!!
        console.log("retreiveData: data was retrieved")
        console.log(value);

      }
    } catch (error) {
      console.log("Error: RetrieveData => ", error)
      // Error retrieving data
    }
  };


  return (
    <View style={styles.container} onClick={retrieveData()}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
