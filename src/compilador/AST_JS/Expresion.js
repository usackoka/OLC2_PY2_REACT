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
var Expresion = /** @class */ (function (_super) {
    __extends(Expresion, _super);
    function Expresion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Expresion.getDefecto = function (tipoDato, entorno) {
        switch (tipoDato) {
            case Expresion.State.NULL:
                return "-1";
            case Expresion.State.BOOLEAN:
                return "0";
            case Expresion.State.CHAR:
                return "13";
            case Expresion.State.DOUBLE:
                return "0.0";
            case Expresion.State.INTEGER:
                return "0";
            case Expresion.State.STRING:
                entorno.addComentario("============== Guardando valor en heap ======================");
                var retorno = entorno.getTemp();
                entorno.addValor(retorno, "H");
                entorno.addComentario("==== ascii: eos");
                entorno.addValorEnHeap("H", "3");
                entorno.incH();
                entorno.addComentario("==============================================================");
                return retorno;
        }
        entorno.addError("Expresion-ABS-getDefecto", "No se econtró un valor por defecto para el tipo: " + tipoDato, 0, 0);
        return "-1";
    };
    return Expresion;
}(Nodo_1.Nodo));
exports.Expresion = Expresion;
(function (Expresion) {
    var State;
    (function (State) {
        State[State["STRING"] = 0] = "STRING";
        State[State["INTEGER"] = 1] = "INTEGER";
        State[State["DOUBLE"] = 2] = "DOUBLE";
        State[State["BOOLEAN"] = 3] = "BOOLEAN";
        State[State["CHAR"] = 4] = "CHAR";
        State[State["NULL"] = 5] = "NULL";
        State[State["VOID"] = 6] = "VOID";
        State[State["ID"] = 7] = "ID";
    })(State = Expresion.State || (Expresion.State = {}));
})(Expresion = exports.Expresion || (exports.Expresion = {}));
exports.Expresion = Expresion;
