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
var Struct = /** @class */ (function (_super) {
    __extends(Struct, _super);
    function Struct(id, atributos, fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        _this.id = id;
        _this.atributos = atributos;
        return _this;
    }
    Struct.prototype.getTraduccion = function (entorno) {
        return "";
    };
    return Struct;
}(Sentencia_1.Sentencia));
exports.Struct = Struct;
