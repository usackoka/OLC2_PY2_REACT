"use strict";
exports.__esModule = true;
var Entorno = /** @class */ (function () {
    function Entorno() {
        this.instrucciones = [];
        this.optimizacion = "";
        this.optimizaciones = [{ no: 0, regla: 0, descripcion: '', fila: 0, columna: 0 }];
        this.optimizaciones.pop();
        this.contadorOptimizaciones = 0;
    }
    Entorno.prototype.addOptimizacion = function (opt) {
        this.optimizaciones.push({
            no: this.contadorOptimizaciones++,
            regla: opt.regla,
            descripcion: this.getDescripcionMirilla(opt.regla),
            fila: opt.fila,
            columna: opt.columna
        });
    };
    Entorno.prototype.getMirilla = function () {
        var _this = this;
        //obtengo la mirilla de cada nodo
        this.instrucciones.forEach(function (nodo) {
            console.log(nodo);
            _this.optimizacion += nodo.getMirrilla(_this) + "\n";
        });
        return this.optimizacion;
    };
    Entorno.prototype.getDescripcionMirilla = function (regla) {
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
        }
        return "Optimización sin descripción";
    };
    return Entorno;
}());
exports.Entorno = Entorno;
