const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

// Play Event Listener
play.addEventListener('click', () => audio.play());

// Pause Event Listener
pause.addEventListener('click', () => audio.pause());

// Stop Event Listener
stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Time Update Event Listener
audio.addEventListener('timeupdate', () => {
  currentTime.innerText = audio.currentTime;
});

// Audio Volume Change Event Listener
volume.addEventListener('change', () => (audio.volume = volume.value));
