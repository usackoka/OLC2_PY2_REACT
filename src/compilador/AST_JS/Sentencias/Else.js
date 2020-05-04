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
var Else = /** @class */ (function (_super) {
    __extends(Else, _super);
    function Else(instrucciones, fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        _this.instrucciones = instrucciones;
        return _this;
    }
    Else.prototype.getTraduccion = function (entorno) {
        var _this = this;
        //paso 3
        entorno.addComentario("=============== Else =================");
        //paso 4,nuevo entorno
        entorno = new Entorno_1.Entorno(entorno);
        //paso 5
        this.instrucciones.forEach(function (nodo) {
            nodo.copiarEtiquetas(_this);
            nodo.getTraduccion(entorno);
        });
        //regreso a mi entorno
        entorno = entorno.padre;
        entorno.addComentario("=============== FIN ELSE =================");
        return "";
    };
    return Else;
}(Sentencia_1.Sentencia));
exports.Else = Else;
