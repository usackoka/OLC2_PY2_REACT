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
var Nodo_1 = require("./Nodo");
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
        if (this.direccion === subOpt) {
            entorno.addOptimizacion({ regla: this.getEquivalente(this.expresion.optimizacionRealizada),
                fila: this.fila, columna: this.columna });
            return "";
        }
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
        return "";
    };
    ;
    return Asignacion;
}(Nodo_1.Nodo));
exports.Asignacion = Asignacion;
