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

    isTrue(Entorno1:Entorno):boolean {
        if (this.valor1.isNumeric1()&& this.valor2.isNumeric1()){
            let v1= this.valor1.getMirrilla(Entorno1);
            let v2= this.valor2.getMirrilla(Entorno1);
            if (v1==v2 && this.operador=="==")return true
            else if (v1!=v2 && this.operador=="<>")return true
        }
        return false;
    }
    isFalse(Entorno1:Entorno):boolean {
        if (this.valor1.isNumeric1()&& this.valor2.isNumeric1()){
            let v1= this.valor1.getMirrilla(Entorno1);
            let v2= this.valor2.getMirrilla(Entorno1);
            if (v1==v2 && this.operador=="<>")return true
            else if (v1!=v2 && this.operador=="==")return true
        }
        return false;
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

    public getBloqueGraf(entorno: Entorno): string {
        return this.valor1.getMirrilla(entorno)+this.operador+this.valor2.getMirrilla(entorno);
    }
    
}