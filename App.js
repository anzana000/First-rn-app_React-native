import React,{useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [visibility, setVisibility] = useState(false);
  
  const addGoals = (goal) => {

   setCourseGoals(courseGoals => [
     ...courseGoals, {
       id: Math.random().toString(),
       value: goal
     }
   ]);
   
   setVisibility(false);
   
    
  }

  const removeGoals = (goalId) => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId )
    })
  }

  const cancel = () => {
    setVisibility(false);
  }
 
  return (

    <View style={styles.container}>
      <Button title = "Add New Goal" onPress={() => setVisibility(true)} />
      <GoalInput visibility={visibility} onAddGoal={addGoals} cancel={ cancel}/>
      <FlatList
        keyExtractor = {(item,index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={ itemData.item.id} value={itemData.item.value} removeGoals={ removeGoals}/>
        )}
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:50
  }

});
