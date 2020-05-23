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
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = require("./Nodo");
var Primitivo_1 = require("./Primitivo");
var Asignacion = /** @class */ (function (_super) {
    __extends(Asignacion, _super);
    function Asignacion(direccion, expresion, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.direccion = direccion;
        _this.expresion = expresion;
        return _this;
    }
    Asignacion.prototype.getMirrilla = function (entorno) {
        var subOpt = this.expresion.getMirrilla(entorno);
        //esto lo quitaria
        if (this.direccion === subOpt) {
            entorno.addOptimizacion({ regla: this.getEquivalente(this.expresion.optimizacionRealizada),
                fila: this.fila, columna: this.columna });
            return "";
        }
        //Regla 1
        if (this.expresion instanceof (Primitivo_1.Primitivo)) {
            var exp1 = this.expresion;
            if (exp1.TIPO == Primitivo_1.Primitivo.TYPE.ID) {
                if (entorno.getFirstRuleBuscarId(this.direccion, exp1.value.toString().toLowerCase())) {
                    entorno.addOptimizacion({ regla: 1,
                        fila: this.fila, columna: this.columna });
                    return "";
                }
                else {
                    entorno.addFirsRuleId(this.direccion, exp1.value.toString().toLowerCase());
                    return this.direccion + " = " + subOpt + ';';
                }
            }
        }
        //quitar de la lista regla1
        entorno.removeFirsRuleId(this.direccion.toLocaleLowerCase());
        return this.direccion + " = " + subOpt + ';';
    };
    ;
    Asignacion.prototype.getEquivalente = function (realizada) {
        switch (realizada) {
            case 12:
                return 8;
            case 13:
                return 9;
            case 14:
                return 10;
            case 15:
                return 11;
            default:
                return 1;
        }
    };
    Asignacion.prototype.getBloque = function (entorno) {
        var subOpt = this.expresion.getBloque(entorno);
        return this.direccion + " = " + subOpt + ';';
    };
    ;
    Asignacion.prototype.getBloqueGraf = function (entorno) {
        var subOpt = this.expresion.getBloqueGraf(entorno);
        return this.direccion + " = " + subOpt + ';';
    };
    return Asignacion;
}(Nodo_1.Nodo));
exports.Asignacion = Asignacion;
