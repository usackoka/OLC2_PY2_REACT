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
var Arreglo = /** @class */ (function (_super) {
    __extends(Arreglo, _super);
    function Arreglo(TIPO, limite, valores, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO = TIPO;
        _this.limite = limite;
        _this.valores = valores;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Arreglo.prototype.getGrafica = function (entorno) {
        return "0";
    };
    Arreglo.prototype.getTraduccion = function (entorno) {
        //guardo el H de dónde se guardará mi arreglo
        entorno.addComentario("====== instanciando arreglo");
        var ret = entorno.getTemp();
        entorno.addValor(ret, "H");
        var etq1 = entorno.getETQ();
        if (this.TIPO != null) {
            //declaracion con límite
            entorno.addComentario("==== obteniendo límite del arreglo");
            var limit = this.limite.getTraduccion(entorno);
            var t1 = entorno.getTemp();
            var etq2 = entorno.getETQ();
            entorno.addValor(t1, limit);
            entorno.addComentario("=== en la primera posición guardo la dimensión");
            entorno.addValorEnHeap("H", limit);
            entorno.incH();
            entorno.addETQ(etq2);
            entorno.addIgualQue(t1, 0, etq1);
            entorno.addValorEnHeap("H", Expresion_1.Expresion.getDefecto(this.TIPO, entorno));
            entorno.incH();
            entorno.addValorOperacion(t1, t1, "-", 1);
            entorno.addGoto(etq2);
        }
        else {
            //declaracion con expresiones
            var t1_1 = entorno.getTemp();
            entorno.addComentario("=== en la primera posición guardo la dimensión");
            entorno.addValorEnHeap("H", this.valores.length);
            entorno.incH();
            entorno.addValor(t1_1, "H");
            entorno.addValorOperacion("H", "H", "+", this.valores.length);
            this.valores.forEach(function (valor) {
                entorno.addValorEnHeap(t1_1, valor.getTraduccion(entorno));
                entorno.addValorOperacion(t1_1, t1_1, "+", 1);
            });
        }
        entorno.addComentario("=========== fin arreglo");
        entorno.addETQ(etq1);
        entorno.addComentario("======= fin instancia arreglo");
        return ret;
    };
    Arreglo.prototype.getTipo = function (entorno) {
        return new TipoArreglo_1.TipoArreglo(this.TIPO != null ? this.TIPO : this.getTipoExpresiones(entorno), this.fila, this.columna);
    };
    Arreglo.prototype.getTipoExpresiones = function (entorno) {
        return this.valores.length > 0 ? this.valores[0].getTipo(entorno) : Expresion_1.Expresion.State.NULL;
    };
    return Arreglo;
}(Expresion_1.Expresion));
exports.Arreglo = Arreglo;
