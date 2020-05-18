"use strict";
exports.__esModule = true;
var Tipo_1 = require("../tablaSimbolos/Tipo");
var AST = /** @class */ (function () {
    function AST(fila, columna) {
        this.row = fila;
        this.column = columna;
        this.tipo = Tipo_1.Tipo.Tipos.NULL;
    }
    return AST;
}());
exports.AST = AST;
