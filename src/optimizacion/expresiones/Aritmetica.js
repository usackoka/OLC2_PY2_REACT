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
var AST_1 = require("../abstractas/AST");
var TiposAritmetica;
(function (TiposAritmetica) {
    var OperadorAritmetico;
    (function (OperadorAritmetico) {
        OperadorAritmetico[OperadorAritmetico["SUMA"] = 0] = "SUMA";
        OperadorAritmetico[OperadorAritmetico["RESTA"] = 1] = "RESTA";
        OperadorAritmetico[OperadorAritmetico["MULTIPLICACION"] = 2] = "MULTIPLICACION";
        OperadorAritmetico[OperadorAritmetico["DIVISION"] = 3] = "DIVISION";
        OperadorAritmetico[OperadorAritmetico["MODULO"] = 4] = "MODULO";
    })(OperadorAritmetico = TiposAritmetica.OperadorAritmetico || (TiposAritmetica.OperadorAritmetico = {}));
})(TiposAritmetica = exports.TiposAritmetica || (exports.TiposAritmetica = {}));
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    function Aritmetica(operando1, operando2, operador, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.operando1 = operando1;
        _this.operando2 = operando2;
        _this.operador = operador;
        return _this;
    }
    Aritmetica.prototype.getOptimizacionMirilla = function (numero, tree) {
        if (this.operando2 != null) {
            var op1 = this.operando1.getOptimizacionMirilla(numero, tree).result;
            var op2 = this.operando2.getOptimizacionMirilla(numero, tree).result;
            switch (this.operador) {
                case TiposAritmetica.OperadorAritmetico.SUMA:
                    if (Number(op1) == 0) {
                        return { optimizacion: 12, result: op2 };
                    }
                    else if (Number(op2) == 0) {
                        return { optimizacion: 12, result: op1 };
                    }
                    else {
                        return { optimizacion: 0, result: this.aritmeticaToString(numero, tree) };
                    }
                case TiposAritmetica.OperadorAritmetico.RESTA:
                    if (Number(op2) == 0) {
                        return { optimizacion: 13, result: op1 };
                    }
                    else {
                        return { optimizacion: 0, result: this.aritmeticaToString(numero, tree) };
                    }
                case TiposAritmetica.OperadorAritmetico.MULTIPLICACION:
                    if (Number(op1) == 0) {
                        return { optimizacion: 17, result: op1 };
                    }
                    else if (Number(op2) == 0) {
                        return { optimizacion: 17, result: op2 };
                    }
                    else if (Number(op1) == 1) {
                        return { optimizacion: 14, result: op2 };
                    }
                    else if (Number(op2) == 1) {
                        return { optimizacion: 14, result: op1 };
                    }
                    else if (Number(op1) == 2) {
                        return { optimizacion: 16, result: op2 + ' + ' + op2 };
                    }
                    else if (Number(op2) == 2) {
                        return { optimizacion: 16, result: op1 + ' + ' + op1 };
                    }
                    else {
                        return { optimizacion: 0, result: this.aritmeticaToString(numero, tree) };
                    }
                case TiposAritmetica.OperadorAritmetico.DIVISION:
                    if (Number(op1) == 0) {
                        return { optimizacion: 18, result: op1 };
                    }
                    else if (Number(op2) == 1) {
                        return { optimizacion: 15, result: op1 };
                    }
                    else {
                        return { optimizacion: 0, result: this.aritmeticaToString(numero, tree) };
                    }
                default:
                    return { optimizacion: 0, result: this.aritmeticaToString(numero, tree) };
            }
        }
        else {
            return { optimizacion: 0, result: this.aritmeticaToString(numero, tree) };
        }
    };
    Aritmetica.prototype.getOptimizacionBloque = function (tree) {
        throw new Error("Method not implemented.");
    };
    Aritmetica.prototype.aritmeticaToString = function (numero, tree) {
        if (this.operando2 != null) {
            return this.operando1.getOptimizacionMirilla(numero, tree).result + ' ' + this.operadorToString() + ' ' + this.operando2.getOptimizacionMirilla(numero, tree).result;
        }
        else {
            return this.operadorToString() + this.operando1.getOptimizacionMirilla(numero, tree).result;
        }
    };
    Aritmetica.prototype.operadorToString = function () {
        switch (this.operador) {
            case TiposAritmetica.OperadorAritmetico.SUMA:
                return '+';
            case TiposAritmetica.OperadorAritmetico.RESTA:
                return '-';
            case TiposAritmetica.OperadorAritmetico.MULTIPLICACION:
                return '*';
            case TiposAritmetica.OperadorAritmetico.DIVISION:
                return '/';
            case TiposAritmetica.OperadorAritmetico.MODULO:
                return '%';
        }
    };
    return Aritmetica;
}(AST_1.AST));
exports.Aritmetica = Aritmetica;
