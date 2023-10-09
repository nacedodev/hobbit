console.log('Script cargado correctamente.')

class Personaje {
    nombre = null
    raza = null
    clase = null
  
  hablar(text){
    let textoMejorado = `<br/> ${this.nombre}: "${text}"`
    document.getElementById('historia').innerHTML += textoMejorado
  }
}


let bilbo = new Personaje()
bilbo.nombre = 'Bilbo Bolsón'
let gandalf = new Personaje()
gandalf.nombre = 'Gandalf el Gris'
console.log(bilbo)
console.log(gandalf)

gandalf.hablar('Buenos dias mi viejo amigo')
bilbo.hablar('Gandalf, me alegro de verte!')


