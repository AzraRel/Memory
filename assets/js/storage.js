'use strict';

const storage = {
  handleStorage(clicks, score) {
    // Anzahl der Durchgänge
    const numberGames = this.updateStorage('numberGames', 1);
    // Alle Clicks bisher
    const allClicks = this.updateStorage('allClicks', clicks);
    localStorage.setItem('avgClicks', allClicks / numberGames);
  
    // Gesamter Score über alle Spiele. Benötigt für den Durchschnitt
    const allScore = this.updateStorage('allScore', score);
    localStorage.setItem('avgScore', allScore / numberGames);
  
    // Highscore gibt hier die niedrigste Zeit an die benötigt wird zum Lösen
    const highScore = localStorage.getItem('highscore') ? Number(localStorage.getItem('highscore')) : score;
    localStorage.setItem('highscore', Math.min(highScore, score));

    this.loadScores();
  },
  updateStorage(key, value = 1, initialValue = 0) {
    let storedValue = localStorage.getItem(key) ? Number(localStorage.getItem(key)) : initialValue;
    localStorage.setItem(key, storedValue + value);
    return localStorage.getItem(key);
    // als Alternative return storedValue + value;
  },
  loadScores() {
    const highscore = localStorage.getItem('highscore');
    if(highscore) elements.highscore.innerHTML = `Highscore: ${highscore}`;

    // avgScore sind die durchschnittlich gebrauchten Sekunden
    // daraus berechnet sich die durchschn. Zeit
    const avgTime = localStorage.getItem('avgScore');
    // avgTime%60 gibt übrigen Sekunden zurück
    if(avgTime) elements.avgTime.innerHTML = `avgTime   : ${~~(avgTime/60)}m ${avgTime%60}s`;

    const avgClicks = Number(localStorage.getItem('avgClicks'));
    if(avgClicks) elements.avgClicks.innerHTML = `avgClicks: ${avgClicks.toFixed(2)}`;
  } 
}