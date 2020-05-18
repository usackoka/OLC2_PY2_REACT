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
var Nodo_1 = require("./Nodo");
var Relacional = /** @class */ (function (_super) {
    __extends(Relacional, _super);
    function Relacional(valor1, valor2, operador, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.valor1 = valor1;
        _this.valor2 = valor2;
        _this.operador = operador;
        return _this;
    }
    Relacional.prototype.getMirrilla = function (entorno) {
        return this.valor1.getMirrilla(entorno) + this.operador + this.valor2.getMirrilla(entorno);
    };
    ;
    Relacional.prototype.getBloque = function (entorno) {
        return "";
    };
    ;
    return Relacional;
}(Nodo_1.Nodo));
exports.Relacional = Relacional;
