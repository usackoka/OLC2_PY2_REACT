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
var Llamada = /** @class */ (function (_super) {
    __extends(Llamada, _super);
    function Llamada(id, parametros, fila, columna) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.parametros = parametros;
        _this.fila = fila;
        _this.columna = columna;
        _this.temporalesGuardados = new Map();
        return _this;
    }
    Llamada.prototype.getTraduccion = function (entorno) {
        var firmaLlamada = this.getFirma(entorno);
        entorno.addComentario("============================================================================================");
        entorno.addComentario("===============LLAMADA FUNCION: " + this.id + firmaLlamada + " =========================");
        entorno.addComentario("============================================================================================");
        //paso 0: guardar los temporales usados y el primer temporal de la funcion
        //paso 1: verificar que exista el método //pendiente
        //paso 2: verificar en que ultimo temporal voy
        var temporalFinal = entorno.getContadorTemporales();
        //paso 3: primer temporal de la funcion
        var temporalInicial = entorno.primerTemporal;
        //paso 4: mientras el primer temporal del entorno no sea igual al último
        entorno.addComentario("======== Guardando temporales no usados =============");
        while (temporalInicial < temporalFinal) {
            if (!entorno.temporalesUsados.includes("t" + temporalInicial)) {
                var temporal = entorno.getTemp();
                entorno.addValorOperacion(temporal, "P", "+", entorno.size);
                entorno.addValorEnStack(temporal, "t" + temporalInicial);
                //=================guardo los usados
                entorno.addTempUsed(temporal);
                //==================================
                this.temporalesGuardados.set("t" + temporalInicial, entorno.size);
                entorno.size++;
            }
            temporalInicial++;
        }
        entorno.addComentario("=======================================================");
        //llamada a funcion
        entorno.addComentario("======== Guardando parametros =======================");
        var t1 = entorno.getTemp();
        entorno.addComentario("Cambio simulado de ambito");
        entorno.addValorOperacion(t1, "P", "+", entorno.size);
        entorno.addValorOperacion(t1, t1, "+", 2);
        this.parametros.forEach(function (exp) {
            entorno.addComentario("================== parametro ==========================");
            var tValor = exp.getTraduccion(entorno);
            entorno.addValorEnStack(t1, tValor);
            entorno.addValorOperacion(t1, t1, "+", 1);
            entorno.addTempUsed(tValor);
            entorno.addComentario("=======================================================");
        });
        entorno.addComentario("=======================================================");
        entorno.addTempUsed(t1);
        entorno.addComentario("Cambio real de ámbito");
        entorno.addValorOperacion("P", "P", "+", entorno.size);
        entorno.addCall(this.id + firmaLlamada);
        //valor del retorno
        entorno.addComentario("================== RETORNO =============================");
        var temporalRetorno = entorno.getTemp();
        entorno.addGetStack(temporalRetorno, "P");
        entorno.addValorOperacion("P", "P", "-", entorno.size);
        entorno.addComentario("=======================================================");
        entorno.addComentario("======== Saco temporales guardados =============");
        //sacar los guardados
        this.temporalesGuardados.forEach(function (value, key, map) {
            var tmp = entorno.getTemp();
            entorno.addValorOperacion(tmp, "P", "+", value);
            entorno.addGetStack(key, tmp);
            //=================guardo los usados
            entorno.addTempUsed(tmp);
            entorno.size--;
            //==================================
        });
        entorno.addComentario("=======================================================");
        return temporalRetorno;
    };
    Llamada.prototype.getTipo = function (entorno) {
        return entorno.getTipoFuncion(this.id + this.getFirma(entorno), this.fila, this.columna);
    };
    Llamada.prototype.getFirma = function (entorno) {
        var firma = "";
        this.parametros.forEach(function (p) {
            firma += "_" + p.getTipo(entorno);
        });
        return firma;
    };
    return Llamada;
}(Expresion_1.Expresion));
exports.Llamada = Llamada;
