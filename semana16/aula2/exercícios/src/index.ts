import { Dessert } from "./desserts";
import { saltyDish, SIZE } from "./saltyDish";



const menu = []


const tortaHolandesa = new Dessert (10, 2, ["Leite", "chocolate", "biscoito de maizena", "manteiga"], 30, 1)
const pizzaPeperoni = new saltyDish (10, 2, ["farinha de trigo", "muçarela", "peperoni", "parmesão"], 30, SIZE.SMALL)

menu.push(tortaHolandesa, pizzaPeperoni)

console.log(menu)

