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
var Print = /** @class */ (function (_super) {
    __extends(Print, _super);
    function Print(expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.expresion = expresion;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Print.prototype.getTraduccion = function (entorno) {
        return "";
    };
    return Print;
}(Sentencia_1.Sentencia));
exports.Print = Print;
