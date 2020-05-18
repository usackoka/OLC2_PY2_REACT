import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";
import { Primitivo } from "./Primitivo";

export class Aritmetica extends Nodo {

    valor1: Primitivo;
    valor2: Primitivo;
    operador: string;

    constructor (valor1:Primitivo, valor2:Primitivo, operador:string, fila:number, columna:number) {
        super(0, 0);
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.operador = operador;
    }

    public getMirrilla(entorno:Entorno): string{
        if(this.operador === '+'){
            if(this.valor1.isZero()){
                entorno.addOptimizacion({regla:8,fila:this.fila,columna:this.columna})
                return this.valor2.getMirrilla(entorno);
            }else if(this.valor2.isZero()){
                entorno.addOptimizacion({regla:8,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }
        }

        return this.valor1.getMirrilla(entorno)+this.operador+this.valor2.getMirrilla(entorno);
    };

    public getBloque(entorno:Entorno): string{
        return "";
    };
    
}