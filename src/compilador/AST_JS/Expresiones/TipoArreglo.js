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
var TipoArreglo = /** @class */ (function (_super) {
    __extends(TipoArreglo, _super);
    function TipoArreglo(TIPO, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO = TIPO;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    TipoArreglo.prototype.getGrafica = function (entorno) {
        var cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "TIPO_ARRAY");
        return cont_raiz.toString();
    };
    TipoArreglo.prototype.getTraduccion = function (entorno) {
        return "";
    };
    TipoArreglo.prototype.getTipo = function (entorno) {
        return "array_" + this.TIPO;
    };
    return TipoArreglo;
}(Expresion_1.Expresion));
exports.TipoArreglo = TipoArreglo;
