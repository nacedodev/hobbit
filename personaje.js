
import {Item} from './item.js'

export class Personaje {
    #nombre = null //PARA CONVERTIR LOS ATRIBUTOS EN PRIVADOS SE PONE #
    #raza = null
    #clase = null
    #inventario = null

    constructor(nombre , raza , clase = null){ // CLASE = NULL ES DARLE UN VALOR POR DEFECTO
        this.#nombre = nombre
        this.#raza = raza
        this.#clase = clase
        this.#inventario = new Set()
    }
  
  hablar(text){
    let textoMejorado = `<br/> ${this.#nombre}: "${text}"`
    document.getElementById('historia').innerHTML += textoMejorado
  }

  coger(item){
    this.#inventario.add(item)
  }

  pasar(item , personaje){
    // TYPEOF DEVUELVE EL TIPO DE OBJETO INSTANCEOF DEVUELVE UN BOOLEANO COMPARANDO CON CLASES DIRECTAMENTE
    if(!item instanceof Item) throw 'Objeto inválido'
    if(!personaje instanceof Personaje) throw 'Personaje inválido'

    this.#inventario.delete(item)
    personaje.coger(item)
  }
}