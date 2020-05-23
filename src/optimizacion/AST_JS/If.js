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
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If(condicion, etiqueta, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.condicion = condicion;
        _this.etiqueta = etiqueta;
        return _this;
    }
    If.prototype.getGotoOnly = function () {
        return "goto " + this.etiqueta + ";";
    };
    If.prototype.getMirrilla = function (entorno) {
        return "if (" + this.condicion.getMirrilla(entorno) + " ) goto " + this.etiqueta + ";";
    };
    ;
    If.prototype.getBloque = function (entorno) {
        return "if (" + this.condicion.getMirrilla(entorno) + " ) goto " + this.etiqueta + ";";
    };
    ;
    If.prototype.getBloqueGraf = function (entorno) {
        return "if (" + this.condicion.getBloqueGraf(entorno) + " ) goto " + this.etiqueta + ";";
    };
    If.prototype.getNormal = function (entorno) {
        return "if (" + this.condicion.getNormal(entorno) + " ) goto " + this.etiqueta + ";";
    };
    return If;
}(Nodo_1.Nodo));
exports.If = If;
