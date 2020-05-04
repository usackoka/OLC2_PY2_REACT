import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Sentencia } from "../Sentencia";
import { Nodo } from "../Nodo";

export class Else extends Sentencia{

    instrucciones:Array<Nodo>

    public constructor(instrucciones:Array<Nodo>, fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
        this.instrucciones = instrucciones;
    }

    public getTraduccion(entorno:Entorno):string{
        //paso 3
        entorno.addComentario("=============== Else =================");
        //paso 4,nuevo entorno
        entorno = new Entorno(entorno);
        //paso 5
        this.instrucciones.forEach(nodo =>{
            nodo.copiarEtiquetas(this);
            nodo.getTraduccion(entorno);
        });
        //regreso a mi entorno
        entorno = entorno.padre;
        entorno.addComentario("=============== FIN ELSE =================");

        return "";
    }
}