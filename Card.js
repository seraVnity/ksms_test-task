import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Card(props) {
  Date.prototype.getWeekDay = function() {
    const weekdays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return weekdays[this.getDay()];
  };

  const date = props.date;
  const clicked = props.clicked;

  return (
    <TouchableOpacity
      onPress={() => props.onCardPressed(props.id)}
      style={clicked ? [styles.card, styles.clickedCard] : styles.card}
    >
      <Text style={[styles.date, styles.day]}>{date.getWeekDay()}</Text>
      <Text style={[styles.date, styles.number]}>{date.getDate()}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 38,
    height: 55,
    marginHorizontal: 3,
    marginVertical: 8,
    boxSizing: "border-box",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E1E4EA",
    borderRadius: 6,
    justifyContent: "center",
  },
  clickedCard: {
    backgroundColor: "#F3E8F6",
    borderColor: "#D3B2D6",
  },
  date: {
    textAlign: "center",
    fontFamily: "SF Pro Text",
    // display: "flex",
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "center",
    fontFeatureSettings: "tnum",
  },
  day: {
    fontSize: 12,
    lineHeight: 16,
  },
  number: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.016,
  }
});

export default Card;
