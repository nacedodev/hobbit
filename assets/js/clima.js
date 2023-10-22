export class Clima{
    
    #estado
    #estacion

    constructor(estado,estacion){
        this.#estado = estado;
        this.#estacion = estacion;
    }

    getEstado(){
        return this.#estado
    }

    getEstacion(){
        return this.#estacion
    }
}