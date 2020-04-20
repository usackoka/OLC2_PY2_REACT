import { Nodo4D } from "./Nodo4D";
import {AST} from './AST'

export class Print extends Nodo4D{
    cadena:string;
    expresion:Nodo4D;

    constructor(cadena:string, expresion:Nodo4D,fila:Number, columna:Number){
        super();
        this.cadena = cadena;
        this.fila = fila;
        this.columna = columna;
        this.expresion = expresion;
    }

    public getValor(arbol:AST):number{
        this.cadena = this.cadena.replace("\"","");
        let x:string = "null";
        switch(this.cadena){
            case "%c": //ascii
                x = String.fromCharCode(this.expresion.getValor(arbol));
                break;
            case "%e": //entero
                x = this.expresion.getValor(arbol).toString();
                break;
            case "%d": //decimal
                x = this.expresion.getValor(arbol).toString();
                break;
            default:
                //error
                console.log("NO SE ECUENTRA LA IMPRESION: "+this.cadena);
                break;
        }
        arbol.mensajes.push(x);
        return -1;
    }

    public getTraduccion(arbol:AST):string{

        this.cadena = this.cadena.replace("\"","");
        let x:string = "null";
        arbol.addTraduccion(";================= PRINT ====================");
        switch(this.cadena){
            case "%c": //ascii
                let n:string = this.expresion.getTraduccion(arbol);
                if (n.match("10"))
                {
                    arbol.addTraduccion(";========= salto de linea ======");
                    arbol.addTraduccion("nativa_printChar 10");
                    arbol.addTraduccion("nativa_printChar 13");
                    break;
                }
                arbol.addTraduccion("MOV AX, "+n);
                arbol.addTraduccion("nativa_printChar AL");
                break;
            case "%e": //entero
                n = this.expresion.getTraduccion(arbol);
                //arbol.addTraduccion("MOV AX, "+n);
                //arbol.addTraduccion("ADD AL,30h");
                arbol.addTraduccion("printnum " + n);
                break;
            case "%d": //decimal
                break;
            default:
                //error
                console.log("NO SE ECUENTRA LA IMPRESION: "+this.cadena);
                break;
        }
        arbol.addTraduccion(";================================================");
        return "";
    }
}