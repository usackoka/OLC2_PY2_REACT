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
var Nodo4D_1 = require("./Nodo4D");
var SaltoCond = /** @class */ (function (_super) {
    __extends(SaltoCond, _super);
    function SaltoCond(salto, valor1, valor2, idETQ, fila, columna) {
        var _this = _super.call(this) || this;
        _this.salto = salto;
        _this.valor1 = valor1;
        _this.valor2 = valor2;
        _this.idETQ = idETQ;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    SaltoCond.prototype.getValor = function (arbol) {
        var number1 = this.valor1.getValor(arbol);
        var number2 = this.valor2.getValor(arbol);
        //console.log(this.salto+" "+number1+" == "+number2);
        switch (this.salto) {
            case "==":
                if (number1 == number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "!=":
                if (number1 != number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case ">":
                if (number1 > number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "<":
                if (number1 < number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case ">=":
                if (number1 >= number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "<=":
                if (number1 <= number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
        }
        return -1;
    };
    SaltoCond.prototype.getTraduccion = function (arbol) {
        var number1 = this.valor1.getTraduccion(arbol);
        var number2 = this.valor2.getTraduccion(arbol);
        arbol.addTraduccion("MOV AX, " + number1 + "\n");
        arbol.addTraduccion("CMP AX, " + number2 + "\n");
        switch (this.salto) {
            case "je":
                arbol.addTraduccion("JE " + this.idETQ + "\n");
                return "";
            case "jne":
                arbol.addTraduccion("JNE " + this.idETQ + "\n");
                return "";
            case "jg":
                arbol.addTraduccion("JG " + this.idETQ + "\n");
                return "";
            case "jl":
                arbol.addTraduccion("JL " + this.idETQ + "\n");
                return "";
            case "jge":
                arbol.addTraduccion("JGE " + this.idETQ + "\n");
                return "";
            case "jle":
                arbol.addTraduccion("JLE " + this.idETQ + "\n");
                return "";
        }
        return "";
    };
    return SaltoCond;
}(Nodo4D_1.Nodo4D));
exports.SaltoCond = SaltoCond;
