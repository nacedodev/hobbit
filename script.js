import {Personaje} from './personaje.js'
import {Item} from './item.js'

console.log('Script cargado correctamente.')

const claseMago = Symbol('Mago')
const claseSaqueado = Symbol('Saqueador')
const claseClerigo = Symbol('Clérigo')
const claseGuerrero = Symbol('Guerrero')
const razaHumano = Symbol('Humano')
const razaElfo = Symbol('Elfo')
const razaEnano = Symbol('Enano')
const razaHobbit = Symbol('Hobbit')



// CREACION DE BILBO
let bilbo = new Personaje('Bilbo Bolsón',razaHobbit)

// CREACION DE GANDALF
let gandalf = new Personaje('Gandalf el Gris',razaHumano,claseMago)

//CREACION DE ITEMS
let lampara = new Item('Lámpara de mesa azul')
let reloj = new Item('Reloj del abuelo')

//CREACION DE ENANOS
let thorin = new Personaje('Thorin Escudo de Roble',razaEnano,claseGuerrero)
let kili = new Personaje('Kili',razaEnano)
let fili = new Personaje('Fili', razaEnano)
let dwalin = new Personaje('Dwalin',)


gandalf.hablar('Buenos dias mi viejo amigo')
bilbo.hablar('Gandalf , me alegro de verte!')


