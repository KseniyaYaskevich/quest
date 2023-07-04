const asteroid = document.querySelector('.asteroid');
const rat = document.querySelector('.rat');
const buttonToggle = document.querySelector('#btn-toggle');
const buttonReset = document.querySelector('#btn-reset');

let idAnimationFrame;
let count = 0;
let isActive = false;

const animateRatEnd = () => {
  idAnimationFrame = requestAnimationFrame(animateRatEnd);
  count++;

  if (count < 150) {
    asteroid.style.top = count * 5 + 'px';
    asteroid.style.right = count * 4 + 'px';
  }
  if (count < 200) {
    rat.style.right = count * 6 + 'px';
  } else {
    cancelAnimationFrame(idAnimationFrame);
  }
}

const toggleAnimation = () => {
  isActive = !isActive;

  if (isActive) {
    animateRatEnd();
  } else {
    cancelAnimationFrame(idAnimationFrame);
  }
};

const resetAnimation = () => {
  cancelAnimationFrame(idAnimationFrame);
  count = 0;
  isActive = false;

  asteroid.style.top = '0px';
  asteroid.style.right = '0px';
  rat.style.right = '0px';
};

buttonToggle.addEventListener('click', toggleAnimation);
buttonReset.addEventListener('click', resetAnimation);