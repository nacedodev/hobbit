

export class Escena {
    constructor(nombre) {
      this.nombre = nombre;
      this.personajes = [];
      this.acciones = [];
    }
  
    agregarPersonaje(personaje) {
      this.personajes.push(personaje);
    }
  
    agregarAccion(accion) {
      this.acciones.push(accion);
    }
  
    reproducir() {
      console.log(`----- ${this.nombre} -----`);
      for (const personaje of this.personajes) {
        personaje.hablar();
      }
      for (const accion of this.acciones) {
        accion.ejecutar();
      }
    }
  }
  