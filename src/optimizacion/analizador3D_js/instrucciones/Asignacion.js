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
var AST_1 = require("../abstractas/AST");
var Asignacion = /** @class */ (function (_super) {
    __extends(Asignacion, _super);
    function Asignacion(identificador, valor, fila, columna) {
        var _this = _super.call(this, fila, columna) || this;
        _this.identificador = identificador;
        _this.valor = valor;
        return _this;
    }
    Asignacion.prototype.getOptimizacionMirilla = function (numero, tree) {
        /*if(numero === 1) {
            tree.optimizacionMirilla += this.identificador + ' = ' + this.valor.getOptimizacionMirilla(numero, tree).result + ';\n'
        } else if(numero === 2) {*/
        var resultado = this.valor.getOptimizacionMirilla(numero, tree);
        if (resultado.result.toLowerCase() !== this.identificador.toLowerCase()) {
            tree.optimizacionMirilla += this.identificador + ' = ' + resultado.result + ';\n';
            if (resultado.optimizacion !== 0) {
                switch (resultado.optimizacion) {
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        tree.listaOptimizaciones.push({ no: tree.listaOptimizaciones.length + 1, regla: resultado.optimizacion, descripcion: 'Simplificación algebráica', fila: this.row, columna: this.column });
                        break;
                    case 16:
                    case 17:
                    case 18:
                        tree.listaOptimizaciones.push({ no: tree.listaOptimizaciones.length + 1, regla: resultado.optimizacion, descripcion: 'Eliminación de reducción por fuerza', fila: this.row, columna: this.column });
                        break;
                }
            }
        }
        else {
            switch (resultado.optimizacion) {
                case 12:
                case 13:
                case 14:
                case 15:
                    tree.listaOptimizaciones.push({ no: tree.listaOptimizaciones.length + 1, regla: resultado.optimizacion - 4, descripcion: 'Eliminación de instrucción', fila: this.row, columna: this.column });
                    break;
            }
        }
        // }
        return { optimizacion: 0, result: '' };
    };
    Asignacion.prototype.getOptimizacionBloque = function (tree) {
        throw new Error("Method not implemented.");
    };
    return Asignacion;
}(AST_1.AST));
exports.Asignacion = Asignacion;
