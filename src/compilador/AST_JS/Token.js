"use strict";
exports.__esModule = true;
var Token = /** @class */ (function () {
    function Token(lexema, tipo, descripcion, fila, columna) {
        this.descripcion = descripcion;
        this.lexema = lexema;
        this.fila = fila;
        this.columna = columna;
        this.tipo = tipo;
    }
    Token.prototype.toString = function () {
        return "TOKEN";
    };
    return Token;
}());
exports.Token = Token;
