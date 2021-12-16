import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
function Button({text,onClick}) {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button]}>
      <Text style = {styles.text}>{text}</Text>
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
      backgroundColor: 'blue',
    },
    text:{
      color : "white",
      fontSize : 32
    }
  });