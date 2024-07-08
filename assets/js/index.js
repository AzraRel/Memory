'use strict';

// KONSTANTEN / VARIABLEN
const elements = {};
let deckL = [];
const anzEasy = 8, anzMiddle = 16, anzHard = 24;

// FUNKTIONEN
const domMapping = () => {
  elements.menu = document.querySelector('#menu');
  elements.playField = document.querySelector('#playfield');
  elements.easyBtn = document.querySelector('#easyBtn');
  elements.middleBtn = document.querySelector('#middleBtn');
  elements.hardBtn = document.querySelector('#hardBtn');
  elements.timer = document.querySelector('#timer');
  elements.highscore = document.querySelector('#highscore');
  elements.avgTime = document.querySelector('#avgTime');
  elements.avgClicks = document.querySelector('#avgClicks');
}

const generatePlayfield = (quantity, difficulty) => {
  resetPlayfield();
  pairs = quantity / 2;
  const deckSel = document.querySelector('select').value;

  // deep copy von deckL erstellen
  const decks = JSON.parse(JSON.stringify(deckL));
  const cardDeck = deck.generateDeck(decks, deckSel, quantity);

  elements.playField.classList.add(difficulty);
  for(let i = 0; i < cardDeck.cards.length; i++) {
    let card = {
      name: cardDeck.cards[i].split('/').pop(),
      front: cardDeck.cards[i],
      back: cardDeck.cover
    }
    let playCard = dom.createCard(card, 'div', elements.playField);
    playCard.addEventListener('click', cards.flipCard);
  }

  timer.startTimer();
}

const resetPlayfield = () => {
  elements.playField.textContent = '';
  elements.playField.classList.remove('easy');
  elements.playField.classList.remove('middle');
  elements.playField.classList.remove('hard');
  timer.clearTimer(interval);
}

const appendEventlisteners = () => {
  elements.easyBtn.addEventListener('click', () => generatePlayfield(anzEasy, 'easy'));
  elements.middleBtn.addEventListener('click', () => generatePlayfield(anzMiddle, 'middle'));
  elements.hardBtn.addEventListener('click', () => generatePlayfield(anzHard, 'hard'));
}

const init = () => {
  domMapping();
  deck.loadDecks().then((decks) => {
    deckL = decks;
    dom.createDropDown(deckL, 'select', elements.menu);
  }).catch((error) => {
    console.error('Failed to load decks:', error);
  });

  appendEventlisteners();
}

// INIT
init();