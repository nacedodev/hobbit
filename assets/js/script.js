import {Personaje} from './personaje.js'
import {Item} from './item.js'
import {clases , razas} from './clase_raza.js'
import {Enano} from './enano.js'
import {Escena} from './escena.js'
import { escenas } from './manager.js'



escenas[1].run()


 setTimeout(() => {
     let respuesta = window.prompt("Por favor, ingrese su nombre:", "Nombre");
     if(respuesta === 'Nacho') {
         escenas[2].run()
     }
 }, Personaje.timeout + 2000) ;



