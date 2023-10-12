

export class Escena {

  titulo = null;
  lugar = null;

  constructor(titulo,lugar) {
    this.titulo = titulo
    this.lugar = lugar
    this.personajes = new Map()
    this.items = []
  }

  addCharacter(personaje) {
    this.personajes.set(personaje.getNombre(), personaje)
  }

  addItem(item){
    this.items.push(item)
  }
}
  