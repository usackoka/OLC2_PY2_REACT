import { Nodo } from "./Nodo";

export class Entorno {

    instrucciones:Array<Nodo>
    optimizacion:string
    optimizaciones:[{no: number, regla: number, descripcion: string, fila: number, columna: number}]
    contadorOptimizaciones:number;

    listUtilizadas:Array<string>;

    constructor () {
        this.instrucciones = [];
        this.optimizacion = "";
        this.optimizaciones = [{no: 0, regla: 0, descripcion: '', fila: 0, columna: 0}];
        this.optimizaciones.pop()
        this.contadorOptimizaciones = 0;
        
        this.listUtilizadas = [];
    }
    
    //variables y métodos --- para optimización de bloques
    public addUtilizadas(variable:string){
        this.listUtilizadas.push(variable)
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

    public getBloques(){
        //obtengo la mirilla de cada nodo
        this.instrucciones.forEach(nodo=>{
            this.optimizacion += nodo.getBloque(this)+"\n"
        })

        return this.optimizacion
    }

    
    public getMirilla(){
        //obtengo la mirilla de cada nodo
        this.instrucciones.forEach(nodo=>{
            this.optimizacion += nodo.getMirrilla(this)+"\n"
        })

        //busco todos los que cumplan con la regla 23


        return this.optimizacion
    }

    public getDescripcionBloques(regla:number):string{
        switch(regla){
            case 23:
                return "Redundancia parcial - variables inutilizadas"
        }
        return "Optimización sin descripción"
    }

    public getDescripcionMirilla(regla:number):string{
        switch(regla){
            case 1:
                return "Eliminación de instrucciones redundantes de carga y  almacenamiento "
            case 2:
            case 3:
            case 4:
            case 5:
                return "Eliminación de código inalcanzable "
            case 6:
            case 7:
                return "Optimizaciones de flujo de control "
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