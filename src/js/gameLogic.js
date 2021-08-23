import { game } from './index';
import { showModal } from './modal';
import { drawStickman } from './stickman';
import { saveGame } from './gameSave';
import { markSelected } from './userInput';
import { showLetter } from './showInformation';

export { selectLetter };

function selectLetter(event) {
  if (
    (event.target.className != 'letter' &&
      event.target.className != 'letter--inactive') ||
    game.ingame == false
  )
    return;

  markSelected(event.target.dataset.letter);
  game.letters.push(event.target.dataset.letter);
  // CONSOLE LOG
  console.log(event.target.dataset.letter);
  checkLetter(event.target.dataset.letter);
  checkLose(game.lives);
  checkWin(game.guessed, game.spaces, game.word);
  saveGame(game);
}

function lostGame() {
  showModal(false, game.word);
  game.ingame = false;
}

function winGame() {
  showModal(true);
  game.ingame = false;
}

function checkLose(lives) {
  if (lives <= 0) {
    lostGame();
  }
}

function checkWin(guessed, spaces, word) {
  console.log(`G: ${guessed} S: ${spaces} + W: ${word.length}`);
  if (guessed + spaces === word.length) {
    winGame();
  }
}

// checks if word contains selected letter
function checkLetter(letter) {
  if (game.ingame) {
    let hits = 0;
    let mishits = 0;
    for (let i = 0; i < game.word.length; i++) {
      if (game.word[i] === letter) {
        showLetter(i, letter);
        hits += 1;
        console.log('1');
      } else {
        mishits += 1;
        console.log('0');
      }
    }
    if (hits > 0) {
      game.guessed += hits;
    } else {
      game.lives -= 1;
      drawStickman(game.lives);
    }
  }
}
