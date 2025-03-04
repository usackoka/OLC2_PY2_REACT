"use strict";
exports.__esModule = true;
var Funcion_1 = require("./Expresiones/Funcion");
var Expresion_1 = require("./Expresion");
var Entorno = /** @class */ (function () {
    function Entorno(padre, principal) {
        this.size = 0;
        this.padre = padre;
        this.primerTemporal = 0;
        this.temporalesUsados = [];
        this.tbs = new Map();
        this.contGraph = 0;
        this.recorridoArbol = "";
        //guardo principal en el padre, para poder hacer uso de los métodos de traducción.
        this.principal = principal ? principal : null;
        //si existe el padre, sumo el tamaño al entorno
        if (padre != null) {
            this.temporalesUsados = padre.temporalesUsados;
            this.size += padre.size;
            this.primerTemporal = padre.primerTemporal;
        }
    }
    Entorno.prototype.addTempUsed = function (id) {
        if (!this.temporalesUsados.includes(id)) {
            this.temporalesUsados.push(id);
        }
    };
    Entorno.prototype.getTipoFuncion = function (id, fila, columna) {
        id = id.toLowerCase();
        if (this.padre != null) {
            return this.padre.getTipoFuncion(id, fila, columna);
        }
        //busco la función
        for (var _i = 0, _a = this.principal.nodos; _i < _a.length; _i++) {
            var nodo = _a[_i];
            if (nodo instanceof Funcion_1.Funcion) {
                if (nodo.getNombreTraduccion(this).toString().toLowerCase() == id.toString()) {
                    return nodo.TIPO;
                }
            }
        }
        this.addError("getTipoFuncion", "No existe la funcion: " + id, fila, columna);
        return Expresion_1.Expresion.State.STRING;
    };
    Entorno.prototype.getValor = function (id, fila, columna) {
        id = id.toLowerCase();
        if (this.tbs.has(id)) {
            return this.tbs.get(id).posicion.toString();
        }
        else {
            if (this.padre == null) {
                this.addError("GetValor", "No existe la variable: " + id, fila, columna);
                return "-1";
            }
            else {
                return this.padre.getValor(id, fila, columna);
            }
        }
    };
    Entorno.prototype.isGlobal = function (id, fila, columna) {
        id = id.toLowerCase();
        if (this.tbs.has(id)) {
            return this.tbs.get(id).global;
        }
        else {
            if (this.padre == null) {
                this.addError("isGlobal", "No existe la variable: " + id, fila, columna);
                return false;
            }
            else {
                return this.padre.isGlobal(id, fila, columna);
            }
        }
    };
    Entorno.prototype.getTipo = function (id, fila, columna) {
        id = id.toLowerCase();
        if (this.tbs.has(id)) {
            return this.tbs.get(id).tipo;
        }
        else {
            if (this.padre == null) {
                this.addError("getTipo", "No existe la variable: " + id, fila, columna);
                return "-1";
            }
            else {
                return this.padre.getTipo(id, fila, columna);
            }
        }
    };
    Entorno.prototype.getStruct = function (id, fila, columna) {
        return this.getEntornoGlobal().principal.getStruct(id, fila, columna);
    };
    Entorno.prototype.isConst = function (id, fila, columna) {
        id = id.toLowerCase();
        if (this.tbs.has(id)) {
            return this.tbs.get(id).constante;
        }
        else {
            if (this.padre == null) {
                this.addError("isConst", "No existe la variable: " + id, fila, columna);
                return false;
            }
            else {
                return this.padre.isConst(id, fila, columna);
            }
        }
    };
    Entorno.prototype.addSimbolo = function (s) {
        if (!this.tbs.has(s.id)) {
            this.tbs.set(s.id, s);
            this.size++;
        }
    };
    Entorno.prototype.addSimboloGlobal = function (s) {
        if (this.padre != null) {
            this.padre.addSimboloGlobal(s);
            return;
        }
        if (!this.tbs.has(s.id)) {
            this.tbs.set(s.id, s);
            this.size++;
        }
    };
    /**
     * ===============================================================================================================
     * ===============================================================================================================
     * ===============================================================================================================
     * ===============================================================================================================
     * ===============================================================================================================
     */
    //Recorro mis padres, hasta llegar al entorno superior, el cual su padre es null
    Entorno.prototype.getEntornoGlobal = function () {
        return this.padre == null ? this : this.padre.getEntornoGlobal();
    };
    Entorno.prototype.getContadorTemporales = function () {
        return this.getEntornoGlobal().principal.contadorTemporales;
    };
    Entorno.prototype.addPrint = function (TIPO_PRINT, value) {
        this.getEntornoGlobal().principal.addPrint(TIPO_PRINT, value);
    };
    Entorno.prototype.addComentario = function (cadena) {
        this.getEntornoGlobal().principal.addComentario(cadena);
    };
    Entorno.prototype.addError = function (lexema, mensaje, fila, columna) {
        this.getEntornoGlobal().principal.addError(lexema, mensaje, fila, columna);
    };
    Entorno.prototype.addTraduccion = function (cadena) {
        this.getEntornoGlobal().principal.addTraduccion(cadena);
    };
    Entorno.prototype.getTemp = function () {
        return this.getEntornoGlobal().principal.getTemp();
    };
    Entorno.prototype.getETQ = function () {
        return this.getEntornoGlobal().principal.getETQ();
    };
    Entorno.prototype.igual1 = function (condicion, etiqueta) {
        this.getEntornoGlobal().principal.igual1(condicion, etiqueta);
    };
    Entorno.prototype.addIgualQue = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addIgualQue(condicion, value, etiqueta);
    };
    Entorno.prototype.addMenorQue = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMenorQue(condicion, value, etiqueta);
    };
    Entorno.prototype.addNoIgual = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addNoIgual(condicion, value, etiqueta);
    };
    Entorno.prototype.addMayorQue = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMayorQue(condicion, value, etiqueta);
    };
    Entorno.prototype.addMayorIgual = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMayorIgual(condicion, value, etiqueta);
    };
    Entorno.prototype.addMenorIgual = function (condicion, value, etiqueta) {
        this.getEntornoGlobal().principal.addMenorIgual(condicion, value, etiqueta);
    };
    Entorno.prototype.addGoto = function (etq) {
        this.getEntornoGlobal().principal.addGoto(etq);
    };
    Entorno.prototype.addETQ = function (etq) {
        this.getEntornoGlobal().principal.addETQ(etq);
    };
    Entorno.prototype.addValorEnHeap = function (posicion, valor) {
        this.getEntornoGlobal().principal.addValorEnHeap(posicion, valor);
    };
    Entorno.prototype.addValorEnStack = function (posicion, valor) {
        this.getEntornoGlobal().principal.addValorEnStack(posicion, valor);
    };
    Entorno.prototype.addCall = function (idCall) {
        this.getEntornoGlobal().principal.addCall(idCall);
    };
    Entorno.prototype.addValor = function (direccion, valor) {
        this.getEntornoGlobal().principal.addValor(direccion, valor);
    };
    Entorno.prototype.addGetStack = function (direccion, posicion) {
        this.getEntornoGlobal().principal.addGetStack(direccion, posicion);
    };
    Entorno.prototype.addGetHeap = function (direccion, posicion) {
        this.getEntornoGlobal().principal.addGetHeap(direccion, posicion);
    };
    Entorno.prototype.addValorOperacion = function (direccion, valor1, operador, valor2) {
        this.getEntornoGlobal().principal.addValorOperacion(direccion, valor1, operador, valor2);
    };
    Entorno.prototype.incH = function () {
        this.getEntornoGlobal().principal.incH();
    };
    Entorno.prototype.addProc = function (idProc) {
        this.getEntornoGlobal().principal.addProc(idProc);
    };
    Entorno.prototype.addEnd = function (idProc) {
        this.getEntornoGlobal().principal.addEnd(idProc);
    };
    Entorno.prototype.getNextContGraph = function () {
        return this.contGraph++;
    };
    Entorno.prototype.addNodoGraph = function (nodo1, label) {
        this.recorridoArbol += "id_" + nodo1 + "[label=\"" + label.replace("\"", "") + "\"]" + "\n";
    };
    Entorno.prototype.addRelacion = function (nodo1, nodo2) {
        this.recorridoArbol += "id_" + nodo1 + " -> " + "id_" + nodo2 + "\n";
    };
    return Entorno;
}());
exports.Entorno = Entorno;
