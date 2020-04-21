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
var Call4D = /** @class */ (function (_super) {
    __extends(Call4D, _super);
    function Call4D(idCall, fila, columna) {
        var _this = _super.call(this) || this;
        _this.idCall = idCall;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Call4D.prototype.getValor = function (arbol) {
        arbol.ejecutarCall(this.idCall);
        return -1;
    };
    Call4D.prototype.getTraduccion = function (arbol) {
        arbol.addTraduccion("call " + this.idCall);
        return "";
    };
    return Call4D;
}(Nodo4D_1.Nodo4D));
exports.Call4D = Call4D;
