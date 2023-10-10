import {Personaje} from './personaje.js'
import {clases , razas} from './clase_raza.js'

export class Enano extends Personaje{ //HERENCIA , DESTACAR EL USO DEL SUPER() EN EL CONSTRUCTOR

    static rey = 'Thorin Escudo de roble' //STATIC PARA QUE TODOS LOS ENANOS TENGAN EL MISMO REY , ES UNA PROPIEDAD DE LA CLASE
    static alabarRey(){
        return `Viva ${Enano.rey}`
    }
    static numEnanos = 0; 
    #colorBarba = null
    
    constructor(nombre , clase = null , colorBarba = 'Blanca'){
        super(nombre , razas.enano, clase)
        this.#colorBarba = colorBarba
        Enano.numEnanos++
    }


    picar(){

    }
}