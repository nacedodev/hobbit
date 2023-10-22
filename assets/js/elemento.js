import { Tipo } from "./tipo.js"
import { Personaje } from "./personaje.js";

export class Elemento extends Tipo {
    constructor(nombre, daño, tipo, elemento) {
      super(nombre, daño, tipo);
      this.elemento = elemento;
    }
  
    obtenerElemento() {
      let $historia = document.getElementById('historia')
                setTimeout(() => {
                  let texto = `Este arma tiene el elemento ${this.elemento}`;
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


