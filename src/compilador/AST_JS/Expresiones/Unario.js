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
var Expresion_1 = require("../Expresion");
var Primitivo_1 = require("./Primitivo");
var Unario = /** @class */ (function (_super) {
    __extends(Unario, _super);
    function Unario(TIPO_OPERACION, unario, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO_OPERACION = TIPO_OPERACION;
        _this.unario = unario;
        _this.fila = fila;
        _this.columna = columna;
        return _this;
    }
    Unario.prototype.getTraduccion = function (entorno) {
        switch (this.TIPO_OPERACION) {
            case Unario.TYPE.MENOS:
                return this.MENOS(entorno);
            case Unario.TYPE.MAS:
                return this.MAS(entorno);
            case Unario.TYPE.NOT:
                return this.NOT(entorno);
            case Unario.TYPE.MASMAS:
                return this.MASMAS(entorno);
            case Unario.TYPE.MENOSMENOS:
                return this.MENOSMENOS(entorno);
            default:
                entorno.addError("UNARIO-TRAD:" + this.TIPO_OPERACION, "No se encontró este tipo de Operación", this.fila, this.columna);
                return "0";
        }
    };
    Unario.prototype.MENOS = function (entorno) {
        entorno.addComentario("=========== UNARIO MENOS ===============");
        var ret = entorno.getTemp();
        entorno.addValorOperacion(ret, this.unario.getTraduccion(entorno).toString(), "*", "-1");
        entorno.addComentario("============ FIN UNARIO ====================");
        return ret;
    };
    Unario.prototype.MAS = function (entorno) {
        entorno.addComentario("=========== UNARIO MAS ===============");
        var ret = this.unario.getTraduccion(entorno);
        entorno.addComentario("============ FIN UNARIO ====================");
        return ret;
    };
    Unario.prototype.NOT = function (entorno) {
        entorno.addComentario("============= UNARIO NOT ============");
        var ret = entorno.getTemp();
        var etq1 = entorno.getETQ();
        var etq2 = entorno.getETQ();
        entorno.addIgualQue(this.unario.getTraduccion(entorno), 0, etq1);
        entorno.addValor(ret, 0);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(ret, 1);
        entorno.addETQ(etq2);
        entorno.addComentario("============= FIN UNARIO NOT ==========");
        return ret;
    };
    Unario.prototype.MASMAS = function (entorno) {
        entorno.addComentario("============= UNARIO MASMAS ============");
        var ret = entorno.getTemp();
        if (this.unario instanceof Primitivo_1.Primitivo && this.unario.TIPO == Expresion_1.Expresion.State.ID) {
            return this.unario.incrementar(entorno);
        }
        entorno.addValorOperacion(ret, this.unario.getTraduccion(entorno), "+", 1);
        entorno.addComentario("============= FIN UNARIO MASMAS ==========");
        return ret;
    };
    Unario.prototype.MENOSMENOS = function (entorno) {
        entorno.addComentario("============= UNARIO MENOSMENOS ============");
        var ret = entorno.getTemp();
        if (this.unario instanceof Primitivo_1.Primitivo && this.unario.TIPO == Expresion_1.Expresion.State.ID) {
            this.unario.decrementar(entorno);
        }
        entorno.addValorOperacion(ret, this.unario.getTraduccion(entorno), "-", 1);
        entorno.addComentario("============= FIN UNARIO MENOSMENOS ==========");
        return ret;
    };
    Unario.prototype.getTipo = function (entorno) {
        return this.unario.getTipo(entorno);
    };
    return Unario;
}(Expresion_1.Expresion));
exports.Unario = Unario;
(function (Unario) {
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["NOT"] = 0] = "NOT";
        TYPE[TYPE["MENOS"] = 1] = "MENOS";
        TYPE[TYPE["MAS"] = 2] = "MAS";
        TYPE[TYPE["MASMAS"] = 3] = "MASMAS";
        TYPE[TYPE["MENOSMENOS"] = 4] = "MENOSMENOS";
    })(TYPE = Unario.TYPE || (Unario.TYPE = {}));
})(Unario = exports.Unario || (exports.Unario = {}));
exports.Unario = Unario;
