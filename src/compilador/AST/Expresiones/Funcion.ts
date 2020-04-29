import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Parametro } from "./Parametro";
import { Nodo } from "../Nodo";

export class Funcion extends Expresion{

    idFuncion:String;
    parametros:Array<Parametro>;
    instrucciones:Array<Nodo>;

    public constructor(TIPO:Object, idFuncion:String, parametros:Array<Parametro>, 
        instrucciones:Array<Nodo>, fila:number, columna:number){
        super();
        this.TIPO = TIPO;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}