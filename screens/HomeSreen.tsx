import React from 'react'
import { View } from '../components/Themed'
import Navigation from '../navigation'
import { Image } from 'react-native-elements/dist/image/Image'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { RootStackScreenProps, RootTabScreenProps } from '../types'

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
    return (
        <View style={styles.predictionWrapper}>
            <Image style={{ width: 200, height: 200}} source={require('../assets/images/food_logo.jpeg')}/>
            <Button style={styles.button} title={'Scan Your Food'} onPress={()=>{navigation.navigate("Root")}}>
            </Button>
            <Button style={styles.button} title={'View What You Ate'} onPress={()=>{navigation.navigate("Modal")}}>
            </Button>
        </View>
    )
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
      flex: 1,
      alignItems: "center",
      padding:50,
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
   button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginTop:30,
    borderRadius: 4,    
    elevation: 3,
    backgroundColor: 'green',
  },
    image:{
        width:'40%',
        height:'40%',

    }
  });

