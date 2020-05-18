import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Atributo extends Expresion{

    expresion:Expresion;
    id:string;

    public constructor(TIPO:Object,id:string,expresion:Expresion,fila:number, columna:number){
        super();
        this.id = id;
        this.fila = fila;
        this.columna = columna;
        this.expresion = expresion;
        this.TIPO = TIPO;
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "Atributo");
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        return this.expresion!=null?this.expresion.getTraduccion(entorno):Expresion.getDefecto(this.TIPO,entorno);
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}