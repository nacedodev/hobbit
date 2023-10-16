import {Personaje} from './personaje.js'
import {especialidades , origenes} from './especialidad_origen.js'

export class IA extends Personaje{ //HERENCIA , DESTACAR EL USO DEL SUPER() EN EL CONSTRUCTOR

    static  entidad_central = 'Universal AI Oversight Consortium' //STATIC PARA QUE TODAS LAS IAS TENGAN LA MISMA ENTIDAD CENTRAL, ES UNA PROPIEDAD DE LA CLASE
    static hablarBinario(){
        return "01001000 01110101 01101101 01101111 01110010"
    }
    #SO = null
    
    constructor(nombre , especialidad = especialidades.exploracion , SO = 'GPT-33'){
        super(nombre ,especialidad,origenes.laboratorio, )
        this.#SO = SO
    }
    
}