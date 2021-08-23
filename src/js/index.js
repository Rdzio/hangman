import { words } from './worlds';
import { createKeyboard, deleteKeyboard } from './userInput';
import { createModal } from './modal';
import { resetStickman, drawStickman } from './stickman';
import {
  showCategory,
  createBlanks,
  deleteBlanks,
  showLetter,
} from './showInformation';
import { randomize } from './helper';
import { readSave, deleteSave, saveExists } from './gameSave';
import { markSelected } from './userInput';

const game = {};
// check for saved game
if (saveExists()) {
  resumeGame();
} else {
  resetGame();
}
export { game, resetGame };
createModal();

function resetGame() {
  console.log('Resetting the game!');
  game.ingame = true;
  game.category =
    Object.keys(words)[
      randomize(0, Object.keys(words).length - 1)
    ].toLowerCase();
  game.word =
    words[game.category][
      randomize(0, words[game.category].length - 1)
    ].toLowerCase();
  game.letters = [];
  game.lives = 6;
  game.spaces = game.word.split(' ').length - 1;
  game.guessed = 0;
  deleteKeyboard();
  createKeyboard();
  showCategory(game.category);
  deleteBlanks();
  createBlanks(game.word);
  resetStickman();
  deleteSave();
}

function resumeGame() {
  console.log('Resuming the game!');
  const save = readSave();
  for (let key in save) {
    game[key] = save[key];
  }

  if (game.ingame === false) {
    resetGame();
  } else {
    createKeyboard();
    createBlanks(game.word);
    game.letters.forEach((letter) => {
      markSelected(letter);
      for (let i = 0; i < game.word.length; i++) {
        if (game.word[i] === letter) {
          showLetter(i, letter);
        }
      }
    });
    showCategory(game.category);
    drawStickman(game.lives);
  }
}
