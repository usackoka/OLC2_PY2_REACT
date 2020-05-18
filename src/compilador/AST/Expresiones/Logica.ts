import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Logica extends Expresion{

    izquierda:Expresion;
    derecha:Expresion;
    TIPO_OPERACION:Logica.TYPE;

    public constructor(TIPO_OPERACION:Logica.TYPE,izquierda:Expresion,derecha:Expresion,fila:number,columna:number){
        super();
        this.TIPO_OPERACION = TIPO_OPERACION;
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.fila = fila;
        this.columna = columna;
    }

    public getGrafica(entorno:Entorno){
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        switch(this.TIPO_OPERACION){
            case Logica.TYPE.AND:
                return this.AND(entorno);
            case Logica.TYPE.OR:
                return this.OR(entorno);
            case Logica.TYPE.XOR:
                return this.XOR(entorno);
            default:
                entorno.addError("LOGICA-TRAD:"+this.TIPO_OPERACION,"No se encontró este tipo de Operación",this.fila,this.columna);
                return "0";
        }
    }

    public getTipo(entorno:Entorno):Object{
        let tipIzq:Object = this.izquierda.getTipo(entorno);
        let tipDer:Object = this.derecha.getTipo(entorno);

        if (!(tipIzq == Expresion.State.BOOLEAN && tipDer == Expresion.State.BOOLEAN)){
            entorno.addError("LOGICA-GETTIPO:"+this.TIPO_OPERACION,"Se esperaban boolean, Found, Tipo tipIzq:"+tipIzq+" , Tipo tipDer:"+tipDer,this.fila,this.columna);
        }
        //siempre voy a retornar un boolean, únicamente comparo los tipos para saber si marcar error o no
        return Expresion.State.BOOLEAN;
    }

    public AND(entorno:Entorno):string {
        let izq = this.izquierda.getTraduccion(entorno).toString();
        let der = this.derecha.getTraduccion(entorno).toString();
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();
        let etq4 = entorno.getETQ();

        entorno.addIgualQue(izq, 1, etq1);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addIgualQue(der, 1, etq3);
        entorno.addGoto(etq2);
        entorno.addETQ(etq3);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq4);
        entorno.addETQ(etq2);
        entorno.addValor(retorno,0);
        entorno.addETQ(etq4);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }

    public OR(entorno:Entorno):string{
        let izq = this.izquierda.getTraduccion(entorno).toString();
        let der = this.derecha.getTraduccion(entorno).toString();
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();
        let etq4 = entorno.getETQ();
        
        entorno.addIgualQue(izq, 1, etq3);
        entorno.addGoto(etq1);
        entorno.addETQ(etq1);
        entorno.addIgualQue(der, 1, etq3);
        entorno.addGoto(etq2);
        entorno.addETQ(etq3);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq4);
        entorno.addETQ(etq2);
        entorno.addValor(retorno,0);
        entorno.addETQ(etq4);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }

    public XOR(entorno:Entorno):string{
        let izq = this.izquierda.getTraduccion(entorno).toString();
        let der = this.derecha.getTraduccion(entorno).toString();
        let retorno = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        let etq3 = entorno.getETQ();
        let etq4 = entorno.getETQ();

        entorno.addIgualQue(izq, 1, etq1);
        entorno.addIgualQue(der, 1, etq3);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addIgualQue(der, 1, etq2);
        entorno.addGoto(etq3);
        entorno.addETQ(etq3);
        entorno.addValor(retorno, 1);
        entorno.addGoto(etq4);
        entorno.addETQ(etq2);
        entorno.addValor(retorno, 0);
        entorno.addETQ(etq4);

        //guardo los ya usados
        entorno.addTempUsed(izq);
        entorno.addTempUsed(der);

        return retorno;
    }
}

export namespace Logica
{
    export enum TYPE
    {
        AND, OR, XOR
    }
}