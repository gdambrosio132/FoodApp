import React from 'react'
import { Text, View } from './Themed'
import { StyleSheet } from 'react-native'
const History = ({storedFoods}) => {

    return (
        <View style={styles.predictionWrapper}>
            {storedFoods ? storedFoods.map((item) => (
          <Text key={item.id} style={styles.container}>
                  {item.name}: {item.calorie}
          </Text>
        )) : <Text style={styles.container}>Nothing Stored Yet</Text> }
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
export default History
