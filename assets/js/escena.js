

export class Escena {

  titulo = null;
  lugar = null;

  constructor(titulo,lugar) {
    this.titulo = titulo
    this.lugar = lugar
    this.personajes = new Map()
    this.items = new Map()
  }

  addCharacter(personaje) {
    this.personajes.set(personaje.getName(), personaje)
  }

  addItem(item){
    this.items.set(item.getName(),item)
  }
}
  