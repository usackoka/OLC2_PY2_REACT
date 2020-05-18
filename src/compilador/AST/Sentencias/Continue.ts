import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";

export class Continue extends Sentencia{

    public constructor(fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "Continue");
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("======== continue =================");
        entorno.addGoto(this.etqContinue);
        entorno.addComentario("======= fin continue ==============");
        return "";
    }
}