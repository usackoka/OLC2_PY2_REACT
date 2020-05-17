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
var Primitivo_1 = require("./Primitivo");
var AccesoArreglo_1 = require("./AccesoArreglo");
var ListAcceso = /** @class */ (function (_super) {
    __extends(ListAcceso, _super);
    function ListAcceso(subAcceso, acceso, fila, columna) {
        var _this = _super.call(this) || this;
        _this.subAcceso = subAcceso;
        _this.acceso = acceso;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    //getValor
    ListAcceso.prototype.getTraduccion = function (entorno) {
        var valorSub = this.subAcceso.getTraduccion(entorno);
        if (this.acceso == null)
            return valorSub;
    };
    ListAcceso.prototype.getTipo = function (entorno) {
        var tipoSub = this.subAcceso.getTipo(entorno);
        if (this.acceso == null)
            return tipoSub;
    };
    ListAcceso.prototype.getPosicion = function (entorno) {
        if (this.subAcceso instanceof Primitivo_1.Primitivo || this.subAcceso instanceof AccesoArreglo_1.AccesoArreglo) {
            return this.subAcceso.getPosicion(entorno);
        }
        else {
            return "";
        }
    };
    ListAcceso.prototype.isInHeap = function (entorno) {
        if (this.subAcceso instanceof Primitivo_1.Primitivo || this.subAcceso instanceof AccesoArreglo_1.AccesoArreglo) {
            return this.subAcceso.isInHeap(entorno);
        }
        else {
            return true;
        }
    };
    ListAcceso.prototype.isConst = function (entorno) {
        if (this.subAcceso instanceof ListAcceso) {
            return this.subAcceso.isConst(entorno);
        }
        else if (this.subAcceso instanceof Primitivo_1.Primitivo) {
            var bool = entorno.isConst(this.subAcceso.value.toString(), this.fila, this.columna);
            if (bool)
                entorno.addError("Constante: " + this.subAcceso.value.toString(), "No se puede modificar el valor de una constante", this.fila, this.columna);
        }
        else if (this.subAcceso instanceof AccesoArreglo_1.AccesoArreglo) {
            var bool = entorno.isConst(this.subAcceso.id, this.fila, this.columna);
            if (bool)
                entorno.addError("Constante: " + this.subAcceso.id, "No se puede modificar el valor de una constante", this.fila, this.columna);
        }
        return false;
    };
    return ListAcceso;
}(Expresion_1.Expresion));
exports.ListAcceso = ListAcceso;
