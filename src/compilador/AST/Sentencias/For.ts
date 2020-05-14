import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Sentencia } from "../Sentencia";
import { Nodo } from "../Nodo";

export class For extends Sentencia{

    instrucciones:Array<Nodo>
    inicio_for:Sentencia;
    condicion:Expresion;
    fin_for:Expresion;

    public constructor(inicio_for:Sentencia,condicion:Expresion,fin_for:Expresion
        ,instrucciones:Array<Nodo>, fila:number, columna:number){
        super();
        this.inicio_for = inicio_for;
        this.condicion = condicion;
        this.fin_for = fin_for;
        this.fila = fila;
        this.columna = columna;
        this.instrucciones = instrucciones;
    }

    public getTraduccion(entorno:Entorno):string{
        //paso 3
        let etqTrue = entorno.getETQ()
        this.etqBreak = entorno.getETQ();
        this.etqContinue = entorno.getETQ();

        entorno.addComentario("=============== FOR =================");
        //paso 4,nuevo entorno
        entorno = new Entorno(entorno);
        entorno.addComentario("============== DECLARACION VARIABLE ITERADORA")
        if(this.inicio_for!=null)this.inicio_for.getTraduccion(entorno);
        entorno.addComentario("============== CONDICION FOR")
        entorno.addETQ(this.etqContinue);
        entorno.igual1(this.condicion.getTraduccion(entorno),etqTrue)
        entorno.addGoto(this.etqBreak);
        entorno.addETQ(etqTrue)
        //paso 5
        this.instrucciones.forEach(nodo =>{
            nodo.copiarEtiquetas(this);
            nodo.getTraduccion(entorno);
        });
        entorno.addComentario("============== EXPRESION FOR")
        if(this.fin_for!=null) this.fin_for.getTraduccion(entorno);
        entorno.addGoto(this.etqContinue);
        entorno.addETQ(this.etqBreak);
        //regreso a mi entorno
        entorno = entorno.padre;
        entorno.addComentario("=============== FIN FOR =================");

        return "";
    }
}