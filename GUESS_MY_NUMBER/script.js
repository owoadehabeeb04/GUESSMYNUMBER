'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 40) + 1;
let highscores = 0;

// Localstorage

// check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ NO NUMBER!';
  }

  //   correct no
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';

    if (score > highscores) {
      highscores = score;
      const myhighscore = (document.querySelector('.highscore').textContent =
        highscores);
      console.log(myhighscore);
      console.log(highscores);
      const stringss = String(highscores);
      console.log(stringss);
      // saving to localstorage
      localStorage.setItem('highscoress', stringss);
      // if (highscoress > highscores) {

      //  retrieving no
      // const stored = localStorage.getItem('highscoress');
      // console.log(stored);
      // const NOSTORED = Number(stored);
      // console.log(Number(stored));
      // console.log(highscores);

      // if (NOSTORED) {
      //   console.log((myhighscore = NOSTORED));
      // }

      // }
    }
   
  }

  //   when game is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   whenn game is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Math.trunc(Math.random() * 40) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const stored = localStorage.getItem('highscoress');
console.log(stored);
const NOSTORED = Number(stored);
console.log(Number(stored));

  console.log((highscores = NOSTORED));
  const myhighscore = Number(document.querySelector('.highscore').textContent = highscores);
 
 
// RESETHIGHSCORE
const resethigh = document.querySelector('.RESETHIGH')
console.log(resethigh);
console.log(myhighscore);
resethigh.addEventListener('click', function(){
highscores = 0;
console.log( Number(document.querySelector('.highscore').textContent = highscores));
const stringss = String(highscores);
      console.log(stringss);
localStorage.setItem('highscoress', stringss);
             
})
