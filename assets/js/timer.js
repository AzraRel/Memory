'use strict';
let interval, score = 0, seconds = 0, minutes = 0;

const timer = {
  startTimer() {
    interval = setInterval(() => {
      seconds++;
      score++;
  
      if(seconds === 60) {
        minutes++;
        seconds = 0;
      }
  
      elements.timer.innerHTML = `${minutes}m : ${seconds}s`;
    }, 1000);
  },
  
  clearTimer (id) {
    clearInterval(id);
    seconds = 0;
    minutes = 0;
  }

}