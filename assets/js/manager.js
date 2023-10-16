import { Escena } from "./escena.js";
import * as cast from './cast.js';
import * as props from './props.js'
import { IA } from "./IA.js";
import { progressBar } from "./progressBar.js";
import { Personaje } from "./personaje.js";

  class Escena1 extends Escena {
    constructor() {
      super('Nuestra última esperanza', 'En el interior de la nave Estelarion');
    }

    run() {
        this.load()
        progressBar(30000)
        this.addCharacter(cast.narrador)
        this.addCharacter(cast.AIDA)
        this.addCharacter(cast.elara)
        this.addCharacter(cast.samuel)
        this.addCharacter(cast.maria)
        this.addCharacter(cast.nguyen)
        this.addCharacter(cast.alex)
        this.addCharacter(cast.ramirez)
        this.addItem(props.botiquin)
        this.addItem(props.traje)
        this.personajes.get(cast.narrador.getName()).hablar('Te encuentras en una aeronave , eres su capitán , estas en medio de una mision que decidirá el futuro de tu planeta necesitas obtener una llave que desbloquea un arma ancestral que')
        this.personajes.get(cast.elara.getName()).hablar('Buenos dias mi viejo amigo')
        this.personajes.get(cast.AIDA.getName()).hablar('Elara, me alegro de verte')
        this.personajes.get(cast.narrador.getName()).hablar(`De pronto aparecieron...`)
        this.personajes.get(cast.elara.getName()).hablar('Ya estan aqui! Bienvenidos a la casa de AIDA')
        this.personajes.get(cast.maria.getName()).coger(this.items.get(props.botiquin.getName()))
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.AIDA.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.maria.getName()).hablar('Cógelo nguyen')
        this.personajes.get(cast.maria.getName()).pasar(this.items.get(props.botiquin.getName()),this.personajes.get(cast.nguyen.getName()))
        this.personajes.get(cast.alex.getName()).hablar(`Viva nuestra suprema ${IA.entidad_central}`)
        this.personajes.get(cast.nguyen.getName()).hablar('bla bla')
        this.personajes.get(cast.nguyen.getName()).hablar(`Tengo el ${Array.from(cast.nguyen.getInventario())[0].getName()}`)
        setTimeout(() => {
            
           let respuesta = window.prompt("a. Descender a un planeta cercano para repararla\nb. Salto intergaláctico a un planeta especializado\nc. Repararla con las herramientas disponibles");
           (respuesta === 'a') ? escenas[2].run() 
         : (respuesta === 'b') ? escenas[3].run() 
         : (respuesta === 'c') ? escenas[4].run()
         : alert("Debias escribir a / b / c")

      }, Personaje.timeout + 2000) ;
        
    }
  }
  class Escena2 extends Escena {
    constructor() {
      super('El descenso', 'planeta Tierra');
    }
  
    run() {
        this.load()
        progressBar(5000)
        this.addCharacter(cast.AIDA)
        this.addCharacter(cast.elara)
        this.addCharacter(cast.samuel)
        this.addCharacter(cast.narrador)
        this.addCharacter(cast.maria)
        this.addCharacter(cast.nguyen)
        this.addCharacter(cast.alex)
        this.addItem(props.botiquin)
        this.addItem(props.traje)
        this.personajes.get(cast.elara.getName()).hablar('Que te cuentas')
        this.personajes.get(cast.AIDA.getName()).hablar('Poca cosa')
        this.personajes.get(cast.narrador.getName()).hablar(`De pronto aparecieron...`)
        this.personajes.get(cast.elara.getName()).hablar('wow')
    }
  }

  export const escenas = {
    1 : new Escena1(),
    2 : new Escena2(),
  }