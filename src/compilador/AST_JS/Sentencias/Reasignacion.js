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
var Sentencia_1 = require("../Sentencia");
var Reasignacion = /** @class */ (function (_super) {
    __extends(Reasignacion, _super);
    function Reasignacion(id, expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.expresion = expresion;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Reasignacion.prototype.getTraduccion = function (entorno) {
        entorno.addComentario("=================== REASIGNACION DE VARIABLE ===================");
        //validar si es constante
        if (entorno.isConst(this.id.toLowerCase(), this.fila, this.columna)) {
            entorno.addError("Constante: " + this.id, "No se puede modificar el valor de una constante", this.fila, this.columna);
            return "";
        }
        var tmp = entorno.getTemp();
        var tmpValor = this.expresion.getTraduccion(entorno);
        entorno.addComentario("==== guardando valor ==========");
        var posicion = entorno.getValor(this.id, this.fila, this.columna);
        entorno.addValorOperacion(tmp, "P", "+", posicion);
        entorno.addValorEnStack(tmp, tmpValor);
        entorno.addTempUsed(tmp);
        entorno.addTempUsed(tmpValor);
        entorno.addComentario("============== FIN REASIGNACION VARIABLE =================");
        return "";
    };
    return Reasignacion;
}(Sentencia_1.Sentencia));
exports.Reasignacion = Reasignacion;
