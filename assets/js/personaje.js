import { Item } from './item.js'

export class Personaje {
  #nombre = null;
  #especialidad = null;
  #origen = null;
  #inventario = null;
  static timeout = 0; // Contador global de tiempo de espera

  constructor(nombre, especialidad = null, origen = null) {
    this.#nombre = nombre;
    this.#especialidad = especialidad;
    this.#origen = origen;
    this.#inventario = new Set();
  }

  hablar(text) {
    const palabrasEnTexto = text.split(' ').length
    setTimeout(() => {
      let textoMejorado = `<br/><br/> <span class ='bocado'>${this.#nombre}:</span> "${text}"`;
      const lineElement = document.createElement('p');
      lineElement.innerHTML = textoMejorado;
      lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
      historia.appendChild(lineElement);
      lineElement.scrollIntoView({ behavior: "smooth" });
      
    }, Personaje.timeout);

    Personaje.timeout += palabrasEnTexto * 250;
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
