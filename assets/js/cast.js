import { IA } from "./IA.js"
import {especialidades , origenes} from "./especialidad_origen.js"

import { Personaje } from "./personaje.js"

export let narrador = new Personaje('Narrador')

export let elara = new Personaje('Elara Silva',especialidades.lider,origenes.terra_nova)

export let AIDA = new IA('AIDA',especialidades.exploracion)

export let samuel = new Personaje('Dr.Samuel Voss',especialidades.cientifico,origenes.terra_nova)

export let maria = new Personaje('Maria Riordan',especialidades.militar,origenes.terra_nova)

export let nguyen = new Personaje('Nguyen',especialidades.mecanico,origenes.terra_nova)

export let alex = new Personaje('Alex',especialidades.astronomo,origenes.terra_nova)

export let ramirez = new Personaje('Sargento Ramirez',especialidades.comandante,origenes.terra_nova)