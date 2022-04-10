import MediaPlayer from "./MediaPlayer.js"

const video = document.querySelector('video')
const boton = document.querySelector('button')

//instanciamos el objeto
const player = new MediaPlayer({el: video})


//cuando se de click en el video, ejecutaremos la función que alterna entre play y pause
boton.onclick = () => player.togglePlay()


