import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";

export class Break extends Sentencia{

    public constructor(fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
    }

    public getGrafica(entorno:Entorno){
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("======== break =================");
        entorno.addGoto(this.etqBreak);
        entorno.addComentario("======= fin break ==============");
        return "";
    }
}