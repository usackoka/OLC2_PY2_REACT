import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export abstract class Expresion extends Nodo{
    TIPO:Object;
    public abstract getTipo(entorno:Entorno):Object;

    public static getDefecto(tipoDato:Object, entorno:Entorno):string{
        switch(tipoDato){
            case Expresion.State.NULL:
                return "-1";
            case Expresion.State.BOOLEAN:
                return "0";
            case Expresion.State.CHAR:
                return "13";
            case Expresion.State.DOUBLE:
                return "0.0";
            case Expresion.State.INTEGER:
                return "0";
            case Expresion.State.STRING:
                entorno.addComentario("============== Guardando valor en heap ======================");
                let retorno = entorno.getTemp();
                entorno.addValor(retorno,"H");
                entorno.addComentario("==== ascii: eos");
                entorno.addValorEnHeap("H","3");
                entorno.incH();
                entorno.addComentario("==============================================================");
                return retorno;
        }
        
        //entorno.addError("Expresion-ABS-getDefecto","No se econtró un valor por defecto para el tipo: "+tipoDato, 0,0)
        return "-1";
    }
}

export namespace Expresion
{
    export enum State
    {
        STRING,
        INTEGER,
        DOUBLE,
        BOOLEAN,
        CHAR,
        NULL,
        VOID,
        ID
    }
}