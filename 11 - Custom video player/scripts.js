const media = document.querySelector('video');
const controls = document.querySelector('.player__controls');

const play = document.querySelector('.player__button');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const volume = document.querySelector('input[name="volume"]');
const rwd = document.querySelector('button[data-skip="-10"]');
const fwd = document.querySelector('button[data-skip="25"]');
var progressBar = document.querySelector('.progress__filled');

media.removeAttribute('controls');
controls.style.visibility = 'visible'

play.addEventListener('click', playPauseMedia);
volume.addEventListener('change', changeVolume);
volume.addEventListener('mousemove', changeVolume);
playbackRate.addEventListener('change', playSpeed);
playbackRate.addEventListener('mousemove', playSpeed);
media.addEventListener('ended', stopMedia);
rwd.addEventListener('click', windBackward);
fwd.addEventListener('click', windForward);
media.addEventListener('timeupdate', handleProgress);

function playPauseMedia() {
    if(media.paused) {
      //play.setAttribute('data-icon','u');
      play.innerHTML = '►';
      media.play();
    } else {
      //play.setAttribute('data-icon','P');
      play.innerHTML = '❚ ❚';
      media.pause();
    }
  }

  function handleProgress() {
    const percent = (media.currentTime / media.duration) * 100; 
    progressBar.style.flexBasis = `${percent}%`;
}

  function playSpeed()
  {
    media.playbackRate = this.value;
    //vid.play();
  }

  function changeVolume()
  {
    media.volume = this.value;
  }

  function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon','P');
  }


function windBackward() {
    if(media.currentTime <= 10) {
      stopMedia();
    } else {
      media.currentTime -= 10;
    }
  }
  
  function windForward() {
    if(media.currentTime >= media.duration - 25) {
      stopMedia();
    } else {
      media.currentTime += 10;
    }
  }

  

