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
var Primitivo = /** @class */ (function (_super) {
    __extends(Primitivo, _super);
    function Primitivo(value, TIPO, fila, columna) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.TIPO = TIPO;
        _this.fila = fila;
        _this.columna = columna;
        //para quitarle las comillas
        if (_this.TIPO === Expresion_1.Expresion.State.STRING) {
            _this.value = _this.trimComillas(_this.value.toString());
        }
        return _this;
    }
    Primitivo.prototype.getTraduccion = function (entorno) {
        switch (this.TIPO) {
            case Expresion_1.Expresion.State.NULL:
                return "-1";
            case Expresion_1.Expresion.State.BOOLEAN:
                return (this.value) ? "1" : "0";
            case Expresion_1.Expresion.State.DOUBLE:
            case Expresion_1.Expresion.State.INTEGER:
                return this.value.toString();
            case Expresion_1.Expresion.State.STRING:
                entorno.addComentario("============== Guardando valor en heap ======================");
                var caracteres = Array.from(this.value.toString());
                caracteres = this.getCaracteres(caracteres);
                var retorno = entorno.getTemp();
                entorno.addValor(retorno, "H");
                caracteres.forEach(function (caracter) {
                    entorno.addComentario("ascii: " + String.fromCharCode(Number(caracter)));
                    entorno.addValorEnHeap("H", caracter);
                    entorno.incH();
                });
                entorno.addComentario("ascii: eos");
                entorno.addValorEnHeap("H", "3");
                entorno.incH();
                entorno.addComentario("==============================================================");
                return retorno;
            case Expresion_1.Expresion.State.CHAR:
                entorno.addComentario("============== Guardando valor en heap char ======================");
                var charac = this.value.toString().charAt(0);
                retorno = entorno.getTemp();
                entorno.addValor(retorno, "H");
                var ascii = charac.charCodeAt(0);
                entorno.addComentario("ascii: " + charac);
                entorno.addValorEnHeap("H", ascii);
                entorno.incH();
                entorno.addComentario("ascii: eos");
                entorno.addValorEnHeap("H", "3");
                entorno.incH();
                entorno.addComentario("==============================================================");
                return retorno;
            default:
                console.log('DEBUGEAR PRIMITIVO: ' + this.TIPO + " fila: " + this.fila);
                return "NULL";
        }
    };
    Primitivo.prototype.getTipo = function (entorno) {
        return this.TIPO;
    };
    Primitivo.prototype.trimComillas = function (cadena) {
        if (cadena.length > 1) {
            if (cadena.charAt(0) == '\"') {
                cadena = cadena.substring(1, cadena.length);
            }
            if (cadena.charAt(cadena.length - 1) == '\"') {
                cadena = cadena.substring(0, cadena.length - 1);
            }
        }
        return cadena;
    };
    Primitivo.prototype.getCaracteres = function (caracteres) {
        var caracteresNuevo = [];
        for (var i = 0; i < caracteres.length; i++) {
            if (caracteres[i] == ('\\')) {
                switch (caracteres[++i]) {
                    case 'a':
                        caracteresNuevo.push("7");
                        break;
                    case 'b':
                        caracteresNuevo.push("8");
                        break;
                    case 'f':
                        caracteresNuevo.push("12");
                        break;
                    case 'n':
                        caracteresNuevo.push("10");
                        break;
                    case 'r':
                        caracteresNuevo.push("13");
                        break;
                    case 't':
                        caracteresNuevo.push("9");
                        break;
                    case 'v':
                        caracteresNuevo.push("11");
                        break;
                    default:
                        caracteresNuevo.push("47");
                        --i;
                        break;
                }
            }
            else {
                caracteresNuevo.push(caracteres[i].charCodeAt(0).toString());
            }
        }
        var tmp = [];
        for (var i = 0; i < caracteresNuevo.length; i++) {
            tmp.push(caracteresNuevo[i]);
        }
        return tmp;
    };
    return Primitivo;
}(Expresion_1.Expresion));
exports.Primitivo = Primitivo;
