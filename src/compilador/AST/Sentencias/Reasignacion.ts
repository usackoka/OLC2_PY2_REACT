import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";
import { Simbolo } from "../Simbolo";

export class Reasignacion extends Sentencia{

    id:string;
    expresion:Expresion;

    public constructor(id:string, expresion:Expresion, fila:number, columna:number){
        super();
        this.id = id;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }   

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("=================== REASIGNACION DE VARIABLE ===================");
        //validar si es constante
        if(entorno.isConst(this.id.toLowerCase(),this.fila,this.columna)){
            entorno.addError("Constante: "+this.id, "No se puede modificar el valor de una constante",this.fila,this.columna)
            return "";
        }
        entorno.addComentario("============== FIN REASIGNACION VARIABLE =================");
        return "";
    }
}