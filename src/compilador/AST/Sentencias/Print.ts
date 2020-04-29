import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Sentencia } from "../Sentencia";

export class Primitivo extends Sentencia{

    expresion:Expresion;

    public constructor(expresion:Expresion, fila:number, columna:number){
        super();
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }
}