import { Personaje } from "./personaje.js";



export class Narrador extends Personaje{
    

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
        
            Personaje.timeout += palabrasEnTexto * 260;
          }
    }
