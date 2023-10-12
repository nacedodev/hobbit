
export class Item{

    #nombre = null

    constructor(nombre){
        this.#nombre = nombre
    }

    getName(){
        return this.#nombre
    }
}
