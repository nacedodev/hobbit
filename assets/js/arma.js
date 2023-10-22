import { Personaje } from "./personaje.js"

export class Arma {
    constructor(nombre, daño) {
      this.nombre = nombre
      this.daño = daño
    }

    atacar() {
      let $historia = document.getElementById('historia')
      setTimeout(() => {
        let texto = `Atacando con ${this.nombre} (Daño: ${this.daño})`
        const lineElement = document.createElement('p')
        lineElement.innerHTML = texto
        lineElement.style.marginTop = '30px'
        lineElement.style.color = 'lightgray'
        lineElement.classList.add('fadein') // Aplicar la clase para el efecto de fadeIn
        $historia.appendChild(lineElement)
        lineElement.scrollIntoView({ behavior: "smooth" })
        
      }, Personaje.timeout)
  
      Personaje.timeout += 1000
      }

}