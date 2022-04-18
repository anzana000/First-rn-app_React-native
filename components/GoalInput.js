import React,{useState} from "react";
import { View, TextInput, Button,StyleSheet,Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoals, setEnteredGoals] = useState("");
    const goalsHandler = (enteredText) => {
    setEnteredGoals(enteredText);
  }

  const addGoals = () => {
    props.onAddGoal(enteredGoals);
    setEnteredGoals("");
  }
     
  return <Modal visible = {props.visibility} animationType = "slide">
  <View style={styles.inputSection}>
      <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalsHandler} value={enteredGoals} />
      <View style={ styles.buttons}>
      
        <View style = {styles.button}>
          <Button title="ADD" onPress={addGoals} />
        </View>
         <View style = {styles.button}>
          <Button title="Cancel" color="red" onPress={props.cancel} />
          </View>
        </View>
    </View>
    </Modal>
}

const styles = StyleSheet.create({
    inputSection: {  flex:1,justifyContent: "center", alignItems: "center" },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width:"60%"
   },
  button: {
    width:"40%"
  }
})

export default GoalInput;