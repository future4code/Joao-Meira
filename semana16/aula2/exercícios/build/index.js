"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const desserts_1 = require("./desserts");
const saltyDish_1 = require("./saltyDish");
const menu = [];
const tortaHolandesa = new desserts_1.Dessert(10, 2, ["Leite", "chocolate", "biscoito de maizena", "manteiga"], 30, 1);
const pizzaPeperoni = new saltyDish_1.saltyDish(10, 2, ["farinha de trigo", "muçarela", "peperoni", "parmesão"], 30, saltyDish_1.SIZE.SMALL);
menu.push(tortaHolandesa, pizzaPeperoni);
console.log(menu);
//# sourceMappingURL=index.js.map