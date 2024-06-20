const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');

// Play Event Listener
play.addEventListener('click', () => video.play());

// Pause Event Listener
pause.addEventListener('click', () => video.pause());

// Stop Event Listener
stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

// Time Update Event Listener
video.addEventListener(
  'timeupdate',
  () => (currentTime.innerText = video.currentTime)
);
