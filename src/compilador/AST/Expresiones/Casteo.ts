import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Primitivo } from "./Primitivo";

export class Casteo extends Expresion{

    expresion:Expresion;

    public constructor(TIPO:Expresion.State,expresion:Expresion,fila:number,columna:number){
        super();
        this.TIPO = TIPO;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "(Casteo)E");
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        let trad:string = this.expresion.getTraduccion(entorno);
        let tipoExpresion:Object = this.expresion.getTipo(entorno);

        switch(this.TIPO){
            case Expresion.State.CHAR:
                switch(tipoExpresion){
                    case Expresion.State.DOUBLE:
                    case Expresion.State.INTEGER:
                        return trad;
                }
            case Expresion.State.STRING:
                switch(tipoExpresion){
                    case Expresion.State.CHAR:
                        let tretorno = entorno.getTemp();
                        entorno.addValor(tretorno,"H");
                        entorno.addComentario("ascii: "+trad);
                        entorno.addValorEnHeap("H",trad);
                        entorno.incH();
                        entorno.addComentario("ascii: eos");
                        entorno.addValorEnHeap("H","3");
                        entorno.incH();
                        entorno.addComentario("==============================================================");
                        return tretorno;
                    case Expresion.State.STRING:
                        return trad;
                    case Expresion.State.DOUBLE:
                        let t0:string = entorno.getTemp();
                        let t2:string = entorno.getTemp();
                        let t3:string = entorno.getTemp();
                        tretorno = entorno.getTemp();
                        entorno.addComentario("======= llamada double a string =======");
                        entorno.addValor(tretorno, "H");
                        entorno.addValorEnHeap("H", 1);
                        entorno.incH();
                        entorno.addValorEnHeap("H", trad);
                        entorno.incH();
                        entorno.addValorEnHeap("H", 3);
                        entorno.incH();
                        entorno.addComentario("====== fin llamada double a string =======");
                        //temporales usados
                        entorno.addTempUsed(t0);
                        entorno.addTempUsed(t2);
                        entorno.addTempUsed(t3);
                        return tretorno;
                    case Expresion.State.INTEGER:
                        t0 = entorno.getTemp();
                        t2 = entorno.getTemp();
                        t3 = entorno.getTemp();
                        tretorno = entorno.getTemp();
                        entorno.addComentario("======= llamada int a string =======");
                        entorno.addComentario("//numero a convertir");
                        entorno.addValor(t0, trad);
                        entorno.addComentario("//cambio simulado de entorno");
                        entorno.addValorOperacion(t2, "P", "+", String(entorno.size));
                        entorno.addValorOperacion(t3, t2, "+", "1");
                        entorno.addValorEnStack(t3, t0);
                        entorno.addComentario("//cambio real de ambito");
                        entorno.addValorOperacion("P", "P", "+", String(entorno.size));
                        entorno.addCall("nativa_int_to_string");
                        entorno.addGetStack(tretorno, "P");
                        entorno.addValorOperacion("P", "P", "-", String(entorno.size));
                        entorno.addComentario("======================================");
                        //temporales usados
                        entorno.addTempUsed(t0);
                        entorno.addTempUsed(t2);
                        entorno.addTempUsed(t3);
                        return tretorno;
                    case Expresion.State.BOOLEAN:
                        let l1 = entorno.getETQ();
                        let l2 = entorno.getETQ();
                        let l3 = entorno.getETQ();
                        tretorno = entorno.getTemp();
                        entorno.addComentario("================= boolean to string ================");
                        entorno.igual1(trad,l1);
                        entorno.addGoto(l2);
                        entorno.addETQ(l1);
                        let p = new Primitivo("true",Expresion.State.STRING, this.fila, this.columna);
                        entorno.addValor(tretorno, p.getTraduccion(entorno).toString());
                        entorno.addGoto(l3);
                        entorno.addETQ(l2);
                        p = new Primitivo("false",Expresion.State.STRING, this.fila, this.columna);
                        entorno.addValor(tretorno, p.getTraduccion(entorno).toString());
                        entorno.addETQ(l3);
                        entorno.addComentario("================= fin boolean to string ================");
                        return tretorno;
                }
        }
        
        entorno.addError("CASTEO-TRAD:"+this.TIPO,"Error de casteo para expresion tipo: "+tipoExpresion,this.fila,this.columna);
        return "0";
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}