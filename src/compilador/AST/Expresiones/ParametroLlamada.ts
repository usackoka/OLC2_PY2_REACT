import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class ParametroLlamada extends Expresion{

    expresion:Expresion;
    porReferencia:boolean;

    public constructor(expresion:Expresion,porReferencia:boolean){
        super();
        this.fila = expresion.fila;
        this.columna = expresion.columna;
        this.expresion = expresion;
        this.porReferencia = porReferencia;
    }

    public getGrafica(entorno:Entorno){
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        if(this.porReferencia){
            //pendiente
            return "-1";
        }else{
            return this.expresion.getTraduccion(entorno);
        }
    }

    public getTipo(entorno:Entorno):Object{
        return this.expresion.getTipo(entorno);
    }
}