export { saveGame, readSave, deleteSave, saveExists };

function saveGame(game) {
  localStorage.setItem('game', JSON.stringify(game));
}

function readSave() {
  return JSON.parse(localStorage.getItem('game'));
}

function saveExists() {
  return localStorage.getItem('game');
}

function deleteSave() {
  localStorage.removeItem('game');
}
