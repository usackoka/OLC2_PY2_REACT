import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Parametro extends Expresion{

    value:Object;
    id:string;

    public constructor(TIPO:Object, id:string, fila:number, columna:number){
        super();
        this.id = id;
        this.TIPO = TIPO;
        this.fila = fila;
        this.columna = columna;
        this.value = null;
    }

    public getTraduccion(entorno:Entorno):string{
        return "";
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}