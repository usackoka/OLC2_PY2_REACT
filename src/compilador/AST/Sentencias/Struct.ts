import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Atributo } from "./Atributo";

export class Struct extends Sentencia{

    atributos:Array<Atributo>;
    id:string;

    public constructor(id:string,atributos:Array<Atributo>,fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
        this.id = id;
        this.atributos = atributos;
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "DECLARACION_STRUCT");
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }
}