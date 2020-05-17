import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { InterfazAcceso } from "../IntefazAcceso";
import { Primitivo } from "./Primitivo";
import { AccesoArreglo } from "./AccesoArreglo";

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
    }

    public getTipo(entorno:Entorno):Object{
        let tipoSub = this.subAcceso.getTipo(entorno)
        if(this.acceso==null) return tipoSub;
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