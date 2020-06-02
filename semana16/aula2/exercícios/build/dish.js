"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
let Dish = (() => {
    class Dish {
        constructor(price, cost, ingredients, time) {
            console.log("contruindo a refeição");
            this.price = price;
            this.cost = cost;
            this.ingredients = ingredients;
            this.time = time;
            Dish.ORDERS_QUANTITY += 1;
        }
        getProfit() {
            return this.price - this.cost;
        }
        getPrice() {
            return this.price;
        }
    }
    Dish.ORDERS_QUANTITY = 0;
    return Dish;
})();
exports.Dish = Dish;
//# sourceMappingURL=dish.js.map