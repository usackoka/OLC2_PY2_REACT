import { Principal } from "./Principal";
import { Print } from "./Sentencias/Print";
import { Simbolo } from "./Simbolo";
import { Funcion } from "./Expresiones/Funcion";
import { Expresion } from "./Expresion";
import { Struct } from "./Sentencias/Struct";

export class Entorno {
    principal:Principal;
    padre:Entorno;
    size:number;
    primerTemporal:number;
    temporalesUsados:Array<String>;
    tbs:Map<string,Simbolo>;

    public constructor(padre:Entorno, principal?:Principal){
        this.size = 0;
        this.padre = padre;
        this.primerTemporal = 0;
        this.temporalesUsados = [];
        this.tbs = new Map();
        this.contGraph=0;
        this.recorridoArbol="";
        //guardo principal en el padre, para poder hacer uso de los métodos de traducción.
        this.principal=principal?principal:null;

        //si existe el padre, sumo el tamaño al entorno
        if (padre!=null) {
            this.temporalesUsados = padre.temporalesUsados;
            this.size += padre.size;
            this.primerTemporal = padre.primerTemporal;
        }
    }

    public addTempUsed(id:string) {
        if (!this.temporalesUsados.includes(id))
        {
            this.temporalesUsados.push(id);
        }
    }

    public getTipoFuncion(id:string,fila:number,columna:number):Object{
        id = id.toLowerCase();
        if(this.padre!=null){
            return this.padre.getTipoFuncion(id,fila,columna)
        }

        //busco la función
        for(let nodo of this.principal.nodos){
            if(nodo instanceof Funcion){
                if(nodo.getNombreTraduccion(this).toString() == id.toString()){
                    return nodo.TIPO;
                }
            }
        }
        
        this.addError("getTipoFuncion","No existe la funcion: "+id,fila,columna);
        return Expresion.State.STRING;
    }

    public getValor(id:string,fila:number,columna:number):string{
        id = id.toLowerCase();
        if (this.tbs.has(id))
        {
            return this.tbs.get(id).posicion.toString();
        }
        else {
            if (this.padre==null) {
                this.addError("GetValor","No existe la variable: "+id,fila,columna);
                return "-1";
            }
            else {
                return this.padre.getValor(id,fila,columna);
            }
        }
    }

    public isGlobal(id:string,fila:number,columna:number):boolean{
        id = id.toLowerCase();
        if (this.tbs.has(id))
        {
            return this.tbs.get(id).global;
        }
        else {
            if (this.padre==null) {
                this.addError("isGlobal","No existe la variable: "+id,fila,columna);
                return false;
            }
            else {
                return this.padre.isGlobal(id,fila,columna);
            }
        }
    }

    public getTipo(id:string,fila:number,columna:number):Object{
        id = id.toLowerCase();
        if (this.tbs.has(id))
        {
            return this.tbs.get(id).tipo;
        }
        else {
            if (this.padre==null) {
                this.addError("getTipo","No existe la variable: "+id,fila,columna);
                return "-1";
            }
            else {
                return this.padre.getTipo(id,fila,columna);
            }
        }
    }

    public getStruct(id:string,fila:number,columna:number):Struct{
        return this.getEntornoGlobal().principal.getStruct(id,fila,columna)
    }   

    public isConst(id:string,fila:number,columna:number):boolean{
        id = id.toLowerCase();
        if (this.tbs.has(id))
        {
            return this.tbs.get(id).constante;
        }
        else {
            if (this.padre==null) {
                this.addError("isConst","No existe la variable: "+id,fila,columna);
                return false;
            }
            else {
                return this.padre.isConst(id,fila,columna);
            }
        }
    }

    public addSimbolo(s:Simbolo) {
        if (!this.tbs.has(s.id))
        {
            this.tbs.set(s.id, s);
            this.size++;
        }
    }

    public addSimboloGlobal(s:Simbolo) {
        if(this.padre!=null){
            this.padre.addSimboloGlobal(s)
            return;
        }

        if (!this.tbs.has(s.id))
        {
            this.tbs.set(s.id, s);
            this.size++;
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

    public getContadorTemporales():number{
        return this.getEntornoGlobal().principal.contadorTemporales;
    }

    public addPrint(TIPO_PRINT:Print.State,value:Object){
        this.getEntornoGlobal().principal.addPrint(TIPO_PRINT,value);
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

    //================================= VARIABLES PARA LA GRAFICACION DEL AST
    contGraph:number;
    recorridoArbol:string;

    public getNextContGraph():number{
        return this.contGraph++;
    }

    public addNodoGraph(nodo1:string, label:string) {
        this.recorridoArbol += "id_"+nodo1+"[label=\""+label.replace("\"", "")+"\"]"+"\n";
    }
    
    public addRelacion(nodo1:string, nodo2:string){
        this.recorridoArbol += "id_"+nodo1+" -> "+"id_"+nodo2+"\n";
    }
}