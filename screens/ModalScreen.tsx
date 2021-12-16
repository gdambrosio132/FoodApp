import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import CalculateCalories from '../components/CalculateCalories';
import History from '../components/History';
export default function ModalScreen({ navigation }: RootStackScreenProps<'Modal'>) {

  const [storedFoods, setStoredFoods] = useState<null|any>([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const getAll = async () => 
    {
      try {
        const foodArr = await AsyncStorage.getItem("food");
        console.log(foodArr)
        const obj  = JSON.parse(foodArr);
        setStoredFoods(obj)
        //console.log(total)
      } catch (error) {
        
      }
     
    }
  getAll();
}, [])

  const deleteData = () => {
    AsyncStorage.removeItem("food");
    setStoredFoods(null);
  }

  return (
    <View style={styles.predictionWrapper}>
      <Button style = {styles.button} text={'Clear List'} onClick={deleteData}></Button>
      <History storedFoods={storedFoods}></History>
      {storedFoods!=null ? <Text style={styles.total}>Total Calories: {CalculateCalories({items:storedFoods})}</Text> : <Text style={styles.total}>Total Calories:</Text>}


      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 16,
  },
  predictionWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding:20,
  },
  container: {
    padding: 10,
    marginTop: 3,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f2aa4cff',
    textAlign: 'center',
    fontSize: 20
 },
 total: {
  padding: 10,
  marginTop: 30,
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  backgroundColor: '#E97451',
  textAlign: 'center',
  fontSize: 20
},
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'blue',
  marginBottom: 20
}
});