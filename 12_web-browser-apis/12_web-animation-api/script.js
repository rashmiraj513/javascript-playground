const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');

const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
  {
    color: 'blue',
    offset: 0.3,
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};

const roll = ball.animate(rollAnimation, rollOptions);

// Play Event Listener
play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
});

// Pause Event Listener
pause.addEventListener('click', () => roll.pause());

// Reverse Event Listener
reverse.addEventListener('click', () => roll.reverse());

// Speed Up Event Listener
speedUp.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 2)
);

// Slow Down Event Listener
slowDown.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 0.5)
);
