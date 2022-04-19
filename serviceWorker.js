
const VERSION = 'v1'

//cuando el navegador instale el service worker, ejecuta esta función
self.addEventListener('install', event => {

    //waitUntil es un metodo del event, al que le pasaremos una función que queremos que se ejecute
    event.waitUntil(precache())
})

async function precache(){

    //abrimos un cache o instancia de cache, que es una API del dom, en la que su nombre será 'v1'. Esto será una promesa por lo que hay que esperar a que termine la ejecución
    const cache = await caches.open(VERSION)

    //añadimos archivos al cache para que el navegador ya lo tenga listo y podamos trabajar de esa forma offline, ya que son varios pasaremos un array, es una promesa por eso hay que retornarla, que es lo que espera waitUntil, line 7
    return cache.addAll([
        '/',
        '/index.html',
        '/index.js',
        '/MediaPlayer.js',
        '/plugins/AutoPlay.js',
        '/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])

}

//capturaremos cada petición para ver si dicha response ya le tenemos en caché
self.addEventListener('fetch', event => {

    //extraemos o capturamos la petición 
    const request = event.request;

    //si no es get no hagas nada
    if(request.method !== 'GET') {

        return
    }

    //buscaremos en el cache con el método respondWith() de event con una función que crearemos pasandole el request
    event.respondWith(cachedResponse(request))

    event.waitUntil(updateCache(request))
})

//función para actualizar el caché
async function updateCacheCache(requestParam) {

    //abrimos el cache 'v1'
    const cache = await caches.open(VERSION)

    //abrimos una solicitud fetch al request para descargar el código o los archivos caso haya actualizaciones
    const response = await fetch(requestParam)

    //actualizamos el caché con lo descargado en response, es importante siempre pasar el request para tener una llave
    return cache.put(requestParam, response)
}

async function cachedResponse(paramRequest) {

    //abriremos el cache con el nombre que establecimos y esperaremos que el navegador lo termine de ejecutar
    const cache = await caches.open(VERSION)


    //veremos si el cache que creamos es el mismo al del request, esta petición tarda por ende tenemos que aguardar a que termine. Match contendrá todo el contenido del cache que estamos comparando si es que son iguales, por lo que podremos dar una respuesta al servidor ya con estos archivos, y que el navegador lo lea desde el caché
    const response = await cache.match(paramRequest)

    //si response no da match este regresará undefined, por lo que retornaremos a response si es que el cache ya lo tiene registrado, si es que no, retornaremos la petición que el usuario esta haciendo con fetch. Si no hacemos el fetch en segunda instancia, todas las peticiones retornarán undefined y no podremos descargar nada, es decir, nuestra página en si no funcionará

    return response || fetch(paramRequest)

}