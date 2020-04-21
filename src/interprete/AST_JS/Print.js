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
var Print = /** @class */ (function (_super) {
    __extends(Print, _super);
    function Print(cadena, expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.cadena = cadena;
        _this.fila = fila;
        _this.columna = columna;
        _this.expresion = expresion;
        return _this;
    }
    Print.prototype.getValor = function (arbol) {
        this.cadena = this.cadena.replace("\"", "");
        var x = "null";
        switch (this.cadena) {
            case "%c": //ascii
                x = String.fromCharCode(this.expresion.getValor(arbol));
                break;
            case "%e": //entero
                x = this.expresion.getValor(arbol).toString();
                break;
            case "%d": //decimal
                x = this.expresion.getValor(arbol).toString();
                break;
            default:
                //error
                console.log("NO SE ECUENTRA LA IMPRESION: " + this.cadena);
                break;
        }
        arbol.mensajes.push(x);
        return -1;
    };
    Print.prototype.getTraduccion = function (arbol) {
        this.cadena = this.cadena.replace("\"", "");
        var x = "null";
        arbol.addTraduccion(";================= PRINT ====================");
        switch (this.cadena) {
            case "%c": //ascii
                var n = this.expresion.getTraduccion(arbol);
                if (n.match("10")) {
                    arbol.addTraduccion(";========= salto de linea ======");
                    arbol.addTraduccion("nativa_printChar 10");
                    arbol.addTraduccion("nativa_printChar 13");
                    break;
                }
                arbol.addTraduccion("MOV AX, " + n);
                arbol.addTraduccion("nativa_printChar AL");
                break;
            case "%e": //entero
                n = this.expresion.getTraduccion(arbol);
                //arbol.addTraduccion("MOV AX, "+n);
                //arbol.addTraduccion("ADD AL,30h");
                arbol.addTraduccion("printnum " + n);
                break;
            case "%d": //decimal
                break;
            default:
                //error
                console.log("NO SE ECUENTRA LA IMPRESION: " + this.cadena);
                break;
        }
        arbol.addTraduccion(";================================================");
        return "";
    };
    return Print;
}(Nodo4D_1.Nodo4D));
exports.Print = Print;
