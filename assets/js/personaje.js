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
      const lineElement = document.createElement('p');
      lineElement.innerHTML = textoMejorado;
      lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
      historia.appendChild(lineElement);
      lineElement.scrollIntoView({ behavior: "smooth" });
      
    }, Personaje.timeout);

    Personaje.timeout += 2000;
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

  getInventario(item) {
    return this.#inventario
  }
}
