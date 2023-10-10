import {Personaje} from './personaje.js'
import {Item} from './item.js'
import {clases , razas} from './clase_raza.js'
import {Enano} from './enano.js'

//NARRADOR
let narrador = new Personaje('Narrador')

// CREACION DE BILBO
let bilbo = new Personaje('Bilbo Bolsón',razas.hobbit)

// CREACION DE GANDALF
let gandalf = new Personaje('Gandalf el Gris',razas.humano,clases.mago)

//CREACION DE ITEMS
let lampara = new Item('Lámpara de mesa azul')
let reloj = new Item('Reloj del abuelo')

//CREACION DE ENANOS
let thorin = new Enano('Thorin Escudo de Roble',clases.guerrero)
let kili = new Enano('Kili')
let fili = new Enano('Fili')
let dwalin = new Enano('Dwalin')

//ACCIONES
gandalf.hablar('Buenos dias mi viejo amigo')
bilbo.hablar('Gandalf , me alegro de verte!')
narrador.hablar(`De pronto en la casa aparecieron ${Enano.numEnanos} Enanos ...`)
gandalf.hablar('Ya están aquí! Bienvenidos a la casa de Bilbo')
kili.coger(lampara)
bilbo.hablar('Deja eso en su sitio!')
kili.hablar('Cógelo Fili')
kili.pasar(lampara,fili)
fili.coger(reloj)
dwalin.hablar(`Viva nuestro Rey ${Enano.rey}`)
fili.hablar(Enano.alabarRey())


