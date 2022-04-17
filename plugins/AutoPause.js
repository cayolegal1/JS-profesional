class AutoPause {

    constructor(){

        this.threshold = 0.25
        this.pausedByVisibility = false;

        //apuntamos a que el this del metodo de nuestra clase AutoPause apunte hacia el mismo método o clase
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    } 

    run(player){

        //guardamos el player en una instancia de la clase, es decir, para poder ejecutar sus métodos, ya que el player en si en nuestro src MediaPlayer.js es el media, y media es el video
        this.player = player


        //IntersectionObserver recibe un callback (funcion), y un objeto de configuración, un theshold apunta al porcentaje del target, es decir, cuando hagamos scroll y llegue o pase al 25% del target, se ejecutará el callback, el target en este caso esta en la linea 22, this.player.media, que es el video en si, o sea todo este callback y la configuración apuntan al elemento que definamos en el método observe, que como su nombre lo dice, se quedará observando dicho elemento para ejecutar el callback cuando llegue al threshold
        const observer = new IntersectionObserver(this.handleIntersection, {

            threshold: this.threshold
        })

        observer.observe(this.player.media)

        //evento que escucha si nos movemos de pestaña o de ventana
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }


    //callback Intersection Obs
    handleIntersection(entries) {  


        //el entry tiene varios elementos, o objetos, pero a nosotros solo nos interesa el primer objeto
        const entry = entries[0]
        console.log(entry)
        console.log(entry.intersectionRatio)

        //determinamos si la intersección esta pasando o es igual al threshold
        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible) {

            this.player.play()

        } else {

            this.player.pause()

        }
     }

     handleVisibilityChange() {

        //evalua el estado de la pestaña de nuestra app, si estamos en ella, quiere decir 'visible'
        const isVisible = document.visibilityState === 'visible'

        //si estamos en la pestaña dale play
        if(isVisible) {
            if (this.pausedByVisibility){

                this.player.play()

            }
            
        } else {
            if (!this.player.media.paused) {

              this.player.pause();
              this.pausedByVisibility = true;

            } else {
              this.pausedByVisibility = false;
              
            }
          }
     }
} 

// observe: es un metodo de la ‘clase’ intersectionObjerver que nos permite aplicar nuestro objeto configurado a un elemento. Entonces todo lo que configuramos al asignar new IntersectionObserver lo aplicamos en el elementoAObservar.
// Otra manera de explicarlo sería decir que es como un listener configurado para escuchar el margen observado del elementoAObservar.
// const observador = new IntersectionObserver(callback, options)

// observador.observe(elementoAObservar)
// callback: al igual que un eventListener que manda un callback al ejecutarse, pero esta funcion en particular recibe un prop( entries) por ser del tipo intersectionObjerver el objeto donde es invocada.

// entries: es el objeto recibido cada que el elementoAObservar es observado, puedes hacerle un console.log(entries) y veras que dentro contiene dos objetos, bno, solo el primero vienen los parametros de observación, es por esto que en la segunda linea solo obtenemos este primer objeto con const entry = entries[0].

// intersectionRatio: es uno de los parametros obtenidos en el objeto al interceptarlo, tomese interceptar como activar el ‘listener’ o el ‘metodo observe’. Este nos dice qué porcentaje del elemento está a la vista, por lo que pormedio de el podemos verificar si el elementoAObservar está visible o no. 🤯


export default AutoPause;