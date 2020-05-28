"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fusca = void 0;
exports.fusca = {
    marca: 'Volkswagen',
    capacidadeCombustivel: 50,
    ehFlex: false,
    combustivelGasto: (km) => { return 0.25 * km; }
};
console.log(exports.fusca.combustivelGasto(10));
//# sourceMappingURL=exercicio3.js.map