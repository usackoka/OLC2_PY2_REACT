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
var Return = /** @class */ (function (_super) {
    __extends(Return, _super);
    function Return(expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        _this.expresion = expresion;
        return _this;
    }
    Return.prototype.getTraduccion = function (entorno) {
        entorno.addComentario("======== return =================");
        if (this.expresion != null) {
            var temp = this.expresion.getTraduccion(entorno);
            entorno.addValorEnStack("P", temp);
            entorno.addTempUsed(temp);
        }
        entorno.addGoto(this.etqRetorno);
        entorno.addComentario("======= fin return ==============");
        return "";
    };
    return Return;
}(Sentencia_1.Sentencia));
exports.Return = Return;
