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
var Entorno_1 = require("../Entorno");
var Sentencia_1 = require("../Sentencia");
var For = /** @class */ (function (_super) {
    __extends(For, _super);
    function For(inicio_for, condicion, fin_for, instrucciones, fila, columna) {
        var _this = _super.call(this) || this;
        _this.inicio_for = inicio_for;
        _this.condicion = condicion;
        _this.fin_for = fin_for;
        _this.fila = fila;
        _this.columna = columna;
        _this.instrucciones = instrucciones;
        return _this;
    }
    For.prototype.getTraduccion = function (entorno) {
        var _this = this;
        //paso 3
        var etqTrue = entorno.getETQ();
        this.etqBreak = entorno.getETQ();
        this.etqContinue = entorno.getETQ();
        entorno.addComentario("=============== FOR =================");
        //paso 4,nuevo entorno
        entorno = new Entorno_1.Entorno(entorno);
        entorno.addComentario("============== DECLARACION VARIABLE ITERADORA");
        if (this.inicio_for != null)
            this.inicio_for.getTraduccion(entorno);
        entorno.addComentario("============== CONDICION FOR");
        entorno.addETQ(this.etqContinue);
        entorno.igual1(this.condicion.getTraduccion(entorno), etqTrue);
        entorno.addGoto(this.etqBreak);
        entorno.addETQ(etqTrue);
        //paso 5
        this.instrucciones.forEach(function (nodo) {
            nodo.copiarEtiquetas(_this);
            nodo.getTraduccion(entorno);
        });
        //regreso a mi entorno
        entorno = entorno.padre;
        entorno.addComentario("============== EXPRESION FOR");
        if (this.fin_for != null)
            this.fin_for.getTraduccion(entorno);
        entorno.addGoto(this.etqContinue);
        entorno.addETQ(this.etqBreak);
        entorno.addComentario("=============== FIN FOR =================");
        return "";
    };
    return For;
}(Sentencia_1.Sentencia));
exports.For = For;
