"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIZE = exports.saltyDish = void 0;
const dish_1 = require("./dish");
class saltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, time, size) {
        super(price, cost, ingredients, time);
        this.size = size;
    }
}
exports.saltyDish = saltyDish;
var SIZE;
(function (SIZE) {
    SIZE["SMALL"] = "SMALL";
    SIZE["MEDIUM"] = "MEDIUM";
    SIZE["BIG"] = "BIG";
})(SIZE = exports.SIZE || (exports.SIZE = {}));
//# sourceMappingURL=saltyDish.js.map