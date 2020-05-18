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
var Sentencia_1 = require("../Sentencia");
var Break = /** @class */ (function (_super) {
    __extends(Break, _super);
    function Break(fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Break.prototype.getGrafica = function (entorno) {
        return "0";
    };
    Break.prototype.getTraduccion = function (entorno) {
        entorno.addComentario("======== break =================");
        entorno.addGoto(this.etqBreak);
        entorno.addComentario("======= fin break ==============");
        return "";
    };
    return Break;
}(Sentencia_1.Sentencia));
exports.Break = Break;
