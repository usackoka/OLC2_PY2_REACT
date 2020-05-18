import { Nodo } from "./Nodo";

export class Entorno {

    instrucciones:Array<Nodo>
    optimizacion:string
    optimizaciones:[{no: number, regla: number, descripcion: string, fila: number, columna: number}]
    contadorOptimizaciones:number;

    constructor () {
        this.instrucciones = [];
        this.optimizacion = "";
        this.optimizaciones = [{no: 0, regla: 0, descripcion: '', fila: 0, columna: 0}];
        this.optimizaciones.pop()
        this.contadorOptimizaciones = 0;
    }

    public addOptimizacion(opt:{regla:number,fila:number,columna:number}){
        this.optimizaciones.push({
            no: this.contadorOptimizaciones++, 
            regla: opt.regla, 
            descripcion: this.getDescripcionMirilla(opt.regla), 
            fila: opt.fila, 
            columna: opt.columna
        })
    }
    
    public getMirilla(){
        //obtengo la mirilla de cada nodo
        this.instrucciones.forEach(nodo=>{
            this.optimizacion += nodo.getMirrilla(this)+"\n"
        })

        return this.optimizacion
    }

    public getDescripcionMirilla(regla:number):string{
        switch(regla){
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                return "Simplificación algebraica y por fuerza"
        }
        return "Optimización sin descripción"
    }
}