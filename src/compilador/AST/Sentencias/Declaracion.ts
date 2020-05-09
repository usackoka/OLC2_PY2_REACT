import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";
import { Simbolo } from "../Simbolo";

export class Declaracion extends Sentencia{

    listaids:Array<string>;
    TIPO:Object;
    TIPO_VAR:Declaracion.State;
    constante:boolean;
    expresion:Expresion;

    public constructor(TIPO:Object, listaids:Array<string>, TIPO_VAR:Declaracion.State, expresion:Expresion, fila:number, columna:number){
        super();
        this.TIPO_VAR = TIPO_VAR;
        this.TIPO = TIPO;
        this.listaids = listaids;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }   

    public getTraduccion(entorno:Entorno):string{
        let tmpValor;
        this.listaids.forEach(id=>{
            entorno.addComentario("=================== DECLARACION DE VARIABLE: "+id+" ===================");
            if (this.expresion != null)
            {
                tmpValor = this.expresion.getTraduccion(entorno).toString();
                //validar que sea del mismo tipo al que se la asigno
            }
            else{
                tmpValor = entorno.getTemp();
                entorno.addValor(tmpValor, Expresion.getDefecto(this.TIPO,entorno));
            }
            
            //============== Posicion del entorno en la que se guardará la variable ===================
            let temp = entorno.getTemp();
            //su tamEntorno será el tamaño que hay actualmente
            let tamEntorno:number = entorno.tbs.size;
            
            entorno.addValorOperacion(temp, "P", "+",tamEntorno);
            entorno.addValorEnStack(temp, tmpValor);
            
            entorno.addTempUsed(temp);
            entorno.addTempUsed(tmpValor);
            
            let s:Simbolo = new Simbolo();
            entorno.addSimbolo(id.toLowerCase(), s, entorno, this.fila, this.columna);
        });
        
        entorno.addComentario("============== FIN DECLARACION VARIABLES =================");
        return "";
    }
}

export namespace Declaracion
{
    export enum State
    {
        VAR, CONST, GLOBAL, NONE
    }
}