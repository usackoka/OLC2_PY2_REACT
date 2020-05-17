import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Sentencia } from "../Sentencia";
import { Primitivo } from "../Expresiones/Primitivo";
import { Casteo } from "../Expresiones/Casteo";

export class Print extends Sentencia{

    expresion:Expresion;
    salto:boolean;

    public constructor(expresion:Expresion, fila:number, columna:number){
        super();
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
        this.salto = true;
    }

    public getTraduccion(entorno:Entorno):string{
        var TIPO:Object = this.expresion.getTipo(entorno);
        var tImpresion:string = this.expresion.getTraduccion(entorno);

        switch(TIPO){
            case Expresion.State.CHAR:
                let tretorno = entorno.getTemp();
                entorno.addValor(tretorno,"H");
                entorno.addComentario("ascii: "+tImpresion);
                entorno.addValorEnHeap("H",tImpresion);
                entorno.incH();
                entorno.addComentario("ascii: eos");
                entorno.addValorEnHeap("H","3");
                entorno.incH();
                tImpresion = tretorno;
            case Expresion.State.STRING:
                var t0:string = entorno.getTemp();
                var t2:string = entorno.getTemp();
                var t3:string = entorno.getTemp();
                entorno.addComentario("======= llamada impresion cadena =======");
                entorno.addComentario("posicion en heap");
                entorno.addValor(t0,tImpresion);
                entorno.addComentario("//cambio simulado de entorno");
                entorno.addValorOperacion(t2, "P","+", String(entorno.size));
                entorno.addValorOperacion(t3, t2,"+" ,"1");
                entorno.addValorEnStack(t3,t0);
                entorno.addComentario("cambio real de ambito");
                entorno.addValorOperacion("P", "P", "+", String(entorno.size));
                if(this.salto){
                    entorno.addCall("nativa_imprimir_string");
                }else{
                    entorno.addCall("nativa_imprimir_string2");
                }
                entorno.addValorOperacion("P","P","-",String(entorno.size));
                entorno.addComentario("======= fin llamada impresion cadena =======");
                //temporales usados
                entorno.addTempUsed(t0);
                entorno.addTempUsed(t2);
                entorno.addTempUsed(t3);
                return;
            case Expresion.State.BOOLEAN:
                var l1 = entorno.getETQ();
                var l2 = entorno.getETQ();
                var l3 = entorno.getETQ();
                entorno.addComentario("================= impresion boolean ================");
                entorno.igual1(tImpresion,l1);
                entorno.addGoto(l2);
                entorno.addETQ(l1);
                var p:Primitivo = new Primitivo("true", Expresion.State.STRING, this.fila, this.columna);
                var p2:Print = new Print(p,this.fila, this.columna);
                p2.getTraduccion(entorno);
                entorno.addGoto(l3);
                entorno.addETQ(l2);
                var p:Primitivo = new Primitivo("false",Expresion.State.STRING, this.fila, this.columna);
                var p2:Print = new Print(p,this.fila, this.columna);
                p2.getTraduccion(entorno);
                entorno.addETQ(l3);
                entorno.addComentario("================= fin impresion boolean ================");
                return;
            case Expresion.State.INTEGER:
                entorno.addPrint(Print.State.INTEGER,tImpresion);
                if(this.salto){
                    entorno.addPrint(Print.State.CHAR,10);
                }
                return; 
            case Expresion.State.DOUBLE:
                entorno.addPrint(Print.State.DOUBLE,tImpresion);
                if(this.salto){
                    entorno.addPrint(Print.State.CHAR,10);
                }
                return;
            default:
                entorno.addError("Print","No soportado TIPO: "+TIPO,this.fila,this.columna);
                var p:Primitivo = new Primitivo("null",Expresion.State.STRING, this.fila, this.columna);
                var p2:Print = new Print(p,this.fila, this.columna);
                p2.getTraduccion(entorno);
                return;
        }
    }
}

export namespace Print
{
    export enum State
    {
        INTEGER,
        CHAR,
        DOUBLE
    }
}