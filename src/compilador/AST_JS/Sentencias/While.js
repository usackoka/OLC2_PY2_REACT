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
var While = /** @class */ (function (_super) {
    __extends(While, _super);
    function While(condicion, instrucciones, dowhile, fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        _this.condicion = condicion;
        _this.instrucciones = instrucciones;
        _this.dowhile = dowhile;
        return _this;
    }
    While.prototype.getTraduccion = function (entorno) {
        //paso 2
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        this.etqBreak = entorno.getETQ();
        this.etqContinue = entorno.getETQ();
        if (this.dowhile) {
            //paso 3
            entorno.addComentario("=========== DO WHILE ==============");
            entorno.addETQ(etq2);
            //paso 4,nuevo entorno
            entorno = new Entorno_1.Entorno(entorno);
            //paso 5
            for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
                var nodo = _a[_i];
                nodo.copiarEtiquetas(this);
                nodo.getTraduccion(entorno);
            }
            //paso 1
            entorno.addComentario("====== condicion do while ==========");
            entorno.addETQ(this.etqContinue);
            var temp = this.condicion.getTraduccion(entorno);
            entorno.addComentario("=================================");
            entorno.addIgualQue(temp, 1, etq2);
            //temporales usados
            entorno.addTempUsed(temp);
            entorno.addETQ(this.etqBreak);
            entorno.addComentario("===================================");
            entorno = entorno.padre;
        }
        else {
            //paso 3
            entorno.addComentario("=========== WHILE ==============");
            entorno.addETQ(this.etqContinue);
            //paso 1
            entorno.addComentario("====== condicion while ==========");
            var temp = this.condicion.getTraduccion(entorno);
            entorno.addComentario("=================================");
            entorno.addIgualQue(temp, 1, etq1);
            entorno.addGoto(this.etqBreak);
            entorno.addETQ(etq1);
            //paso 4,nuevo entorno
            entorno = new Entorno_1.Entorno(entorno);
            //temporales usados
            entorno.addTempUsed(temp);
            //paso 5
            for (var _b = 0, _c = this.instrucciones; _b < _c.length; _b++) {
                var nodo = _c[_b];
                nodo.copiarEtiquetas(this);
                nodo.getTraduccion(entorno);
            }
            entorno.addGoto(this.etqContinue);
            entorno.addETQ(this.etqBreak);
            entorno.addComentario("===================================");
            entorno = entorno.padre;
        }
        return "";
    };
    return While;
}(Sentencia_1.Sentencia));
exports.While = While;
