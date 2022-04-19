import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector('video')
const boton = document.querySelector('button')
const boton_muted = document.querySelector('#mute-unmute')

//instanciamos el objeto
const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(), new AutoPause()
]})


//cuando se de click en el video, ejecutaremos la función que alterna entre play y pause
boton.onclick = () => player.togglePlay()


boton_muted.onclick = () => {

    player.media.muted ? player.unmute() : player.mute()
}

//service worker 


//si hay un service worker en el navegador o lo acepta
if('serviceWorker' in navigator) {

    //registraremos un archivo en el cual pondremos en marcha el serviceWorker para seguir usando la app en modo offline
    navigator.serviceWorker.register('/serviceWorker.js')

    .catch(error => console.error(error.message))
}


