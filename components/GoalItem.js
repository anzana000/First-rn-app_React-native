import React from "react";
import { View, Text,StyleSheet,TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  
  return <TouchableOpacity activeOpacity={0.8} onPress = {props.removeGoals.bind(this,props.id)}>
    <View style={styles.listItem}><Text >{props.value}</Text></View></TouchableOpacity>
}

const styles = StyleSheet.create({
     listItem: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth:1,
    borderColor: "black"
  }
})
export default GoalItem;