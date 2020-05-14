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
var Expresion_1 = require("../Expresion");
var Simbolo_1 = require("../Simbolo");
var Declaracion = /** @class */ (function (_super) {
    __extends(Declaracion, _super);
    function Declaracion(TIPO, listaids, TIPO_VAR, expresion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.TIPO_VAR = TIPO_VAR;
        _this.TIPO = TIPO;
        _this.listaids = listaids;
        _this.expresion = expresion;
        _this.fila = fila;
        _this.columna = columna;
        _this.isGlobal = false;
        return _this;
    }
    Declaracion.prototype.getTraduccion = function (entorno) {
        var _this = this;
        entorno.addComentario("=================== DECLARACION DE VARIABLES ===================");
        this.listaids.forEach(function (id) {
            entorno.addComentario("================ DECLARANDO VARIABLE: " + id + " TIPO: " + _this.TIPO_VAR);
            //sacando el valor a ingresar
            var tmpValor;
            var tipoValor;
            if (_this.expresion != null) {
                tmpValor = _this.expresion.getTraduccion(entorno);
                tipoValor = _this.expresion.getTipo(entorno);
            }
            else {
                tmpValor = entorno.getTemp();
                tipoValor = _this.TIPO;
                entorno.addValor(tmpValor, Expresion_1.Expresion.getDefecto(_this.TIPO, entorno));
            }
            //Pregunto si la variable es global o no
            if (_this.isGlobal) {
                //si es global, tengo que preguntar la posición en stack que la voy a meter :'v
                //si es global, tengo que preguntar la posición en heap que la voy a meter :'v
                var temp = entorno.getTemp();
                entorno.addValor(temp, "H");
                //guardo la variable
                entorno.addValorEnHeap(temp, tmpValor);
                entorno.incH();
                entorno.addTempUsed(temp);
                entorno.addTempUsed(tmpValor);
                var s = new Simbolo_1.Simbolo(tipoValor, id.toLowerCase(), temp, _this.TIPO_VAR == Declaracion.State.CONST, true, _this.fila, _this.columna);
                entorno.addSimboloGlobal(s);
            }
            else {
                //============== Posicion del entorno en la que se guardará la variable ===================
                var temp = entorno.getTemp();
                //obtengo la posición en la que tengo que guardar la variable
                entorno.addValorOperacion(temp, "P", "+", entorno.tbs.size);
                //guardo la variable
                entorno.addValorEnStack(temp, tmpValor);
                entorno.addTempUsed(temp);
                entorno.addTempUsed(tmpValor);
                var s = new Simbolo_1.Simbolo(tipoValor, id.toLowerCase(), entorno.tbs.size, _this.TIPO_VAR == Declaracion.State.CONST, false, _this.fila, _this.columna);
                entorno.addSimbolo(s);
            }
        });
        entorno.addComentario("============== FIN DECLARACION VARIABLES =================");
        return "";
    };
    return Declaracion;
}(Sentencia_1.Sentencia));
exports.Declaracion = Declaracion;
(function (Declaracion) {
    var State;
    (function (State) {
        State[State["VAR"] = 0] = "VAR";
        State[State["CONST"] = 1] = "CONST";
        State[State["GLOBAL"] = 2] = "GLOBAL";
        State[State["NONE"] = 3] = "NONE";
    })(State = Declaracion.State || (Declaracion.State = {}));
})(Declaracion = exports.Declaracion || (exports.Declaracion = {}));
exports.Declaracion = Declaracion;
