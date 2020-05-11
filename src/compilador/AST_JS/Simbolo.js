"use strict";
exports.__esModule = true;
var Simbolo = /** @class */ (function () {
    function Simbolo(tipo, id, posicion, constante, fila, columna) {
        this.tipo = tipo;
        this.constante = constante;
        this.id = id;
        this.posicion = posicion;
        this.fila = fila;
        this.columna = columna;
        this.tipo = tipo;
    }
    Simbolo.prototype.toString = function () {
        return "{\n" +
            "\t\"tipo\": \"" + this.tipo + "\",\n" +
            "\t\"id\": \"" + this.id + "\",\n" +
            "\t\"posicion\": " + this.posicion + ",\n" +
            "\t\"fila\": " + this.fila + ",\n" +
            "\t\"columna\": " + this.columna + ",\n" +
            "\t\"constante\": " + this.constante + "\n" +
            "}";
    };
    return Simbolo;
}());
exports.Simbolo = Simbolo;
