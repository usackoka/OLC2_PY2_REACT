import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Relacional extends Expresion{

    izquierda:Expresion;
    derecha:Expresion;
    TIPO_OPERACION:Relacional.TYPE;

    public constructor(TIPO_OPERACION:Relacional.TYPE,izquierda:Expresion,derecha:Expresion,fila:number,columna:number){
        super();
        this.TIPO_OPERACION = TIPO_OPERACION;
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        switch(this.TIPO_OPERACION){
            case Relacional.TYPE.IGUAL_REFERENCIA:
                return this.IGUAL_REFERENCIA(entorno);
            case Relacional.TYPE.IGUAL:
                return this.IGUALIGUAL(entorno);
            case Relacional.TYPE.DIFERENTE:
                return this.NOTIGUAL(entorno);
            case Relacional.TYPE.MAYORQUE:
                return this.MAYORQUE(entorno);
            case Relacional.TYPE.MAYORIGUAL:
                return this.MAYORIGUALQUE(entorno);
            case Relacional.TYPE.MENORQUE:
                return this.MENORQUE(entorno);
            case Relacional.TYPE.MENORIGUAL:
                return this.MENORIGUALQUE(entorno);
            default:
                entorno.addError("RELACIONAL-TRAD:"+this.TIPO_OPERACION,"No se encontró este tipo de Operación",this.fila,this.columna);
                return "0";
        }
    }

    public getTipo(entorno:Entorno):Object{
        let tipIzq:Object = this.izquierda.getTipo(entorno);
        let tipDer:Object = this.derecha.getTipo(entorno);

        //aquí sólo se pueden comparar strings y arreglos
        if(this.TIPO_OPERACION==Relacional.TYPE.IGUAL_REFERENCIA){
            if(!(
                (tipIzq == Expresion.State.STRING && tipDer == Expresion.State.STRING)
            )){
                entorno.addError("RELACIONAL-GETTIPO:"+this.TIPO_OPERACION,"Operando no aplicable a tipos tipIzq:"+tipIzq+" , Tipo tipDer:"+tipDer,this.fila,this.columna);
            }
        }else{
            if (!(this.relacionable(tipIzq) && this.relacionable(tipDer))){
                entorno.addError("RELACIONAL-GETTIPO:"+this.TIPO_OPERACION,"Tipo tipIzq:"+tipIzq+" , Tipo tipDer:"+tipDer,this.fila,this.columna);
            }
        }
        //siempre voy a retornar un boolean, únicamente comparo los tipos para saber si marcar error o no
        return Expresion.State.BOOLEAN;
    }

    public relacionable(tipo:Object):boolean{
        return (tipo == Expresion.State.DOUBLE || tipo == Expresion.State.INTEGER || tipo == Expresion.State.CHAR);
    }

    public IGUAL_REFERENCIA(entorno:Entorno):string{
        //pendiente
        return "0";
    }

    public MAYORQUE(entorno:Entorno):string {
        let izq = this.izquierda.getTraduccion(entorno);
        let der = this.derecha.getTraduccion(entorno);
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();

        
        entorno.addMayorQue(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno,1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno,0);
        entorno.addETQ(etq3);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }

    public MENORQUE(entorno:Entorno):string{
        let izq = this.izquierda.getTraduccion(entorno)
        let der = this.derecha.getTraduccion(entorno)
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();

        entorno.addMenorQue(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno,1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno,0);
        entorno.addETQ(etq3);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }

    public MAYORIGUALQUE(entorno:Entorno):string{
        let izq = this.izquierda.getTraduccion(entorno)
        let der = this.derecha.getTraduccion(entorno)
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();
        
        entorno.addMayorIgual(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno,1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno,0);
        entorno.addETQ(etq3);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }

    public MENORIGUALQUE(entorno:Entorno){
        let izq = this.izquierda.getTraduccion(entorno)
        let der = this.derecha.getTraduccion(entorno)
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();

        entorno.addMenorIgual(izq, der, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(retorno,1);
        entorno.addGoto(etq3);
        entorno.addETQ(etq2);
        entorno.addValor(retorno,0);
        entorno.addETQ(etq3);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }

    public IGUALIGUAL(entorno:Entorno){
        let izq = this.izquierda.getTraduccion(entorno)
        let der = this.derecha.getTraduccion(entorno)
        let tipIzq:Object = this.izquierda.getTipo(entorno);
        let tipDer:Object = this.derecha.getTipo(entorno);

        if ((tipIzq == Expresion.State.STRING && tipDer == Expresion.State.STRING)
            ||(tipIzq == Expresion.State.CHAR && tipDer == Expresion.State.CHAR))
        {
            let t1 = entorno.getTemp();
            let t2 = entorno.getTemp();
            let t3 = entorno.getTemp();
            let t4 = entorno.getTemp();
            let tretorno = entorno.getTemp();
            let l1 = entorno.getETQ();
            let l2 = entorno.getETQ();
            let l4 = entorno.getETQ();
            let l5 = entorno.getETQ();
            let l6 = entorno.getETQ();
            let l7 = entorno.getETQ();

            entorno.addComentario("============== Comparacion de cadenas (igual_igual) ===========");
            entorno.addValor(t1, izq);
            entorno.addValor(t2, der);
            entorno.addETQ(l5);
            entorno.addGetHeap(t3, t1);
            entorno.addGetHeap(t4, t2);
            entorno.addIgualQue(t3, t4, l1);
            entorno.addGoto(l2);
            entorno.addETQ(l1);
            entorno.addValorOperacion(t1, t1, "+",1);
            entorno.addValorOperacion(t2, t2, "+", 1);
            entorno.addGetHeap(t3,t1);
            entorno.addIgualQue(t3, 3,l4);
            entorno.addGoto(l5);
            entorno.addETQ(l4);
            entorno.addGetHeap(t3, t2);
            entorno.addIgualQue(t3, 3, l6);
            entorno.addGoto(l2);
            entorno.addETQ(l6);
            entorno.addComentario("==== cadenas iguales");
            entorno.addValor(tretorno, 1);
            entorno.addGoto(l7);
            entorno.addETQ(l2);
            entorno.addComentario("==== cadenas no iguales");
            entorno.addValor(tretorno, 0);
            entorno.addETQ(l7);

            //guardo los ya usados
            entorno.addTempUsed(t1);
            entorno.addTempUsed(t2);
            entorno.addTempUsed(t3);
            entorno.addTempUsed(t4);
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return tretorno;
        }
        else if ((tipIzq == Expresion.State.STRING || tipDer == Expresion.State.STRING))
        {
            //error semantico
            entorno.addError("RELACIONAL-TRAD-IGUAL","No soportado IGUAL con los tipos izq:"+tipIzq+" der:"+tipDer, this.fila, this.columna);
            return "0";
        }
        else {
            let retorno = entorno.getTemp();
            let etq1 = entorno.getETQ();
            let etq2 = entorno.getETQ();
            let etq3 = entorno.getETQ();
            
            entorno.addIgualQue(izq, der, etq1);
            entorno.addGoto(etq2);
            entorno.addETQ(etq1);
            entorno.addValor(retorno,1);
            entorno.addGoto(etq3);
            entorno.addETQ(etq2);
            entorno.addValor(retorno,0);
            entorno.addETQ(etq3);

            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);

            return retorno;
        }
    }

    public NOTIGUAL(entorno:Entorno):string{
        let izq = this.izquierda.getTraduccion(entorno)
        let der = this.derecha.getTraduccion(entorno)
        let tipIzq:Object = this.izquierda.getTipo(entorno);
        let tipDer:Object = this.derecha.getTipo(entorno);

        if ((tipIzq == Expresion.State.STRING && tipDer == Expresion.State.STRING)
        ||(tipIzq == Expresion.State.CHAR && tipDer == Expresion.State.CHAR))
        {
            let t1 = entorno.getTemp();
            let t2 = entorno.getTemp();
            let t3 = entorno.getTemp();
            let t4 = entorno.getTemp();
            let tretorno = entorno.getTemp();
            let l1 = entorno.getETQ();
            let l2 = entorno.getETQ();
            let l4 = entorno.getETQ();
            let l5 = entorno.getETQ();
            let l6 = entorno.getETQ();
            let l7 = entorno.getETQ();

            entorno.addComentario("============== Comparacion de cadenas (not_igual) ===========");
            entorno.addValor(t1, izq);
            entorno.addValor(t2, der);
            entorno.addETQ(l5);
            entorno.addGetHeap(t3, t1);
            entorno.addGetHeap(t4, t2);
            entorno.addIgualQue(t3, t4, l1);
            entorno.addGoto(l2);
            entorno.addETQ(l1);
            entorno.addValorOperacion(t1, t1, "+",1);
            entorno.addValorOperacion(t2, t2, "+", 1);
            entorno.addGetHeap(t3,t1);
            entorno.addIgualQue(t3, 3,l4);
            entorno.addGoto(l5);
            entorno.addETQ(l4);
            entorno.addGetHeap(t3, t2);
            entorno.addIgualQue(t3, 3, l6);
            entorno.addGoto(l2);
            entorno.addETQ(l6);
            entorno.addComentario("==== cadenas iguales");
            entorno.addValor(tretorno, 0);
            entorno.addGoto(l7);
            entorno.addETQ(l2);
            entorno.addComentario("==== cadenas no iguales");
            entorno.addValor(tretorno, 1);
            entorno.addETQ(l7);

            //guardo los ya usados
            entorno.addTempUsed(t1);
            entorno.addTempUsed(t2);
            entorno.addTempUsed(t3);
            entorno.addTempUsed(t4);
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);
            return tretorno;
        }
        else if ((tipIzq == Expresion.State.STRING || tipDer == Expresion.State.STRING))
        {
            //error semantico
            entorno.addError("RELACIONAL-TRAD-NOTIGUAL","No soportado NOTIGUAL con los tipos izq:"+tipIzq+" der:"+tipDer, this.fila, this.columna);
            return "0";
        }
        else
        {
            let retorno = entorno.getTemp();
            let etq1 = entorno.getETQ();
            let etq2 = entorno.getETQ();
            let etq3 = entorno.getETQ();

            entorno.addNoIgual(izq, der, etq1);
            entorno.addGoto(etq2);
            entorno.addETQ(etq1);
            entorno.addValor(retorno,1);
            entorno.addGoto(etq3);
            entorno.addETQ(etq2);
            entorno.addValor(retorno,0);
            entorno.addETQ(etq3);

            //guardo los ya usados
            entorno.addTempUsed(izq);
            entorno.addTempUsed(der);

            return retorno;
        }
    }
}

export namespace Relacional
{
    export enum TYPE
    {
        IGUAL, IGUAL_REFERENCIA,
        DIFERENTE,
        MAYORIGUAL, MAYORQUE,
        MENORIGUAL, MENORQUE
    }
}