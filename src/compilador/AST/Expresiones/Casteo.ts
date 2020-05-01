import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Casteo extends Expresion{

    expresion:Expresion;

    public constructor(TIPO:Expresion.State,expresion:Expresion,fila:number,columna:number){
        super();
        this.TIPO = TIPO;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        switch(this.TIPO){
            case Expresion.State.STRING:
            default:
                entorno.addError("CASTEO-TRAD:"+this.TIPO,"No se encontró este tipo de Casteo",this.fila,this.columna);
                return "0";
        }
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}