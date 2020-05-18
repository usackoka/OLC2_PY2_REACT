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
var AST_1 = require("../abstractas/AST");
var Primitiva = /** @class */ (function (_super) {
    __extends(Primitiva, _super);
    function Primitiva(tipo, valor, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.tipo = tipo;
        _this.valor = valor;
        return _this;
    }
    Primitiva.prototype.getOptimizacionMirilla = function (numero, tree) {
        return { optimizacion: 0, result: this.valor + '' };
    };
    Primitiva.prototype.getOptimizacionBloque = function (tree) {
        throw new Error("Method not implemented.");
    };
    return Primitiva;
}(AST_1.AST));
exports.Primitiva = Primitiva;
