"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asignacion_1 = require("./Asignacion");
var Goto_1 = require("./Goto");
var ETQ_1 = require("./ETQ");
var If_1 = require("./If");
var NodoBloque_1 = require("./NodoBloque");
var NoOptimizados_1 = require("./NoOptimizados");
var Entorno = /** @class */ (function () {
    function Entorno() {
        this.instrucciones = [];
        this.optimizacion = "";
        this.optimizaciones = [{ no: 0, regla: 0, descripcion: '', fila: 0, columna: 0 }];
        this.optimizaciones.pop();
        this.contadorOptimizaciones = 0;
        this.listUtilizadas = [];
        this.listaFirsRuleId = [];
        this.idEtqRule2 = "";
        this.cad_Grafica = "";
    }
    Entorno.prototype.getGraficaBloques = function () {
        var _this = this;
        NodoBloque_1.NodoBloque.limpiarNodos();
        var bool_cabecera = true;
        var contOb = 0;
        var lista_bloques = [];
        var lastBLoque;
        var enlaces_extra = "";
        var lista_nodo_enlaces = [];
        for (var ii = 0; ii < this.instrucciones.length; ii++) {
            var nodo = this.instrucciones[ii];
            if (bool_cabecera) {
                var cab1 = "L?" + contOb;
                var idN = "";
                var cadInicio = nodo.getBloqueGraf(this);
                if (nodo instanceof ETQ_1.ETQ) {
                    idN = nodo.etiqueta;
                }
                lastBLoque = new NodoBloque_1.NodoBloque(idN, cab1);
                lastBLoque.setCadInicio(cadInicio);
                lastBLoque.addIns(nodo);
                lista_bloques.push(lastBLoque);
                bool_cabecera = false;
                contOb++;
            }
            else {
                if (nodo instanceof ETQ_1.ETQ) {
                    lastBLoque = new NodoBloque_1.NodoBloque(nodo.etiqueta, "L?" + contOb);
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lastBLoque.addIns(nodo);
                    lista_bloques.push(lastBLoque);
                    NodoBloque_1.lista_nodos_Bloque_Guardados.push(lastBLoque);
                    contOb++;
                }
                else if (nodo instanceof Goto_1.Goto) {
                    lastBLoque = new NodoBloque_1.NodoBloque("", "L?" + contOb);
                    lastBLoque.addIns(nodo);
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lista_bloques.push(lastBLoque);
                    lista_nodo_enlaces.push({ dir1: "L?" + contOb, dir2: nodo.etiqueta });
                    contOb++;
                }
                else if (nodo instanceof If_1.If) {
                    lastBLoque = new NodoBloque_1.NodoBloque("", "L?" + contOb);
                    lastBLoque.addIns(nodo);
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lista_bloques.push(lastBLoque);
                    lista_nodo_enlaces.push({ dir1: "L?" + contOb, dir2: nodo.etiqueta });
                    contOb++;
                }
                else if (nodo instanceof NoOptimizados_1.NoOptimizados && nodo.getBloqueGraf(this) == "end") {
                    lastBLoque.addIns(nodo);
                    lastBLoque.addCad(nodo.getBloqueGraf(this));
                    bool_cabecera = true;
                    // NodoBloque.limpiarNodos();
                }
                else if (nodo instanceof NoOptimizados_1.NoOptimizados && nodo.getBloqueGraf(this).startsWith("proc")) {
                    lastBLoque = new NodoBloque_1.NodoBloque("", "L?" + contOb);
                    lastBLoque.addIns(nodo);
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lista_bloques.push(lastBLoque);
                    contOb++;
                }
                else {
                    lastBLoque.addIns(nodo);
                    lastBLoque.addCad(nodo.getBloqueGraf(this));
                }
            }
        }
        lista_nodo_enlaces.forEach(function (nodo) {
            enlaces_extra += NodoBloque_1.NodoBloque.getGotoEnlace(nodo.dir1, nodo.dir2);
        });
        var id_ante = "";
        this.cad_Grafica = "digraph G {\n";
        lista_bloques.forEach(function (element) {
            if (id_ante != "") {
                _this.cad_Grafica += id_ante + "->" + element.idgraf + "\n";
                // b1 -> b2
            }
            id_ante = element.idgraf;
            _this.cad_Grafica += element.getNodo() + "\n";
        });
        return this.cad_Grafica + enlaces_extra + "}";
    };
    //variables y métodos --- para optimización de bloques
    Entorno.prototype.addUtilizadas = function (variable) {
        this.listUtilizadas.push(variable);
    };
    Entorno.prototype.addOptimizacion = function (opt) {
        this.optimizaciones.push({
            no: this.contadorOptimizaciones++,
            regla: opt.regla,
            descripcion: this.getDescripcion(opt.regla),
            fila: opt.fila,
            columna: opt.columna
        });
    };
    Entorno.prototype.getMirilla = function () {
        //obtengo la mirilla de cada nodo
        var b1 = false;
        var string_ex_rule2 = "";
        for (var ii = 0; ii < this.instrucciones.length; ii++) {
            var nodo = this.instrucciones[ii];
            if (nodo instanceof Goto_1.Goto) {
                //regla 2
                this.optimizacion += string_ex_rule2;
                string_ex_rule2 = nodo.getMirrilla(this) + "\n";
                b1 = true;
            }
            else if (nodo instanceof ETQ_1.ETQ) {
                var guardar = nodo.getMirrilla(this) + "\n";
                var etq1 = nodo.etiqueta;
                if (this.idEtqRule2 != etq1.toLowerCase())
                    this.optimizacion += string_ex_rule2 + guardar;
                else
                    this.optimizacion += guardar;
                b1 = false;
                string_ex_rule2 = "";
                this.setUltimaEtqRegla2("");
            }
            else if (nodo instanceof If_1.If) {
                var if1 = nodo;
                //Regla 4
                if (if1.condicion.isTrue(this) && ((ii + 1) < this.instrucciones.length)
                    && this.instrucciones[ii + 1] instanceof Goto_1.Goto) {
                    this.addOptimizacion({ regla: 4, fila: if1.fila, columna: if1.columna });
                    if (b1) {
                        string_ex_rule2 += if1.getGotoOnly() + "\n";
                    }
                    else {
                        this.optimizacion += if1.getGotoOnly() + "\n";
                    }
                    ii++;
                }
                //Regla 5
                else if (if1.condicion.isFalse(this) && ((ii + 1) < this.instrucciones.length)
                    && this.instrucciones[ii + 1] instanceof Goto_1.Goto) {
                    this.addOptimizacion({ regla: 5, fila: if1.fila, columna: if1.columna });
                    if (b1) {
                        string_ex_rule2 += this.instrucciones[ii + 1].getMirrilla(this) + "\n";
                    }
                    else {
                        this.optimizacion += this.instrucciones[ii + 1].getMirrilla(this) + "\n";
                    }
                    ii++;
                }
                else if (b1) {
                    string_ex_rule2 += nodo.getMirrilla(this) + "\n";
                }
                else {
                    this.optimizacion += nodo.getMirrilla(this) + "\n";
                }
            }
            else if (b1) {
                string_ex_rule2 += nodo.getMirrilla(this) + "\n";
            }
            else {
                this.optimizacion += nodo.getMirrilla(this) + "\n";
            }
        }
        this.optimizacion += string_ex_rule2;
        // this.instrucciones.forEach(nodo=>{
        //   this.optimizacion += nodo.getMirrilla(this)+"\n"
        //})
        return this.optimizacion;
    };
    Entorno.prototype.getBloques = function () {
        var _this = this;
        var nuevalistaNodos = [];
        //primer recorrido para guardar los usados de lado derecho
        this.instrucciones.forEach(function (nodo) {
            nodo.getBloque(_this);
        });
        //busco todos los que cumplan con la regla 23
        this.instrucciones.forEach(function (nodo) {
            if (nodo instanceof Asignacion_1.Asignacion) {
                //pregunto si la direccion está entre las que se usaron
                if (!_this.listUtilizadas.includes(nodo.direccion)) {
                    _this.addOptimizacion({ regla: 23, fila: nodo.fila, columna: nodo.columna });
                    return;
                }
            }
            nuevalistaNodos.push(nodo);
        });
        nuevalistaNodos.forEach(function (nodo) {
            _this.optimizacion += nodo.getBloque(_this) + "\n";
        });
        return this.optimizacion;
    };
    Entorno.prototype.addFirsRuleId = function (direccion, direccion2) {
        this.listaFirsRuleId.push({ id1: direccion, id2: direccion2 });
    };
    Entorno.prototype.ClearListFirstRuleId = function () {
        this.listaFirsRuleId = [];
    };
    Entorno.prototype.getFirstRuleBuscarId = function (v1, v2) {
        var t1 = false;
        this.listaFirsRuleId.forEach(function (element) {
            if (!t1 && element.id1 == v2 && element.id2 == v1) {
                t1 = true;
                return true;
            }
        });
        return t1;
    };
    Entorno.prototype.removeFirsRuleId = function (v1) {
        this.listaFirsRuleId = this.listaFirsRuleId.filter(function (value, index, arr) { return value.id1 != v1; });
    };
    Entorno.prototype.setUltimaEtqRegla2 = function (etiqueta) {
        this.idEtqRule2 = etiqueta;
    };
    Entorno.prototype.getDescripcion = function (regla) {
        switch (regla) {
            case 1:
                return "Eliminación de instrucciones redundantes de carga y  almacenamiento ";
            case 2:
            case 3:
            case 4:
            case 5:
                return "Eliminación de código inalcanzable ";
            case 6:
            case 7:
                return "Optimizaciones de flujo de control ";
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                return "Simplificación algebraica y por fuerza";
            case 23:
                return "Redundancia parcial - variables inutilizadas";
        }
        return "Optimización sin descripción";
    };
    return Entorno;
}());
exports.Entorno = Entorno;
