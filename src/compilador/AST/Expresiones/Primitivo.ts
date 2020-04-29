import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Primitivo extends Expresion{

    value:Object;

    public constructor(value:Object, TIPO:Object, fila:number, columna:number){
        super();
        this.value = value;
        this.TIPO = TIPO;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }

    public getTipo(entorno:Entorno):Object{
        return null;
    }
}