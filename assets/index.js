
const video =document.querySelector('video')
const button =document.querySelector('button')
const muted = document.getElementById('muted')
const volume = document.getElementById('volume')

// class MediaPlayer{
//     constructor(video) {
//         this.media = video
//     }
//     play() {
//         if (this.media.paused){
//             this.media.play()
//         }else {
//             this.media.pause()
//         }
//     }
// }

function MediaPlayer(video) {
    this.media = video
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}
MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused){
        this.media.play()
    }else {
        this.media.pause()
    }
}
MediaPlayer.prototype.muted = function() {
    if (this.media.muted){
        this.media.muted= false
    }else {
        this.media.muted=true
    }
}


const player = new MediaPlayer(video)

button.onclick = ()=> player.togglePlay()
muted.onclick = ()=> player.muted()


