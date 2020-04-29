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
var Sentencia_1 = require("../Sentencia");
var Primitivo_1 = require("../Expresiones/Primitivo");
var Print = /** @class */ (function (_super) {
    __extends(Print, _super);
    function Print(expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.expresion = expresion;
        _this.fila = fila;
        _this.columna = columna;
        _this.salto = true;
        return _this;
    }
    Print.prototype.getTraduccion = function (entorno) {
        var TIPO = this.expresion.getTipo(entorno);
        var tImpresion = this.expresion.getTraduccion(entorno);
        switch (TIPO) {
            case Expresion_1.Expresion.State.STRING:
            case Expresion_1.Expresion.State.CHAR:
                var t0 = entorno.getTemp();
                var t2 = entorno.getTemp();
                var t3 = entorno.getTemp();
                entorno.addComentario("======= llamada impresion cadena =======");
                entorno.addComentario("posicion el heap");
                entorno.addValor(t0, tImpresion);
                entorno.addComentario("//cambio simulado de entorno");
                entorno.addValorOperacion(t2, "P", "+", String(entorno.size));
                entorno.addValorOperacion(t3, t2, "+", "1");
                entorno.addValorEnStack(t3, t0);
                entorno.addComentario("cambio real de ambito");
                entorno.addValorOperacion("P", "P", "+", String(entorno.size));
                if (this.salto) {
                    entorno.addCall("nativa_imprimir_string");
                }
                else {
                    entorno.addCall("nativa_imprimir_string2");
                }
                entorno.addValorOperacion("P", "P", "-", String(entorno.size));
                entorno.addComentario("======= fin llamada impresion cadena =======");
                //temporales usados
                entorno.addTempUsed(t0);
                entorno.addTempUsed(t2);
                entorno.addTempUsed(t3);
                break;
            case Expresion_1.Expresion.State.BOOLEAN:
                var l1 = entorno.getETQ();
                var l2 = entorno.getETQ();
                var l3 = entorno.getETQ();
                entorno.addComentario("================= impresion boolean ================");
                entorno.igual1(tImpresion, l1);
                entorno.addGoto(l2);
                entorno.addETQ(l1);
                var p = new Primitivo_1.Primitivo("true", Expresion_1.Expresion.State.STRING, this.fila, this.columna);
                var p2 = new Print(p, this.fila, this.columna);
                p2.getTraduccion(entorno);
                entorno.addGoto(l3);
                entorno.addETQ(l2);
                p = new Primitivo_1.Primitivo("false", Expresion_1.Expresion.State.STRING, this.fila, this.columna);
                p2 = new Print(p, this.fila, this.columna);
                p2.getTraduccion(entorno);
                entorno.addETQ(l3);
                entorno.addComentario("================= fin impresion boolean ================");
                break;
            case Expresion_1.Expresion.State.INTEGER:
                entorno.addTraduccion("print(\"%i\"," + tImpresion + ")\n");
                if (this.salto) {
                    entorno.addTraduccion("print(\"%c\",10)\n");
                }
                break;
            case Expresion_1.Expresion.State.DOUBLE:
                entorno.addTraduccion("print(\"%d\"," + tImpresion + ")\n");
                if (this.salto) {
                    entorno.addTraduccion("print(%c,10)\n");
                }
                break;
        }
        return "";
    };
    return Print;
}(Sentencia_1.Sentencia));
exports.Print = Print;
