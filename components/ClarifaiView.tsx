import React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { Image, Platform, ScrollView, TouchableOpacity } from "react-native";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as Clarifai from "clarifai";

import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { GetRequest } from './FoodAPI';
import * as KEYS from '../constants/APIKeys';
import * as Urls from '../constants/Urls';
import filterItems from './filterItems';

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
                                onPress = {() => alert("You chose this item")}>
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
