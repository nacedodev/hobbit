import { Escena } from "./escena.js";
import * as cast from './cast.js';
import * as props from './props.js'
import { Enano } from "./enano.js";
import { progressBar } from "./progressBar.js";
import { Personaje } from "./personaje.js";

  class Escena1 extends Escena {
    constructor() {
      super('Inicios', 'Bosque élfico');
    }
  
    run() {
        progressBar(30000)
        this.load()
        this.addCharacter(cast.narrador)
        this.addCharacter(cast.bilbo)
        this.addCharacter(cast.gandalf)
        this.addCharacter(cast.thorin)
        this.addCharacter(cast.kili)
        this.addCharacter(cast.fili)
        this.addCharacter(cast.dwalin)
        this.addItem(props.lampara)
        this.addItem(props.reloj)
        this.personajes.get(cast.gandalf.getName()).hablar('Buenos dias mi viejo amigo')
        this.personajes.get(cast.bilbo.getName()).hablar('Gandalf, me alegro de verte')
        this.personajes.get(cast.narrador.getName()).hablar(`De pronto aparecieron ${Enano.numEnanos} Enanos`)
        this.personajes.get(cast.gandalf.getName()).hablar('Ya estan aqui! Bienvenidos a la casa de Bilbo')
        this.personajes.get(cast.kili.getName()).coger(this.items.get(props.lampara.getName()))
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.bilbo.getName()).hablar('Deja eso en su sitio!')
        this.personajes.get(cast.kili.getName()).hablar('Cógelo Fili')
        this.personajes.get(cast.kili.getName()).pasar(this.items.get(props.lampara.getName()),this.personajes.get(cast.fili.getName()))
        this.personajes.get(cast.dwalin.getName()).hablar(`Viva nuestro rey ${Enano.rey}`)
        this.personajes.get(cast.fili.getName()).hablar(Enano.alabarRey())
        this.personajes.get(cast.fili.getName()).hablar(`Tengo la ${Array.from(cast.fili.getInventario())[0].getName()}`)
        
    }
  }

     class Escena2 extends Escena {
    constructor() {
      super('El peor día para un robo', 'Supermercados McElfo');
    }
  
    run() {
        progressBar(5000)
        this.load()
        this.addCharacter(cast.bilbo)
        this.addCharacter(cast.gandalf)
        this.addCharacter(cast.thorin)
        this.addCharacter(cast.narrador)
        this.addCharacter(cast.kili)
        this.addCharacter(cast.fili)
        this.addCharacter(cast.dwalin)
        this.addItem(props.lampara)
        this.addItem(props.reloj)
        this.personajes.get(cast.gandalf.getName()).hablar('Que te cuentas')
        this.personajes.get(cast.bilbo.getName()).hablar('Poca cosa')
        this.personajes.get(cast.narrador.getName()).hablar(`De pronto aparecieron ${Enano.numEnanos} Enanos`)
        this.personajes.get(cast.gandalf.getName()).hablar('se viene')

    }
  }

  export const escenas = {
    1 : new Escena1(),
    2 : new Escena2(),
  }