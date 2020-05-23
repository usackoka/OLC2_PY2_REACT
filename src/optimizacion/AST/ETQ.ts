import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class ETQ extends Nodo {


    etiqueta:string;

    constructor (etiqueta:string, fila:number, columna:number) {
        super(fila, columna);
        this.etiqueta = etiqueta;
    }

    public getMirrilla(entorno:Entorno): string{
        entorno.ClearListFirstRuleId();
        if (this.etiqueta.toLowerCase()==entorno.idEtqRule2){
            entorno.addOptimizacion({regla:2,
                fila:this.fila,columna:this.columna})
        }
        return this.etiqueta+":";
    };

    public getBloque(entorno:Entorno): string{
        return this.etiqueta+":";
    };

    public getBloqueGraf(entorno: Entorno): string {
        return this.etiqueta+":";
    }
    public getNormal(entorno: Entorno): string {
        return this.etiqueta+":";
    }
    
}