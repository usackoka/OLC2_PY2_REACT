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
var Relacional = /** @class */ (function (_super) {
    __extends(Relacional, _super);
    function Relacional(TIPO_OPERACION, izquierda, derecha, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO_OPERACION = TIPO_OPERACION;
        _this.izquierda = izquierda;
        _this.derecha = derecha;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Relacional.prototype.getTraduccion = function (entorno) {
        switch (this.TIPO_OPERACION) {
            case Relacional.TYPE.IGUAL_REFERENCIA:
                return this.IGUAL_REFERENCIA(entorno);
            case Relacional.TYPE.IGUAL:
                return this.IGUALIGUAL(entorno);
            case Relacional.TYPE.DIFERENTE:
                return this.NOTIGUAL(entorno);
            case Relacional.TYPE.MAYORQUE:
                return this.MAYORQUE(entorno);
            case Relacional.TYPE.MAYORIGUAL:
                return this.MAYORIGUALQUE(entorno);
            case Relacional.TYPE.MENORQUE:
                return this.MENORQUE(entorno);
            case Relacional.TYPE.MENORIGUAL:
                return this.MENORIGUALQUE(entorno);
            default:
                entorno.addError("RELACIONAL-TRAD:" + this.TIPO_OPERACION, "No se encontró este tipo de Operación", this.fila, this.columna);
                return "0";
        }
    };
    Relacional.prototype.getTipo = function (entorno) {
        var tipIzq = this.izquierda.getTipo(entorno);
        var tipDer = this.derecha.getTipo(entorno);
        //aquí sólo se pueden comparar strings y arreglos
        if (this.TIPO_OPERACION == Relacional.TYPE.IGUAL_REFERENCIA) {
            if (!((tipIzq == Expresion_1.Expresion.State.STRING && tipDer == Expresion_1.Expresion.State.STRING))) {
                entorno.addError("RELACIONAL-GETTIPO:" + this.TIPO_OPERACION, "Operando no aplicable a tipos tipIzq:" + tipIzq + " , Tipo tipDer:" + tipDer, this.fila, this.columna);
            }
        }
        else {
            if (!(this.relacionable(tipIzq) && this.relacionable(tipDer))) {
                entorno.addError("RELACIONAL-GETTIPO:" + this.TIPO_OPERACION, "Tipo tipIzq:" + tipIzq + " , Tipo tipDer:" + tipDer, this.fila, this.columna);
            }
        }
        //siempre voy a retornar un boolean, únicamente comparo los tipos para saber si marcar error o no
        return Expresion_1.Expresion.State.BOOLEAN;
    };
    Relacional.prototype.relacionable = function (tipo) {
        return (tipo == Expresion_1.Expresion.State.DOUBLE || tipo == Expresion_1.Expresion.State.INTEGER || tipo == Expresion_1.Expresion.State.CHAR);
    };
    Relacional.prototype.IGUAL_REFERENCIA = function (entorno) {
        //pendiente
        return "0";
    };
    Relacional.prototype.MAYORQUE = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno);
        var der = this.derecha.getTraduccion(entorno);
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        entorno.addMayorQue(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq3);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Relacional.prototype.MENORQUE = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno);
        var der = this.derecha.getTraduccion(entorno);
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        entorno.addMenorQue(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq3);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Relacional.prototype.MAYORIGUALQUE = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno);
        var der = this.derecha.getTraduccion(entorno);
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        entorno.addMayorIgual(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq3);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Relacional.prototype.MENORIGUALQUE = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno);
        var der = this.derecha.getTraduccion(entorno);
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        entorno.addMenorIgual(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq3);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Relacional.prototype.IGUALIGUAL = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno);
        var der = this.derecha.getTraduccion(entorno);
        var tipIzq = this.izquierda.getTipo(entorno);
        var tipDer = this.derecha.getTipo(entorno);
        if ((tipIzq == Expresion_1.Expresion.State.STRING && tipDer == Expresion_1.Expresion.State.STRING)
            || (tipIzq == Expresion_1.Expresion.State.CHAR && tipDer == Expresion_1.Expresion.State.CHAR)) {
            var t1 = entorno.getTemp();
            var t2 = entorno.getTemp();
            var t3 = entorno.getTemp();
            var t4 = entorno.getTemp();
            var tretorno = entorno.getTemp();
            var l1 = entorno.getETQ();
            var l2 = entorno.getETQ();
            var l4 = entorno.getETQ();
            var l5 = entorno.getETQ();
            var l6 = entorno.getETQ();
            var l7 = entorno.getETQ();
            entorno.addComentario("============== Comparacion de cadenas (igual_igual) ===========");
            entorno.addValor(t1, izq);
            entorno.addValor(t2, der);
            entorno.addETQ(l5);
            entorno.addGetHeap(t3, t1);
            entorno.addGetHeap(t4, t2);
            entorno.addIgualQue(t3, t4, l1);
            entorno.addGoto(l2);
            entorno.addETQ(l1);
            entorno.addValorOperacion(t1, t1, "+", 1);
            entorno.addValorOperacion(t2, t2, "+", 1);
            entorno.addGetHeap(t3, t1);
            entorno.addIgualQue(t3, 3, l4);
            entorno.addGoto(l5);
            entorno.addETQ(l4);
            entorno.addGetHeap(t3, t2);
            entorno.addIgualQue(t3, 3, l6);
            entorno.addGoto(l2);
            entorno.addETQ(l6);
            entorno.addComentario("==== cadenas iguales");
            entorno.addValor(tretorno, 1);
            entorno.addGoto(l7);
            entorno.addETQ(l2);
            entorno.addComentario("==== cadenas no iguales");
            entorno.addValor(tretorno, 0);
            entorno.addETQ(l7);
            //guardo los ya usados
            entorno.addTempUsed(t1);
            entorno.addTempUsed(t2);
            entorno.addTempUsed(t3);
            entorno.addTempUsed(t4);
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return tretorno;
        }
        else if ((tipIzq == Expresion_1.Expresion.State.STRING || tipDer == Expresion_1.Expresion.State.STRING)) {
            //error semantico
            entorno.addError("RELACIONAL-TRAD-IGUAL", "No soportado IGUAL con los tipos izq:" + tipIzq + " der:" + tipDer, this.fila, this.columna);
            return "0";
        }
        else {
            var retorno = entorno.getTemp();
            var etq1 = entorno.getETQ();
            var etq2 = entorno.getETQ();
            var etq3 = entorno.getETQ();
            entorno.addIgualQue(izq, der, etq1);
            entorno.addGoto(etq2);
            entorno.addETQ(etq1);
            entorno.addValor(retorno, 1);
            entorno.addGoto(etq3);
            entorno.addETQ(etq2);
            entorno.addValor(retorno, 0);
            entorno.addETQ(etq3);
            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return retorno;
        }
    };
    Relacional.prototype.NOTIGUAL = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno);
        var der = this.derecha.getTraduccion(entorno);
        var tipIzq = this.izquierda.getTipo(entorno);
        var tipDer = this.derecha.getTipo(entorno);
        if ((tipIzq == Expresion_1.Expresion.State.STRING && tipDer == Expresion_1.Expresion.State.STRING)
            || (tipIzq == Expresion_1.Expresion.State.CHAR && tipDer == Expresion_1.Expresion.State.CHAR)) {
            var t1 = entorno.getTemp();
            var t2 = entorno.getTemp();
            var t3 = entorno.getTemp();
            var t4 = entorno.getTemp();
            var tretorno = entorno.getTemp();
            var l1 = entorno.getETQ();
            var l2 = entorno.getETQ();
            var l4 = entorno.getETQ();
            var l5 = entorno.getETQ();
            var l6 = entorno.getETQ();
            var l7 = entorno.getETQ();
            entorno.addComentario("============== Comparacion de cadenas (not_igual) ===========");
            entorno.addValor(t1, izq);
            entorno.addValor(t2, der);
            entorno.addETQ(l5);
            entorno.addGetHeap(t3, t1);
            entorno.addGetHeap(t4, t2);
            entorno.addIgualQue(t3, t4, l1);
            entorno.addGoto(l2);
            entorno.addETQ(l1);
            entorno.addValorOperacion(t1, t1, "+", 1);
            entorno.addValorOperacion(t2, t2, "+", 1);
            entorno.addGetHeap(t3, t1);
            entorno.addIgualQue(t3, 3, l4);
            entorno.addGoto(l5);
            entorno.addETQ(l4);
            entorno.addGetHeap(t3, t2);
            entorno.addIgualQue(t3, 3, l6);
            entorno.addGoto(l2);
            entorno.addETQ(l6);
            entorno.addComentario("==== cadenas iguales");
            entorno.addValor(tretorno, 0);
            entorno.addGoto(l7);
            entorno.addETQ(l2);
            entorno.addComentario("==== cadenas no iguales");
            entorno.addValor(tretorno, 1);
            entorno.addETQ(l7);
            //guardo los ya usados
            entorno.addTempUsed(t1);
            entorno.addTempUsed(t2);
            entorno.addTempUsed(t3);
            entorno.addTempUsed(t4);
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return tretorno;
        }
        else if ((tipIzq == Expresion_1.Expresion.State.STRING || tipDer == Expresion_1.Expresion.State.STRING)) {
            //error semantico
            entorno.addError("RELACIONAL-TRAD-NOTIGUAL", "No soportado NOTIGUAL con los tipos izq:" + tipIzq + " der:" + tipDer, this.fila, this.columna);
            return "0";
        }
        else {
            var retorno = entorno.getTemp();
            var etq1 = entorno.getETQ();
            var etq2 = entorno.getETQ();
            var etq3 = entorno.getETQ();
            entorno.addNoIgual(izq, der, etq1);
            entorno.addGoto(etq2);
            entorno.addETQ(etq1);
            entorno.addValor(retorno, 1);
            entorno.addGoto(etq3);
            entorno.addETQ(etq2);
            entorno.addValor(retorno, 0);
            entorno.addETQ(etq3);
            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return retorno;
        }
    };
    return Relacional;
}(Expresion_1.Expresion));
exports.Relacional = Relacional;
(function (Relacional) {
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["IGUAL"] = 0] = "IGUAL";
        TYPE[TYPE["IGUAL_REFERENCIA"] = 1] = "IGUAL_REFERENCIA";
        TYPE[TYPE["DIFERENTE"] = 2] = "DIFERENTE";
        TYPE[TYPE["MAYORIGUAL"] = 3] = "MAYORIGUAL";
        TYPE[TYPE["MAYORQUE"] = 4] = "MAYORQUE";
        TYPE[TYPE["MENORIGUAL"] = 5] = "MENORIGUAL";
        TYPE[TYPE["MENORQUE"] = 6] = "MENORQUE";
    })(TYPE = Relacional.TYPE || (Relacional.TYPE = {}));
})(Relacional = exports.Relacional || (exports.Relacional = {}));
exports.Relacional = Relacional;
