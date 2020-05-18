import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";
import { Primitivo } from "./Primitivo";

export class Aritmetica extends Nodo {

    valor1: Primitivo;
    valor2: Primitivo;
    operador: string;

    constructor (valor1:Primitivo, valor2:Primitivo, operador:string, fila:number, columna:number) {
        super(fila, columna);
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.operador = operador;
    }

    public getMirrilla(entorno:Entorno): string{
        if(this.operador === '+'){
            if(this.valor1.isZero()){
                entorno.addOptimizacion({regla:12,fila:this.fila,columna:this.columna})
                return this.valor2.getMirrilla(entorno);
            }else if(this.valor2.isZero()){
                entorno.addOptimizacion({regla:12,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }
        }else if(this.operador === '-'){
            if(this.valor2.isZero()){
                entorno.addOptimizacion({regla:13,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }
        }else if(this.operador === '*'){
            if(this.valor1.isUno()){
                entorno.addOptimizacion({regla:14,fila:this.fila,columna:this.columna})
                return this.valor2.getMirrilla(entorno);
            }else if(this.valor2.isUno()){
                entorno.addOptimizacion({regla:14,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }else if(this.valor1.isDos()){
                entorno.addOptimizacion({regla:16,fila:this.fila,columna:this.columna})
                return this.valor2.getMirrilla(entorno) + "+" + this.valor2.getMirrilla(entorno);
            }else if(this.valor2.isDos()){
                entorno.addOptimizacion({regla:16,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno) + "+" + this.valor1.getMirrilla(entorno);
            }else if(this.valor1.isZero()){
                entorno.addOptimizacion({regla:17,fila:this.fila,columna:this.columna})
                return this.valor2.getMirrilla(entorno);
            }else if(this.valor2.isZero()){
                entorno.addOptimizacion({regla:17,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }
        }else if(this.operador === '/'){
            if(this.valor2.isUno()){
                entorno.addOptimizacion({regla:15,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }else if(this.valor1.isZero()){
                entorno.addOptimizacion({regla:18,fila:this.fila,columna:this.columna})
                return this.valor1.getMirrilla(entorno);
            }
        }

        return this.valor1.getMirrilla(entorno)+this.operador+this.valor2.getMirrilla(entorno);
    };

    public getBloque(entorno:Entorno): string{
        return "";
    };
    
}