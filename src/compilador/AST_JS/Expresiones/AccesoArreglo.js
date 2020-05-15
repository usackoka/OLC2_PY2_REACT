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
var TipoArreglo_1 = require("./TipoArreglo");
var Primitivo_1 = require("./Primitivo");
var AccesoArreglo = /** @class */ (function (_super) {
    __extends(AccesoArreglo, _super);
    function AccesoArreglo(id, index, fila, columna) {
        var _this = _super.call(this) || this;
        _this.index = index;
        _this.id = id;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    AccesoArreglo.prototype.getTraduccion = function (entorno) {
        entorno.addComentario("===== acceso a arreglo");
        var ret = entorno.getTemp();
        var punteroArreglo = entorno.getTemp();
        var t1 = entorno.getTemp();
        var index = entorno.getTemp();
        var indexofbound = entorno.getETQ();
        var fin = entorno.getETQ();
        entorno.addComentario("===== index a obtener del arreglo");
        entorno.addValor(index, this.index.getTraduccion(entorno));
        entorno.addComentario("==== obtengo la posición en heap del arreglo");
        var prim = new Primitivo_1.Primitivo(this.id, Expresion_1.Expresion.State.ID, this.fila, this.columna);
        entorno.addValor(punteroArreglo, prim.getTraduccion(entorno));
        entorno.addComentario("==== pregunto si el index es mayor al tamaño del arreglo");
        entorno.addGetHeap(ret, punteroArreglo);
        entorno.addMayorIgual(index, ret, indexofbound);
        entorno.addValorOperacion(punteroArreglo, punteroArreglo, "+", 1);
        entorno.addValorOperacion(punteroArreglo, punteroArreglo, "+", index);
        entorno.addGetHeap(ret, punteroArreglo);
        entorno.addGoto(fin);
        entorno.addComentario("=== etiqueta indexoutofbounds");
        entorno.addETQ(indexofbound);
        entorno.addComentario("===== fin acceso arreglo");
        entorno.addETQ(fin);
        return ret;
    };
    AccesoArreglo.prototype.getTipo = function (entorno) {
        this.TIPO = entorno.getTipo(this.id, this.fila, this.columna);
        if (this.TIPO instanceof TipoArreglo_1.TipoArreglo) {
            return this.TIPO.TIPO;
        }
        else {
            entorno.addError('Arreglo: ' + this.id, "No se puede realizar un acceso porque la variable no es de tipo Arreglo", this.fila, this.columna);
        }
    };
    return AccesoArreglo;
}(Expresion_1.Expresion));
exports.AccesoArreglo = AccesoArreglo;
