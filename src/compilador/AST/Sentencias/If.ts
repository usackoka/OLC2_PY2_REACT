import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Sentencia } from "../Sentencia";
import { Nodo } from "../Nodo";
import { Relacional } from "../Expresiones/Relacional";

export class If extends Sentencia{

    condicion:Expresion;
    instrucciones:Array<Nodo>
    elseif:Sentencia;

    public constructor(condicion:Expresion, instrucciones:Array<Nodo>, elseif:Sentencia, fila:number, columna:number){
        super();
        this.condicion = condicion;
        this.fila = fila;
        this.columna = columna;
        this.instrucciones = instrucciones;
        this.elseif = elseif;
    }

    public setExpresionSwitch(expresion:Expresion){
        this.condicion = new Relacional(Relacional.TYPE.IGUAL,this.condicion,expresion,this.fila,this.columna);
        if(this.elseif != null && this.elseif instanceof If){
            this.elseif.setExpresionSwitch(expresion);
        }
    }

    public getTraduccion(entorno:Entorno):string{
        //paso1
        let temp = this.condicion.getTraduccion(entorno)
        //paso 2
        let etq2 = entorno.getETQ();
        this.etqSalidaIf = entorno.getETQ();
        //paso 3
        entorno.addComentario("=============== IF =================");
        entorno.addNoIgual(temp, 1, etq2);
        //paso 4,nuevo entorno
        entorno = new Entorno(entorno);
        //temporales usados
        entorno.addTempUsed(temp);
        //paso 5
        this.instrucciones.forEach(nodo =>{
            nodo.copiarEtiquetas(this);
            nodo.getTraduccion(entorno);
        });
        entorno.addGoto(this.etqSalidaIf);
        entorno.addETQ(etq2);
        //regreso a mi entorno
        entorno = entorno.padre;
        //else
        if (this.elseif!=null)
        {
            //otro entorno :3
            entorno = new Entorno(entorno);
            this.elseif.copiarEtiquetas(this)
            this.elseif.getTraduccion(entorno);
            //saco entorno
            entorno = entorno.padre;
        }
        //salida todo
        entorno.addETQ(this.etqSalidaIf);
        entorno.addComentario("=============== FIN IF =================");

        return "";
    }
}