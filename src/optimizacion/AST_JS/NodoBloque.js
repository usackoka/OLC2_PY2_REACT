"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_nodos_Bloque_Guardados = [];
var NodoBloque = /** @class */ (function () {
    function NodoBloque(idReal, cadena) {
        this.id = idReal;
        this.idgraf = "\"" + cadena + "\"";
        this.lista_instrucciones = [];
        this.cadenaBloque = "";
    }
    NodoBloque.getGotoEnlace = function (enlace1, etiqueta) {
        for (var ii = 0; ii < exports.lista_nodos_Bloque_Guardados.length; ii++) {
            var element = exports.lista_nodos_Bloque_Guardados[ii];
            if (element.id != "" && element.id == etiqueta) {
                return "\"" + enlace1 + "\"->" + element.idgraf + " [constraint=false];\n";
            }
        }
        return;
    };
    NodoBloque.limpiarNodos = function () {
        exports.lista_nodos_Bloque_Guardados = [];
    };
    NodoBloque.prototype.addCad = function (arg0) {
        this.cadenaBloque += arg0 + "\\l";
    };
    NodoBloque.prototype.addIns = function (nodo) {
        this.lista_instrucciones.push(nodo);
    };
    NodoBloque.prototype.setCadInicio = function (cadInicio) {
        this.cadenaBloque = cadInicio + "\\l";
    };
    NodoBloque.prototype.getNodo = function () {
        return this.idgraf + " [shape=box,ALIGN=\"LEFT\", label=\"" + this.cadenaBloque + "\"]";
    };
    return NodoBloque;
}());
exports.NodoBloque = NodoBloque;
