import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

export abstract class Expresion extends Nodo{
    public abstract getTipo(entorno:Entorno):Object;
}