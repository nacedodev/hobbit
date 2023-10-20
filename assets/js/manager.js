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
        this.addItem(props.key)
        this.personajes.get(cast.narrador.getName()).narrar('La Capitana Elara Silva se encuentra al frente de la sala. AIDA proyecta información relevante en una pantalla holográfica en el centro de la mesa , el resto de la tripulación mira espectante.')
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
          let respuesta 
            do{
            respuesta = window.prompt("a. Descender a un planeta cercano para repararla\nb. Salto intergaláctico a un planeta especializado\nc. Repararla con las herramientas disponibles");
           (respuesta === 'a') ? escenas[2].run() 
         : (respuesta === 'b') ? escenas[3].run() 
         : (respuesta === 'c') ? escenas[4].run()
         : (!respuesta) ? escenas[1].run()
         : alert("Debias escribir a / b / c")
            }while(respuesta !== 'a' && respuesta !== 'b' && respuesta !== 'c' && respuesta)  

      },Personaje.timeout + 1500) ;
        
    }
  }
  class Escena2 extends Escena {
    constructor() {
      super('El descenso', 'planeta Tierra');
    }
  
    run() {
        this.load()
        this.addCharacter(cast.AIDA)
        this.addCharacter(cast.elara)
        this.addCharacter(cast.samuel)
        this.addCharacter(cast.narrador)
        this.addCharacter(cast.maria)
        this.addCharacter(cast.nguyen)
        this.addCharacter(cast.alex)
        this.addCharacter(cast.ramirez)
        this.addCharacter(cast.michael)
        this.addItem(props.botiquin)
        this.addItem(props.traje)
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación, siguiendo la orden de Alex, consigue descender en un planeta, en el que creen que es el planeta tierra. Dicho planeta, tiene una apariencia un poco extraña, y la línea temporal también. Los tripulantes notan que no se encuentran en la misma línea temporal y deciden investigar un poco más sobre dónde se encuentran y en qué año, a través de algunos objetos de la nave');
        this.personajes.get(cast.samuel.getName()).hablar('¿Dónde estamos? ¿Qué es este lugar?');
        this.personajes.get(cast.elara.getName()).hablar('¡Desde arriba parecía el planeta tierra actual, pero por lo que veo, me temo que estamos en el planeta tierra del futuro!');
        this.personajes.get(cast.ramirez.getName()).hablar('¿Futuro? ¡Jajaja, déjate de bobadas! ¡Estaremos en otro planeta parecido al planeta tierra!');
        this.personajes.get(cast.elara.getName()).hablar('¿Qué vas a opinar tú? ¡Si lo único que puedes aportar es poderío físico!');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Si tú lo dices...! ¡Si quieres, como me faltes al respeto de nuevo, vas a probar mi poderío físico, como tú dices. A ver qué puedes hacer contra mí, cerebrito!');
        this.personajes.get(cast.maria.getName()).hablar('¡Parece mentira que seas un sargento, mantén la compostura y vamos todos a cooperar!');
        this.personajes.get(cast.alex.getName()).hablar('¡Ey, ey, ey! ¡Calma chicos, somos un equipo, solo nos tenemos a nosotros!');
        this.personajes.get(cast.elara.getName()).hablar('¡Dejémonos de tonterías y vayamos al grano! ¡Tenemos que averiguar dónde estamos y en qué año!');
        this.personajes.get(cast.alex.getName()).hablar('¡Déjame averiguarlo a mí! ¡Con el reloj espacial que tenemos en la nave sabremos en qué año nos encontramos! ¡Voy a por él!');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Otro que piensa igual jajaj! ¿En qué año vamos a estar? ¡Pues en 2023!');
        this.personajes.get(cast.samuel.getName()).hablar('¡Basta ya, Ramirez! ¡Dale una oportunidad!');
        this.personajes.get(cast.nguyen.getName()).hablar('¡Eso, yo confío en él!');
        this.personajes.get(cast.elara.getName()).hablar('¿Lo encuentras, Alex?');
        this.personajes.get(cast.alex.getName()).hablar('¡Aquí está! ¡Vamos a ver qué nos dice!');
        this.personajes.get(cast.ramirez.getName()).hablar('El reloj tarda un tiempo en calcular todos los procesos. Pero finalmente, les muestra el año.');
        this.personajes.get(cast.ramirez.getName()).hablar('¿Te ha dado alguna información el trasto ese?');
        this.personajes.get(cast.elara.getName()).hablar('¡Algún problema, Alex?');
        this.personajes.get(cast.alex.getName()).hablar('¡Sí! ¡Pero...!');
        this.personajes.get(cast.elara.getName()).hablar('¿Algún problema, Alex?');
        this.personajes.get(cast.alex.getName()).hablar('¡Sí! ¡Pero...!');
        this.personajes.get(cast.elara.getName()).hablar('¡Estamos en 2573!');
        this.personajes.get(cast.elara.getName()).hablar('¡Entonces...! ¡Este es el planeta tierra del futuro!');
        this.personajes.get(cast.alex.getName()).hablar('¡Correcto!');
        this.personajes.get(cast.samuel.getName()).hablar('¿Y ahora qué hacemos?');
        this.personajes.get(cast.maria.getName()).hablar('¡Mirad! ¡Al fondo se ve una ciudad!');
        this.personajes.get(cast.nguyen.getName()).hablar('¡Quizá allí se encuentren los objetos que necesito para reparar la nave!');
        this.personajes.get(cast.ramirez.getName()).hablar('¿Me vais a hacer ir hasta allí andando? ¿En serio?');
        this.personajes.get(cast.elara.getName()).hablar('¡Tripulación! ¡Nos vamos de excursión! ¡Nguyen, quédate aquí cuidando de la nave!');
        this.personajes.get(cast.nguyen.getName()).hablar('¡Sí, elara!');
        this.personajes.get(cast.maria.getName()).hablar('¡Coged las armas!');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Qué pereza!');
        this.personajes.get(cast.alex.getName()).hablar('¡Deja de quejarte, equípate y vamos a buscar las piezas!');
        this.personajes.get(cast.narrador.getName()).narrar('Los tripulantes cogen una ametralladora, un arco, una espada y una pistola y se disponen a emprender el viaje. Tras una larga caminata, consiguen llegar a la ciudad que se veía desde la nave, pero la ciudad no se encuentra en muy buenas condiciones. En la entrada de la ciudad, se hallaba un cartel con el nombre de la ciudad, Oceana.');
        this.personajes.get(cast.elara.getName()).hablar('¡Chicos, hemos llegado a Oceana!');
        this.personajes.get(cast.maria.getName()).hablar('¡Está casi todo destruido y en llamas! ¿Qué habrá pasado?');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Nos centraremos en buscar las piezas y luego volvamos a la nave!');
        this.personajes.get(cast.alex.getName()).hablar('¡Encabezaré la búsqueda! ¡Defendedme las espaldas por lo que pueda haber!');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Por fin algo de acción!');
        this.personajes.get(cast.narrador.getName()).narrar('Alex empieza a explorar la entrada de la ciudad, que se encuentra toda destruida, sin éxito. Pero tras una larga exploración, encuentran una zona en mejor estado.');
        this.personajes.get(cast.alex.getName()).hablar('¡Bingo! ¡Al fondo hay edificios en buenas condiciones!');
        this.personajes.get(cast.elara.getName()).hablar('¡Buenas noticias! ¡En camino equipo!');
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación llega a la zona y se queda asombrada ante el edificio que descubren.');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Una armería!');
        this.personajes.get(cast.maria.getName()).hablar('¡Cierto! ¡Vamos a comprobar si hay algo que nos sirva!');
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación entra en la armería y se encuentran todo organizado en forma de trinchera y empuñan las armas por lo que se puedan encontrar. Mientras exploran la armería, escuchan el ruido del cargador de un arma.');
        this.personajes.get(cast.michael.getName()).hablar('¿Quién anda ahí? ¡Como des un paso más estarás acabado!');
        this.personajes.get(cast.alex.getName()).hablar('¡Tranquilo! ¡No venimos buscando enfrentamientos!');
        this.personajes.get(cast.michael.getName()).hablar('¿Cuántos sois y qué hacéis aquí?');
        this.personajes.get(cast.alex.getName()).hablar('¡Somos cuatro, Alex, Sargento Ramirez, Teniente Maria Riordan y la elara Elara Silva! ¡Se nos ha estropeado la nave y hemos aterrizado en este planeta para buscar piezas y repararla! ¡Solo queremos volver a casa!');
        this.personajes.get(cast.michael.getName()).hablar('¿Y por qué no habéis huido al ver al dragón?');
        this.personajes.get(cast.alex.getName()).hablar('¿Dragón? ¿Nos estás tomando el pelo?');
        this.personajes.get(cast.michael.getName()).hablar('¡Para nada! ¡Tirad las armas y levantad las manos! ¡Voy a salir a hablar con vosotros!');
        this.personajes.get(cast.narrador.getName()).narrar('Los tripulantes se disponen a tirar las armas y a levantar las manos. Michael ve las armas en el suelo y se dispone a salir de la trinchera mientras les apunta con una ametralladora láser.');
        this.personajes.get(cast.michael.getName()).hablar('¿De dónde habéis sacado esos juguetes para niños? ¡Esas armas son de hace 500 años!');
        this.personajes.get(cast.alex.getName()).hablar('¡Venimos del 2023 pero al haberse averiado la nave y hemos acabado aquí!');
        this.personajes.get(cast.michael.getName()).hablar('¡Pues estamos en el 2573!');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Al final el juguetito sí que funcionaba!');
        this.personajes.get(cast.alex.getName()).hablar('¡Te lo dije!');
        this.personajes.get(cast.michael.getName()).hablar('¡Esta ciudad ha sido arrasada por un dragón, y viene cada noche a defenderla, ya que se ha adueñado de ella!');
        this.personajes.get(cast.alex.getName()).hablar('¿Hay armas de esta época aquí?');
        this.personajes.get(cast.michael.getName()).hablar('¡Por supuesto! ¡Alex, coge esta ametralladora láser! ¡elara, coge estas bombas eléctricas! ¡Sargento Ramirez, coge este arco con flechas venenosas! ¡Teniente, coge ese hacha eléctrica! ¡Yo llevaré unos shurikens de fuego!');
        this.personajes.get(cast.narrador.getName()).narrar('Todos cogen las armas y se disponen a ir en busca del dragón. Tras una intensa lucha, derrotan al dragón. Y Michael como recompensa les da las piezas necesarias para reparar la nave.');
        this.personajes.get(cast.michael.getName()).hablar('Por fin todo acabó , me encantaría formar parte de esta aventura , que te parece Alex? Está claro que necesitais a un buen Ingeniero');
        this.personajes.get(cast.alex.getName()).hablar('¡Gracias por todo Michael, ahora que tenemos todo lo necesario para reparar la nave, debemos partir , ');
        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
          let respuesta = window.confirm("Alex , te gustaría que el Ingeniero se uniera a la tripulación?");
          (respuesta) ? escenas[5].run() 
          : escenas[7].run() 

     }, Personaje.timeout + 1500) 
    }
  }

  class Escena3 extends Escena {
    constructor() {
      super('Un salto intergaláctico', 'Nexus Heaven');
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
        this.addCharacter(cast.sabio)
        this.addItem(props.botiquin)
        this.addItem(props.traje)
        this.personajes.get(cast.narrador.getName()).narrar('La nave de la tripulación aterriza en el misterioso planeta Nexus Heaven, después de un largo viaje que ha consumido una gran cantidad de combustible. Al bajar de la nave, son recibidos por un sabio en aeronaves muy mayor y sabio, quien los observa con curiosidad.');
        this.personajes.get(cast.sabio.getName()).hablar('Bienvenidos a Nexus Heaven, viajeros del espacio. Soy el sabio Sabio, y es un honor recibir a visitantes tan distinguidos como ustedes.');
        this.personajes.get(cast.elara.getName()).hablar('Gracias por recibirnos, sabio Sabio. Hemos llegado en busca de información sobre una llave que podría ser crucial para nuestra misión de cerrar la Brecha de Crono.');
        this.personajes.get(cast.sabio.getName()).hablar('Ah, la Brecha de Crono. He escuchado rumores sobre esa problemática. Pero aquí en Nexus Heaven, también circula un rumor, un rumor sobre la existencia de esa llave que buscan.');
        this.personajes.get(cast.samuel.getName()).hablar('¿Tiene información que pueda ayudarnos? ¿Dónde se encuentra la llave?');
        this.personajes.get(cast.sabio.getName()).hablar('Tengo un mapa, un mapa antiguo que podría conducirlos a la ubicación de la llave. Sin embargo, antes de dárselos, necesito hacerles una oferta.');
        this.personajes.get(cast.alex.getName()).hablar('¿Una oferta? ¿Qué tiene en mente?');
        this.personajes.get(cast.sabio.getName()).hablar('Nuestro planeta, Nexus Heaven, necesita desesperadamente la experiencia y habilidades de la Teniente María. En su estancia aquí, podrá ayudarnos a mejorar nuestras aeronaves y tecnología. Pero, lamento decirlo, si ella acepta ayudarnos, no podrá participar en su aventura. Es posible que nunca vuelva a verlos.');
        this.personajes.get(cast.maria.getName()).hablar('¿Debo quedarme aquí, elara?');
        this.personajes.get(cast.elara.getName()).hablar('La decisión es de Alex. Es él quien debe aceptar o rechazar esta oferta.');
        this.personajes.get(cast.ramirez.getName()).hablar('Alex, la decisión no es fácil, pero piensa en lo que es mejor para el equipo y la misión.');
        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
           let respuesta = window.confirm("Aceptas el trato?");
           (respuesta) ? escenas[10].run() 
         : escenas[13].run()

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena4 extends Escena {
    constructor() {
      super('Un salto de fé', 'Exterior de la Nave');
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
        this.personajes.get(cast.narrador.getName()).narrar('La nave de la tripulación se encuentra en un estado crítico, a la deriva en el espacio, con sistemas fallando y oxígeno disminuyendo. En medio de la tensión, Nguyen, el hábil técnico de la tripulación, toma la valiente decisión de ponerse el traje espacial y aventurarse al exterior para intentar reparar los daños.');
        this.personajes.get(cast.alex.getName()).hablar('Nguyen, ten mucho cuidado allá fuera. La situación es peligrosa.');
        this.personajes.get(cast.nguyen.getName()).hablar('No te preocupes, Alex. Haré todo lo que esté a mi alcance para arreglar la nave y mantenernos con vida.');
        this.personajes.get(cast.elara.getName()).hablar('Estamos contando contigo, Nguyen. Nuestra supervivencia depende de tu valentía y habilidad.');
        this.personajes.get(cast.narrador.getName()).narrar('Nguyen se adentra en el gélido vacío del espacio, rodeado de escombros y piezas de la nave que flotan a la deriva. Con rapidez y destreza, comienza a trabajar en los sistemas dañados, pero la tarea es ardua y lenta. Cada minuto que pasa es crucial para la tripulación, que observa desde la ventana de la nave con nerviosismo.');
        this.personajes.get(cast.ramirez.getName()).hablar('Nguyen está haciendo un trabajo increíble allá afuera. Si alguien puede arreglar esto, es él.');
        this.personajes.get(cast.maria.getName()).hablar('Estoy impresionada por su valentía. Espero que todo vaya bien.');
        this.personajes.get(cast.samuel.getName()).hablar('No podemos permitirnos perder más tiempo. Debemos mantenernos alerta y listos para cualquier emergencia.');
        this.personajes.get(cast.narrador.getName()).narrar('A pesar de los desafíos, Nguyen logra reparar con éxito varios sistemas críticos de la nave. Sin embargo, el tiempo y la exposición al espacio están pasando factura a su traje espacial y a su salud. Su comunicador emite una señal de alarma.');
        this.personajes.get(cast.alex.getName()).hablar('Nguyen, ¿estás bien? Hemos notado un problema en tu traje.');
        this.personajes.get(cast.nguyen.getName()).hablar('Estoy bien, pero el traje ha sufrido daños. No sé cuánto tiempo más podré resistir aquí afuera.');
        this.personajes.get(cast.elara.getName()).hablar('Nguyen, eres un verdadero héroe. Si sientes que es peligroso quedarte más tiempo, regresa a la nave. Tu seguridad es lo más importante.');
        this.personajes.get(cast.nguyen.getName()).hablar('No, elara, no puedo dejarlo a medias. Estoy cerca de completar la reparación. Solo necesito unos minutos más.');
        this.personajes.get(cast.narrador.getName()).narrar('Con determinación, Nguyen continúa trabajando, sabiendo que cada segundo cuenta. La tripulación observa ansiosamente mientras lucha por restaurar la nave a su pleno funcionamiento.');
        this.personajes.get(cast.ramirez.getName()).hablar('Tiene agallas, eso hay que reconocérselo.');
        this.personajes.get(cast.maria.getName()).hablar('Es un modelo de valentía y sacrificio.');
        this.personajes.get(cast.samuel.getName()).hablar('Estamos a punto de cruzar la línea crítica. Debe terminar pronto.');
        this.personajes.get(cast.narrador.getName()).narrar('Finalmente, Nguyen logra completar las reparaciones necesarias, pero su traje espacial está seriamente dañado, y su voz se debilita.');
        this.personajes.get(cast.alex.getName()).hablar('Nguyen, has hecho un trabajo increíble. Ahora, regresa a la nave. Tu vida es lo más importante.');
        this.personajes.get(cast.nguyen.getName()).hablar('Lo siento, Alex, pero me temo que he llegado al límite. Mis sistemas de soporte vital están fallando.');
        this.personajes.get(cast.elara.getName()).hablar('Nguyen, vuelve ahora mismo. No vamos a perder a un miembro valioso de nuestra tripulación.');
        this.personajes.get(cast.nguyen.getName()).hablar('Gracias a todos... por la oportunidad de servir... Adiós...');
        this.personajes.get(cast.narrador.getName()).narrar('Con esas palabras, Nguyen se despide de la tripulación y regresa a la nave. Tras un breve silencio, la tristeza llena la sala de control mientras todos rinden homenaje al valiente técnico que dio su vida para salvar a la tripulación. Ahora, Alex debe tomar una decisión crucial sobre el futuro de su aventura en el espacio, mientras la nave sigue su viaje a través de las estrellas')
        progressBar(Personaje.timeout + 1000)
        setTimeout(() => {
            
           let respuesta = window.prompt("a. Rendir homenaje a Nguyen y reponerse\nb. Continuar la aventura");
           (respuesta === 'a') ? escenas[15].run()
         : (respuesta === 'b') ? escenas[14].run() 
         : (!respuesta) ? escenas[1].run()
         : alert("Debias escribir a / b ")
      }, Personaje.timeout + 1500) ;
        
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
        this.personajes.get(cast.narrador.getName()).narrar('Después de que el michael se une a la tripulación, todos se reúnen en la sala de conferencias de la nave Estelarion.')
        this.personajes.get(cast.elara.getName()).hablar('¡Bienvenido a bordo, michael! Soy la elara Elara Silva.')
        this.personajes.get(cast.michael.getName()).hablar('Mucho gusto, elara Silva.')
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
        this.personajes.get(cast.samuel.getName()).hablar('Ambas opciones son arriesgadas, pero necesitamos decidir. elara, ¿qué piensa al respecto?')
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
      super('Un viaje sin retorno', 'Los confínes del Universo');
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
        this.personajes.get(cast.narrador.getName()).narrar('La decisión de Alex de emprender el viaje a los Confínes del Universo fue tomada. La tripulación se prepara meticulosamente para la expedición, consciente de que este podría ser un punto de no retorno en su búsqueda de la llave para salvar Terra Nova. La nave Estelarion se encuentra lista para el salto intergaláctico hacia lo desconocido.');
        this.personajes.get(cast.elara.getName()).hablar('Bien Alex, vamos a seguir las pistas de Michael a los Confínes del Universo. Todos prepárense, este viaje será largo, y también les pido que confíen en que podremos superar cualquier desafío que se nos presente.');
        this.personajes.get(cast.alex.getName()).hablar('Oído, elara. Estoy listo para esto, y estoy dispuesto a arriesgarlo todo para salvar al planeta.');
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación se prepara y con una tensión palpable, la Estelarion se eleva hacia el espacio enfrentando la vastedad del universo y la incertidumbre que conlleva.');
        this.personajes.get(cast.michael.getName()).hablar('¿Cómo te sientes?');
        this.personajes.get(cast.alex.getName()).hablar('Algo ansioso.');
        this.personajes.get(cast.michael.getName()).hablar('Comprendo, yo realmente quiero ayudarlos a que su misión prospere.');
        this.personajes.get(cast.alex.getName()).hablar('Estamos depositando nuestra confianza en ti.');
        this.personajes.get(cast.michael.getName()).hablar('No te preocupes, las pistas que encontré nos ayudarán.');
        this.personajes.get(cast.alex.getName()).hablar('¿Por qué te interesa tanto ayudarnos?');
        this.personajes.get(cast.michael.getName()).hablar('Por la razón de que al igual que tú, yo también perdí mi planeta natal.');
        this.personajes.get(cast.alex.getName()).hablar('Espera, ¿¡Qué!?');
        this.personajes.get(cast.michael.getName()).hablar('Así como escuchaste. No sé si has oído hablar del planeta Khachbord.');
        this.personajes.get(cast.alex.getName()).hablar('Sí, supe que la llave nunca fue encontrada y que el planeta fue destruido, muchas personas murieron. Pero, ¿qué tiene que ver en todo esto?');
        this.personajes.get(cast.michael.getName()).hablar('Yo fui el único sobreviviente.');
        this.personajes.get(cast.alex.getName()).hablar('Cómo lo siento. Y-yo, no sé qué decirte.');
        this.personajes.get(cast.michael.getName()).hablar('No tenía idea de eso, ¿por qué no lo mencionaste antes?');
        this.personajes.get(cast.michael.getName()).hablar('No me gusta hablar del tema, pero te lo digo porque no quiero que le pase lo mismo a Terra Nova.');
        this.personajes.get(cast.alex.getName()).hablar('Gracias por compartir esto conmigo y por preocuparte, de nuevo lamento todo lo que pasó con tu planeta, pero bueno, gracias a tu ayuda podremos evitar que este y que otros planetas pasen una situación similar.');
        this.personajes.get(cast.michael.getName()).hablar('Bueno, vamos a ver como van los demás.');
        this.personajes.get(cast.alex.getName()).hablar('De acuerdo.');
        this.personajes.get(cast.narrador.getName()).narrar('Las horas se convierten en días mientras avanzan hacia su destino. Finalmente, llegan a los Confínes del Universo, un lugar de belleza indescriptible con nebulosas de colores y extrañas formaciones celestiales.');
        this.personajes.get(cast.maria.getName()).hablar('Hemos llegado a los Confínes del Universo.');
        this.personajes.get(cast.elara.getName()).hablar('Perfecto, ahora bajemos a explorar.');
        this.personajes.get(cast.samuel.getName()).hablar('El lugar es increíble pero lo importante es centrarse en la misión.');
        this.personajes.get(cast.michael.getName()).hablar('¿Michael, por donde debemos comenzar a buscar? ¿Michael?');
        this.personajes.get(cast.ramirez.getName()).hablar('No está aquí.');
        this.personajes.get(cast.nguyen.getName()).hablar('¿Dónde se metió? Creí que estaba detrás de nosotros.');
        this.personajes.get(cast.alex.getName()).hablar('Oh no, ¡AIDA!');
        this.personajes.get(cast.narrador.getName()).narrar('Justo cuando sus cerebros hicieron “clic” la nave comenzó a despegar de nuevo, no sin antes presentar un holograma donde vemos a Michael con una sonrisa villana.');
        this.personajes.get(cast.michael.getName()).hablar('Qué torpes son, me burlé de ustedes.');
        this.personajes.get(cast.ramirez.getName()).hablar('¿Por qué hiciste esto?');
        this.personajes.get(cast.michael.getName()).hablar('Porque estuve varado en ese maldito planeta por años y hoy por fin podré volver a casa.');
        this.personajes.get(cast.alex.getName()).hablar('Pero me dijiste que tu planeta hogar fue destruido.');
        this.personajes.get(cast.michael.getName()).hablar('Fue una trampa para ganarme tu confianza, la verdad no podría importarme menos lo que le pasó a ese planeta o lo que le pase al tuyo.');
        this.personajes.get(cast.elara.getName()).hablar('Vas a pagar por todo esto, ¡no dejaremos que te salgas con la tuya!');
        this.personajes.get(cast.michael.getName()).hablar('¿Y cómo piensas detenerme elara? En este lugar no hay nada que los pueda ayudar, quedarán atrapados aquí exactamente como yo. Ahora si me disculpan, tengo un viaje que realizar, hasta nunca zopencos.');
        this.personajes.get(cast.narrador.getName()).narrar('Después de la traición de Michael, la tripulación acepta su destino y se prepara para vivir en los Confínes del Universo, enfrentando un futuro incierto. Aunque no lograron su objetivo inicial, su determinación y unidad siguen siendo su mayor fortaleza.');
        
        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
         alert("GAME OVER")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena7 extends Escena {
    constructor() {
      super('Una decision complicada', 'En el interior de la nave Estelarion');
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
        this.personajes.get(cast.michael.getName()).hablar("Después de un momento de reflexión, Alex decide que el ingeniero no se una a la tripulación.");
        this.personajes.get(cast.narrador.getName()).narrar("Tras la decisión de mantener el equipo sin nuevas incorporaciones, la tripulación se reúne para discutir su próximo paso. Se enfrentan a un dilema: por un lado, AIDA, la inteligencia artificial de la nave, escucha la conversación y les informa que su memoria e información abarcan millones de años, lo que la lleva a creer que sabe dónde encontrar la llave que están buscando. Según AIDA, la llave se encuentra en un planeta desolado llamado Astralis-9.");
        this.personajes.get(cast.elara.getName()).hablar("Bueno, parece que hemos obtenido las piezas que necesitábamos, pero estamos en una situación complicada. No podemos ignorar la amenaza de los piratas espaciales que nos persiguen, y lo más importante, el Dr. Samuel no está a bordo.");
        this.personajes.get(cast.ramirez.getName()).hablar("No me gusta la idea de dejar atrás a uno de los nuestros. Ese tipo puede ser un dolor de cabeza, pero es nuestro dolor de cabeza.");
        this.personajes.get(cast.maria.getName()).hablar("Y, ¿qué hacemos con la información de AIDA sobre Astralis-9? Podríamos encontrar la llave que necesitamos para cerrar la Brecha de Crono y evitar que se desencadene el caos en todas las líneas temporales.");
        this.personajes.get(cast.nguyen.getName()).hablar("La nave está reparada y lista para partir. La decisión es suya, elara.");
        this.personajes.get(cast.elara.getName()).hablar("Bien, escuchemos a AIDA. ¿Dónde está Astralis-9 y cómo llegamos allí?");
        this.personajes.get(cast.AIDA.getName()).hablar("Astralis-9 se encuentra en el sector Galaxia Desolada, a unas coordenadas específicas. Puedo cargar los datos de navegación en la nave y guiarlos allí.");
        this.personajes.get(cast.alex.getName()).hablar("Debemos de tomar una decisión. Ir a por la llave o luchar y salvar al doctor.");

        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
           let respuesta = window.prompt("a. Huir e ir a buscar la llave\nb. Luchar por el Doctor");
           (respuesta === 'a') ? escenas[8].run() 
         : (respuesta === 'b') ? escenas[9].run() 
         : (!respuesta) ? escenas[1].run()
         : alert("Debias escribir a / b ")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena8 extends Escena {
    constructor() {
      super('El enigma', 'Cueva remota');
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
        this.addItem(props.key)
        this.personajes.get(cast.maria.getName()).hablar("No puedo creer que hayamos dejado al doctor atrás, después de lo mucho que nos ayudó. ¡Pudimos haber hecho algo para salvarlo!");
        this.personajes.get(cast.nguyen.getName()).hablar("¿Qué se suponía que hiciéramos Maria? ¿Arriesgarnos a que nos secuestren y maten a todos?");
        this.personajes.get(cast.alex.getName()).hablar("Lo siento teniente pero el técnico Nguyen tiene razón, no teníamos elección, era él o el planeta.");
        this.personajes.get(cast.elara.getName()).hablar("Ya dejen de discutir, lo hecho hecho está. AIDA, por favor prepara la ruta de vuelo, nos vamos ya mismo a ese planeta.");
        this.personajes.get(cast.AIDA.getName()).hablar("Entendido, capitana.");
        this.personajes.get(cast.narrador.getName()).narrar("La tripulación de la Estelarion, habiendo decidido huir de la amenaza de los piratas espaciales, sigue la ruta de vuelo de AIDA y finalmente llegan a un planeta deslumbrante y misterioso. Mientras exploran su superficie, encuentran una enigmática cueva que parece esconder la clave para salvar a Terra Nova.");
        this.personajes.get(cast.alex.getName()).hablar("Este lugar es asombroso. Nunca he visto un planeta con una belleza como esta.");
        this.personajes.get(cast.elara.getName()).hablar("Es impresionante, pero no olvidemos por qué estamos aquí. Debemos encontrar esa llave.");
        this.personajes.get(cast.nguyen.getName()).hablar("AIDA nos guió hasta aquí, así que debemos estar cerca de nuestro objetivo. Pero, ¿qué se supone que debemos hacer en esta cueva?");
        this.personajes.get(cast.alex.getName()).hablar("AIDA, ¿tienes alguna idea de por dónde debemos comenzar?");
        this.personajes.get(cast.AIDA.getName()).hablar("Este lugar es un enigma en sí mismo. Pero he detectado una señal en la profundidad de la cueva. Parece que podría estar relacionada con la llave.");
        this.personajes.get(cast.nguyen.getName()).hablar("Entonces, ¡avancemos! Encontraremos la respuesta a cualquier acertijo que se nos presente.");
        this.personajes.get(cast.narrador.getName()).narrar("La tripulación se adentra en la cueva, donde encuentran una serie de símbolos y pistas que parecen ser parte de un intrincado acertijo.");
        this.personajes.get(cast.ramirez.getName()).hablar("Esto se ve complicado. Pero si hemos llegado tan lejos, estoy seguro de que podemos resolverlo.");
        this.personajes.get(cast.alex.getName()).hablar("Miremos atentamente los símbolos y tratemos de encontrar un patrón o alguna pista.");
        this.personajes.get(cast.elara.getName()).hablar("Tenemos que trabajar juntos. Esta es nuestra oportunidad de salvar a Terra Nova.");
        this.personajes.get(cast.nguyen.getName()).hablar("¡Lo tengo! Los símbolos forman un patrón que coincide con las constelaciones de nuestra galaxia. Sigamos el patrón estelar.");
        this.personajes.get(cast.elara.getName()).hablar("Excelente observación, Técnico Nguyen. Sigamos el patrón y veamos a dónde nos lleva.");
        this.personajes.get(cast.narrador.getName()).narrar("La tripulación sigue el patrón de los símbolos y avanza más profundamente en la cueva. A medida que se acercan al centro, encuentran un pedestal en el que descansa la tan buscada llave.");
        this.personajes.get(cast.alex.getName()).coger(props.key)
        this.personajes.get(cast.alex.getName()).hasKey()
        this.personajes.get(cast.elara.getName()).hablar("¡Lo hemos logrado! La llave está en nuestras manos. Terra Nova tiene una oportunidad de sobrevivir gracias a ustedes.");
        this.personajes.get(cast.alex.getName()).hablar("Ha sido un largo viaje, superamos desafíos increíbles pero finalmente tenemos la llave en nuestro poder.");
        this.personajes.get(cast.ramirez.getName()).hablar("Ahora, debemos regresar a la nave y enfrentar cualquier amenaza que se interponga en nuestro camino.");
        this.personajes.get(cast.narrador.getName()).narrar("La tripulación sale de la cueva con la llave en su posesión, sabiendo que el regreso a la nave no será fácil y que pueden encontrarse con más obstáculos en su camino. Pero están decididos a cumplir su misión y salvar a Terra Nova.");

        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
           escenas[18].run()
      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena9 extends Escena {
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

  class Escena10 extends Escena {
    constructor() {
      super('El corazón de la aventura', 'Un lugar remoto');
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
        this.addItem(props.key)
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación, con un sentimiento agridulce por dejar atrás a la Teniente María, regresa a la nave y se prepara para emprender su viaje siguiendo el mapa proporcionado por el Especialista Sabio de Nexus Heaven. Durante el viaje, el ambiente en la nave es tenso, y todos están conscientes de la difícil decisión que les espera al llegar a su destino.');
        this.personajes.get(cast.AIDA.getName()).hablar('Estamos a punto de llegar a la ubicación indicada en el mapa. Por favor, prepárense para cualquier desafío que podamos encontrar.');
        this.personajes.get(cast.alex.getName()).hablar('Está bien, todos. Hemos llegado. Según el mapa del anciano, la llave debe estar cerca. Pero, para obtenerla, debemos resolver un acertijo.');
        this.personajes.get(cast.samuel.getName()).hablar('¿Un acertijo? ¿Qué dice el mapa?');
        this.personajes.get(cast.ramirez.getName()).hablar('No tenemos tiempo que perder. Muéstranos el acertijo, Alex.');
        this.personajes.get(cast.alex.getName()).hablar('Muy bien, aquí está. Dice: "A lo largo del tiempo y el espacio, dentro de la esencia de una estrella, encontrarás la llave que desvela el destino. Pero ten cuidado, pues la codicia puede llevar a la destrucción."');
        this.personajes.get(cast.alex.getName()).coger(props.key)
        this.personajes.get(cast.alex.getName()).hasKey()
        this.personajes.get(cast.elara.getName()).hablar('Lo tengo! , la llave siempre ha estado con nosotros , en el corazón de nuestra nave');
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación corre hacia la nave , y efectivamente en lo mas profundo de la nave , algo brillaba sin parar , por fin encontraron la llave');
        this.personajes.get(cast.elara.getName()).hablar('Por fin salvaremos Terra Nova , volvamos a casa! , Alex que te sucede ? te noto algo extraño');

        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
           let respuesta = window.prompt("a. Vender la llave\nb. Volver a Terra Nova");
           (respuesta === 'a') ? escenas[11].run() 
         : (respuesta === 'b') ? escenas[18].run() 
         : (!respuesta) ? escenas[1].run()
         : alert("Debias escribir a / b / c")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena11 extends Escena {
    constructor() {
      super('La traición', 'Estelarion');
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
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación se prepara para regresar a la Estelarion, con la llave en su poder. Sin embargo, cuando llegan a la nave, Alex toma una decisión sorprendente.');
        this.personajes.get(cast.alex.getName()).hablar('Lo siento, chicos, pero he decidido vender la llave. Sé que no podrán entenderlo pero este será mi boleto a la riqueza y la fama. No puedo seguir perdiendo el tiempo con esta tripulación.');
        this.personajes.get(cast.narrador.getName()).narrar('La sorpresa y la decepción se apoderan de la tripulación mientras ven a Alex partir con la llave.');
        this.personajes.get(cast.elara.getName()).hablar('Alex, ¿¡de qué demonios hablas!? ¡No puedes hacer esto! Hemos llegado tan lejos juntos. ¿Cómo puedes traicionarnos de esta manera?');
        this.personajes.get(cast.narrador.getName()).narrar('El corazón de Elara se hunde mientras ve a Alex alejarse con la llave, su expresión reflejando la profunda herida de su traición.');
        this.personajes.get(cast.samuel.getName()).hablar('Esto es inaceptable, Alex. Sacrificas la esperanza de Terra Nova por tu propio interés egoísta.');
        this.personajes.get(cast.narrador.getName()).narrar('El tono de Samuel está lleno de decepción y enojo. Siente que la traición de Alex es una herida profunda en su lealtad.');
        this.personajes.get(cast.nguyen.getName()).hablar('La llave es la única esperanza para nuestro planeta natal, y tú la estás vendiendo por riqueza y fama. No puedo creer que estés haciendo esto.');
        this.personajes.get(cast.narrador.getName()).narrar('Nguyen sacude la cabeza, incapaz de comprender la elección de Alex. Siente que ha perdido a un amigo y un aliado valioso.');
        this.personajes.get(cast.ramirez.getName()).hablar('Traicionar a tu equipo y a tu deber es un error que lamentarás el resto de tu vida, Alex. Has dejado atrás a tus camaradas y a tu planeta natal.');
        this.personajes.get(cast.narrador.getName()).narrar('Alex: ¡No me importa! Estoy cansado de seguir órdenes y luchar por una causa que no me da nada a cambio. Esta es mi oportunidad de ser libre y vivir la vida que merezco. No puedo esperar que ustedes lo entiendan.');
        this.personajes.get(cast.narrador.getName()).narrar('Alex abandona a su tripulación, llevando consigo la llave que podría haber salvado a Terra Nova.');
        this.personajes.get(cast.narrador.getName()).narrar('Alex, ahora rico y famoso, se encuentra solo en su opulenta mansión. Aunque tiene todo lo que siempre soñó, siente un vacío abrumador en su interior.');
        this.personajes.get(cast.alex.getName()).hablar('¿Qué he hecho? He sacrificado todo por la riqueza y la fama, pero ¿a qué costo? Me siento vacío por dentro, como si hubiera vendido mi alma.');
        this.personajes.get(cast.narrador.getName()).narrar('A medida que los días pasan, el aislamiento se vuelve insoportable. Alex no tiene a nadie en quien confiar o a quien acudir. La fama y la fortuna son sus únicos compañeros, y resultan ser compañeros fríos y solitarios.');
        this.personajes.get(cast.alex.getName()).hablar('No puedo soportar esta soledad. No puedo seguir así. Pero, ¿qué puedo hacer? He quemado todos mis puentes, traicioné a la única familia que tenía: mi tripulación. ¿Es este el precio de mi libertad?');
        this.personajes.get(cast.narrador.getName()).narrar('En un último intento por encontrar significado en su vida, Alex se embarca en un viaje exploratorio en su nave, buscando algo que llene el vacío que siente. Pero la desesperación y la locura lo envuelven mientras se acerca a un satélite en su nave.');
        this.personajes.get(cast.alex.getName()).hablar('No hay vuelta atrás. Esto es lo que merezco, ¿verdad?');
        this.personajes.get(cast.narrador.getName()).narrar('Sus pensamientos se vuelven confusos, y su cordura se desmorona. Finalmente, la nave de Alex se estrella contra el satélite, marcando el trágico y solitario final de su historia. Sus últimas palabras, susurros de arrepentimiento y desesperación, quedan perdidos en el frío y vasto espacio, sin nadie para escucharlos.');


        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
         alert("GAME OVER")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena12 extends Escena {
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

  class Escena13 extends Escena {
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

  class Escena14 extends Escena {
    constructor() {
      super('Un trago amargo', 'En medio de la nada');
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
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación, después de rendir homenaje a Nguyen y tomar un breve momento para reponerse, decide continuar su aventura en el espacio. A pesar de la pérdida, saben que deben seguir adelante en su misión para encontrar la llave que salvará su civilización natal, Terra Nova.');
        this.personajes.get(cast.alex.getName()).hablar('Nguyen dio su vida por esta misión. Debemos honrar su sacrificio y encontrar la llave. Avancemos.');
        this.personajes.get(cast.elara.getName()).hablar('Tienes razón, Alex. Vamos a intentar ponernos en contacto con ese planeta cercano y ver si alguien ha oído hablar de la llave por esta zona.');
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación activa el equipo de comunicación de la nave y envía una señal de radio al planeta cercano, esperando obtener alguna información valiosa. Sin embargo, en el vasto y desconocido universo, la probabilidad de éxito es incierta.');
        this.personajes.get(cast.samuel.getName()).hablar('Esperemos que tengan información sobre la llave. Sería un gran avance para nuestra misión.');
        this.personajes.get(cast.maria.getName()).hablar('Pero no podemos dejar que nuestras esperanzas dependan únicamente de esto. Debemos estar preparados para cualquier eventualidad.');
        this.personajes.get(cast.narrador.getName()).narrar('Mientras esperan una respuesta, su señal de radio es interceptada por una banda de piratas espaciales que acecha en las cercanías. Los piratas detectan la señal y se lanzan hacia la nave de la tripulación con intenciones hostiles.');
        this.personajes.get(cast.ramirez.getName()).hablar('¡Parece que no vamos a tener un momento de paz! Preparad lo que tengáis para defendernos.');
        this.personajes.get(cast.nguyen.getName()).hablar('Capitana, los piratas se están acercando rápidamente. Parece que están mejor armados que nosotros.');
        this.personajes.get(cast.elara.getName()).hablar('Estamos en desventaja, pero no podemos rendirnos sin luchar. Todos, hagan lo que puedan para defender la nave.');
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación se prepara para el inminente enfrentamiento, armándose con lo que tienen a su disposición. A pesar de su determinación, los piratas espaciales superan en número y armamento a la tripulación. En una feroz batalla, luchan valientemente, pero los piratas son implacables.');
        this.personajes.get(cast.narrador.getName()).narrar('Las armas de la tripulación no son suficientes para repeler el ataque. Uno a uno, los miembros de la tripulación caen ante los piratas espaciales, y la lucha finaliza con consecuencias desastrosas.');
        this.personajes.get(cast.narrador.getName()).narrar('Con la nave en ruinas y casi toda la tripulación abatida, la civilización natal de Terra Nova jamás volverá a ver la luz del sol. La esperanza se desvanece en medio del oscuro vacío del espacio, y la misión que alguna vez estuvo llena de promesas termina en tragedia.');

        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
         
          alert("GAME OVER")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena15 extends Escena {
    constructor() {
      super('El homenaje', 'En medio de la galaxia C-13');
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
        this.personajes.get(cast.narrador.getName()).narrar('La tripulación, profundamente afectada por la pérdida de Nguyen, decide parar y rendir homenaje al valiente técnico. Preparan un emotivo entierro en el espacio, y naves de diferentes lugares acuden para unirse al tributo a su compañero caído. Las luces brillantes y parpadeantes de las naves llenan el espacio, creando un impresionante espectáculo en honor a Nguyen.');
        this.personajes.get(cast.elara.getName()).hablar('Nguyen fue un miembro valiente y leal de nuestra tripulación. Si no fuera por su sacrificio, no estaríamos aquí. Que su espíritu descanse en paz.');
        this.personajes.get(cast.maria.getName()).hablar('Una vez más, hemos perdido a uno de los nuestros. Debemos recordar su valentía y determinación.');
        this.personajes.get(cast.ramirez.getName()).hablar('Era un verdadero héroe. Honremos su memoria.');
        this.personajes.get(cast.narrador.getName()).narrar('Al terminar el emotivo entierro, una luz comienza a brillar en la oscuridad del espacio, a lo lejos. Esta misteriosa luz crece con cada segundo que pasa, atrayendo la atención de la tripulación. La curiosidad se apodera de ellos mientras se preguntan qué podría ser.');
        this.personajes.get(cast.alex.getName()).hablar('¿Qué es eso? ¿Deberíamos explorarlo?');
        this.personajes.get(cast.samuel.getName()).hablar('Nunca he visto algo así en el espacio. Es fascinante y desconcertante al mismo tiempo.');
        this.personajes.get(cast.maria.getName()).hablar('Podría ser algo valioso o peligroso. Deberíamos investigar.');
        this.personajes.get(cast.elara.getName()).hablar('AIDA, ¿puedes detectar alguna información adicional sobre esa luz? ¿Es algún tipo de señal o nave?');
        this.personajes.get(cast.AIDA.getName()).hablar('Estoy escaneando la zona, Capitana. No parece una señal de radio ni una nave convencional. Es un fenómeno inusual.');
        this.personajes.get(cast.ramirez.getName()).hablar('¿Y si es una trampa? No podemos permitirnos más problemas.');
        this.personajes.get(cast.alex.getName()).hablar('Es cierto, debemos ser cautelosos. Pero también somos exploradores. ¿Qué opinan, equipo? ¿Deberíamos investigar?');

        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
           let respuesta = window.confirm("Investigar la misteriosa luz?");
           (respuesta) ? escenas[17].run() 
           : escenas[16].run()

      }, Personaje.timeout + 1500)
        
    }
  }

  class Escena16 extends Escena {
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
        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            do{
           let respuesta = window.prompt("a. Descender a un planeta cercano para repararla\nb. Salto intergaláctico a un planeta especializado\nc. Repararla con las herramientas disponibles");
           (respuesta === 'a') ? escenas[2].run() 
           : (respuesta === 'b') ? escenas[3].run() 
           : (respuesta === 'c') ? escenas[4].run()
           : alert("Debias escribir a / b / c")
          }while(respuesta !== 'a')

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena17 extends Escena {
    constructor() {
      super('Un golpe inerperado', 'Planeta Celeris');
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
        this.addItem(props.key)
        this.personajes.get(cast.elara.getName()).hablar("Es extraño, ¿no creen? Un planeta sin signos de vida, pero con un acertijo en esta cueva. ¿Qué podría significar?");
        this.personajes.get(cast.maria.getName()).hablar("Podría ser una prueba. Como si estuviera destinada a ser descubierta por alguien.");
        this.personajes.get(cast.samuel.getName()).hablar("Es fascinante. Nguyen siempre decía que el universo es un rompecabezas gigante esperando a ser resuelto.");
        this.personajes.get(cast.alex.getName()).hablar("Oigan, siento una especie de conexión con el acertijo, como si Nguyen nos guiara. Debemos resolverlo.");
        this.personajes.get(cast.narrador.getName()).narrar("La tripulación trabaja juntos para descifrar el acertijo, usando su ingenio y conocimientos combinados. Finalmente, la respuesta se vuelve clara y revela la ubicación de la llave.");
        this.personajes.get(cast.alex.getName()).coger(props.key)
        this.personajes.get(cast.alex.getName()).hasKey()
        this.personajes.get(cast.maria.getName()).hablar("¡Lo hicimos! ¡Hemos encontrado la llave que salvará a Terra Nova!");
        this.personajes.get(cast.elara.getName()).hablar("Nguyen estaría orgulloso de nosotros. Ahora, asegurémonos de que esta llave llegue a su destino.");
        this.personajes.get(cast.narrador.getName()).narrar("Justo cuando parece que finalmente han triunfado, el Sargento Ramirez da un paso adelante, con avaricia en los ojos, y toma la llave.");
        this.personajes.get(cast.samuel.getName()).hablar("¿Sargento? ¿Qué está haciendo?");
        this.personajes.get(cast.ramirez.getName()).hablar("Esta llave puede ser mi boleto para una vida mejor. No pienso compartirla con nadie.");
        this.personajes.get(cast.elara.getName()).hablar("¿Qué estás diciendo Ramirez? ¡Estás enloqueciendo!");
        this.personajes.get(cast.alex.getName()).hablar("Sargento, no haga esto. La llave es la única esperanza para nuestra civilización. Devuélvala.");
        this.personajes.get(cast.ramirez.getName()).hablar("Jamás. Hasta nunca, imbéciles.");
        this.personajes.get(cast.narrador.getName()).narrar("La capitana sujetó su brazo con fuerza evitando que se fuera.");
        this.personajes.get(cast.elara.getName()).hablar("Tú no te irás de aquí con esa llave traidor. No te dejaremos.");
        this.personajes.get(cast.ramirez.getName()).hablar("Uyyy mira como tiemblo, ¿qué van a hacer si no lo hago, eh? ¿matarme?");
        this.personajes.get(cast.samuel.getName()).hablar("No nos dejas alternativa.");
        this.personajes.get(cast.ramirez.getName()).hablar("Entonces detenme, quieren atacarme, ¡admitanlo! o mejor aún intentenlo.");
        this.personajes.get(cast.narrador.getName()).narrar("La tensión en la cueva es palpable, y todos saben que están ante una decisión crítica.");

        progressBar(Personaje.timeout + 1500)
        setTimeout(() => {
            
           let respuesta = window.confirm("Matar al Sargento y coger la llave?");
           (respuesta) ? escenas[18].run() 
         : alert("GAME OVER")

      }, Personaje.timeout + 1500) ;
        
    }
  }

  class Escena18 extends Escena {
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
    3 : new Escena3(),
    4 : new Escena4(),
    5 : new Escena5(),
    6 : new Escena6(),
    7 : new Escena7(),
    8 : new Escena8(),
    9 : new Escena9(),
    10: new Escena10(),
    11: new Escena11(),
    12: new Escena12(),
    13: new Escena13(),
    14: new Escena14(),
    15: new Escena15(),
    16: new Escena16(),
    17: new Escena17(),
    18: new Escena18(),
};
