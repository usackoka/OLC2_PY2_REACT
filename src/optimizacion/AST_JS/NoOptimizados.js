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
var NoOptimizados = /** @class */ (function (_super) {
    __extends(NoOptimizados, _super);
    function NoOptimizados(cadena) {
        var _this = _super.call(this, 0, 0) || this;
        _this.cadena = cadena;
        return _this;
    }
    NoOptimizados.prototype.getMirrilla = function (entorno) {
        return this.cadena;
    };
    ;
    NoOptimizados.prototype.getBloque = function (entorno) {
        return this.cadena;
    };
    ;
    return NoOptimizados;
}(Nodo_1.Nodo));
exports.NoOptimizados = NoOptimizados;
