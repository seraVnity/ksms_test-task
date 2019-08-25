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
      style={clicked ? styles.clickedCard : styles.card}
    >
      <Text style={styles.day}>{date.getWeekDay()}</Text>
      <Text style={styles.number}>{date.getDate()}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    display: "flex",
    width: 38,
    height: 55,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 4,
    boxSizing: "border-box",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E1E4EA",
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  clickedCard: {
    display: "flex",
    width: 38,
    height: 55,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: "#F3E8F6",
    boxSizing: "border-box",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D3B2D6",
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  day: {
    // height: 15,
    textAlign: "center",
    fontFamily: "SF Pro Text",
    fontSize: 12,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
    // textAlign: 'center',
  },
  number: {
    // height: 15,
    textAlign: "center",
    fontFamily: "SF Pro Text",
    fontSize: 15,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    letterSpacing: -0.016
  }
});

export default Card;
