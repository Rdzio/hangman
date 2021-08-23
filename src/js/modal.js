import { resetGame } from './index';

const modal = document.querySelector('.modal');
const body = document.querySelector('body');

export { createModal, showModal };

function createModal() {
  const content = document.createElement('div');
  content.classList.add('modal__content');
  const message = document.createElement('h2');
  const correctWord = document.createElement('p');
  const tryAgain = document.createElement('a');
  tryAgain.classList.add('modal__tryAgain');
  tryAgain.innerText = 'Try again!';

  tryAgain.onclick = function () {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
    resetGame();
  };

  content.append(message, correctWord, tryAgain);
  modal.append(content);
}

function showModal(won, word) {
  const modalContent = document.querySelector('.modal__content');
  modal.style.display = 'block';
  body.style.overflow = 'hidden';

  if (won) {
    modalContent.children[0].innerText = 'You Win!';
    modalContent.children[1].innerText = '';
  } else {
    modalContent.children[0].innerText = 'You Lost!';
    modalContent.children[1].innerHTML = `Correct word is: </br> <b>${word}</b>`;
  }
}
