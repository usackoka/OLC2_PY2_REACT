import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class TipoArreglo extends Expresion{

    public constructor(TIPO:Object, fila:number, columna:number){
        super();
        this.TIPO = TIPO;
        this.fila = fila;
        this.columna = columna;
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "TIPO_ARRAY");
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }

    public getTipo(entorno:Entorno):Object{
        return "array_"+this.TIPO;
    }
}