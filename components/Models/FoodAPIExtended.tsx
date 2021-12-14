import * as Clarifai from "clarifai";
import React, { useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import filterItems from './filterItems';
import { GetRequest } from './FoodAPI';
import { async } from "@firebase/util";



import * as KEYS from '../../constants/APIKeys'
import * as Urls from '../../constants/Urls'



  const componentDidMount = async (food:any) => {
    // Building request URI 
    const URI = Urls.edamamURL + "?app_id=" + KEYS.EDAMAM_APP_ID + "&app_key=" + KEYS.EDAMAM_APP_KEY + "&ingr="
    let calories: any 

    //Get Request 
    await fetch(
      URI + food,
      {
        method: 'GET', headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => calories = data.parsed[0].food.nutrients.ENERC_KCAL)

      return calories ? calories : "unknown"
    }


export {componentDidMount}
