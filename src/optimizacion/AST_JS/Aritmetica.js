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
        var _this = _super.call(this, fila, columna) || this;
        _this.valor1 = valor1;
        _this.valor2 = valor2;
        _this.operador = operador;
        return _this;
    }
    Aritmetica.prototype.getMirrilla = function (entorno) {
        if (this.operador === '+') {
            if (this.valor1.isZero()) {
                entorno.addOptimizacion({ regla: 12, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 12;
                return this.valor2.getMirrilla(entorno);
            }
            else if (this.valor2.isZero()) {
                entorno.addOptimizacion({ regla: 12, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 12;
                return this.valor1.getMirrilla(entorno);
            }
        }
        else if (this.operador === '-') {
            if (this.valor2.isZero()) {
                entorno.addOptimizacion({ regla: 13, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 13;
                return this.valor1.getMirrilla(entorno);
            }
        }
        else if (this.operador === '*') {
            if (this.valor1.isUno()) {
                entorno.addOptimizacion({ regla: 14, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 14;
                return this.valor2.getMirrilla(entorno);
            }
            else if (this.valor2.isUno()) {
                entorno.addOptimizacion({ regla: 14, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 14;
                return this.valor1.getMirrilla(entorno);
            }
            else if (this.valor1.isDos()) {
                entorno.addOptimizacion({ regla: 16, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 16;
                return this.valor2.getMirrilla(entorno) + "+" + this.valor2.getMirrilla(entorno);
            }
            else if (this.valor2.isDos()) {
                entorno.addOptimizacion({ regla: 16, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 16;
                return this.valor1.getMirrilla(entorno) + "+" + this.valor1.getMirrilla(entorno);
            }
            else if (this.valor1.isZero()) {
                entorno.addOptimizacion({ regla: 17, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 17;
                return this.valor2.getMirrilla(entorno);
            }
            else if (this.valor2.isZero()) {
                entorno.addOptimizacion({ regla: 17, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 17;
                return this.valor1.getMirrilla(entorno);
            }
        }
        else if (this.operador === '/') {
            if (this.valor2.isUno()) {
                entorno.addOptimizacion({ regla: 15, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 15;
                return this.valor1.getMirrilla(entorno);
            }
            else if (this.valor1.isZero()) {
                entorno.addOptimizacion({ regla: 18, fila: this.fila, columna: this.columna });
                this.optimizacionRealizada = 18;
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
