import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";

export class Atributo extends Expresion{

    expresion:Expresion;
    id:string;

    public constructor(TIPO:Object,id:string,expresion:Expresion,fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
        this.expresion = expresion;
        this.TIPO = TIPO;

    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}