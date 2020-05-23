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
var ETQ = /** @class */ (function (_super) {
    __extends(ETQ, _super);
    function ETQ(etiqueta, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.etiqueta = etiqueta;
        return _this;
    }
    ETQ.prototype.getMirrilla = function (entorno) {
        entorno.ClearListFirstRuleId();
        if (this.etiqueta.toLowerCase() == entorno.idEtqRule2) {
            entorno.addOptimizacion({ regla: 2,
                fila: this.fila, columna: this.columna });
        }
        return this.etiqueta + ":";
    };
    ;
    ETQ.prototype.getBloque = function (entorno) {
        return this.etiqueta + ":";
    };
    ;
    ETQ.prototype.getBloqueGraf = function (entorno) {
        return this.etiqueta + ":";
    };
    return ETQ;
}(Nodo_1.Nodo));
exports.ETQ = ETQ;
