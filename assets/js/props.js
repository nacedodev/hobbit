import { Item } from "./item.js"
import { Estelarion } from "./estelarion.js"
import { Clima } from "./clima.js"
import { Planeta } from "./planeta.js"

export let botiquin = new Item('Botiquín')
export let traje = new Item('Traje espacial')
export let key = new Item('Key')
export let estelarion = new Estelarion('Estelarion','1337GOD','propulsada',5,'búsqueda')
export let nevado = new Clima('Nevado','Verano')
export let terra = new Planeta('Terra Nova',70000000,'Nevado','Primavera')