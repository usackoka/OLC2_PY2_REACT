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
var Primitivo = /** @class */ (function (_super) {
    __extends(Primitivo, _super);
    function Primitivo(fila, columna, valorString, valorNumber) {
        var _this = _super.call(this) || this;
        _this.valorNumber = -1;
        if (valorString == "") {
            _this.valorNumber = valorNumber;
        }
        _this.valorString = valorString;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Primitivo.prototype.getValor = function (arbol) {
        if (this.valorString != "") {
            //console.log("retornando temporal ("+this.valorString+"): "+arbol.getTemporal(this.valorString));
            return arbol.getTemporal(this.valorString);
        }
        else {
            //console.log("retornando entero: "+this.valorNumber);
            return this.valorNumber;
        }
    };
    Primitivo.prototype.getTraduccion = function (arbol) {
        if (this.valorString != "") {
            arbol.addTemporalASM(this.valorString);
            return this.valorString.toString();
        }
        else {
            if (this.valorNumber.toString().match("NaN")) {
                console.log("AQUI PERRO!!!!!!!");
            }
            return Math.round(this.valorNumber).toString();
        }
    };
    return Primitivo;
}(Nodo4D_1.Nodo4D));
exports.Primitivo = Primitivo;
