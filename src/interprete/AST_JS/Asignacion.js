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
var Asignacion = /** @class */ (function (_super) {
    __extends(Asignacion, _super);
    function Asignacion(operador, valor1, valor2, direccion, fila, columna) {
        var _this = _super.call(this) || this;
        _this.fila = fila;
        _this.columna = columna;
        _this.operador = operador;
        _this.valor1 = valor1;
        _this.valor2 = valor2;
        _this.direccion = direccion;
        return _this;
    }
    Asignacion.prototype.getValor = function (arbol) {
        switch (this.operador) {
            case "=":
                this.IGUAL(arbol);
                break;
            case "*":
                this.MUL(arbol);
                break;
            case "/":
                this.DIV(arbol);
                break;
            case "%":
                this.MOD(arbol);
                break;
            case "+":
                this.ADD(arbol);
                break;
            case "-":
                this.SUB(arbol);
                break;
            default:
                console.log("NO EXISTE EL OPERADOR: " + this.operador + " ASIGNACION.TS");
        }
        return -1;
    };
    Asignacion.prototype.IGUAL = function (arbol) {
        //pregunto por la dirección
        if (this.direccion == "stack") {
            arbol.setStack(this.getIndexStruct(arbol), this.getValorStruct(arbol));
        }
        else if (this.direccion == "heap") {
            arbol.setHeap(this.getIndexStruct(arbol), this.getValorStruct(arbol));
        }
        else { //temporal
            arbol.setTemporal(this.direccion, this.getIndexStruct(arbol));
        }
    };
    Asignacion.prototype.SUB = function (arbol) {
        var number1 = this.valor1.getValor(arbol);
        var number2 = this.valor2.getValor(arbol);
        var result = number1 - number2;
        arbol.setTemporal(this.direccion, result);
    };
    Asignacion.prototype.ADD = function (arbol) {
        var number1 = this.valor1.getValor(arbol);
        var number2 = this.valor2.getValor(arbol);
        var result = number1 + number2;
        arbol.setTemporal(this.direccion, result);
    };
    Asignacion.prototype.MOD = function (arbol) {
        var number1 = this.valor1.getValor(arbol);
        var number2 = this.valor2.getValor(arbol);
        var result = number1 % number2;
        arbol.setTemporal(this.direccion, result);
    };
    Asignacion.prototype.DIV = function (arbol) {
        var number1 = this.valor1.getValor(arbol);
        var number2 = this.valor2.getValor(arbol);
        var result = number1 / number2;
        arbol.setTemporal(this.direccion, result);
    };
    Asignacion.prototype.MUL = function (arbol) {
        var number1 = this.valor1.getValor(arbol);
        var number2 = this.valor2.getValor(arbol);
        var result = number1 * number2;
        arbol.setTemporal(this.direccion, result);
    };
    Asignacion.prototype.getIndexStruct = function (arbol) {
        if (this.valor1.toString() == "stack") {
            return arbol.getStack(this.getValorStruct(arbol));
        }
        else if (this.valor1.toString() == "heap") {
            return arbol.getHeap(this.getValorStruct(arbol));
        }
        return this.valor1.getValor(arbol);
    };
    Asignacion.prototype.getValorStruct = function (arbol) {
        return this.valor2.getValor(arbol);
    };
    //======================== TRADUCCION ASSEMBLER =================================
    Asignacion.prototype.getTraduccion = function (arbol) {
        switch (this.operador) {
            case "=":
                return this.IGUAL_ASM(arbol);
            case "*":
                return this.MUL_ASM(arbol);
            case "/":
                return this.DIV_ASM(arbol);
            case "%":
                return this.MOD_ASM(arbol);
            case "+":
                return this.ADD_ASM(arbol);
            case "-":
                return this.SUB_ASM(arbol);
            default:
                console.log("NO EXISTE EL OPERADOR: " + this.operador + " ASIGNACION.TS");
                return this.IGUAL_ASM(arbol);
        }
    };
    Asignacion.prototype.getValor2 = function (arbol) {
        return this.valor2.getTraduccion(arbol);
    };
    Asignacion.prototype.getIndexStruct_ASM = function (arbol) {
        if (this.valor1.toString() == "stack") {
            arbol.addTraduccion("MOV si," + this.getValor2(arbol));
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV AX, stackk[si]");
            return "AX";
        }
        else if (this.valor1.toString() == "heap") {
            arbol.addTraduccion("MOV si," + this.getValor2(arbol));
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV AX, heap[si]");
            return "AX";
        }
        arbol.addTraduccion("MOV si," + this.valor1.getTraduccion(arbol));
        return "si";
    };
    Asignacion.prototype.IGUAL_ASM = function (arbol) {
        //pregunto por la dirección
        if (this.direccion == "stack") {
            arbol.addTraduccion("MOV CX, " + this.getValor2(arbol));
            this.getIndexStruct_ASM(arbol);
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV stackk[si], CX");
        }
        else if (this.direccion == "heap") {
            arbol.addTraduccion("MOV CX, " + this.getValor2(arbol));
            this.getIndexStruct_ASM(arbol);
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV heap[si], CX");
        }
        else { //temporal
            arbol.addTemporalASM(this.direccion);
            arbol.addTraduccion("MOV " + this.direccion + ", " + this.getIndexStruct_ASM(arbol));
        }
        return "";
    };
    Asignacion.prototype.MUL_ASM = function (arbol) {
        arbol.addTraduccion("MOV AX," + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("MOV BX," + this.getValor2(arbol));
        arbol.addTraduccion("MUL BX");
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV " + this.direccion + " , AX");
        return "";
    };
    Asignacion.prototype.DIV_ASM = function (arbol) {
        arbol.addTraduccion("MOV DX,0");
        arbol.addTraduccion("MOV AX," + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("MOV BX," + this.getValor2(arbol));
        arbol.addTraduccion("DIV BX");
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV " + this.direccion + " , AX");
        return "";
    };
    Asignacion.prototype.MOD_ASM = function (arbol) {
        arbol.addTraduccion("MOV DX,0");
        arbol.addTraduccion("MOV AX," + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("MOV BX," + this.getValor2(arbol));
        arbol.addTraduccion("DIV BX");
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV " + this.direccion + " , DX");
        return "";
    };
    Asignacion.prototype.ADD_ASM = function (arbol) {
        arbol.addTraduccion("MOV AX, " + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("ADD AX, " + this.getValor2(arbol));
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV " + this.direccion + " , AX");
        return "";
    };
    Asignacion.prototype.SUB_ASM = function (arbol) {
        arbol.addTraduccion("MOV AX, " + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("SUB AX, " + this.getValor2(arbol));
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV " + this.direccion + " , AX");
        return "";
    };
    return Asignacion;
}(Nodo4D_1.Nodo4D));
exports.Asignacion = Asignacion;
