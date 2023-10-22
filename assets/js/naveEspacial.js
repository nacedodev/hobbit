import { Aeronave} from "./aeronave.js";
import { Personaje } from "./personaje.js";

    export class naveEspacial extends Aeronave {  
        
        #sistemasPropulsion = ['Iones','Fusion','Propulsores químicos']
        #nSaltosIntergalacticos

        constructor(nombre,matricula,tipo,nSaltos){
            super(nombre,matricula,tipo)
            this.#nSaltosIntergalacticos = nSaltos
        }

        dispararLáser(){
            let $historia = document.getElementById('historia')
                setTimeout(() => {
                  let texto = 'Cargando cañones láser... DISPARANDO!!';
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

        getSaltos(){
            return this.#nSaltosIntergalacticos
        }

    }