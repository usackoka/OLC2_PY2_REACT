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
Object.defineProperty(exports, "__esModule", { value: true });
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
    Relacional.prototype.isTrue = function (Entorno1) {
        if (this.valor1.isNumeric1() && this.valor2.isNumeric1()) {
            var v1 = this.valor1.getMirrilla(Entorno1);
            var v2 = this.valor2.getMirrilla(Entorno1);
            if (v1 == v2 && this.operador == "==")
                return true;
            else if (v1 != v2 && this.operador == "<>")
                return true;
        }
        return false;
    };
    Relacional.prototype.isFalse = function (Entorno1) {
        if (this.valor1.isNumeric1() && this.valor2.isNumeric1()) {
            var v1 = this.valor1.getMirrilla(Entorno1);
            var v2 = this.valor2.getMirrilla(Entorno1);
            if (v1 == v2 && this.operador == "<>")
                return true;
            else if (v1 != v2 && this.operador == "==")
                return true;
        }
        return false;
    };
    Relacional.prototype.getMirrilla = function (entorno) {
        return this.valor1.getMirrilla(entorno) + this.operador + this.valor2.getMirrilla(entorno);
    };
    ;
    Relacional.prototype.getBloque = function (entorno) {
        //agrego las variables utilizadas a una lista, para luego buscar si no se encuentra en ella
        //y eliminar las no usadas
        if (!this.valor1.isNumeric())
            entorno.addUtilizadas(this.valor1.getBloque(entorno));
        if (!this.valor2.isNumeric())
            entorno.addUtilizadas(this.valor2.getBloque(entorno));
        return this.valor1.getBloque(entorno) + this.operador + this.valor2.getBloque(entorno);
    };
    ;
    Relacional.prototype.getBloqueGraf = function (entorno) {
        return this.valor1.getMirrilla(entorno) + this.operador + this.valor2.getMirrilla(entorno);
    };
    return Relacional;
}(Nodo_1.Nodo));
exports.Relacional = Relacional;
