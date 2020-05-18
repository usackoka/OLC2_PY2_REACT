import { AST } from '../abstractas/AST';
import { Arbol3D } from '../tablaSimbolos/Arbol';

export class Asignacion extends AST {

    identificador: string;
    valor: AST;

    constructor (identificador: string, valor: AST, fila: number, columna: number) {
        super(fila, columna);
        this.identificador = identificador;
        this.valor = valor;
    }

    public getOptimizacionMirilla(numero: number, tree: Arbol3D): {optimizacion: number, result: string} {
        /*if(numero === 1) {
            tree.optimizacionMirilla += this.identificador + ' = ' + this.valor.getOptimizacionMirilla(numero, tree).result + ';\n'
        } else if(numero === 2) {*/
            const resultado = this.valor.getOptimizacionMirilla(numero, tree);
            if(resultado.result.toLowerCase() !== this.identificador.toLowerCase()) {
                tree.optimizacionMirilla += this.identificador + ' = ' + resultado.result + ';\n'
                if(resultado.optimizacion !== 0) {
                    switch(resultado.optimizacion) {
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            tree.listaOptimizaciones.push({no: tree.listaOptimizaciones.length + 1, regla: resultado.optimizacion, descripcion: 'Simplificación algebráica', fila: this.row, columna: this.column});
                            break;
                        case 16:
                        case 17:
                        case 18:
                            tree.listaOptimizaciones.push({no: tree.listaOptimizaciones.length + 1, regla: resultado.optimizacion, descripcion: 'Eliminación de reducción por fuerza', fila: this.row, columna: this.column});
                            break;
                    }
                }
            } else {
                switch(resultado.optimizacion) {
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        tree.listaOptimizaciones.push({no: tree.listaOptimizaciones.length + 1, regla: resultado.optimizacion - 4, descripcion: 'Eliminación de instrucción', fila: this.row, columna: this.column});
                        break;
                }
            }
        // }
        return {optimizacion: 0, result: ''};
    }

    public getOptimizacionBloque(tree: Arbol3D): string {
        throw new Error("Method not implemented.");
    }
    
}
