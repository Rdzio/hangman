export { showCategory, createBlanks, deleteBlanks, showLetter };

function showCategory(category) {
  const categoryContainer = document.getElementById('category');
  categoryContainer.innerText = `Category: ${category}`;
}

function createBlanks(text) {
  const wordWrapper = document.querySelector('.word-wrapper');
  const word = document.createElement('ul');
  word.classList.add('word');
  splittedText = text.split(' ');

  splittedText.forEach((el, i, arr) => {
    for (let i = 0; i < el.length; i++) {
      const blank = document.createElement('li');
      blank.innerText = '_';
      blank.classList.add('word__letter');
      word.append(blank);
    }

    if (i != arr.length - 1) {
      const blank = document.createElement('li');
      blank.innerText = ' ';
      blank.classList.add('word__letter', 'word__space');
      word.append(blank);
    }
  });

  wordWrapper.append(word);
}

function showLetter(position, letter) {
  const wordWrapper = document.querySelector('.word');
  wordLetters = wordWrapper.querySelectorAll('.word__letter');
  wordLetters[position].innerText = letter;
}

function deleteBlanks() {
  const wordWrapper = document.querySelector('.word-wrapper');
  while (wordWrapper.firstChild) {
    wordWrapper.firstChild.remove();
  }
}

