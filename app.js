button = document.querySelector("button")
video = document.querySelector("video")

function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function(){
    this.media.play()
}

MediaPlayer.prototype.toggleClick = function(){
    this.media.paused ? this.media.play()
    : this.media.pause()
}

const player = new MediaPlayer({el: video})

button.onclick = () => player.toggleClick()