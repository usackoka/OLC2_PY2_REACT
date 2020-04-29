"use strict";
exports.__esModule = true;
var Entorno_1 = require("./Entorno");
var Token_1 = require("./Token");
var Print_1 = require("./Sentencias/Print");
var Principal = /** @class */ (function () {
    function Principal() {
        this.entorno = new Entorno_1.Entorno(null, this);
        this.nodos = [];
        this.traduccion = "";
        this.erroresSemanticos = [];
        this.contadorEtiquetas = 0;
        this.contadorTemporales = 0;
    }
    Principal.prototype.run = function () {
        var _this = this;
        this.traduccion = "";
        //declaracion de temporales usados
        this.addComentario("=========== DECLARACION DE TEMPORALES USADOS ");
        this.traduccion += "var t0";
        var aux = 0;
        for (var i = 1; i < this.contadorTemporales + 1; i++) {
            if (aux = 20) {
                this.traduccion += "\n";
                aux = 0;
            }
            this.traduccion += ", t" + i + "";
            aux++;
        }
        this.traduccion += ";\n\n";
        this.addComentario("============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL");
        this.traduccion += "var P,H;\nvar stack[];\nvar heap[];\n\n";
        //traduzco cada nodo encontrado
        this.nodos.forEach(function (nodo) {
            nodo.getTraduccion(_this.entorno);
        });
        /**
         * Agrego los métodos nativos
         * Como métodos para imprimir string, casteo de enteros y potencia
         */
        this.addComentario("==================================================================");
        this.addComentario("=============== COMIENZAN METODOS NATIVOS ========================");
        this.addComentario("==================================================================");
        this.QuemadaString();
        this.QuemadaString2();
        this.QuemadaEntero();
        this.QuemadaPotencia();
        this.addComentario("======================= EJECUCION DEL MAIN ========================");
        //traduzco llamda al main()
        this.addCall("principal");
        return this.traduccion;
    };
    //=================================== METODOS DE TRADUCCIÓN
    Principal.prototype.addComentario = function (cadena) {
        this.traduccion += "#*" + cadena + "*#\n";
    };
    Principal.prototype.addError = function (lexema, mensaje, fila, columna) {
        this.erroresSemanticos.push(new Token_1.Token(lexema, "Error Semántico", mensaje, fila, columna));
    };
    Principal.prototype.addTraduccion = function (cadena) {
        this.traduccion += cadena;
    };
    Principal.prototype.getTemp = function () {
        return "t" + this.contadorTemporales++;
    };
    Principal.prototype.getETQ = function () {
        return "L" + this.contadorEtiquetas++;
    };
    Principal.prototype.igual1 = function (condicion, etiqueta) {
        this.traduccion += "if (" + condicion + " == 1) goto " + etiqueta + ";\n";
    };
    Principal.prototype.addIgualQue = function (condicion, value, etiqueta) {
        this.traduccion += "if (" + condicion + " == " + value + ") goto " + etiqueta + ";\n";
    };
    Principal.prototype.addMenorQue = function (condicion, value, etiqueta) {
        this.traduccion += "if (" + condicion + " < " + value + ") goto " + etiqueta + ";\n";
    };
    Principal.prototype.addNoIgual = function (condicion, value, etiqueta) {
        this.traduccion += "if (" + condicion + " <> " + value + ") goto " + etiqueta + ";\n";
    };
    Principal.prototype.addMayorQue = function (condicion, value, etiqueta) {
        this.traduccion += "if (" + condicion + " > " + value + ") goto " + etiqueta + ";\n";
    };
    Principal.prototype.addMayorIgual = function (condicion, value, etiqueta) {
        this.traduccion += "if (" + condicion + " >= " + value + ") goto " + etiqueta + ";\n";
    };
    Principal.prototype.addMenorIgual = function (condicion, value, etiqueta) {
        this.traduccion += "if (" + condicion + " <= " + value + ") goto " + etiqueta + ";\n";
    };
    Principal.prototype.addGoto = function (etq) {
        this.traduccion += "goto " + etq + ";\n";
    };
    Principal.prototype.addETQ = function (etq) {
        this.traduccion += etq + ":\n";
    };
    Principal.prototype.addValorEnHeap = function (posicion, valor) {
        this.traduccion += "heap[" + posicion + "] = " + valor + ";\n";
    };
    Principal.prototype.addValorEnStack = function (posicion, valor) {
        this.traduccion += "stack[" + posicion + "] = " + valor + ";\n";
    };
    Principal.prototype.addCall = function (idCall) {
        this.traduccion += "call " + idCall + ";\n";
    };
    Principal.prototype.addValor = function (direccion, valor) {
        this.traduccion += direccion + " = " + valor + ";\n";
    };
    Principal.prototype.addGetStack = function (direccion, posicion) {
        this.traduccion += direccion + " = stack[" + posicion + "];\n";
    };
    Principal.prototype.addGetHeap = function (direccion, posicion) {
        this.traduccion += direccion + " = heap[" + posicion + "];\n";
    };
    Principal.prototype.addValorOperacion = function (direccion, valor1, operador, valor2) {
        this.traduccion += direccion + " = " + valor1 + operador + valor2 + ";\n";
    };
    Principal.prototype.incH = function () {
        this.traduccion += "H = H + 1;\n";
    };
    Principal.prototype.addProc = function (idProc) {
        this.traduccion += "proc " + idProc + " begin\n";
    };
    Principal.prototype.addEnd = function (idProc) {
        this.traduccion += "end \n";
    };
    Principal.prototype.addPrint = function (TIPO_PRINT, value) {
        switch (TIPO_PRINT) {
            case Print_1.Print.State.CHAR:
                this.traduccion += "print(\"%c\"," + value + ");\n";
                break;
            case Print_1.Print.State.DOUBLE:
                this.traduccion += "print(\"%d\"," + value + ");\n";
                break;
            case Print_1.Print.State.INTEGER:
                this.traduccion += "print(\"%i\"," + value + ");\n";
                break;
        }
    };
    Principal.prototype.QuemadaString = function () {
        var t1 = this.getTemp();
        var t2 = this.getTemp();
        var t3 = this.getTemp();
        var l1 = this.getETQ();
        ;
        var l2 = this.getETQ();
        ;
        var l3 = this.getETQ();
        ;
        var nodecimal = this.getETQ();
        ;
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA IMPRIMIR STRING =======================");
        this.addComentario("==================================================================");
        this.addProc("nativa_imprimir_string");
        this.addValorOperacion(t1, "P", "+", "1");
        this.addGetStack(t2, t1);
        this.addETQ(l3);
        this.addGetHeap(t3, t2);
        this.addIgualQue(t3, "3", l1);
        this.addGoto(l2);
        this.addETQ(l2);
        this.addComentario("=== pregunto si lo que viene es un decimal");
        this.addNoIgual(t3, 1, nodecimal);
        this.addValorOperacion(t2, t2, "+", 1);
        this.addGetHeap(t3, t2);
        this.addPrint(Print_1.Print.State.DOUBLE, t3);
        this.addValorOperacion(t2, t2, "+", "1");
        this.addGoto(l3);
        this.addETQ(nodecimal);
        this.addPrint(Print_1.Print.State.CHAR, t3);
        this.addValorOperacion(t2, t2, "+", "1");
        this.addGoto(l3);
        this.addETQ(l1);
        this.addPrint(Print_1.Print.State.CHAR, 10);
        this.addEnd("nativa_imprimir_string");
    };
    Principal.prototype.QuemadaString2 = function () {
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA IMPRIMIR STRING SIN SALTO==============");
        this.addComentario("==================================================================");
        var t1 = this.getTemp();
        var t2 = this.getTemp();
        var t3 = this.getTemp();
        var l1 = this.getETQ();
        ;
        var l2 = this.getETQ();
        ;
        var l3 = this.getETQ();
        ;
        this.addProc("nativa_imprimir_string2");
        this.addValorOperacion(t1, "P", "+", "1");
        this.addGetStack(t2, t1);
        this.addETQ(l3);
        this.addGetHeap(t3, t2);
        this.addIgualQue(t3, "3", l1);
        this.addGoto(l2);
        this.addETQ(l2);
        this.addPrint(Print_1.Print.State.CHAR, t3);
        this.addValorOperacion(t2, t2, "+", "1");
        this.addGoto(l3);
        this.addETQ(l1);
        this.addEnd("nativa_imprimir_string2");
    };
    Principal.prototype.QuemadaPotencia = function () {
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA POTENCIA ==============================");
        this.addComentario("==================================================================");
        var t1 = this.getTemp();
        var t2 = this.getTemp();
        var t3 = this.getTemp();
        var t4 = this.getTemp();
        var t5 = this.getTemp();
        var t6 = this.getTemp();
        var l2 = this.getETQ();
        ;
        var l3 = this.getETQ();
        ;
        var l4 = this.getETQ();
        ;
        var l5 = this.getETQ();
        ;
        var l6 = this.getETQ();
        ;
        var l7 = this.getETQ();
        ;
        var l8 = this.getETQ();
        ;
        var l9 = this.getETQ();
        ;
        this.addProc("funcion_nativa_potencia");
        this.addValorOperacion(t2, "P", "+", 1);
        this.addValorOperacion(t1, "P", "+", 2);
        this.addGetStack(t2, t2);
        this.addGetStack(t3, t1);
        this.addComentario("si el exponente es negativo");
        this.addIgualQue(t3, 0, l3);
        this.addMenorQue(t3, 0, l4);
        this.addValor(t4, t2);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addETQ(l5);
        this.addIgualQue(t3, 0, l6);
        this.addGoto(l7);
        this.addETQ(l6);
        this.addValorEnStack("P", t2);
        this.addGoto(l2);
        this.addETQ(l7);
        this.addValorOperacion(t2, t2, "*", t4);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addGoto(l5);
        this.addComentario("====== Retorno = 1");
        this.addETQ(l3);
        this.addValorEnStack("P", 1);
        this.addGoto(l2);
        this.addComentario("====== Exponente negativo");
        this.addETQ(l4);
        this.addValorOperacion(t5, 0, "-", 1);
        this.addValorOperacion(t3, t3, "*", t5);
        this.addValor(t6, t2);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addETQ(l8);
        this.addIgualQue(t3, 0, l9);
        this.addValorOperacion(t2, t2, "*", t6);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addGoto(l8);
        this.addETQ(l9);
        this.addValorOperacion(t2, 1, "/", t2);
        this.addValorEnStack("P", t2);
        this.addETQ(l2);
        this.addEnd("funcion_nativa_potencia");
    };
    Principal.prototype.QuemadaEntero = function () {
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA TO INTEGER      =======================");
        this.addComentario("==================================================================");
        var t10 = this.getTemp();
        var t11 = this.getTemp();
        var t12 = this.getTemp();
        var t13 = this.getTemp();
        var t14 = this.getTemp();
        var t15 = this.getTemp();
        var t16 = this.getTemp();
        var t17 = this.getTemp();
        var t18 = this.getTemp();
        var temporal = this.getTemp();
        var l10 = this.getETQ();
        ;
        var l11 = this.getETQ();
        ;
        var l12 = this.getETQ();
        ;
        var l14 = this.getETQ();
        ;
        var l15 = this.getETQ();
        ;
        var l16 = this.getETQ();
        ;
        var l17 = this.getETQ();
        ;
        var l18 = this.getETQ();
        ;
        var ll9 = this.getETQ();
        ;
        this.addProc("nativa_int_to_string");
        this.addValor(t17, "H");
        this.addValorOperacion(t10, "P", "+", 1);
        this.addGetStack(t11, t10);
        this.addValor(t12, t11);
        this.addComentario("==== pregunto si es negativo");
        this.addMayorIgual(t11, 0, ll9);
        this.addComentario("==== agrego el menos a heap");
        this.addValorEnHeap("H", 45);
        this.incH();
        this.addValorOperacion(t12, t12, "*", -1);
        this.addValorOperacion(t11, t11, "*", -1);
        this.addETQ(ll9);
        this.addValor(t13, 0);
        this.addNoIgual(t12, 0, l11);
        this.addGoto(l18);
        this.addETQ(l11);
        this.addMenorQue(t12, 1, l12);
        this.addValorOperacion(t12, t12, "/", 10);
        this.addValorOperacion(t13, t13, "+", 1);
        this.addGoto(l11);
        this.addETQ(l12);
        this.addValor(t14, t11);
        this.addIgualQue(t13, 0, l10);
        this.addGoto(l14);
        this.addETQ(l14);
        this.addValorOperacion(t13, t13, "-", 1);
        this.addValor(t15, t13);
        this.addValor(t16, 1);
        this.addETQ(l15);
        this.addIgualQue(t15, 0, l16);
        this.addGoto(l17);
        this.addETQ(l17);
        this.addValorOperacion(t16, t16, "*", 10);
        this.addValorOperacion(t15, t15, "-", 1);
        this.addGoto(l15);
        this.addETQ(l16);
        this.addValorOperacion(t14, t14, "/", t16);
        this.addValorOperacion(t15, t14, "%", 1);
        this.addValorOperacion(t14, t14, "-", t15);
        this.addValorOperacion(t14, t14, "+", 48);
        this.addValorEnHeap("H", t14);
        this.incH();
        this.addValorOperacion(t11, t11, "%", t16);
        this.addGoto(l12);
        this.addETQ(l18);
        this.addValorOperacion(temporal, 48, "+", "0");
        this.addValorEnHeap("H", temporal);
        this.incH();
        this.addETQ(l10);
        this.addValorEnHeap("H", 3);
        this.incH();
        this.addValorOperacion(t18, "P", "+", 0);
        this.addValorEnStack(t18, t17);
        this.addEnd("nativa_int_to_string");
    };
    return Principal;
}());
exports.Principal = Principal;
