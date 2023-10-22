import { Personaje } from "./personaje.js";

    export class Alex extends Personaje{
        constructor(nombre, especialidad = null, origen = null) {
            super(nombre,especialidad,origen)
          }

          hasKey() {
              setTimeout(() => {
                  const inventario = this.getInventario();
                  let $key = document.getElementById('key')
                  for (const item of inventario) {
                    if (item.getName() === 'Key') {
                      $key.classList.add('fadein');
                      $key.style.display = 'flex'
                      return true
                    }
                  }
                    $key.style.display = 'none'
                    return false
                  
                  }, Personaje.timeout);
          }
          
    }