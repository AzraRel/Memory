'use strict';

const deck = {
  loadDecks() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', './assets/decks.json');
      xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
          const decks = JSON.parse(xhr.response);
          resolve(decks);
        } else {
          console.warn(xhr.status);
          reject(xhr.status);
        }
      });
      xhr.send();
    });
  },
  generateDeck(decks, selection, anzahl) {
    let deck = decks[selection];
    deck.cards = deck.cards.splice(0, anzahl / 2);
    deck.cards = [...deck.cards, ...deck.cards];
    deck.cards = this.shuffleDeck(deck.cards);
    return deck;
  },
  shuffleDeck(cards) {
    let currentIndex = cards.length;
    let randomIndex, tempCard;
    let localCards = cards;

    while (currentIndex != 0) {
      randomIndex = ~~(Math.random() * currentIndex);
      currentIndex--;

      tempCard = localCards[currentIndex];
      localCards[currentIndex] = localCards[randomIndex];
      localCards[randomIndex] = tempCard;
    }
    return localCards;
  }
}