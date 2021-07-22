button = document.querySelector("button")
video = document.querySelector("video")

function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function(){
    this.media.play()
}

const player = new MediaPlayer({el: video})

button.onclick = () => player.play()