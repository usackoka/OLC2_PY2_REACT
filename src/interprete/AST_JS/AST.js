"use strict";
exports.__esModule = true;
var ETQ4D_1 = require("./ETQ4D");
var R4D_1 = require("./R4D");
var Call4D_1 = require("./Call4D");
var Print_1 = require("./Print");
var Asignacion_1 = require("./Asignacion");
var JMP_1 = require("./JMP");
var SaltoCond_1 = require("./SaltoCond");
var AST = /** @class */ (function () {
    //==============================================
    function AST() {
        //========================================================
        this.nodos = [];
        this.mensajes = [];
        this.temporales = new Map();
        this.etiquetas = new Map();
        this.pilaRetornos = [];
        this.stack = [];
        this.ignorarInstrucciones = false;
        this.heap = [];
        this.lineaActual = 0;
        //inicializo P Y H
        this.temporales.set("p", 0);
        this.temporales.set("h", 0);
        //====================
        this.traduccion = "";
        this.temporalesAssembler = [];
    }
    AST.prototype.ejecutar = function () {
        var _this = this;
        var numeroNodo = 0;
        this.nodos.forEach(function (value) {
            if (value instanceof ETQ4D_1.ETQ4D) {
                _this.etiquetas.set(value.idETQ, numeroNodo);
            }
            numeroNodo++;
        });
        this.exec4D();
    };
    AST.prototype.exec4D = function () {
        //ejecuto top down declaraciones y llamadas
        while (this.lineaActual < this.nodos.length) {
            var nodo = this.nodos[this.lineaActual];
            if (nodo instanceof ETQ4D_1.ETQ4D) {
                if (nodo.proc) {
                    this.ignorarInstrucciones = true;
                }
                this.lineaActual++;
            }
            else if (nodo instanceof R4D_1.R4D && this.ignorarInstrucciones) {
                this.ignorarInstrucciones = false;
                this.lineaActual++;
            }
            else if (this.ignorarInstrucciones) {
                this.lineaActual++;
            }
            else {
                nodo.getValor(this);
                this.lineaActual++;
            }
        }
    };
    AST.prototype.ejecutarCall = function (idCall) {
        if (!this.etiquetas.has(idCall)) {
            //error no se encontró el método tal
            console.error("No se encontró el método: " + idCall);
        }
        try {
            this.pilaRetornos.push(this.lineaActual);
            var c = this.etiquetas.get(idCall);
            this.lineaActual = c == undefined ? 0 : c;
        }
        catch (error) {
            this.lineaActual++;
            console.log(error);
        }
    };
    AST.prototype.ejecutarETQ = function (idETQ) {
        if (!this.etiquetas.has(idETQ)) {
            console.log("No se encontró la etiqueta: " + idETQ);
        }
        var c = this.etiquetas.get(idETQ);
        this.lineaActual = c == undefined ? 0 : c;
    };
    AST.prototype.getStack = function (index) {
        return this.stack[index];
    };
    AST.prototype.setStack = function (index, value) {
        if (value > this.stack.length) {
            //stackoverflow
        }
        this.stack[index] = value;
    };
    AST.prototype.getHeap = function (index) {
        return this.heap[index];
    };
    AST.prototype.setHeap = function (index, value) {
        if (index > this.heap.length) {
            //heapoverflow
        }
        this.heap[index] = value;
    };
    AST.prototype.setTemporal = function (id, value) {
        id = id.toLowerCase();
        this.temporales.set(id, value);
    };
    AST.prototype.getTemporal = function (id) {
        id = id.toLowerCase();
        if (this.temporales.has(id)) {
            var c = this.temporales.get(id);
            return c == undefined ? 0 : c;
        }
        else {
            console.error("No existe el temporal: " + id);
            return 0;
        }
    };
    AST.prototype.ejecutarRet = function () {
        if (this.pilaRetornos.length > 0) {
            var c = this.pilaRetornos.pop();
            this.lineaActual = c == undefined ? 0 : c;
        }
    };
    //====================================================================================
    //================= CREACION DE CLASES DESDE EL JISON ================================
    //====================================================================================
    AST.prototype.addNewETQ = function (idETQ, fila, columna, proc) {
        //idETQ = idETQ.toLowerCase();
        this.nodos.push(new ETQ4D_1.ETQ4D(idETQ, fila, columna, proc));
    };
    AST.prototype.addNewR4D = function (idProc, fila, columna) {
        //idProc = idProc.toLowerCase();
        this.nodos.push(new R4D_1.R4D(idProc, fila, columna));
    };
    AST.prototype.addNewCall4D = function (idCall, fila, columna) {
        //idCall = idCall.toLowerCase();
        this.nodos.push(new Call4D_1.Call4D(idCall, fila, columna));
    };
    AST.prototype.addNewPrint = function (cadena, expresion, fila, columna) {
        this.nodos.push(new Print_1.Print(cadena, expresion, fila, columna));
    };
    AST.prototype.addNewAsignacion = function (operador, valor1, valor2, direccion, fila, columna) {
        this.nodos.push(new Asignacion_1.Asignacion(operador, valor1, valor2, direccion, fila, columna));
    };
    AST.prototype.addNewJMP = function (idETQ, fila, columna) {
        //idETQ = idETQ.toLowerCase();
        this.nodos.push(new JMP_1.JMP(idETQ, fila, columna));
    };
    AST.prototype.addNewCondicional = function (salto, valor1, valor2, idETQ, fila, columna) {
        //salto = salto.toLowerCase();
        //idETQ = idETQ.toLowerCase();
        this.nodos.push(new SaltoCond_1.SaltoCond(salto, valor1, valor2, idETQ, fila, columna));
    };
    //=============================== TRADUCCION ASSEMBLER ===========================================
    AST.prototype.addTraduccion = function (trad) {
        this.traduccion += trad + "\n";
    };
    AST.prototype.addTemporalASM = function (temporal) {
        if (this.temporalesAssembler.indexOf(temporal) == -1) {
            this.temporalesAssembler.push(temporal);
        }
    };
    AST.prototype.getTraduccion = function () {
        var _this = this;
        this.temporalesAssembler = [];
        this.traduccion = "";
        var cadena = "";
        cadena += this.getMacros();
        cadena += this.PrintNum();
        cadena += "\n\n.model huge ;tipo de ejecutable\n";
        cadena += "\n.stack 10000h;seccion de pila\n";
        this.nodos.forEach(function (nodo) {
            nodo.getTraduccion(_this);
        });
        cadena += "\n.data\n";
        this.temporalesAssembler.forEach(function (element) {
            cadena += element + " dw 0\n";
        });
        cadena += "\nstackk dw 15000 dup(0)\n";
        cadena += "heap dw 15000 dup(0)\n";
        cadena += "\n.code\n";
        cadena += "mov ax,@data\n";
        cadena += "mov ds,ax\n\n\n";
        cadena += this.traduccion;
        cadena += "\n;========== FIN ASSEMBLER =================\n";
        cadena += "jmp EXIT_PROGRAM\n" +
            "EXIT_PROGRAM:\n" +
            "mov ah, 4ch\n" +
            "mov al, 00h\n" +
            "int 21h\n" +
            "end\n";
        return cadena;
    };
    AST.prototype.getMacros = function () {
        return "\n;--------------MACRO IMPRESION DE CARACTER------------------\n" +
            "nativa_printChar macro caracter\n" +
            "mov ah,02h\n" +
            "mov dl,caracter\n" +
            "int 21h\n" +
            "endm\n\n";
    };
    AST.prototype.PrintNum = function () {
        var cadena = "printnum macro _num \n\tLOCAL NextBin,FinBin\n\t"
            + "pusha\n\tmov ax, _num \n\tmov cx, 00h \n\tmov bx,0Ah \n\tcmp ax,8000h \n\tjbe NextBin \n\t"
            + "nativa_printChar 2dh \n\tneg ax \n\tNextBin: \n\tmov dx,00h \n\tdiv bx \n\tadd dl,30h \n\tpush dx \n\t"
            + "inc cx \n\tcmp ax,09h \n\tjg NextBin \n\tadd al,30h \n\tnativa_printChar al \n\tFinBin: \n\tpop ax \n\tnativa_printChar al \n\t"
            + "loop FinBin \n\tpopa \nendm\n";
        return cadena;
    };
    return AST;
}());
exports.AST = AST;
