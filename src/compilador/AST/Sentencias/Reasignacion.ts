import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";
import { ListAcceso } from "../Expresiones/ListAcceso";

export class Reasignacion extends Sentencia{

    acceso:ListAcceso;
    expresion:Expresion;

    public constructor(acceso:ListAcceso, expresion:Expresion, fila:number, columna:number){
        super();
        this.acceso = acceso;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }   

    public getGrafica(entorno:Entorno){
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("=================== REASIGNACION DE VARIABLE ===================");
        //validar si es constante
        if(this.acceso.isConst(entorno)){
            return "";
        }

        let tmp:string = entorno.getTemp()
        let tmpValor = this.expresion.getTraduccion(entorno)
        entorno.addComentario("==== guardando valor ==========");
        let posicion = this.acceso.getPosicion(entorno);
        if(this.acceso.isInHeap(entorno)){
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