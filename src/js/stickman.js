export { drawStickman, resetStickman };

function drawStickman(lives) {
  switch (lives) {
    case 0:
      const rightLeg = document.querySelector('.stickman__rightleg');
      rightLeg.style.visibility = 'visible';

    case 1:
      const leftLeg = document.querySelector('.stickman__leftleg');
      leftLeg.style.visibility = 'visible';

    case 2:
      const rightArm = document.querySelector('.stickman__rightarm');
      rightArm.style.visibility = 'visible';

    case 3:
      const leftArm = document.querySelector('.stickman__leftarm');
      leftArm.style.visibility = 'visible';

    case 4:
      const torso = document.querySelector('.stickman__torso');
      torso.style.visibility = 'visible';

    case 5:
      const head = document.querySelector('.stickman__head');
      head.style.visibility = 'visible';
  }
}

function resetStickman() {
  const container = document.querySelector('.stickman');
  const stickman = container.querySelectorAll('[class^="stickman"]');

  stickman.forEach((element) => {
    element.style.visibility = 'hidden';
  });
}
