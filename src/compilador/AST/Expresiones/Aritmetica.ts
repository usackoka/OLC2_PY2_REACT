import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

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
        return "";
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
                return Expresion.State.CHAR;
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