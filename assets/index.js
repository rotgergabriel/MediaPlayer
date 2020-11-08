import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
<<<<<<< HEAD
    if (player.media.muted) {
        player.unmute();
        this.media.muted = false
    } else {
        player.mute();
        this.media.muted = true
    }
=======
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
>>>>>>> b21f591d91a6d57e6308d9de2f713500166e79c2
};
