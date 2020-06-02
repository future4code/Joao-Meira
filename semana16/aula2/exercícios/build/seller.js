"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const employee_1 = require("./employee");
let Seller = (() => {
    class Seller extends employee_1.Employee {
        constructor() {
            super(...arguments);
            this.salesQuantity = 0;
        }
        setSalesQuantity(quantity) {
            return this.salesQuantity += quantity;
        }
        calculateTotalSalary() {
            return (this.baseSalary + Seller.BENEFITS_VALUE + (this.salesQuantity * Seller.SALES_COMISSION));
        }
    }
    Seller.SALES_COMISSION = 5;
    return Seller;
})();
exports.Seller = Seller;
//# sourceMappingURL=seller.js.map