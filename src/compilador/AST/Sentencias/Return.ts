import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";

export class Return extends Sentencia{

    expresion:Expresion;

    public constructor(expresion:Expresion,fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
        this.expresion = expresion;
    }

    public getGrafica(entorno:Entorno){
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("======== return =================");
        if(this.expresion!=null){
            let temp = this.expresion.getTraduccion(entorno);
            entorno.addValorEnStack("P",temp)
            entorno.addTempUsed(temp)
        }
        entorno.addGoto(this.etqRetorno);
        entorno.addComentario("======= fin return ==============");
        return "";
    }
}