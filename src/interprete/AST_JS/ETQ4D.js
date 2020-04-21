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
var ETQ4D = /** @class */ (function (_super) {
    __extends(ETQ4D, _super);
    function ETQ4D(idETQ, fila, columna, proc) {
        var _this = _super.call(this) || this;
        _this.idETQ = idETQ;
        _this.fila = fila;
        _this.columna = columna;
        _this.proc = proc;
        return _this;
    }
    ETQ4D.prototype.getValor = function (arbol) {
        return -1;
    };
    ETQ4D.prototype.getTraduccion = function (arbol) {
        if (this.proc) {
            arbol.addTraduccion("\n\n;================ Procedimiento: " + this.idETQ + " ==============================\n");
            arbol.addTraduccion("JMP FIN_PROC_" + this.idETQ + "\n");
            arbol.addTraduccion(this.idETQ + " proc\n");
        }
        else {
            arbol.addTraduccion(this.idETQ + ":\n");
        }
        return "";
    };
    return ETQ4D;
}(Nodo4D_1.Nodo4D));
exports.ETQ4D = ETQ4D;
