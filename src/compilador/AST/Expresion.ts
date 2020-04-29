import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export abstract class Expresion extends Nodo{
    TIPO:Object;
    public abstract getTipo(entorno:Entorno):Object;
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
        VOID
    }
}