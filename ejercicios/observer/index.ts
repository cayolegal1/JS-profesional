interface Observer {

    update: (data: any) => void,

}

interface Subject {

    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {

    observers: Observer[] = []

    constructor(){

        const elem: HTMLInputElement = document.querySelector('#value')
        elem.addEventListener('input', ()=> {

            if(elem.value === ""){

                this.notify(`$0.00`)
            } else {

                this.notify(` $${elem.value}`)

            }
        })
    }
    subscribe(observer: Observer) {

        this.observers.push(observer)
    }
    unsubscribe(observer: Observer) {

        const index = this.observers.findIndex(obs => {

            obs === observer
        })

        this.observers.splice(index, 1);
    }

    notify(data: any){

        this.observers.forEach(obs => {

            obs.update(data)
        })
    }
}

class PriceDisplay implements Observer{

    private el: HTMLElement

    constructor(){

        this.el = document.querySelector('#price')
    }

    update(data: any){

        this.el.innerText = data
    }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()
value.subscribe(display)

setTimeout(() => {

    value.unsubscribe(display)
}, 5000)