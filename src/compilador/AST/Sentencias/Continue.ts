import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";

export class Continue extends Sentencia{

    public constructor(fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
    }

    public getGrafica(entorno:Entorno):string{
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("======== continue =================");
        entorno.addGoto(this.etqContinue);
        entorno.addComentario("======= fin continue ==============");
        return "";
    }
}