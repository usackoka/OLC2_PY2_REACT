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
var TipoArreglo_1 = require("./TipoArreglo");
var Parametro = /** @class */ (function (_super) {
    __extends(Parametro, _super);
    function Parametro(TIPO, id, fila, columna) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.TIPO = TIPO;
        _this.fila = fila;
        _this.columna = columna;
        _this.value = null;
        return _this;
    }
    Parametro.prototype.getGrafica = function (entorno) {
        return "0";
    };
    Parametro.prototype.getTraduccion = function (entorno) {
        return "";
    };
    Parametro.prototype.getTipo = function (entorno) {
        return this.TIPO instanceof TipoArreglo_1.TipoArreglo ? this.TIPO.getTipo(entorno) : this.TIPO;
    };
    return Parametro;
}(Expresion_1.Expresion));
exports.Parametro = Parametro;
