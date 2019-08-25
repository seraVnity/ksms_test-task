import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from './Card';

export default function App() {
  const startDate = new Date();
  
  const arrayOfDates = [];
  for (let i = 0; i < 10; i++) {
    let date = new Date();
    date.setDate(startDate.getDate() + i)
    arrayOfDates.push(date);
  }

  const cards = arrayOfDates.map(d => <Card date = {d} />)
  
  return (
    <View style={styles.container}>
        {cards}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "relative",
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    // width: 247,
    // height: 71
  }
});

// '#F4F6F8'
// style={{flex: 1, flexDirection: 'row'}}
