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
var Primitivo_1 = require("./Primitivo");
var Casteo = /** @class */ (function (_super) {
    __extends(Casteo, _super);
    function Casteo(TIPO, expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO = TIPO;
        _this.expresion = expresion;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Casteo.prototype.getGrafica = function (entorno) {
        var cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "(Casteo)E");
        return cont_raiz.toString();
    };
    Casteo.prototype.getTraduccion = function (entorno) {
        var trad = this.expresion.getTraduccion(entorno);
        var tipoExpresion = this.expresion.getTipo(entorno);
        switch (this.TIPO) {
            case Expresion_1.Expresion.State.STRING:
                switch (tipoExpresion) {
                    case Expresion_1.Expresion.State.CHAR:
                        var tretorno = entorno.getTemp();
                        entorno.addValor(tretorno, "H");
                        entorno.addComentario("ascii: " + trad);
                        entorno.addValorEnHeap("H", trad);
                        entorno.incH();
                        entorno.addComentario("ascii: eos");
                        entorno.addValorEnHeap("H", "3");
                        entorno.incH();
                        entorno.addComentario("==============================================================");
                        return tretorno;
                    case Expresion_1.Expresion.State.STRING:
                        return trad;
                    case Expresion_1.Expresion.State.DOUBLE:
                        var t0 = entorno.getTemp();
                        var t2 = entorno.getTemp();
                        var t3 = entorno.getTemp();
                        tretorno = entorno.getTemp();
                        entorno.addComentario("======= llamada double a string =======");
                        entorno.addValor(tretorno, "H");
                        entorno.addValorEnHeap("H", 1);
                        entorno.incH();
                        entorno.addValorEnHeap("H", trad);
                        entorno.incH();
                        entorno.addValorEnHeap("H", 3);
                        entorno.incH();
                        entorno.addComentario("====== fin llamada double a string =======");
                        //temporales usados
                        entorno.addTempUsed(t0);
                        entorno.addTempUsed(t2);
                        entorno.addTempUsed(t3);
                        return tretorno;
                    case Expresion_1.Expresion.State.INTEGER:
                        t0 = entorno.getTemp();
                        t2 = entorno.getTemp();
                        t3 = entorno.getTemp();
                        tretorno = entorno.getTemp();
                        entorno.addComentario("======= llamada int a string =======");
                        entorno.addComentario("//numero a convertir");
                        entorno.addValor(t0, trad);
                        entorno.addComentario("//cambio simulado de entorno");
                        entorno.addValorOperacion(t2, "P", "+", String(entorno.size));
                        entorno.addValorOperacion(t3, t2, "+", "1");
                        entorno.addValorEnStack(t3, t0);
                        entorno.addComentario("//cambio real de ambito");
                        entorno.addValorOperacion("P", "P", "+", String(entorno.size));
                        entorno.addCall("nativa_int_to_string");
                        entorno.addGetStack(tretorno, "P");
                        entorno.addValorOperacion("P", "P", "-", String(entorno.size));
                        entorno.addComentario("======================================");
                        //temporales usados
                        entorno.addTempUsed(t0);
                        entorno.addTempUsed(t2);
                        entorno.addTempUsed(t3);
                        return tretorno;
                    case Expresion_1.Expresion.State.BOOLEAN:
                        var l1 = entorno.getETQ();
                        var l2 = entorno.getETQ();
                        var l3 = entorno.getETQ();
                        tretorno = entorno.getTemp();
                        entorno.addComentario("================= boolean to string ================");
                        entorno.igual1(trad, l1);
                        entorno.addGoto(l2);
                        entorno.addETQ(l1);
                        var p = new Primitivo_1.Primitivo("true", Expresion_1.Expresion.State.STRING, this.fila, this.columna);
                        entorno.addValor(tretorno, p.getTraduccion(entorno).toString());
                        entorno.addGoto(l3);
                        entorno.addETQ(l2);
                        p = new Primitivo_1.Primitivo("false", Expresion_1.Expresion.State.STRING, this.fila, this.columna);
                        entorno.addValor(tretorno, p.getTraduccion(entorno).toString());
                        entorno.addETQ(l3);
                        entorno.addComentario("================= fin boolean to string ================");
                        return tretorno;
                }
        }
        entorno.addError("CASTEO-TRAD:" + this.TIPO, "Error de casteo para expresion tipo: " + tipoExpresion, this.fila, this.columna);
        return "0";
    };
    Casteo.prototype.getTipo = function (entorno) {
        return this.TIPO;
    };
    return Casteo;
}(Expresion_1.Expresion));
exports.Casteo = Casteo;
