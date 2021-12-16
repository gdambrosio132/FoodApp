import { types } from "@babel/core";
import * as Clarifai from "clarifai";
import React, { useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import * as KEYS from '../constants/APIKeys';
import filterItems from './filterItems';
import { GetRequest } from './FoodAPI';
import { componentDidMount} from './Models/FoodAPIExtended'


//import { CLARIFAI_API_KEY } from '@env';
const ClarifaiView = ({ imageResponse }: { imageResponse: string | undefined }) => {
  const [predictions, setPredictions] = useState(null);


  const clarifaiApp = new Clarifai.App({
    apiKey: KEYS.CLARIFAI_APP_KEY /*CLARIFAI_API_KEY*/,
  });
  process.nextTick = setImmediate;
  const clarifaiDetectObjectsAsync = async (source: string | undefined) => {
    try {
      const newPredictions = await clarifaiApp.models.predict(
        { id: Clarifai.FOOD_MODEL },
        { base64: source },
        { maxConcepts: 10, minValue: 0.4 }
      );

      setPredictions(filterItems({ predictions: newPredictions.outputs[0].data.concepts, threshold: 0.95 }));
    } catch (error) {
      console.log("Exception Error: ", error);
    }

    
  };

  const storeData = async (key:any, value:any) => {
    try {
      await AsyncStorage.setItem(
        key,
        value
      );
      console.log("storeData: Data was stored.")
    } catch (error) {
      console.log("storeData: Data couldn't be stored.", error)
      // Error saving data
    }
  };
  
  const retrieveData = async (key: any)=> {
    try {
      const value = await AsyncStorage.getItem("food");
      if (value !== null) {
        // We have data!!
        console.log("retreiveData: value + ", value)
        return value
      }
    } catch (error) {
      console.log("retreiveData: error retrieving data.")
      // Error retrieving data
    }
  };
  


  const onItemTouch = async(key: any, value: any) => {
    let food = await retrieveData("food")
    let foodList = []

    console.log(food)
    if(food != null){
      console.log("onItemTouch:", food)
      const restoredArray = JSON.parse(food)
      foodList = restoredArray
    }
    let calorie =  await componentDidMount(value)

    await foodList.push({id: Math.random()*999999, name: value, calorie})
    console.log(foodList)
    console.log("onItemTouch Calorie: ")
    const stringifiedArray = JSON.stringify(foodList)
    console.log("onItemTouch: stringifiedArray ", stringifiedArray)

    storeData(key, stringifiedArray)
    alert("You chose "+value)
  }
  

  useEffect(() => {
    clarifaiDetectObjectsAsync(imageResponse);
  }, [imageResponse])

  return (

    <View style={styles.predictionWrapper}>
      {imageResponse && (
        <Text style={styles.text}>
          Predictions: {predictions ? "" : "Predicting..."}
        </Text>
      )}
      {predictions &&
        predictions?.length &&
        console.log("=== Detect foods predictions: ===")}

      {predictions &&
        predictions.map(
          (
            p: { name: React.ReactNode; value: React.ReactNode },
            index: string | number | null | undefined
          ) => {
            console.log(`${index} ${p.name}: ${p.value}`);

            return (
              <TouchableOpacity key={index} 
                                style = {styles.container}
                onPress={() => onItemTouch("food", p.name) }>
                <Text  style={styles.text}>
                  {p.name}: {parseFloat(p.value).toFixed(3)}:
                  Calories Per Serving - <GetRequest food={p.name} />
                </Text>
              </TouchableOpacity>

            );
          }
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  predictionWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
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
 },
});



export default ClarifaiView
