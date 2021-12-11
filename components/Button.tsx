import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
function Button({children} : {children:string}) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text>Save Calories</Text>
    </TouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

  });