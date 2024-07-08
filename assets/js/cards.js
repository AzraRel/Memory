'use strict';

let first, second;
let clicks = 0;
let pairs;

const cards =  {
  flipCard (){
    // Falls die Karte schon einmal geclicked wurde (aber trotzdem noch die Erste ist)
    if(this===first) return;

    // Karte als erste Karte festlegen
    if(!first) {
      first = this;
      first.classList.toggle('flip');
      clicks++;
      return;
    }

    second = this;
    second.classList.toggle('flip');
    clicks++;
    // Überprüpfung ob die Karten ein Paar sind
    cards.checkCards();
  },
  flipCards() {
    setTimeout(() => {
      first.classList.toggle('flip');
      second.classList.toggle('flip');
      first = null;
      second = null;
    }, 500);
  },
  checkCards() {
    let equals = first.dataset.name === second.dataset.name;

    // Wenn es sich um ein Paar handelt wird das 'click' Event entfernt damit sie 
    // nicht nochmal gedreht werden können.
    // Falls nicht werden beiden Karten gedreht
    equals ? cards.disableCards() : cards.flipCards();
  },
  disableCards() {
    first.removeEventListener('click', cards.flipCard);
    second.removeEventListener('click', cards.flipCard);
    first = null;
    second = null;

    // Ist pairs auf 0 dann wurden alle Paare gefunden
    // der Timer wird gestopt und Daten werden im LocalStorage gespeichert.
    pairs --;
    if(pairs === 0) {
      timer.clearTimer(interval);
      storage.handleStorage(clicks, score);
      clicks = 0;
      score = 0;
    }
  }
}