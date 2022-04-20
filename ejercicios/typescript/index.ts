//Booleans

//JS
//let muted = true 


//TS
let muted: boolean = true
muted = false
//muted = 2 DA ERROR, TypeScript nos avisa que un tipo boolean no puede ser asignado a un tipo number


//Numbers

let numerador: number = 45
let denominador: number = 5
let result: number = numerador / denominador
//si cambiamos numerador o denominador a un string o otro tipo de dato ts nos avisará de un error


//Strings
let nombre: string = "Cayo"
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = [] //arreglo de strings
people = ["jaja", "isa"]
//people.push(90) //da error: Argument 'number' not assignable to 'string'
people.push("javier")

let stringsAndNumbers: Array<string | number> = [] //array que acepta strings y números
stringsAndNumbers.push(1, "jaja")//no da error


//Enums

enum Color {

    Rojo, 

    Verde, 

    Amarillo, 

    Naranja
}

//const colorFav: Color = `Mi color favorito es ` //nos da error porque solamente acepta los de tipo Color que nosotros determinamos

const colorFav: Color = Color.Rojo

console.log(colorFav) //0

//el output nos da 1 porque enum cuando los enums no estan inicializados nos retornarán el índice en el que se encuentran

//ahora si cambiamos con valores inicializados

enum ColorValue {

    Rojo = "Rojo",

    Verde = "Verde",

    Amarillo = "Amarillo"
}

const secondColorFav: Color = Color.Amarillo

console.log(secondColorFav)// Amarillo

//para retornar valores hay que dar valores a las keys en las que nos asignamos, es importante que si un enum posee un valor, todos lo tengan, si uno posee un valor y otro no, nos dará error "Expresion expected"


//Any
//tipo que acepta cualquier tipo de dato

let comodin: any = 2
comodin = "tres"
comodin = {

    type: "jaja"
}

//no dio error, porque el tipo de dato es indefinido con any


//Object

let objeto: object = {

    type: "jaja"
}

//objeto = 2 //error




//Funciones

function add (a:number, b:number): number {
    return a + b
}

const sum = add(5, 8)

function createAdder(a: number): (number) => number {
    return (b: number) => b + a
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

//Si queremos que un parámetro sea opcional hay que ponerle un ? antes.

function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const PERSON = fullName('José')

//Para creador un valor por default, lo hacemos

function NameFull(firstName: string, lastName: string = 'Perez'): string {
    return `${firstName} ${lastName}`
}

const person = fullName('José')