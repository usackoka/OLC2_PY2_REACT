import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { TipoArreglo } from "./TipoArreglo";
import { Primitivo } from "./Primitivo";
import { InterfazAcceso } from "../IntefazAcceso";

export class AccesoArreglo extends Expresion implements InterfazAcceso{

    index:Expresion;
    id:string;

    public constructor(id:string,index:Expresion,fila:number,columna:number){
        super();
        this.index = index;
        this.id = id;
        this.fila = fila;
        this.columna = columna;
    }

    public getPosicion(entorno:Entorno):string{
        return "";
    }

    public isInHeap(entorno:Entorno):boolean{
        return entorno.isGlobal(this.id,this.fila,this.columna);
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("===== acceso a arreglo")
        let ret = entorno.getTemp()
        let punteroArreglo = entorno.getTemp()
        let t1 = entorno.getTemp()
        let index = entorno.getTemp()
        let indexofbound = entorno.getETQ()
        let fin = entorno.getETQ()
        entorno.addComentario("===== index a obtener del arreglo")
        entorno.addValor(index,this.index.getTraduccion(entorno))
        entorno.addComentario("==== obtengo la posición en heap del arreglo")
        let prim = new Primitivo(this.id,Expresion.State.ID,this.fila,this.columna);
        entorno.addValor(punteroArreglo,prim.getTraduccion(entorno))
        entorno.addComentario("==== pregunto si el index es mayor al tamaño del arreglo")
        entorno.addGetHeap(ret,punteroArreglo)
        entorno.addMayorIgual(index,ret,indexofbound)
        entorno.addValorOperacion(punteroArreglo,punteroArreglo,"+",1)
        entorno.addValorOperacion(punteroArreglo,punteroArreglo,"+",index)
        entorno.addGetHeap(ret,punteroArreglo)
        entorno.addGoto(fin)
        entorno.addComentario("=== etiqueta indexoutofbounds")
        entorno.addETQ(indexofbound)
        entorno.addComentario("===== fin acceso arreglo")
        entorno.addETQ(fin)
        return ret;
    }

    public getTipo(entorno:Entorno):Object{
        this.TIPO = entorno.getTipo(this.id,this.fila,this.columna)
        if(this.TIPO instanceof TipoArreglo){
            return this.TIPO.TIPO;
        }else{
            entorno.addError('Arreglo: '+this.id
            ,"No se puede realizar un acceso porque la variable no es de tipo Arreglo", this.fila,this.columna)
        }
    }
}