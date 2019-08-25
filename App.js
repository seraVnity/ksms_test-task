import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const startDate = new Date();

    const arrayOfDates = [];
    for (let i = 0; i < 10; i++) {
      let date = new Date();
      date.setDate(startDate.getDate() + i);
      arrayOfDates.push(date);
    }
    const cards = arrayOfDates.map(d => ({
      id: d.getDate(),
      date: d,
      clicked: false
    }));
    this.state = { cards };
  }

  onCardPressed = cardId => {
    const cards = this.state.cards;
    cards.forEach(card => {
      if (card.id === cardId) {
        card.clicked = true;
      } else {
        card.clicked = false;
      }
    });
    this.setState({ cards });
  };

  render() {
    const cards = this.state.cards.map(card => (
      <Card
        key={card.id}
        id={card.id}
        date={card.date}
        clicked={card.clicked}
        onCardPressed={this.onCardPressed}
      />
    ));
    return <View style={styles.container}>{cards}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 71,
    width: 247
  }
});

