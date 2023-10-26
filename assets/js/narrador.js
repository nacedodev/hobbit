import { Personaje } from "./personaje.js";
import { Escena } from "./escena.js";

export class Narrador extends Personaje{
  
    static idioma = 'Español'

    constructor(nombre){
        super(nombre)
    }

    narrar(text){
          const palabrasEnTexto = text.split(' ').length

            setTimeout(() => {
              let textoMejorado = `<br/><br/> <span class='bocado'>Narrador:</span> <span style = "color: gray;">${text}</span>`;
              const lineElement = document.createElement('p');
              lineElement.innerHTML = textoMejorado;
              lineElement.classList.add('fadein'); // Aplicar la clase para el efecto de fadeIn
              historia.appendChild(lineElement);
              lineElement.scrollIntoView({ behavior: "smooth" });

            }, Personaje.timeout);
              
            Escena.duracionEscena += Personaje.timeout
            Personaje.timeout += palabrasEnTexto * 260;
          }
    }
