import { Entorno } from "../Entorno";
import { Sentencia } from "../Sentencia";
import { Expresion } from "../Expresion";
import { Nodo } from "../Nodo";

export class While extends Sentencia{

    condicion:Expresion;
    instrucciones:Array<Nodo>
    dowhile:boolean;

    public constructor(condicion:Expresion,instrucciones:Array<Nodo>,dowhile:boolean,fila:number,columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
        this.condicion = condicion;
        this.instrucciones = instrucciones;
        this.dowhile = dowhile;
    }

    public getGrafica(entorno:Entorno):string{
        return "0";
    }

    public getTraduccion(entorno:Entorno):string{
        //paso 2
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        this.etqBreak = entorno.getETQ();
        this.etqContinue = entorno.getETQ();
        
        if(this.dowhile){
            //paso 3
            entorno.addComentario("=========== DO WHILE ==============");
            entorno.addETQ(etq2);
            //paso 4,nuevo entorno
            entorno = new Entorno(entorno);
            //paso 5
            for (let nodo of this.instrucciones)
            {
                nodo.copiarEtiquetas(this)
                nodo.getTraduccion(entorno);
            }
            //paso 1
            entorno.addComentario("====== condicion do while ==========");
            entorno.addETQ(this.etqContinue);
            let temp = this.condicion.getTraduccion(entorno);
            entorno.addComentario("=================================");
            entorno.addIgualQue(temp, 1, etq2);
            //temporales usados
            entorno.addTempUsed(temp);
            entorno.addETQ(this.etqBreak);
            entorno.addComentario("===================================");
            entorno = entorno.padre;
        }else{
            //paso 3
            entorno.addComentario("=========== WHILE ==============");
            entorno.addETQ(this.etqContinue);
            //paso 1
            entorno.addComentario("====== condicion while ==========");
            let temp = this.condicion.getTraduccion(entorno);
            entorno.addComentario("=================================");

            entorno.addIgualQue(temp, 1, etq1);
            entorno.addGoto(this.etqBreak);
            entorno.addETQ(etq1);
            //paso 4,nuevo entorno
            entorno = new Entorno(entorno);
            //temporales usados
            entorno.addTempUsed(temp);
            //paso 5
            for (let nodo of this.instrucciones)
            {
                nodo.copiarEtiquetas(this)
                nodo.getTraduccion(entorno);
            }
            entorno.addGoto(this.etqContinue);
            entorno.addETQ(this.etqBreak);
            entorno.addComentario("===================================");
            entorno = entorno.padre;
        }
        return "";
    }
}