import { Item } from './item.js'

export class Personaje {
  #nombre = null;
  #raza = null;
  #clase = null;
  #inventario = null;
  static timeout = 0; // Contador global de tiempo de espera

  constructor(nombre, raza = null, clase = null) {
    this.#nombre = nombre;
    this.#raza = raza;
    this.#clase = clase;
    this.#inventario = new Set();
  }

  hablar(text) {
    setTimeout(() => {
      let textoMejorado = `<br/><br/> <span>${this.#nombre}:</span> "${text}"`;
      document.getElementById('historia').innerHTML += textoMejorado;
    }, Personaje.timeout);

    Personaje.timeout += 150; // Incrementa el contador global
  }

  coger(item) {
    this.#inventario.add(item);
  }

  pasar(item, personaje) {
    if (!(item instanceof Item)) throw 'Objeto inválido';
    if (!(personaje instanceof Personaje)) throw 'Personaje inválido';

    this.#inventario.delete(item);
    personaje.coger(item);
  }

  getName() {
    return this.#nombre;
  }

  getInventario() {
    return this.#inventario
  }
}
