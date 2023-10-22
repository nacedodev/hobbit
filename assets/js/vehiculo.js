import { Personaje } from "./personaje.js";
  export  class Vehiculo{
        #nombre = null;
        #matricula = null;
        #kilometraje = null;
        constructor(nombre,matricula = '0000FFF'){
            this.#nombre = nombre
            this.#matricula = matricula
            this.#kilometraje = 0
        }

        arrancar(){
            let $historia = document.getElementById('historia')
            setTimeout(() => {
              let texto = "Iniciando motores y sistemas del vehiculo...";
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

        getName(){
            return this.#nombre
        }

        getMatricula(){
            return this.#matricula
        }
    }