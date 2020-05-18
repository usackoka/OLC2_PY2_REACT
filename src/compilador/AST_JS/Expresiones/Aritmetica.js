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
var Casteo_1 = require("./Casteo");
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    function Aritmetica(TIPO_OPERACION, izquierda, derecha, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO_OPERACION = TIPO_OPERACION;
        _this.izquierda = izquierda;
        _this.derecha = derecha;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Aritmetica.prototype.getGrafica = function (entorno) {
        var cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, this.TIPO_OPERACION.toString());
        var cont_hijo = this.izquierda.getGrafica(entorno);
        entorno.addRelacion(cont_raiz, cont_hijo);
        cont_hijo = this.derecha.getGrafica(entorno);
        entorno.addRelacion(cont_raiz, cont_hijo);
        return cont_raiz.toString();
    };
    Aritmetica.prototype.getTraduccion = function (entorno) {
        switch (this.TIPO_OPERACION) {
            case Aritmetica.TYPE.SUMA:
                return this.SUMA(entorno);
            case Aritmetica.TYPE.RESTA:
                return this.RESTA(entorno);
            case Aritmetica.TYPE.MULTIPLICACION:
                return this.MULTIPLICACION(entorno);
            case Aritmetica.TYPE.DIVISION:
                return this.DIVISION(entorno);
            case Aritmetica.TYPE.MODULAR:
                return this.MODULAR(entorno);
            case Aritmetica.TYPE.POTENCIA:
                return this.POTENCIA(entorno);
            default:
                entorno.addError("ARITMETICA-TRAD:" + this.TIPO_OPERACION, "No se encontró este tipo de Operación", this.fila, this.columna);
                return "0";
        }
    };
    Aritmetica.prototype.getTipo = function (entorno) {
        var tipIzq = this.izquierda.getTipo(entorno);
        var tipDer = this.derecha.getTipo(entorno);
        if (this.TIPO_OPERACION == Aritmetica.TYPE.SUMA) {
            if (tipIzq == Expresion_1.Expresion.State.STRING || tipDer == Expresion_1.Expresion.State.STRING) {
                return Expresion_1.Expresion.State.STRING;
            }
            else if (tipIzq == Expresion_1.Expresion.State.DOUBLE || tipDer == Expresion_1.Expresion.State.DOUBLE) {
                return Expresion_1.Expresion.State.DOUBLE;
            }
            else if (tipIzq == Expresion_1.Expresion.State.INTEGER || tipDer == Expresion_1.Expresion.State.INTEGER) {
                return Expresion_1.Expresion.State.INTEGER;
            }
            else if (tipIzq == Expresion_1.Expresion.State.CHAR && tipDer == Expresion_1.Expresion.State.CHAR) {
                return Expresion_1.Expresion.State.STRING;
            }
            else if (tipIzq == Expresion_1.Expresion.State.BOOLEAN && tipDer == Expresion_1.Expresion.State.BOOLEAN) {
                return Expresion_1.Expresion.State.BOOLEAN;
            }
            else {
                entorno.addError("ARITMETICA-GETTIPO:" + this.TIPO_OPERACION, "Tipo tipIzq:" + tipIzq + " , Tipo tipDer:" + tipDer, this.fila, this.columna);
                return Expresion_1.Expresion.State.INTEGER;
            }
        }
        else {
            if (tipIzq == Expresion_1.Expresion.State.DOUBLE || tipDer == Expresion_1.Expresion.State.DOUBLE) {
                return Expresion_1.Expresion.State.DOUBLE;
            }
            else if (tipIzq == Expresion_1.Expresion.State.INTEGER || tipDer == Expresion_1.Expresion.State.INTEGER) {
                return Expresion_1.Expresion.State.INTEGER;
            }
            else if (tipIzq == Expresion_1.Expresion.State.CHAR && tipDer == Expresion_1.Expresion.State.CHAR) {
                return Expresion_1.Expresion.State.INTEGER;
            }
            else {
                entorno.addError("ARITMETICA-GETTIPO:" + this.TIPO_OPERACION, "Tipo tipIzq:" + tipIzq + " , Tipo tipDer:" + tipDer, this.fila, this.columna);
                return Expresion_1.Expresion.State.INTEGER;
            }
        }
    };
    Aritmetica.prototype.SUMA = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var tipIzq = this.izquierda.getTipo(entorno);
        var tipDer = this.derecha.getTipo(entorno);
        if ((tipIzq == Expresion_1.Expresion.State.STRING || tipDer == Expresion_1.Expresion.State.STRING)
            || (tipIzq == Expresion_1.Expresion.State.CHAR && tipDer == Expresion_1.Expresion.State.CHAR)) {
            if (tipDer != Expresion_1.Expresion.State.STRING) {
                var n = new Casteo_1.Casteo(Expresion_1.Expresion.State.STRING, this.derecha, this.fila, this.columna);
                der = n.getTraduccion(entorno).toString();
            }
            if (tipIzq != Expresion_1.Expresion.State.STRING) {
                var n = new Casteo_1.Casteo(Expresion_1.Expresion.State.STRING, this.izquierda, this.fila, this.columna);
                izq = n.getTraduccion(entorno).toString();
            }
            //si ambos son strings, suma de strings
            var t1 = entorno.getTemp();
            var t2 = entorno.getTemp();
            var t3 = entorno.getTemp();
            var t4 = entorno.getTemp();
            var tretorno = entorno.getTemp();
            var l1 = entorno.getETQ();
            var l2 = entorno.getETQ();
            var l3 = entorno.getETQ();
            entorno.addComentario("=============== Suma de strings ===================");
            entorno.addValor(t1, izq);
            entorno.addValor(t2, der);
            entorno.addValor(tretorno, "H");
            entorno.addComentario("====== copio primer string");
            entorno.addETQ(l2);
            entorno.addGetHeap(t3, t1);
            entorno.addIgualQue(t3, "3", l1);
            entorno.addValorEnHeap("H", t3);
            entorno.incH();
            entorno.addValorOperacion(t1, t1, "+", "1");
            entorno.addGoto(l2);
            entorno.addComentario("====== copio segundo string");
            entorno.addETQ(l1);
            entorno.addGetHeap(t4, t2);
            entorno.addIgualQue(t4, "3", l3);
            entorno.addValorEnHeap("H", t4);
            entorno.incH();
            entorno.addValorOperacion(t2, t2, "+", "1");
            entorno.addGoto(l1);
            entorno.addETQ(l3);
            entorno.addValorEnHeap("H", "3");
            entorno.incH();
            entorno.addComentario("=================fin suma de strings====================");
            //guardo los usados
            entorno.addTempUsed(t1);
            entorno.addTempUsed(t2);
            entorno.addTempUsed(t3);
            entorno.addTempUsed(t4);
            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return tretorno;
        }
        else {
            var retorno = entorno.getTemp();
            entorno.addValorOperacion(retorno, izq, "+", der);
            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return retorno;
        }
    };
    Aritmetica.prototype.RESTA = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        entorno.addValorOperacion(retorno, izq, "-", der);
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Aritmetica.prototype.MODULAR = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        entorno.addValorOperacion(retorno, izq, "%", der);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Aritmetica.prototype.DIVISION = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        entorno.addValorOperacion(retorno, izq, "/", der);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Aritmetica.prototype.MULTIPLICACION = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        entorno.addValorOperacion(retorno, izq, "*", der);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Aritmetica.prototype.POTENCIA = function (entorno) {
        entorno.addComentario("============ Llamada Potencia =====================");
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        var t22 = entorno.getTemp();
        var t23 = entorno.getTemp();
        var t24 = entorno.getTemp();
        entorno.addComentario("//cambio simulado de ambito");
        entorno.addValorOperacion(t22, "P", "+", entorno.size);
        entorno.addComentario("//posicion parametro 1");
        entorno.addValorOperacion(t23, t22, "+", 1);
        entorno.addComentario("//valor base");
        entorno.addValorEnStack(t23, izq);
        entorno.addComentario("//posicion paremtro 2");
        entorno.addValorOperacion(t24, t22, "+", 2);
        entorno.addComentario("//valor exponente");
        entorno.addValorEnStack(t24, der);
        entorno.addValorOperacion("P", "P", "+", entorno.size);
        entorno.addCall("funcion_nativa_potencia");
        entorno.addGetStack(retorno, "P");
        entorno.addValorOperacion("P", "P", "-", entorno.size);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        entorno.addTempUsed(t22);
        entorno.addTempUsed(t23);
        entorno.addTempUsed(t24);
        entorno.addComentario("============ FIN LLAMADA Potencia =====================");
        return retorno;
    };
    return Aritmetica;
}(Expresion_1.Expresion));
exports.Aritmetica = Aritmetica;
(function (Aritmetica) {
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["SUMA"] = 0] = "SUMA";
        TYPE[TYPE["RESTA"] = 1] = "RESTA";
        TYPE[TYPE["MULTIPLICACION"] = 2] = "MULTIPLICACION";
        TYPE[TYPE["DIVISION"] = 3] = "DIVISION";
        TYPE[TYPE["POTENCIA"] = 4] = "POTENCIA";
        TYPE[TYPE["MODULAR"] = 5] = "MODULAR";
    })(TYPE = Aritmetica.TYPE || (Aritmetica.TYPE = {}));
})(Aritmetica = exports.Aritmetica || (exports.Aritmetica = {}));
exports.Aritmetica = Aritmetica;
