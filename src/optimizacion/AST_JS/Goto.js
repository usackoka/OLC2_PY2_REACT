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
var Goto = /** @class */ (function (_super) {
    __extends(Goto, _super);
    function Goto(etiqueta, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.etiqueta = etiqueta;
        return _this;
    }
    Goto.prototype.getMirrilla = function (entorno) {
        return "goto " + this.etiqueta + ";";
    };
    ;
    Goto.prototype.getBloque = function (entorno) {
        return "";
    };
    ;
    return Goto;
}(Nodo_1.Nodo));
exports.Goto = Goto;
