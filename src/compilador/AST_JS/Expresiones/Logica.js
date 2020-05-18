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
var Logica = /** @class */ (function (_super) {
    __extends(Logica, _super);
    function Logica(TIPO_OPERACION, izquierda, derecha, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO_OPERACION = TIPO_OPERACION;
        _this.izquierda = izquierda;
        _this.derecha = derecha;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Logica.prototype.getGrafica = function (entorno) {
        return "0";
    };
    Logica.prototype.getTraduccion = function (entorno) {
        switch (this.TIPO_OPERACION) {
            case Logica.TYPE.AND:
                return this.AND(entorno);
            case Logica.TYPE.OR:
                return this.OR(entorno);
            case Logica.TYPE.XOR:
                return this.XOR(entorno);
            default:
                entorno.addError("LOGICA-TRAD:" + this.TIPO_OPERACION, "No se encontró este tipo de Operación", this.fila, this.columna);
                return "0";
        }
    };
    Logica.prototype.getTipo = function (entorno) {
        var tipIzq = this.izquierda.getTipo(entorno);
        var tipDer = this.derecha.getTipo(entorno);
        if (!(tipIzq == Expresion_1.Expresion.State.BOOLEAN && tipDer == Expresion_1.Expresion.State.BOOLEAN)) {
            entorno.addError("LOGICA-GETTIPO:" + this.TIPO_OPERACION, "Se esperaban boolean, Found, Tipo tipIzq:" + tipIzq + " , Tipo tipDer:" + tipDer, this.fila, this.columna);
        }
        //siempre voy a retornar un boolean, únicamente comparo los tipos para saber si marcar error o no
        return Expresion_1.Expresion.State.BOOLEAN;
    };
    Logica.prototype.AND = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        var etq4 = entorno.getETQ();
        entorno.addIgualQue(izq, 1, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addIgualQue(der, 1, etq3);
        entorno.addGoto(etq2);
        entorno.addETQ(etq3);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq4);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq4);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Logica.prototype.OR = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        var etq4 = entorno.getETQ();
        entorno.addIgualQue(izq, 1, etq3);
        entorno.addGoto(etq1);
        entorno.addETQ(etq1);
        entorno.addIgualQue(der, 1, etq3);
        entorno.addGoto(etq2);
        entorno.addETQ(etq3);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq4);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq4);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    Logica.prototype.XOR = function (entorno) {
        var izq = this.izquierda.getTraduccion(entorno).toString();
        var der = this.derecha.getTraduccion(entorno).toString();
        var retorno = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        var etq3 = entorno.getETQ();
        var etq4 = entorno.getETQ();
        entorno.addIgualQue(izq, 1, etq1);
        entorno.addIgualQue(der, 1, etq3);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addIgualQue(der, 1, etq2);
        entorno.addGoto(etq3);
        entorno.addETQ(etq3);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq4);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq4);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    };
    return Logica;
}(Expresion_1.Expresion));
exports.Logica = Logica;
(function (Logica) {
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["AND"] = 0] = "AND";
        TYPE[TYPE["OR"] = 1] = "OR";
        TYPE[TYPE["XOR"] = 2] = "XOR";
    })(TYPE = Logica.TYPE || (Logica.TYPE = {}));
})(Logica = exports.Logica || (exports.Logica = {}));
exports.Logica = Logica;
