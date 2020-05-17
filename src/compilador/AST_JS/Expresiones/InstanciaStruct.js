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
var InstanciaStruct = /** @class */ (function (_super) {
    __extends(InstanciaStruct, _super);
    function InstanciaStruct(id, fila, columna) {
        var _this = _super.call(this) || this;
        _this.id = id.toLowerCase();
        _this.fila = fila;
        _this.columna = columna;
        _this.TIPO = _this.id;
        return _this;
    }
    InstanciaStruct.prototype.getTraduccion = function (entorno) {
        entorno.addComentario("==== instanciando struct: " + this.id);
        var struct = entorno.getStruct(this.id, this.fila, this.columna);
        if (struct == null)
            return "-1";
        var ret = entorno.getTemp();
        entorno.addValor(ret, "H");
        struct.atributos.forEach(function (atributo) {
            entorno.addComentario("===== guardando atributo: " + atributo.id);
            entorno.addValorEnHeap("H", atributo.getTraduccion(entorno));
            entorno.incH();
        });
        entorno.addComentario("==== fin instancia struct: " + this.id);
        return ret;
    };
    InstanciaStruct.prototype.getTipo = function (entorno) {
        return this.TIPO;
    };
    return InstanciaStruct;
}(Expresion_1.Expresion));
exports.InstanciaStruct = InstanciaStruct;
