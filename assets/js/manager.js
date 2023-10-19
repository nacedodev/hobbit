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
        this.personajes.get(cast.narrador.getName()).narrar('La capitana Elara Silva se encuentra al frente de la sala. AIDA proyecta información relevante en una pantalla holográfica en el centro de la mesa , el resto de la tripulación mira espectante.')
        this.personajes.get(cast.elara.getName()).hablar('Bienvenidos a bordo de la nave Estelarion. Cada uno de ustedes jugará un papel crucial en esta misión, la cual no tiene fecha de retorno, pero sí un objetivo claro: salvar a nuestro planeta natal, Terra Nova, de una glaciación inminente que solo se podrá revertir de una forma. El Dr. Samuel nos lo explicará en detalle.')
        this.personajes.get(cast.samuel.getName()).hablar('Hola a todos. Llevo años investigando esta glaciación y les contaré cuál es el objetivo de esta misión.')
        this.personajes.get(cast.AIDA.getName()).hablar('Proyectando mapa 3D de la superficie de Terra Nova...')
        this.personajes.get(cast.maria.getName()).hablar('Wow, no sabía que nuestra nave contaba con este tipo de tecnología. Nada que ver con los recursos que tenía en el adiestramiento militar.')
        this.personajes.get(cast.samuel.getName()).hablar('Como ven, la glaciación del planeta es casi completa, lo cual nos lleva a buscar una solución desesperada, basada en los libros y los sabios del planeta, basada en la fe.')
        this.personajes.get(cast.nguyen.getName()).hablar('No es propio de un científico como tú basarse en la fe. Mis creencias son totalmente empíricas y basadas en hechos.')
        this.personajes.get(cast.samuel.getName()).hablar('Les cuento, todos los textos antiguos y los sabios coinciden en que en lo más profundo de Terra Nova, se encuentra bajo llave un artefacto capaz de revertir esta catástrofe, la cual nuestros antepasados ya predijeron.')
        this.personajes.get(cast.alex.getName()).hablar('Entiendo. ¿Y de qué tipo de llave estamos hablando?')
        this.personajes.get(cast.samuel.getName()).hablar('Se trata de una llave jamás vista, escondida en algún rincón del vasto universo. Nadie sabe su forma ni color, pero sí sabemos que es nuestra única esperanza.')
        this.personajes.get(cast.narrador.getName()).narrar('El silencio se apodera de la sala de mandos mientras los miembros de la tripulación asimilan la información proporcionada por el Dr. Samuel. La mirada de cada uno de ellos refleja una mezcla de incredulidad y determinación, conscientes de que se embarcarán en una misión sin precedentes en la que la fe en un antiguo artefacto se mezcla con el conocimiento científico. El Sargento Ramirez toma la palabra, rompiendo la tensión reinante.')
        this.personajes.get(cast.ramirez.getName()).hablar('Mi experiencia me dice que esta es una misión suicida, pero estoy dispuesto a morir salvando al planeta.')
        this.personajes.get(cast.elara.getName()).hablar('AIDA, muestra el plan de ruta de la pista que nos ha llegado desde el planeta Lunaris.')
        this.personajes.get(cast.ramirez.getName()).hablar('Espera, ¿quién es AIDA?')
        this.personajes.get(cast.elara.getName()).hablar('Es la IA integrada en la nave, Asistente de Exploración Espacial, o AIDA para abreviar.')
        this.personajes.get(cast.AIDA.getName()).hablar('Mostrando el plan de ruta. Quedan 23 horas para salir de la galaxia Arkanis...')
        this.personajes.get(cast.alex.getName()).hablar('Llevo años estudiando el universo y confío plenamente en que lograremos encontrar la llave. Déjadme ser el guía en esta misión')
        //nave.temblar
        this.personajes.get(cast.samuel.getName()).hablar('¿Alguien más ha escuchado eso?')
        this.personajes.get(cast.AIDA.getName()).hablar('Daño grave en la cubierta exterior de la nave. Analizando probabilidad de supervivencia...')
        this.personajes.get(cast.elara.getName()).hablar('Mantengan la calma. Restos espaciales habrán rozado el exterior. Podemos repararlo.')
        this.personajes.get(cast.AIDA.getName()).hablar('Probabilidad de supervivencia del 13%. Daño irreparable desde el interior de la nave.')
        this.personajes.get(cast.ramirez.getName()).hablar('Hay que hacer algo ya! Estamos en medio de la nada y aún falta un largo viaje para llegar al destino.')
        this.personajes.get(cast.samuel.getName()).hablar('Podríamos salir al exterior a reparar la zona afectada, pero según mis cálculos, es una tarea demasiado peligrosa, aunque nuestra única opción si queremos continuar la ruta establecida.')
        this.personajes.get(cast.maria.getName()).hablar('Yo propongo descender a un planeta cercano. No deberíamos arriesgar la vida de ningún miembro, y en el radar aparece un planeta a 4 minutos de nuestra posición.')
        this.personajes.get(cast.elara.getName()).hablar('Conozco un planeta especializado en reparaciones. Podríamos hacer un salto intergaláctico para llegar cuanto antes, pero consumiría casi la totalidad de nuestro combustible y agravaría los daños.')
        this.personajes.get(cast.nguyen.getName()).hablar('Alex, ¿qué deberíamos hacer? Es una difícil decisión.')
        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
           let respuesta = window.prompt("a. Descender a un planeta cercano para repararla\nb. Salto intergaláctico a un planeta especializado\nc. Repararla con las herramientas disponibles");
           (respuesta === 'a') ? escenas[5].run() 
         : (respuesta === 'b') ? escenas[3].run() 
         : (respuesta === 'c') ? escenas[4].run()
         : alert("Debias escribir a / b / c")

      }, Personaje.timeout + 1500) ;
        
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

  class Escena5 extends Escena {
    constructor() {
      super('Una nueva incorporación', 'En el interior de la nave Estelarion');
    }

    run() {
        this.load()
        this.addCharacter(cast.narrador)
        this.addCharacter(cast.AIDA)
        this.addCharacter(cast.elara)
        this.addCharacter(cast.samuel)
        this.addCharacter(cast.maria)
        this.addCharacter(cast.nguyen)
        this.addCharacter(cast.alex)
        this.addCharacter(cast.ramirez)
        this.addCharacter(cast.michael)
        this.addItem(props.botiquin)
        this.addItem(props.traje)
        this.personajes.get(cast.narrador.getName()).narrar('Después de que el ingeniero se une a la tripulación, todos se reúnen en la sala de conferencias de la nave Estelarion.')
        this.personajes.get(cast.elara.getName()).hablar('¡Bienvenido a bordo, ingeniero! Soy la Capitana Elara Silva.')
        this.personajes.get(cast.michael.getName()).hablar('Mucho gusto, Capitana Silva. Mi nombre es Michael Grey, es un placer conocerlos a todos ustedes.')
        this.personajes.get(cast.samuel.getName()).hablar('Cuéntanos algo acerca de ti.')
        this.personajes.get(cast.michael.getName()).hablar('He dedicado mi vida a estudiar la historia del universo y artefactos misteriosos.')
        this.personajes.get(cast.alex.getName()).hablar('¡Eso suena genial!')
        this.personajes.get(cast.maria.getName()).hablar('Estoy impresionada.')
        this.personajes.get(cast.michael.getName()).hablar('Perdonen mi atrevimiento, pero, ¿qué los trae por este lado de la galaxia?')
        this.personajes.get(cast.alex.getName()).hablar('Verás, estamos buscando una llave.')
        this.personajes.get(cast.michael.getName()).hablar('¿Hablan de la llave del planeta Terra Nova?')
        this.personajes.get(cast.alex.getName()).hablar('Sí... ¿cómo lo sabes?')
        this.personajes.get(cast.michael.getName()).hablar('He estado investigando ese planeta durante cierto tiempo.')
        this.personajes.get(cast.elara.getName()).hablar('Michael, escúchame con atención, esa llave juega un papel muy importante para salvar el nuestro planeta. Nos urge tenerla.')
        this.personajes.get(cast.michael.getName()).hablar('Pues están de suerte porque yo sé dónde encontrarla.')
        this.personajes.get(cast.narrador.getName()).narrar('Todos en la mesa se quedan en silencio, como si no pudieran creer lo que Michael acaba de decir. Acto seguido, miran a Alex, quien clava su mirada fijamente en el lugar donde se encuentra Michael, con una expresión desconcertada. encontrar la llave representa algo de gran magnitud y, la verdad, no era el momento para ilusionarse.')
        this.personajes.get(cast.alex.getName()).hablar('Michael, esto es algo muy serio, ¿estás completamente seguro de que sabes dónde encontrar la llave?')
        this.personajes.get(cast.michael.getName()).hablar('Sí, Alex, totalmente. Tranquilo que haré lo que esté en mis manos para ayudar a salvar tu planeta.')
        this.personajes.get(cast.maria.getName()).hablar('¡Eso suena increíble! ¿No? Tener información sobre la ubicación de la llave es un gran avance para nuestra misión. Cuéntanos más, por favor.')
        this.personajes.get(cast.michael.getName()).hablar('La llave que necesitan se encuentra en los Confines del Universo, un lugar mítico y peligroso que pocos han logrado alcanzar. Durante mi investigación, he descubierto pistas que nos llevarán directo a ella. Pero hay un inconveniente.')
        this.personajes.get(cast.nguyen.getName()).hablar('¿Cuál es el inconveniente, Michael?')
        this.personajes.get(cast.michael.getName()).hablar('por lo que veo la nave solo tiene suficiente combustible para un viaje de ida y vuelta al Confín del Espacio. Una vez que lleguemos allí, no tendremos suficiente combustible para regresar.')
        this.personajes.get(cast.ramirez.getName()).hablar('Eso es un dilema serio. ¿Estás seguro de que esta es la única opción, Michael?')
        this.personajes.get(cast.michael.getName()).hablar('Hay otra opción, pero es arriesgada. Podemos usar la tecnología a bordo de la Estelarion para realizar un viaje en el tiempo y volver al inicio de la aventura. Esto nos daría una segunda oportunidad, pero no sabríamos si encontraríamos las mismas pistas.')
        this.personajes.get(cast.samuel.getName()).hablar('Ambas opciones son arriesgadas, pero necesitamos decidir. Capitana, ¿qué piensa al respecto?')
        this.personajes.get(cast.elara.getName()).hablar('La decisión es de Alex, ya que es nuestro experto en la búsqueda de la llave y también quien se unió a nosotros en un momento crucial. Alex, ¿cuál es tu elección?')
        
        
        progressBar(Personaje.timeout + 1000)
        setTimeout(() => {
            
           let respuesta = window.prompt("a. Partir hacia los Confines del Universo\nb. Viajar en el tiempo hasta el inicio");
           (respuesta === 'a') ? escenas[6].run() 
         : (respuesta === 'b') ? escenas[1].run() 
         : alert("Debias escribir a / b ")

      }, Personaje.timeout + 1000) ;
        
    }
  }

  class Escena6 extends Escena {
    constructor() {
      super('Nuestra última esperanza', 'En el interior de la nave Estelarion');
    }

    run() {
        this.load()
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
        this.personajes.get(cast.narrador.getName()).narrar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        this.personajes.get(cast.elara.getName()).hablar('')
        
        
        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
          
           let respuesta = window.prompt("a. Descender a un planeta cercano para repararla\nb. Salto intergaláctico a un planeta especializado\nc. Repararla con las herramientas disponibles");
           (respuesta === 'a') ? escenas[2].run() 
         : (respuesta === 'b') ? escenas[3].run() 
         : (respuesta === 'c') ? escenas[4].run()
         : alert("Debias escribir a / b / c")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  export const escenas = {
    1 : new Escena1(),
    2 : new Escena2(),
    5 : new Escena5(),
    6 : new Escena6(),

  }