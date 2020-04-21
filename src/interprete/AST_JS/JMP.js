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
var JMP = /** @class */ (function (_super) {
    __extends(JMP, _super);
    function JMP(idETQ, fila, columna) {
        var _this = _super.call(this) || this;
        _this.idETQ = idETQ;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    JMP.prototype.getValor = function (arbol) {
        arbol.ejecutarETQ(this.idETQ);
        return -1;
    };
    JMP.prototype.getTraduccion = function (arbol) {
        arbol.addTraduccion("JMP " + this.idETQ);
        return "";
    };
    return JMP;
}(Nodo4D_1.Nodo4D));
exports.JMP = JMP;
