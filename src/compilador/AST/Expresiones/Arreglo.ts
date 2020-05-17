import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { TipoArreglo } from "./TipoArreglo";

export class Arreglo extends Expresion{

    limite:Expresion;
    valores:Array<Expresion>;

    public constructor(TIPO:Object,limite:Expresion,valores:Array<Expresion>,fila:number,columna:number){
        super();
        this.TIPO = TIPO;
        this.limite = limite;
        this.valores = valores;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        //guardo el H de dónde se guardará mi arreglo
        entorno.addComentario("====== instanciando arreglo")
        let ret = entorno.getTemp();
        entorno.addValor(ret,"H")
        let etq1 = entorno.getETQ()
        
        if(this.TIPO!=null){
            //declaracion con límite
            entorno.addComentario("==== obteniendo límite del arreglo");
            let limit = this.limite.getTraduccion(entorno);
            let t1 = entorno.getTemp();
            let etq2 = entorno.getETQ();
            entorno.addValor(t1,limit);
            entorno.addComentario("=== en la primera posición guardo la dimensión");
            entorno.addValorEnHeap("H",limit);
            entorno.incH();
            entorno.addETQ(etq2);
            entorno.addIgualQue(t1,0,etq1);
            entorno.addValorEnHeap("H",Expresion.getDefecto(this.TIPO,entorno));
            entorno.incH();
            entorno.addValorOperacion(t1,t1,"-",1);
            entorno.addGoto(etq2);
        }else{
            //declaracion con expresiones
            let t1 = entorno.getTemp();
            entorno.addComentario("=== en la primera posición guardo la dimensión");
            entorno.addValorEnHeap("H",this.valores.length);
            entorno.incH();
            entorno.addValor(t1,"H")
            entorno.addValorOperacion("H","H","+",this.valores.length);
            this.valores.forEach(valor=>{
                entorno.addValorEnHeap(t1,valor.getTraduccion(entorno));
                entorno.addValorOperacion(t1,t1,"+",1)
            })
        }

        entorno.addComentario("=========== fin arreglo")
        entorno.addETQ(etq1)
        entorno.addComentario("======= fin instancia arreglo")
        return ret
    }

    public getTipo(entorno:Entorno):Object{
        return new TipoArreglo(this.TIPO!=null?this.TIPO:this.getTipoExpresiones(entorno),this.fila,this.columna);
    }

    public getTipoExpresiones(entorno:Entorno):Object{
        return this.valores.length>0?this.valores[0].getTipo(entorno):Expresion.State.NULL;
    }
}