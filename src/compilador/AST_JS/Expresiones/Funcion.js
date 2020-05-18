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
var Expresion_1 = require("../Expresion");
var Simbolo_1 = require("../Simbolo");
var Funcion = /** @class */ (function (_super) {
    __extends(Funcion, _super);
    function Funcion(TIPO, idFuncion, parametros, instrucciones, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO = TIPO;
        _this.parametros = parametros;
        _this.instrucciones = instrucciones;
        _this.fila = fila;
        _this.columna = columna;
        _this.idFuncion = idFuncion;
        return _this;
    }
    Funcion.prototype.getGrafica = function (entorno) {
        var cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, this.idFuncion);
        for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
            var nodo = _a[_i];
            var cont_hijo = nodo.getGrafica(entorno);
            entorno.addRelacion(cont_raiz, cont_hijo);
        }
        return cont_raiz.toString();
    };
    Funcion.prototype.getTipo = function (entorno) {
        return this.TIPO;
    };
    Funcion.prototype.getTraduccion = function (entorno) {
        var _this = this;
        var idFunc = this.getNombreTraduccion(entorno);
        var etqRetorno = entorno.getETQ();
        entorno.addComentario("====================================================");
        entorno.addComentario("======== Funcion: " + idFunc + " ============");
        entorno.addComentario("====================================================");
        entorno.addProc(idFunc);
        //creo nuevo entorno
        entorno = new Entorno_1.Entorno(entorno);
        entorno.size = 2;
        //guardo los ids de los parámetros
        var i = 2;
        this.parametros.forEach(function (parametro) {
            var s = new Simbolo_1.Simbolo(parametro.TIPO, parametro.id, i, false, false, _this.fila, _this.columna);
            i++;
            entorno.addSimbolo(s);
        });
        //temporal bandera
        entorno.primerTemporal = entorno.getContadorTemporales();
        entorno.temporalesUsados = [];
        this.instrucciones.forEach(function (nodo) {
            nodo.etqRetorno = etqRetorno;
            nodo.nombreFuncion = _this.idFuncion;
            nodo.getTraduccion(entorno);
        });
        //saco el entorno
        entorno = entorno.padre;
        entorno.primerTemporal = entorno.getContadorTemporales();
        entorno.addETQ(etqRetorno);
        entorno.addEnd(idFunc);
        entorno.addComentario("====================================================");
        entorno.addComentario("======== FIN Funcion: " + idFunc + " ========");
        entorno.addComentario("====================================================");
        return "";
    };
    Funcion.prototype.getNombreTraduccion = function (entorno) {
        var firma = "";
        if (this.parametros != null) {
            this.parametros.forEach(function (p) {
                firma += "_" + p.getTipo(entorno);
            });
        }
        return this.idFuncion + firma;
    };
    return Funcion;
}(Expresion_1.Expresion));
exports.Funcion = Funcion;
