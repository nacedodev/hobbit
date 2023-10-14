import { Personaje } from "./personaje.js";

export class Escena {

  titulo = null;
  lugar = null;
  
  
  constructor(titulo = '',lugar = '') {
    this.titulo = titulo
    this.lugar = lugar
    this.personajes = new Map()
    this.items = new Map()
  }

  load(){
    Personaje.timeout = 0
    const tituloElement = document.createElement('h3');
    tituloElement.textContent = this.titulo;

    const lugarElement = document.createElement('small');
    lugarElement.textContent = this.lugar;

    const historiaElement = document.getElementById('historia');

    document.getElementById('historia').innerHTML = '';
    
    historiaElement.appendChild(tituloElement);
    historiaElement.appendChild(lugarElement);
  }
  
  addCharacter(personaje) {
    this.personajes.set(personaje.getName(), personaje)
  }
  
  addItem(item){
    this.items.set(item.getName(),item)
  }
  
}



  