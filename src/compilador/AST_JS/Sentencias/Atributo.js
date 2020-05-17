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
var Atributo = /** @class */ (function (_super) {
    __extends(Atributo, _super);
    function Atributo(TIPO, id, expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.fila = fila;
        _this.columna = columna;
        _this.expresion = expresion;
        _this.TIPO = TIPO;
        return _this;
    }
    Atributo.prototype.getTraduccion = function (entorno) {
        return this.expresion != null ? this.expresion.getTraduccion(entorno) : Expresion_1.Expresion.getDefecto(this.TIPO, entorno);
    };
    Atributo.prototype.getTipo = function (entorno) {
        return this.TIPO;
    };
    return Atributo;
}(Expresion_1.Expresion));
exports.Atributo = Atributo;
