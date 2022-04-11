import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector('video')
const boton = document.querySelector('button')
const boton_muted = document.querySelector('#mute-unmute')

//instanciamos el objeto
const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay()
]})


//cuando se de click en el video, ejecutaremos la función que alterna entre play y pause
boton.onclick = () => player.togglePlay()

boton_muted.onclick = () => {

    player.media.muted ? player.unmute() : player.mute()
}


