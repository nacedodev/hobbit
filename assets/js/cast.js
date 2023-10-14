import { Enano } from "./enano.js"
import {clases , razas} from "./clase_raza.js"

import { Personaje } from "./personaje.js"

export let narrador = new Personaje('Narrador')

export let bilbo = new Personaje('Bilbo Bolsón',razas.hobbit)

export let gandalf = new Personaje('Gandalf el Gris',razas.humano,clases.mago)

export let thorin = new Enano('Thorin Escudo de Roble',clases.guerrero)

export let kili = new Enano('Kili')

export let fili = new Enano('Fili')

export let dwalin = new Enano('Dwalin')