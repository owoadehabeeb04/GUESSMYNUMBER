'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 40) + 1;
let highscores = 0;
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
      document.querySelector('.highscore').textContent = highscores;
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
