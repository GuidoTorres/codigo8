"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// importando variables y funciones con nombres iguales
var variables_1 = require("./variables");
// importando con default
var variables2_1 = __importStar(require("./variables2"));
// Importar varias variables en una sola
var abc = __importStar(require("./variables3"));
console.log(variables_1.arregloDeNros);
variables_1.imprimirSaludo();
console.log(variables2_1.default);
console.log(variables2_1.correo);
console.log(abc.a);
