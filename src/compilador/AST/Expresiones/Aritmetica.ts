import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Casteo } from "./Casteo";

export class Aritmetica extends Expresion{

    izquierda:Expresion;
    derecha:Expresion;
    TIPO_OPERACION:Aritmetica.TYPE;

    public constructor(TIPO_OPERACION:Aritmetica.TYPE,izquierda:Expresion,derecha:Expresion,fila:number,columna:number){
        super();
        this.TIPO_OPERACION = TIPO_OPERACION;
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        switch(this.TIPO_OPERACION){
            case Aritmetica.TYPE.SUMA:
                return this.SUMA(entorno);
            case Aritmetica.TYPE.RESTA:
                return this.RESTA(entorno);
            case Aritmetica.TYPE.MULTIPLICACION:
                return this.MULTIPLICACION(entorno);
            case Aritmetica.TYPE.DIVISION:
                return this.DIVISION(entorno);
            case Aritmetica.TYPE.MODULAR:
                return this.MODULAR(entorno);
            case Aritmetica.TYPE.POTENCIA:
                return this.POTENCIA(entorno);
            default:
                entorno.addError("ARITMETICA-TRAD:"+this.TIPO_OPERACION,"No se encontró este tipo de Operación",this.fila,this.columna);
                return "0";
        }
    }

    public getTipo(entorno:Entorno):Object{
        let tipIzq:Object = this.izquierda.getTipo(entorno);
        let tipDer:Object = this.derecha.getTipo(entorno);

        if(this.TIPO_OPERACION==Aritmetica.TYPE.SUMA){
            if (tipIzq == Expresion.State.STRING || tipDer == Expresion.State.STRING)
            {
                return Expresion.State.STRING;
            }
            else if (tipIzq == Expresion.State.DOUBLE || tipDer == Expresion.State.DOUBLE)
            {
                return Expresion.State.DOUBLE;
            }
            else if (tipIzq == Expresion.State.INTEGER || tipDer == Expresion.State.INTEGER)
            {
                return Expresion.State.INTEGER;
            }
            else if(tipIzq == Expresion.State.CHAR && tipDer == Expresion.State.CHAR)
            {
                return Expresion.State.STRING;
            }
            else if (tipIzq == Expresion.State.BOOLEAN && tipDer == Expresion.State.BOOLEAN)
            {
                return Expresion.State.BOOLEAN;
            }
            else
            {
                entorno.addError("ARITMETICA-GETTIPO:"+this.TIPO_OPERACION,"Tipo tipIzq:"+tipIzq+" , Tipo tipDer:"+tipDer,this.fila,this.columna);
                return Expresion.State.INTEGER;
            }
        }else{
            if (tipIzq == Expresion.State.DOUBLE || tipDer == Expresion.State.DOUBLE)
            {
                return Expresion.State.DOUBLE;
            }
            else if (tipIzq == Expresion.State.INTEGER || tipDer == Expresion.State.INTEGER)
            {
                return Expresion.State.INTEGER;
            }
            else if(tipIzq == Expresion.State.CHAR && tipDer == Expresion.State.CHAR)
            {
                return Expresion.State.INTEGER;
            }
            else
            {
                entorno.addError("ARITMETICA-GETTIPO:"+this.TIPO_OPERACION,"Tipo tipIzq:"+tipIzq+" , Tipo tipDer:"+tipDer,this.fila,this.columna);
                return Expresion.State.INTEGER;
            }
        }
    }

    public SUMA(entorno:Entorno):string{
        let izq:string = this.izquierda.getTraduccion(entorno).toString();
        let der:string = this.derecha.getTraduccion(entorno).toString();
        let tipIzq:Object = this.izquierda.getTipo(entorno);
        let tipDer:Object = this.derecha.getTipo(entorno);

        if ((tipIzq == Expresion.State.STRING || tipDer == Expresion.State.STRING)
            || (tipIzq == Expresion.State.CHAR && tipDer == Expresion.State.CHAR))
        {
            if (tipDer != Expresion.State.STRING)
            {
                let n:Casteo = new Casteo(Expresion.State.STRING, this.derecha, this.fila, this.columna);
                der = n.getTraduccion(entorno).toString();
            }
            
            if (tipIzq != Expresion.State.STRING)
            {
                let n:Casteo = new Casteo(Expresion.State.STRING, this.izquierda, this.fila, this.columna);
                izq = n.getTraduccion(entorno).toString();
            }

            //si ambos son strings, suma de strings
            let t1 = entorno.getTemp();
            let t2 = entorno.getTemp();
            let t3 = entorno.getTemp();
            let t4 = entorno.getTemp();
            let tretorno = entorno.getTemp();
            let l1 = entorno.getETQ();
            let l2 = entorno.getETQ();
            let l3 = entorno.getETQ();

            entorno.addComentario("=============== Suma de strings ===================");
            entorno.addValor(t1, izq);
            entorno.addValor(t2, der);
            entorno.addValor(tretorno, "H");
            entorno.addComentario("====== copio primer string");
            entorno.addETQ(l2);
            entorno.addGetHeap(t3, t1);
            entorno.addIgualQue(t3, "3", l1);
            entorno.addValorEnHeap("H", t3);
            entorno.incH();
            entorno.addValorOperacion(t1, t1, "+", "1");
            entorno.addGoto(l2);
            entorno.addComentario("====== copio segundo string");
            entorno.addETQ(l1);
            entorno.addGetHeap(t4, t2);
            entorno.addIgualQue(t4, "3", l3);
            entorno.addValorEnHeap("H", t4);
            entorno.incH();
            entorno.addValorOperacion(t2, t2, "+", "1");
            entorno.addGoto(l1);
            
            entorno.addETQ(l3);
            entorno.addValorEnHeap("H", "3");
            entorno.incH();
            entorno.addComentario("=================fin suma de strings====================");

            //guardo los usados
            entorno.addTempUsed(t1);
            entorno.addTempUsed(t2);
            entorno.addTempUsed(t3);
            entorno.addTempUsed(t4);
            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return tretorno;
        }
        else {
            let retorno:string = entorno.getTemp();
            entorno.addValorOperacion(retorno, izq, "+", der);

            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return retorno;
        }
    }

    public RESTA(entorno:Entorno):string{
        let izq:string = this.izquierda.getTraduccion(entorno).toString();
        let der:string = this.derecha.getTraduccion(entorno).toString();
        let retorno:string = entorno.getTemp();
        
        entorno.addValorOperacion(retorno, izq, "-", der);
        
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    }

    public MODULAR(entorno:Entorno):string{
        let izq:string = this.izquierda.getTraduccion(entorno).toString();
        let der:string = this.derecha.getTraduccion(entorno).toString();
        let retorno:string = entorno.getTemp();
        
        entorno.addValorOperacion(retorno,izq,"%",der);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    }

    public DIVISION(entorno:Entorno):string{
        let izq:string = this.izquierda.getTraduccion(entorno).toString();
        let der:string = this.derecha.getTraduccion(entorno).toString();
        let retorno:string = entorno.getTemp();
        entorno.addValorOperacion(retorno,izq,"/",der);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    }

    public MULTIPLICACION(entorno:Entorno):string{
        let izq:string = this.izquierda.getTraduccion(entorno).toString();
        let der:string = this.derecha.getTraduccion(entorno).toString();
        let retorno:string = entorno.getTemp();
        entorno.addValorOperacion(retorno,izq,"*",der);
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        return retorno;
    }

    public POTENCIA(entorno:Entorno):string{
        entorno.addComentario("============ Llamada Potencia =====================");
        let izq:string = this.izquierda.getTraduccion(entorno).toString();
        let der:string = this.derecha.getTraduccion(entorno).toString();
        let retorno:string = entorno.getTemp();
        let t22 = entorno.getTemp();
        let t23 = entorno.getTemp();
        let t24 = entorno.getTemp();
        
        entorno.addComentario("//cambio simulado de ambito");
        entorno.addValorOperacion(t22, "P","+", entorno.size);
        entorno.addComentario("//posicion parametro 1");
        entorno.addValorOperacion(t23, t22, "+", 1);
        entorno.addComentario("//valor base");
        entorno.addValorEnStack(t23, izq);
        entorno.addComentario("//posicion paremtro 2");
        entorno.addValorOperacion(t24, t22, "+", 2);
        entorno.addComentario("//valor exponente");
        entorno.addValorEnStack(t24, der);
        entorno.addValorOperacion("P","P", "+", entorno.size);
        entorno.addCall("funcion_nativa_potencia");
        entorno.addGetStack(retorno, "P");
        entorno.addValorOperacion("P","P", "-", entorno.size);
        
        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);
        entorno.addTempUsed(t22);
        entorno.addTempUsed(t23);
        entorno.addTempUsed(t24);
        
        entorno.addComentario("============ FIN LLAMADA Potencia =====================");

        return retorno;
    }
}

export namespace Aritmetica
{
    export enum TYPE
    {
        SUMA,
        RESTA,
        MULTIPLICACION,
        DIVISION,
        POTENCIA,
        MODULAR
    }
}