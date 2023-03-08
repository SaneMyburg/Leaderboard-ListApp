import './style.css';
import { postData, getData } from './api.js';

const form = document.querySelector('.form');
const usersScore = document.querySelector('.users-scores');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refreshButton = document.querySelector('#refresh-score');

const displayScore = (player, playerScore) => {
  const scoreDiv = document.createElement('div');
  scoreDiv.classList.add('user-div');
  scoreDiv.innerHTML = `
  <h4>${player}: ${playerScore}</h4>`;

  usersScore.appendChild(scoreDiv);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const player = name.value;
  const playerScore = score.value;
  await postData({
    user: player,
    score: Number(playerScore),
  });

  name.value = '';
  score.value = ' ';
});

refreshButton.addEventListener('click', async () => {
  usersScore.innerHTML = ' ';
  const scores = await getData();
  scores.result.forEach((score) => {
    displayScore(score.user, score.score);
  });
});