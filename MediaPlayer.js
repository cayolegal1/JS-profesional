//realizar config.el nos obliga que al instanciar estemos pasando un objeto, porque estamos diciendole a la 
//funcion que el media, va a ser igual al elemento de un objeto  
function MediaPlayer(config) {

    this.media = config.el
}


//lo que hacemos aquí, básicamente es que en la funcion madre, estamos declarando que el parámetro del objeto que se pase en las instancias se guardará en el atributo media, y en este caso estamos instanciando con la etiqueta video de HTML que tiene consigo un método o una API para reproducir los vídeos que es el método play, 
//la etiqueta video tiene varios metodos o atributos consigo para controlar el video pasado por HTML
MediaPlayer.prototype.play = function(){

    this.media.play()
}


//lo mismo que play pero solo que lo pausa
MediaPlayer.prototype.pause = function() {

    this.media.pause()

}


//aquí hacemos una funcion que preguntamos si el video esta pausado, que ejecute el método play, si no esta 
//pausado, que lo pause
MediaPlayer.prototype.togglePlay = function() {

if(this.media.paused) {

    this.media.play()
} else {

    this.media.pause()

    }
}

export default MediaPlayer;