import { Principal } from "./Principal";

export class Entorno {
    principal:Principal;
    padre:Entorno;
    size:number;
    temporalesUsados:Array<String>;

    public constructor(padre:Entorno, principal?:Principal){
        this.size = 0;
        this.padre = padre;
        this.temporalesUsados = [];
        //guardo principal en el padre, para poder hacer uso de los métodos de traducción.
        this.principal=principal?principal:null;

        //si existe el padre, sumo el tamaño al entorno
        if (padre!=null) {
            this.temporalesUsados = padre.temporalesUsados;
            this.size += padre.size;
        }
    }

    public addTempUsed(id:string) {
        if (!this.temporalesUsados.includes(id))
        {
            this.temporalesUsados.push(id);
        }
    }

    /**
     * ===============================================================================================================
     * ===============================================================================================================
     * ===============================================================================================================
     * ===============================================================================================================
     * ===============================================================================================================
     */

    //Recorro mis padres, hasta llegar al entorno superior, el cual su padre es null
    getEntornoGlobal():Entorno{
        return this.padre==null?this:this.padre.getEntornoGlobal();
    }

    public addComentario(cadena:string){
        this.getEntornoGlobal().principal.addComentario(cadena);
    }
    
    public addError(lexema:string,mensaje:string, fila:number, columna:number){
        this.getEntornoGlobal().principal.addError(lexema, mensaje, fila, columna);
    }
    
    public addTraduccion(cadena:string){
        this.getEntornoGlobal().principal.addTraduccion(cadena);
    }
    
    public getTemp():string{
        return this.getEntornoGlobal().principal.getTemp();
    }
    
    public getETQ():string{
        return this.getEntornoGlobal().principal.getETQ();
    }

    public igual1(condicion:string, etiqueta:string){
        this.getEntornoGlobal().principal.igual1(condicion,etiqueta);
    }
    
    public addIgualQue(condicion:string,value:Object, etiqueta:string){
        this.getEntornoGlobal().principal.addIgualQue(condicion,value,etiqueta);
    }
    
    public addMenorQue(condicion:string,value:Object, etiqueta:string){
        this.getEntornoGlobal().principal.addMenorQue(condicion,value,etiqueta);
    }
    
    public addNoIgual(condicion:string,value:Object, etiqueta:string){
        this.getEntornoGlobal().principal.addNoIgual(condicion,value,etiqueta);
    }
    
    public addMayorQue(condicion:string,value:Object, etiqueta:string){
        this.getEntornoGlobal().principal.addMayorQue(condicion,value,etiqueta);
    }
    
    public addMayorIgual(condicion:string,value:Object, etiqueta:string){
        this.getEntornoGlobal().principal.addMayorIgual(condicion,value,etiqueta);
    }
    
    public addMenorIgual(condicion:string,value:Object, etiqueta:string){
        this.getEntornoGlobal().principal.addMenorIgual(condicion,value,etiqueta);
    }
    
    public addGoto(etq:string){
        this.getEntornoGlobal().principal.addGoto(etq);
    }
    
    public addETQ(etq:string){
        this.getEntornoGlobal().principal.addETQ(etq);
    }
    
    public addValorEnHeap(posicion:string, valor:Object){
        this.getEntornoGlobal().principal.addValorEnHeap(posicion,valor);
    }
    
    public addValorEnStack(posicion:string, valor:Object){
        this.getEntornoGlobal().principal.addValorEnStack(posicion,valor);
    }
    
    public addCall(idCall:string){
        this.getEntornoGlobal().principal.addCall(idCall);
    }
    
    public addValor(direccion:string, valor:Object){
        this.getEntornoGlobal().principal.addValor(direccion,valor);
    }
    
    public addGetStack(direccion:string, posicion:Object){
        this.getEntornoGlobal().principal.addGetStack(direccion,posicion);
    }
    
    public addGetHeap(direccion:string, posicion:string){
        this.getEntornoGlobal().principal.addGetHeap(direccion,posicion);
    }
    
    public addValorOperacion(direccion:string, valor1:Object, operador:string ,valor2:Object){
        this.getEntornoGlobal().principal.addValorOperacion(direccion,valor1,operador,valor2);
    }
    
    public incH(){
        this.getEntornoGlobal().principal.incH();
    }
    
    public addProc(idProc:string){
        this.getEntornoGlobal().principal.addProc(idProc);
    }
    
    public addEnd(idProc:string){
        this.getEntornoGlobal().principal.addEnd(idProc);
    }
}