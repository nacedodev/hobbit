import { Personaje } from "./personaje.js";
import {Vehiculo} from "./vehiculo.js"

export class Aeronave extends Vehiculo{

        #tipo = null;
        #estado = null;

        constructor(nombre, matricula,tipo) {
          super(nombre,matricula)
          this.#tipo = tipo;
          this.#estado = "operativo"; // Puede ser "averiado", "reparación", etc.
        }

        temblar(){
                let $historia = document.getElementById('historia')
                setTimeout(() => {
                  let texto = " Rmmmmmm , bum , bum...";
                  const lineElement = document.createElement('p');
                  lineElement.innerHTML = texto;
                  lineElement.style.marginTop = '30px'
                  lineElement.style.color = 'lightsteelblue'
                  lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
                  $historia.appendChild(lineElement);
                  lineElement.scrollIntoView({ behavior: "smooth" });
                  
                }, Personaje.timeout);
            
                Personaje.timeout += 1000;
              }
      
        aterrizar() {
            let $historia = document.getElementById('historia')
            setTimeout(() => {
              let texto = " Aterrizaje inminente , abrochense los cinturones , la aeronave se encargará del resto...";
              const lineElement = document.createElement('p');
              lineElement.innerHTML = texto;
              lineElement.style.marginTop = '30px'
              lineElement.style.color = 'lightsteelblue'
              lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
              $historia.appendChild(lineElement);
              lineElement.scrollIntoView({ behavior: "smooth" });
              
            }, Personaje.timeout);
        
            Personaje.timeout += 1000;
          }

          getTipo(){
            return this.#tipo
          }
        }
      
