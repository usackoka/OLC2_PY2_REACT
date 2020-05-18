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
var Relacional_1 = require("../Expresiones/Relacional");
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If(condicion, instrucciones, elseif, fila, columna) {
        var _this = _super.call(this) || this;
        _this.condicion = condicion;
        _this.fila = fila;
        _this.columna = columna;
        _this.instrucciones = instrucciones;
        _this.elseif = elseif;
        return _this;
    }
    If.prototype.getGrafica = function (entorno) {
        var cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "If");
        for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
            var nodo = _a[_i];
            var cont_hijo = nodo.getGrafica(entorno);
            entorno.addRelacion(cont_raiz, cont_hijo);
        }
        return cont_raiz.toString();
    };
    If.prototype.setExpresionSwitch = function (expresion) {
        this.condicion = new Relacional_1.Relacional(Relacional_1.Relacional.TYPE.IGUAL, this.condicion, expresion, this.fila, this.columna);
        if (this.elseif != null && this.elseif instanceof If) {
            this.elseif.setExpresionSwitch(expresion);
        }
    };
    If.prototype.getTraduccion = function (entorno) {
        var _this = this;
        //paso1
        var temp = this.condicion.getTraduccion(entorno);
        //paso 2
        var etq2 = entorno.getETQ();
        this.etqSalidaIf = entorno.getETQ();
        //paso 3
        entorno.addComentario("=============== IF =================");
        entorno.addNoIgual(temp, 1, etq2);
        //paso 4,nuevo entorno
        entorno = new Entorno_1.Entorno(entorno);
        //temporales usados
        entorno.addTempUsed(temp);
        //paso 5
        this.instrucciones.forEach(function (nodo) {
            nodo.copiarEtiquetas(_this);
            nodo.getTraduccion(entorno);
        });
        entorno.addGoto(this.etqSalidaIf);
        entorno.addETQ(etq2);
        //regreso a mi entorno
        entorno = entorno.padre;
        //else
        if (this.elseif != null) {
            //otro entorno :3
            entorno = new Entorno_1.Entorno(entorno);
            this.elseif.copiarEtiquetas(this);
            this.elseif.getTraduccion(entorno);
            //saco entorno
            entorno = entorno.padre;
        }
        //salida todo
        entorno.addETQ(this.etqSalidaIf);
        entorno.addComentario("=============== FIN IF =================");
        return "";
    };
    return If;
}(Sentencia_1.Sentencia));
exports.If = If;
