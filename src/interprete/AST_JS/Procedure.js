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
var Nodo4D_1 = require("./Nodo4D");
var Procedure = /** @class */ (function (_super) {
    __extends(Procedure, _super);
    function Procedure(idProc, instrucciones, fila, columna) {
        var _this = _super.call(this) || this;
        _this.idProc = idProc;
        _this.instrucciones = instrucciones;
        _this.columna = columna;
        _this.fila = fila;
        return _this;
    }
    Procedure.prototype.getValor = function (arbol) {
        return -1;
    };
    Procedure.prototype.getTraduccion = function (arbol) {
        return "";
    };
    return Procedure;
}(Nodo4D_1.Nodo4D));
exports.Procedure = Procedure;
