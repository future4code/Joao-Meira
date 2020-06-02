"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dessert = void 0;
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(price, cost, ingredients, time, slices) {
        super(price, cost, ingredients, time);
        this.slices = slices;
    }
    getValorPorPedaco() {
        return this.price / this.slices;
    }
    getProfit() {
        return super.getProfit() / this.slices;
    }
    getDishProfit() {
        return super.getProfit();
    }
}
exports.Dessert = Dessert;
//# sourceMappingURL=desserts.js.map