//basicamente con los plugins, estamos diciendole que es opcional, porque si nos pasan plugins pues bien, tendremos 
//plugins, si no nos pasan ningun plugin y omiten el envio, pues this.plugins será un array vacío
function MediaPlayer(config) {

    this.media = config.el;
    this.plugins = config.plugins || []
    this._initplugins() //al instanciar el método, se ejecutará este atributo que es un prototipo, como lo def abajo
}


//método prototipo para inicializar los plugins
MediaPlayer.prototype._initplugins = function(){

    this.plugins.forEach( plugin => {

        plugin.run(this)
    })
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



MediaPlayer.prototype.mute = function(){

    this.media.muted = true
}


MediaPlayer.prototype.unmute = function() {

    this.media.muted = false
}


export default MediaPlayer;