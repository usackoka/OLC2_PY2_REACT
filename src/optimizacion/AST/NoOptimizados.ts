import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";
import { Primitivo } from "./Primitivo";

export class NoOptimizados extends Nodo {

    cadena: string;
    valExtra: Primitivo|null;

    constructor (cadena: string) {
        super(0, 0);
        this.cadena = cadena;
        this.valExtra=null;
    }

    public getMirrilla(entorno:Entorno): string{
        return this.cadena;
    };

    public getBloque(entorno:Entorno): string{
        if (this.valExtra!=null){
            Nodo.popTemporal(this.valExtra.value.toString().toLowerCase());
            
        }
        return this.cadena;
    };
    public getBloqueGraf(entorno: Entorno): string {
        return this.cadena.replace(/\"/g, "\\\"");
    }

    public getNormal(entorno: Entorno): string {
        return this.cadena;
    }

    public setValueExtra(en:Primitivo){
        this.valExtra = en;
    };
}