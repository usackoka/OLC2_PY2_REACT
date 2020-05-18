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

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "RETURN");
        
        if(this.expresion!=null){
            let cont_hijo = this.expresion.getGrafica(entorno);
            entorno.addRelacion(cont_raiz,cont_hijo);
        }
        
        return cont_raiz.toString();
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