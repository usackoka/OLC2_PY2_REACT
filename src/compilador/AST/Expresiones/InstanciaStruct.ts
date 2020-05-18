import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class InstanciaStruct extends Expresion{

    id:string;

    public constructor(id:string,fila:number, columna:number){
        super();
        this.id = id.toLowerCase();
        this.fila = fila;
        this.columna = columna;
        this.TIPO = this.id;
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, "new "+this.id+"()");
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        entorno.addComentario("==== instanciando struct: "+this.id)

        let struct = entorno.getStruct(this.id,this.fila,this.columna);
        if(struct==null) return "-1";

        let ret = entorno.getTemp()
        entorno.addValor(ret,"H")
        struct.atributos.forEach(atributo=>{
            entorno.addComentario("===== guardando atributo: "+atributo.id)
            entorno.addValorEnHeap("H",atributo.getTraduccion(entorno))
            entorno.incH();
        })
        entorno.addComentario("==== fin instancia struct: "+this.id)
        
        return ret;
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }
}