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
Object.defineProperty(exports, "__esModule", { value: true });
var Nodo_1 = require("./Nodo");
var Primitivo = /** @class */ (function (_super) {
    __extends(Primitivo, _super);
    function Primitivo(TIPO, value, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.value = value;
        _this.TIPO = TIPO;
        return _this;
    }
    Primitivo.prototype.isNumeric1 = function () {
        if (this.TIPO == Primitivo.TYPE.NUMBER)
            return true;
        else
            return false;
    };
    Primitivo.prototype.getMirrilla = function (entorno) {
        return this.value.toString();
    };
    ;
    Primitivo.prototype.getBloque = function (entorno) {
        if (this.TIPO == Primitivo.TYPE.ID)
            Nodo_1.Nodo.popTemporal(this.value.toString().toLowerCase());
        return this.value.toString();
    };
    ;
    Primitivo.prototype.getBloqueGraf = function (entorno) {
        return this.value.toString();
    };
    Primitivo.prototype.getNormal = function (entorno) {
        return this.value.toString();
    };
    Primitivo.prototype.getVal0 = function () {
        return this.value.toString();
    };
    Primitivo.prototype.isNumeric = function () {
        if (this.value === parseInt(this.value.toString(), 10))
            return true;
        else
            return false;
    };
    Primitivo.prototype.isZero = function () {
        if (this.value === 0 || this.value === "0" || this.value === '0'
            || this.value === 0.0 || this.value === "0.0" || this.value === '0.0') {
            return true;
        }
        return false;
    };
    Primitivo.prototype.isUno = function () {
        if (this.value === 1 || this.value === "1" || this.value === '1'
            || this.value === 1.0 || this.value === "1.0" || this.value === '1.0') {
            return true;
        }
        return false;
    };
    Primitivo.prototype.isDos = function () {
        if (this.value === 2 || this.value === "2" || this.value === '2'
            || this.value === 2.0 || this.value === "2.0" || this.value === '2.0') {
            return true;
        }
        return false;
    };
    return Primitivo;
}(Nodo_1.Nodo));
exports.Primitivo = Primitivo;
(function (Primitivo) {
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["NUMBER"] = 0] = "NUMBER";
        TYPE[TYPE["ID"] = 1] = "ID";
    })(TYPE = Primitivo.TYPE || (Primitivo.TYPE = {}));
})(Primitivo = exports.Primitivo || (exports.Primitivo = {}));
exports.Primitivo = Primitivo;
