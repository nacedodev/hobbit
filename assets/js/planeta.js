import { Clima } from "./clima.js"


export class Planeta{
    #nombre
    #habitantes
    #clima
    #size

    constructor(nombre,habitantes,estado , estacion,size) {
        this.#nombre = nombre
        this.#habitantes = habitantes
        this.#clima = new Clima(estado,estacion)
        this.#size = size
    }

    getName(){
        return this.#nombre
    }
    getHabitantes(){
        return this.#habitantes
    }

    getClima(){
        return `El clima de este planeta es habitualmente ${this.#clima.getEstado()} actualmente se encuentra en ${this.#clima.getEstacion()}`
    }

    getSize(){
        return this.#size
    }
}