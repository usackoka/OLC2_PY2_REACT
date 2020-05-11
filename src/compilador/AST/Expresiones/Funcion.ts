import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Parametro } from "./Parametro";
import { Nodo } from "../Nodo";
import { Simbolo } from "../Simbolo";

export class Funcion extends Expresion{

    idFuncion:string;
    parametros:Array<Parametro>;
    instrucciones:Array<Nodo>;

    public constructor(TIPO:Object, idFuncion:string, parametros:Array<Parametro>, 
        instrucciones:Array<Nodo>, fila:number, columna:number){
        super();
        this.TIPO = TIPO;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
        this.fila = fila;
        this.columna = columna;
        this.idFuncion = idFuncion;
    }

    public getTipo(entorno:Entorno):Object{
        return this.TIPO;
    }

    public getTraduccion(entorno:Entorno):string {
        let idFunc:string = this.getNombreTraduccion(entorno);
        let etqRetorno:string = entorno.getETQ();
        entorno.addComentario("====================================================");
        entorno.addComentario("======== Funcion: " + idFunc + " ============");
        entorno.addComentario("====================================================");

        entorno.addProc(idFunc);

        //creo nuevo entorno
        entorno = new Entorno(entorno);
        entorno.size = 2;

        //guardo los ids de los parámetros
        let i:number = 2;
        this.parametros.forEach(parametro=>{
            let s:Simbolo = new Simbolo(parametro.TIPO,parametro.id,i,false,this.fila,this.columna);
            i++;
            entorno.addSimbolo(s);
        });

        //temporal bandera
        entorno.primerTemporal = entorno.getContadorTemporales();
        entorno.temporalesUsados = [];

        this.instrucciones.forEach(nodo => {
            nodo.etqRetorno = etqRetorno;
            nodo.nombreFuncion = this.idFuncion;
            nodo.getTraduccion(entorno);
        });

        //saco el entorno
        entorno = entorno.padre;
        entorno.primerTemporal = entorno.getContadorTemporales();
        entorno.addETQ(etqRetorno);
        entorno.addEnd(idFunc);
        
        entorno.addComentario("====================================================");
        entorno.addComentario("======== FIN Funcion: " + idFunc + " ========");
        entorno.addComentario("====================================================");
        
        return "";
    }
    
    public getNombreTraduccion(entorno:Entorno):string
    {
        let firma:string = "";
        
        if(this.parametros!=null){
            this.parametros.forEach(p=>{
                firma += "_" + p.getTipo(entorno);
            });
        }
        
        return this.idFuncion + firma;
    }
}