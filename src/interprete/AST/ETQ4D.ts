import { Nodo4D } from "./Nodo4D";
import {AST} from './AST'

export class ETQ4D extends Nodo4D{
    public idETQ:string;
    public proc:Boolean;

    constructor(idETQ:string, fila:Number, columna:Number, proc:Boolean){
        super();
        this.idETQ = idETQ;
        this.fila = fila;
        this.columna = columna;
        this.proc = proc;
    }

    getValor(arbol:AST):number{
        return null;
    } 

    getTraduccion(arbol:AST):string{ 
        if (this.proc)
        {
            arbol.addTraduccion("\n\n;================ Procedimiento: "+this.idETQ+" ==============================\n");
            arbol.addTraduccion("JMP FIN_PROC_"+this.idETQ+"\n");
            arbol.addTraduccion(this.idETQ + " proc\n");
        }
        else {
            arbol.addTraduccion(this.idETQ + ":\n");
        }     
        return ""; 
    } 
} 