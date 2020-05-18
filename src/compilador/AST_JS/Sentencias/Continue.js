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
var Sentencia_1 = require("../Sentencia");
var Continue = /** @class */ (function (_super) {
    __extends(Continue, _super);
    function Continue(fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Continue.prototype.getGrafica = function (entorno) {
        var cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "Continue");
        return cont_raiz.toString();
    };
    Continue.prototype.getTraduccion = function (entorno) {
        entorno.addComentario("======== continue =================");
        entorno.addGoto(this.etqContinue);
        entorno.addComentario("======= fin continue ==============");
        return "";
    };
    return Continue;
}(Sentencia_1.Sentencia));
exports.Continue = Continue;
