let playBtn = document.getElementById("ctrl-play");
let progress = document.getElementById("progress");
let song = document.querySelector(".song");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime
};

function playPause () {
  if (playBtn.classList.contains('fa-pause')) {
    song.pause()
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-play')
  }
  else {
    song.play()
    playBtn.classList.remove('fa-play')
    playBtn.classList.add('fa-pause')
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime
  }, 500);
}

progress.onchange = function() {
  song.play()
  song.currentTime = progress.value;
  playBtn.classList.add('fa-pause')
  playBtn.classList.remove('fa-play')
}