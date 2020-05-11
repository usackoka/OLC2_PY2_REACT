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
var ParametroLlamada = /** @class */ (function (_super) {
    __extends(ParametroLlamada, _super);
    function ParametroLlamada(expresion, porReferencia) {
        var _this = _super.call(this) || this;
        _this.fila = expresion.fila;
        _this.columna = expresion.columna;
        _this.expresion = expresion;
        _this.porReferencia = porReferencia;
        return _this;
    }
    ParametroLlamada.prototype.getTraduccion = function (entorno) {
        if (this.porReferencia) {
            //pendiente
            return "-1";
        }
        else {
            this.expresion.getTraduccion(entorno);
        }
    };
    ParametroLlamada.prototype.getTipo = function (entorno) {
        return this.expresion.getTipo(entorno);
    };
    return ParametroLlamada;
}(Expresion_1.Expresion));
exports.ParametroLlamada = ParametroLlamada;
