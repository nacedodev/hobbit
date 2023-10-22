import { Arma } from "./arma.js"

export class Tipo extends Arma {
    constructor(nombre, daño, tipo) {
      super(nombre, daño);
      this.tipo = tipo;
    }
  
    obtenerTipo() {
      let $historia = document.getElementById('historia')
                setTimeout(() => {
                  let texto = `Este arma es de tipo ${this.tipo}`;
                  const lineElement = document.createElement('p');
                  lineElement.innerHTML = texto;
                  lineElement.style.marginTop = '30px'
                  lineElement.style.color = 'gray'
                  lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
                  $historia.appendChild(lineElement);
                  lineElement.scrollIntoView({ behavior: "smooth" });
                  
                }, Personaje.timeout);
            
                Personaje.timeout += 1000;
              }

    }

