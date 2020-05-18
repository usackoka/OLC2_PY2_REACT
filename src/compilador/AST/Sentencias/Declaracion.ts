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
    isGlobal:boolean;

    public constructor(TIPO:Object, listaids:Array<string>, TIPO_VAR:Declaracion.State, 
        expresion:Expresion, fila:number, columna:number){
        super();
        this.TIPO_VAR = TIPO_VAR;
        this.TIPO = TIPO;
        this.listaids = listaids;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
        this.isGlobal = false;
    }   

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("=================== DECLARACION DE VARIABLES ===================");
        this.listaids.forEach(id=>{
            entorno.addComentario("================ DECLARANDO VARIABLE: "+id+" TIPO: "+this.TIPO_VAR)

            //sacando el valor a ingresar
            let tmpValor;
            var tipoValor;
            if (this.expresion != null)
            {
                tmpValor = this.expresion.getTraduccion(entorno);
                tipoValor = this.expresion.getTipo(entorno)
            }
            else{
                tmpValor = entorno.getTemp();
                tipoValor = this.TIPO;
                entorno.addValor(tmpValor, Expresion.getDefecto(this.TIPO,entorno));
            }

            //Pregunto si la variable es global o no
            if(this.isGlobal){
                //si es global, tengo que preguntar la posición en stack que la voy a meter :'v
                //si es global, tengo que preguntar la posición en heap que la voy a meter :'v
                let temp = entorno.getTemp();
                entorno.addValor(temp,"H")
                //guardo la variable
                entorno.addValorEnHeap(temp, tmpValor);
                entorno.incH();

                entorno.addTempUsed(temp);
                entorno.addTempUsed(tmpValor);

                let s:Simbolo = new Simbolo(tipoValor,id.toLowerCase(),temp,
                this.TIPO_VAR==Declaracion.State.CONST,true,
                this.fila, this.columna);

                entorno.addSimboloGlobal(s);
            }else{
                //============== Posicion del entorno en la que se guardará la variable ===================
                let temp = entorno.getTemp();
                //obtengo la posición en la que tengo que guardar la variable
                entorno.addValorOperacion(temp, "P", "+", entorno.size);
                //guardo la variable
                entorno.addValorEnStack(temp, tmpValor);

                entorno.addTempUsed(temp);
                entorno.addTempUsed(tmpValor);

                let s:Simbolo = new Simbolo(tipoValor,id.toLowerCase(),entorno.size,
                this.TIPO_VAR==Declaracion.State.CONST,false,
                this.fila, this.columna);

                entorno.addSimbolo(s);
            }
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