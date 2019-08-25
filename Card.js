import React from 'react';
import { StyleSheet, Text, View } from "react-native";

function Card(props) {

  Date.prototype.getWeekDay = function() {
    const weekdays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return weekdays[this.getDay()];
  }

  const date = props.date;

  return(
    <View style={styles.card}>
      <Text style={{textAlign:'center'}}>{date.getDate()}</Text>
      <Text style={{textAlign:'center'}}>{date.getWeekDay()}</Text>
    </View>
  );


}
const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: 38,
    height: 55,
    marginLeft: 2,
    marginRight: 2,
    boxSizing: 'border-box',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E1E4EA',
    borderRadius: 6,
  }
})

export default Card;