import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";
import { Primitivo } from "./Primitivo";

export class Relacional extends Nodo {

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
        return this.valor1.getMirrilla(entorno)+this.operador+this.valor2.getMirrilla(entorno);
    };

    public getBloque(entorno:Entorno): string{
        //agrego las variables utilizadas a una lista, para luego buscar si no se encuentra en ella
        //y eliminar las no usadas
        if(!this.valor1.isNumeric()) entorno.addUtilizadas(this.valor1.getBloque(entorno))
        if(!this.valor2.isNumeric()) entorno.addUtilizadas(this.valor2.getBloque(entorno))
        
        return this.valor1.getBloque(entorno)+this.operador+this.valor2.getBloque(entorno);
    };
    
}