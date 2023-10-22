import { naveEspacial } from "./naveEspacial.js";
import { Personaje } from "./personaje.js";

   export class Estelarion extends naveEspacial{
        #tripulación
        #espacios = ['Comedor','Sala de mandos','Baño','Sala de calderás cósmicas']
        #mision

        constructor(nombre,matricula,tipo,nSaltos,mision){
            super(nombre,matricula,tipo,nSaltos)
            this.#mision = mision //RESCATE , CAPTURA , GUERRA , BUSQUEDA...
        }

        saltoIntergaláctico(){
            let $historia = document.getElementById('historia')
            setTimeout(() => {
              let texto = 'Acercándonos a la velocidad de la luz , salto intergaláctico en 3 , 2 , 1 ...';
              const lineElement = document.createElement('p');
              lineElement.innerHTML = texto;
              lineElement.style.marginTop = '30px'
              lineElement.style.color = 'lightsteelblue'
              lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
              $historia.appendChild(lineElement);
              lineElement.scrollIntoView({ behavior: "smooth" });
              
            }, Personaje.timeout);

            this.nSaltos--
            Personaje.timeout += 6000;
        }

        getInfo(){
            let $historia = document.getElementById('historia')
            setTimeout(() => {
              let texto = `La nave ${this.getName()} con matrícula <span style='color: lightblue;'>'${this.getMatricula()}'</span> pertenece al tipo de aeronaves <span style='color:burlywood;'>${this.getTipo()}</span> , además es puntera en tecnología ya que cuenta con una IA avanzada y <span style='color: indianred;'>${this.getSaltos()} saltos intergalácticos </span>, actualmente se encuentra en una misión de <span style='color: lightpink;'>${this.#mision}</span>.`;
              const lineElement = document.createElement('p');
              lineElement.innerHTML = texto;
              lineElement.style.marginTop = '30px'
              lineElement.style.color = 'gray'
              lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
              $historia.appendChild(lineElement);
              lineElement.scrollIntoView({ behavior: "smooth" });
              
            }, Personaje.timeout);

            Personaje.timeout += 10000;
        }
    }