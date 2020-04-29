"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Expresion_1 = require("../Expresion");
var Funcion = /** @class */ (function (_super) {
    __extends(Funcion, _super);
    function Funcion(TIPO, idFuncion, parametros, instrucciones, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO = TIPO;
        _this.parametros = parametros;
        _this.instrucciones = instrucciones;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Funcion.prototype.getTraduccion = function (entorno) {
        return "";
    };
    Funcion.prototype.getTipo = function (entorno) {
        return this.TIPO;
    };
    return Funcion;
}(Expresion_1.Expresion));
exports.Funcion = Funcion;
