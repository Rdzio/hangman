import { resetGame } from './index';
import { selectLetter } from './gameLogic';

export { createKeyboard, deleteKeyboard, markSelected };

// add onclick event to buttons
document.addEventListener('click', selectLetter);

const restartButton = document.querySelector('.button__restart');

restartButton.onclick = function () {
  resetGame();
};

function createKeyboard() {
  const lettersWrapper = document.querySelector('.letters-wrapper');
  for (let i = 97; i < 123; i++) {
    const letter = document.createElement('a');
    letter.innerHTML = String.fromCharCode(i);
    letter.classList.add('letter');
    letter.dataset.letter = String.fromCharCode(i);
    lettersWrapper.append(letter);
  }
}

function deleteKeyboard() {
  const lettersWrapper = document.querySelector('.letters-wrapper');

  while (lettersWrapper.firstChild) {
    lettersWrapper.removeChild(lettersWrapper.firstChild);
  }
}

function markSelected(target) {
  const letters = document.querySelectorAll('.letter');
  letters.forEach((el) => {
    if (el.dataset.letter === target) {
      el.classList.add('letter--inactive');
    }
  });
}
