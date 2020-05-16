import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";

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

        let tmp:string = entorno.getTemp()
        let tmpValor = this.expresion.getTraduccion(entorno)
        entorno.addComentario("==== guardando valor ==========");
        let posicion = entorno.getValor(this.id, this.fila, this.columna);
        if(entorno.isGlobal(this.id, this.fila, this.columna)){
            entorno.addValorEnHeap(posicion,tmpValor);
        }else{
            entorno.addValorOperacion(tmp, "P", "+", posicion);
            entorno.addValorEnStack(tmp, tmpValor);
        }
        entorno.addTempUsed(tmp);
        entorno.addTempUsed(tmpValor);
        entorno.addComentario("============== FIN REASIGNACION VARIABLE =================");
        return "";
    }
}