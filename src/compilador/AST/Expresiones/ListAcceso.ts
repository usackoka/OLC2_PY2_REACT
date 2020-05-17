import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { InterfazAcceso } from "../IntefazAcceso";
import { Primitivo } from "./Primitivo";
import { AccesoArreglo } from "./AccesoArreglo";
import { TipoArreglo } from "./TipoArreglo";

export class ListAcceso extends Expresion implements InterfazAcceso{

    subAcceso:Expresion;
    acceso:Expresion;

    public constructor(subAcceso:Expresion,acceso:Expresion,fila:number,columna:number){
        super();
        this.subAcceso = subAcceso;
        this.acceso = acceso;
        this.fila = fila;
        this.columna = columna;
    }

    //getValor
    public getTraduccion(entorno:Entorno):string{
        let valorSub = this.subAcceso.getTraduccion(entorno)
        if(this.acceso==null) return valorSub;

        if(this.subAcceso.getTipo(entorno) instanceof TipoArreglo){
            //si es arreglo sólo se le puede aplicar el atributo length
            if(this.acceso instanceof Primitivo){
                if(this.acceso.value.toString().toLowerCase() != "length"){
                    entorno.addError("Arreglo-Atributo","El arreglo no posee el atributo: "+this.acceso.value.toString(),this.fila,this.columna);
                    return "0";
                }
                let ret = entorno.getTemp()
                entorno.addComentario("========== get length of array")
                entorno.addGetHeap(ret,valorSub)
                return ret
            }
        }
    }

    public getTipo(entorno:Entorno):Object{
        let tipoSub = this.subAcceso.getTipo(entorno)
        if(this.acceso==null) return tipoSub;

        if(this.subAcceso.getTipo(entorno) instanceof TipoArreglo){
            //si es arreglo sólo se le puede aplicar el atributo length
            if(this.acceso instanceof Primitivo){
                if(this.acceso.value.toString().toLowerCase() != "length"){
                    entorno.addError("Arreglo-Atributo","El arreglo no posee el atributo: "+this.acceso.value.toString(),this.fila,this.columna);
                    return Expresion.State.INTEGER;
                }
                return Expresion.State.INTEGER;
            }
        }
    }

    public getPosicion(entorno:Entorno):string{
        if(this.subAcceso instanceof Primitivo || this.subAcceso instanceof AccesoArreglo){
            return this.subAcceso.getPosicion(entorno)
         }else{
             return "";
         }
    }

    public isInHeap(entorno:Entorno):boolean{
        if(this.subAcceso instanceof Primitivo || this.subAcceso instanceof AccesoArreglo){
           return this.subAcceso.isInHeap(entorno)
        }else{
            return true;
        }
    }

    public isConst(entorno:Entorno):boolean{
        if(this.subAcceso instanceof ListAcceso){
            return this.subAcceso.isConst(entorno)
        }
        else if(this.subAcceso instanceof Primitivo){
            let bool =  entorno.isConst(this.subAcceso.value.toString(),this.fila,this.columna);
            if(bool) entorno.addError("Constante: "+this.subAcceso.value.toString(), "No se puede modificar el valor de una constante",this.fila,this.columna)
        }
        else if(this.subAcceso instanceof AccesoArreglo) {
            let bool =  entorno.isConst(this.subAcceso.id,this.fila,this.columna);
            if(bool) entorno.addError("Constante: "+this.subAcceso.id, "No se puede modificar el valor de una constante",this.fila,this.columna)
        
        }
        
        return false;
    }
}