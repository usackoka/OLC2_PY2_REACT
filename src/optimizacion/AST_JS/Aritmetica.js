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
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    function Aritmetica(valor1, valor2, operador, fila, columna) {
        var _this = _super.call(this, 0, 0) || this;
        _this.valor1 = valor1;
        _this.valor2 = valor2;
        _this.operador = operador;
        return _this;
    }
    Aritmetica.prototype.getMirrilla = function (entorno) {
        if (this.operador === '+') {
            if (this.valor1.isZero()) {
                entorno.addOptimizacion({ regla: 8, fila: this.fila, columna: this.columna });
                return this.valor2.getMirrilla(entorno);
            }
            else if (this.valor2.isZero()) {
                entorno.addOptimizacion({ regla: 8, fila: this.fila, columna: this.columna });
                return this.valor1.getMirrilla(entorno);
            }
        }
        return this.valor1.getMirrilla(entorno) + this.operador + this.valor2.getMirrilla(entorno);
    };
    ;
    Aritmetica.prototype.getBloque = function (entorno) {
        return "";
    };
    ;
    return Aritmetica;
}(Nodo_1.Nodo));
exports.Aritmetica = Aritmetica;
