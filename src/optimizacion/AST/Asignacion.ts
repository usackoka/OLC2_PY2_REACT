import { AST } from './AST';
import { Entorno } from './Entorno';

export class Asignacion extends AST {

    identificador: string;
    valor: AST;

    constructor (identificador: string, valor: AST, fila: number, columna: number) {
        super(fila, columna);
        this.identificador = identificador;
        this.valor = valor;
    }

    public getOptimizacionMirilla(numero: number, entorno: Entorno): {optimizacion: number, result: string} {
            const resultado = this.valor.getOptimizacionMirilla(numero, entorno);
            if(resultado.result.toLowerCase() !== this.identificador.toLowerCase()) {
                entorno.optimizacionMirilla += this.identificador + ' = ' + resultado.result + ';\n'
                if(resultado.optimizacion !== 0) {
                    switch(resultado.optimizacion) {
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            entorno.listaOptimizaciones.push({no: entorno.listaOptimizaciones.length + 1, regla: resultado.optimizacion, descripcion: 'Simplificación algebráica', fila: this.row, columna: this.column});
                            break;
                        case 16:
                        case 17:
                        case 18:
                            entorno.listaOptimizaciones.push({no: entorno.listaOptimizaciones.length + 1, regla: resultado.optimizacion, descripcion: 'Eliminación de reducción por fuerza', fila: this.row, columna: this.column});
                            break;
                    }
                }
            } else {
                switch(resultado.optimizacion) {
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        entorno.listaOptimizaciones.push({no: entorno.listaOptimizaciones.length + 1, regla: resultado.optimizacion - 4, descripcion: 'Eliminación de instrucción', fila: this.row, columna: this.column});
                        break;
                }
            }
        return {optimizacion: 0, result: ''};
    }

    public getOptimizacionBloque(entorno: Entorno): string {
        throw new Error("Method not implemented.");
    }
    
}
