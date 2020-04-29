"use strict";
exports.__esModule = true;
var Entorno = /** @class */ (function () {
    function Entorno(padre, principal) {
        this.padre = padre;
        //guardo principal en el padre, para poder hacer uso de los métodos de traducción.
        this.principal = principal ? principal : null;
    }
    //Recorro mis padres, hasta llegar al entorno superior, el cual su padre es null
    Entorno.prototype.getEntornoGlobal = function () {
        return this.padre == null ? this : this.padre.getEntornoGlobal();
    };
    Entorno.prototype.addComentario = function (cadena) {
        this.getEntornoGlobal().principal.addComentario(cadena);
    };
    Entorno.prototype.addError = function (lexema, mensaje, fila, columna) {
        this.getEntornoGlobal().principal.addError(lexema, mensaje, fila, columna);
    };
    Entorno.prototype.addTraduccion = function (cadena) {
        this.getEntornoGlobal().principal.addTraduccion(cadena);
    };
    Entorno.prototype.getTemp = function () {
        return this.getEntornoGlobal().principal.getTemp();
    };
    Entorno.prototype.getETQ = function () {
        return this.getEntornoGlobal().principal.getETQ();
    };
    Entorno.prototype.igual1 = function (condicion, etiqueta) {
        this.getEntornoGlobal().principal.igual1(condicion, etiqueta);
    };
    Entorno.prototype.addIgualQue = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addIgualQue(condicion, value, etiqueta);
    };
    Entorno.prototype.addMenorQue = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMenorQue(condicion, value, etiqueta);
    };
    Entorno.prototype.addNoIgual = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addNoIgual(condicion, value, etiqueta);
    };
    Entorno.prototype.addMayorQue = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMayorQue(condicion, value, etiqueta);
    };
    Entorno.prototype.addMayorIgual = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMayorIgual(condicion, value, etiqueta);
    };
    Entorno.prototype.addMenorIgual = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMenorIgual(condicion, value, etiqueta);
    };
    Entorno.prototype.addGoto = function (etq) {
        this.getEntornoGlobal().principal.addGoto(etq);
    };
    Entorno.prototype.addETQ = function (etq) {
        this.getEntornoGlobal().principal.addETQ(etq);
    };
    Entorno.prototype.addValorEnHeap = function (posicion, valor) {
        this.getEntornoGlobal().principal.addValorEnHeap(posicion, valor);
    };
    Entorno.prototype.addValorEnStack = function (posicion, valor) {
        this.getEntornoGlobal().principal.addValorEnStack(posicion, valor);
    };
    Entorno.prototype.addCall = function (idCall) {
        this.getEntornoGlobal().principal.addCall(idCall);
    };
    Entorno.prototype.addValor = function (direccion, valor) {
        this.getEntornoGlobal().principal.addValor(direccion, valor);
    };
    Entorno.prototype.addGetStack = function (direccion, posicion) {
        this.getEntornoGlobal().principal.addGetStack(direccion, posicion);
    };
    Entorno.prototype.addGetHeap = function (direccion, posicion) {
        this.getEntornoGlobal().principal.addGetHeap(direccion, posicion);
    };
    Entorno.prototype.addValorOperacion = function (direccion, valor1, operador, valor2) {
        this.getEntornoGlobal().principal.addValorOperacion(direccion, valor1, operador, valor2);
    };
    Entorno.prototype.incH = function () {
        this.getEntornoGlobal().principal.incH();
    };
    Entorno.prototype.addProc = function (idProc) {
        this.getEntornoGlobal().principal.addProc(idProc);
    };
    Entorno.prototype.addEnd = function (idProc) {
        this.getEntornoGlobal().principal.addEnd(idProc);
    };
    return Entorno;
}());
exports.Entorno = Entorno;
