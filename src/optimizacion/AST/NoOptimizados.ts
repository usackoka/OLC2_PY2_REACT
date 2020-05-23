import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export class NoOptimizados extends Nodo {

    cadena: string;

    constructor (cadena: string) {
        super(0, 0);
        this.cadena = cadena;
    }

    public getMirrilla(entorno:Entorno): string{
        return this.cadena;
    };

    public getBloque(entorno:Entorno): string{
        return this.cadena;
    };
    public getBloqueGraf(entorno: Entorno): string {
        return this.cadena.replace(/\"/g, "\\\"");
    }
}