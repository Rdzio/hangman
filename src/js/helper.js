export { randomize };

// returns random number from given range
function randomize(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
