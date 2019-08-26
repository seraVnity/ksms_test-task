import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";
import { generateDates } from "./util";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const startDate = new Date();
    const arrayOfDates = generateDates(startDate, 10);
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
    return <View style={styles.screen}><View style={styles.container}>{cards}</View></View>;
  }
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  container: {
    display:"flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F6F8",
    width: 247,
    height: 142,
  }
});
