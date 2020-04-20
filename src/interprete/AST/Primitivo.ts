import { Nodo4D } from "./Nodo4D";
import {AST} from './AST';

export class Primitivo extends Nodo4D{
    
    valorString:string;
    valorNumber:number;

    constructor(fila:number, columna:number, valorString:string, valorNumber:number) {
        super();
        if(valorString==""){
            this.valorNumber = valorNumber;
            this.valorString = "";
        }else{
            this.valorString = valorString;
        }
        this.fila = fila;
        this.columna = columna;
    }
    
    public getValor(arbol:AST):number {
        if(this.valorString != ""){
            //console.log("retornando temporal ("+this.valorString+"): "+arbol.getTemporal(this.valorString));
            return arbol.getTemporal(this.valorString);
        }else{
            //console.log("retornando entero: "+this.valorNumber);
            return this.valorNumber;
        }
    }

    public getTraduccion(arbol:AST):string {
        if(this.valorString != ""){
            arbol.addTemporalASM(this.valorString);
            return this.valorString.toString();
        }else{
            if(this.valorNumber.toString().match("NaN")){
                console.log("AQUI PERRO!!!!!!!");
            }
            return Math.round(this.valorNumber).toString();
        }
    }
}