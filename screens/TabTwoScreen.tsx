import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const { NutritionAnalysisClient } = require('edamam-api');

  const foodData = async () => {
    const client = new NutritionAnalysisClient({
      appId: /*'<Your Edamam Nutrition Analysis App Id>'*/,
      appKey: /*'<Your Edamam Nutrition Analysis App Key>'*/
    });
  
    const results = await client.search({ query: 'Chicken' });
    
    const answer = client.getNutritionalData({ results });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutritional Facts</Text>
      <Text></Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
