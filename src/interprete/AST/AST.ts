import { Nodo4D } from './Nodo4D'
import { ETQ4D } from './ETQ4D'
import {R4D} from './R4D'
import {Call4D} from './Call4D'
import { Print } from './Print';
import {Asignacion} from './Asignacion';
import {JMP} from './JMP';
import { SaltoCond } from './SaltoCond';

export class AST {
    nodos: Array<Nodo4D>;
    mensajes: Array<string>;
    temporales: Map<string, number>;
    etiquetas: Map<string, number>;
    stack: Array<number>;
    heap: Array<number>;
    lineaActual:number;
    pilaRetornos:Array<number>;
    ignorarInstrucciones:boolean;
    //===================================

    //============== variables traduccion assembler =
    traduccion:string;
    temporalesAssembler:Array<string>;
    //==============================================

    public constructor() {
        //========================================================
        this.nodos = [];
        this.mensajes = [];
        this.temporales = new Map();
        this.etiquetas = new Map();
        this.pilaRetornos = [];
        this.stack = [];
        this.ignorarInstrucciones = false;
        this.heap = [];
        this.lineaActual = 0;

        //inicializo P Y H
        this.temporales.set("p",0);
        this.temporales.set("h",0);
        
        //====================
        this.traduccion = "";
        this.temporalesAssembler = [];
    }

    public ejecutar():void {
        let numeroNodo: number = 0;
        this.nodos.forEach(value => {
            if(value instanceof ETQ4D){
                this.etiquetas.set((<ETQ4D>value).idETQ,numeroNodo);
            }
            numeroNodo++;
        });

        this.exec4D();
    }

    public exec4D(){
        //ejecuto top down declaraciones y llamadas
        while (this.lineaActual < this.nodos.length) {
            let nodo:Nodo4D = this.nodos[this.lineaActual];
            
            if(nodo instanceof ETQ4D){
                if((<ETQ4D>nodo).proc){
                    this.ignorarInstrucciones = true;
                }
                this.lineaActual ++;
            }
            else if(nodo instanceof R4D && this.ignorarInstrucciones){
                this.ignorarInstrucciones = false;
                this.lineaActual ++;
            }
            else if(this.ignorarInstrucciones){
                this.lineaActual ++;
            }
            else{
                nodo.getValor(this);
                this.lineaActual++;
            }
        }
    }

    public ejecutarCall(idCall:string){
        if(!this.etiquetas.has(idCall)){
            //error no se encontró el método tal
            console.error("No se encontró el método: "+idCall);
        }

        try {
            this.pilaRetornos.push(this.lineaActual);
            const c = this.etiquetas.get(idCall);
            this.lineaActual = c == undefined?0:c;
        } catch (error) {
            this.lineaActual ++;
            console.log(error);
        }
    }

    public ejecutarETQ(idETQ:string){
        if(!this.etiquetas.has(idETQ)){
            console.log("No se encontró la etiqueta: "+idETQ);
        }
        const c = this.etiquetas.get(idETQ);
        this.lineaActual = c == undefined? 0:c;
    }

    public getStack(index:number):number{
        return this.stack[index];
    }

    public setStack(index:number, value:number){
        if(value>this.stack.length){
            //stackoverflow
        } 

        this.stack[index] = value;
    }

    public getHeap(index:number):number{
        return this.heap[index];
    }

    public setHeap(index:number, value:number){
        if(index>this.heap.length){
            //heapoverflow
        }

        this.heap[index] = value;
    }

    public setTemporal(id:string, value:number){
        id = id.toLowerCase();
        this.temporales.set(id,value);
    }

    public getTemporal(id:string):number{
        id = id.toLowerCase();
        if(this.temporales.has(id)){
            const c = this.temporales.get(id);
            return c == undefined?0:c;
        }else{
            console.error("No existe el temporal: "+id);
            return 0;
        }
    }   
  
    public ejecutarRet(){ 
        if(this.pilaRetornos.length>0){
            const c = this.pilaRetornos.pop();
            this.lineaActual = c == undefined?0:c;
        }
    } 

    //====================================================================================
    //================= CREACION DE CLASES DESDE EL JISON ================================
    //====================================================================================
    public addNewETQ(idETQ:string, fila:Number, columna:Number, proc:boolean){
        //idETQ = idETQ.toLowerCase();
        this.nodos.push(new ETQ4D(idETQ,fila,columna,proc));
    }

    public addNewR4D(idProc:string, fila:number, columna:number){
        //idProc = idProc.toLowerCase();
        this.nodos.push(new R4D(idProc, fila, columna));
    }

    public addNewCall4D(idCall:string, fila:number, columna:number){
        //idCall = idCall.toLowerCase();
        this.nodos.push(new Call4D(idCall,fila,columna));
    }

    public addNewPrint(cadena:string, expresion:Nodo4D ,fila:number, columna:number){
        this.nodos.push(new Print(cadena, expresion,fila, columna));
    }

    public addNewAsignacion(operador:string, valor1:string, valor2:Object, direccion:object, fila:number, columna:number){
        this.nodos.push(new Asignacion(operador, valor1, valor2, direccion, fila, columna));
    }

    public addNewJMP(idETQ:string, fila:number, columna:number){
        //idETQ = idETQ.toLowerCase();
        this.nodos.push(new JMP(idETQ,fila,columna));
    }

    public addNewCondicional(salto:string, valor1:Nodo4D, valor2:Nodo4D, idETQ:string, fila:number, columna:number){
        //salto = salto.toLowerCase();
        //idETQ = idETQ.toLowerCase();
        this.nodos.push(new SaltoCond(salto,valor1,valor2,idETQ,fila,columna));
    }

    //=============================== TRADUCCION ASSEMBLER ===========================================
    public addTraduccion(trad:string){
        this.traduccion += trad+"\n";
    }

    public addTemporalASM(temporal:string){
        if(this.temporalesAssembler.indexOf(temporal)==-1){
            this.temporalesAssembler.push(temporal);
        }
    }

    public getTraduccion():string{
        this.temporalesAssembler = [];
        this.traduccion = "";
        let cadena:string = "";

        cadena += this.getMacros();
        cadena += this.PrintNum();
        cadena += "\n\n.model huge ;tipo de ejecutable\n";
        cadena += "\n.stack 10000h;seccion de pila\n";

        this.nodos.forEach(nodo => {
            nodo.getTraduccion(this);
        });

        cadena += "\n.data\n";
        this.temporalesAssembler.forEach(element => {
            cadena+=element+" dw 0\n";
        });

        cadena += "\nstackk dw 15000 dup(0)\n";
        cadena += "heap dw 15000 dup(0)\n";
        cadena += "\n.code\n";
        cadena += "mov ax,@data\n";
        cadena += "mov ds,ax\n\n\n";
        cadena += this.traduccion;

        cadena += "\n;========== FIN ASSEMBLER =================\n";
        cadena += "jmp EXIT_PROGRAM\n" +
                        "EXIT_PROGRAM:\n"+
                        "mov ah, 4ch\n"+
                        "mov al, 00h\n"+
                        "int 21h\n"+
                        "end\n";

        return cadena;
    }

    public getMacros():string{
        return "\n;--------------MACRO IMPRESION DE CARACTER------------------\n" +
                "nativa_printChar macro caracter\n" +
                "mov ah,02h\n" + 
                "mov dl,caracter\n" +
                "int 21h\n" +
                "endm\n\n";
    }

    private PrintNum() : string{
        let cadena : string = "printnum macro _num \n\tLOCAL NextBin,FinBin\n\t"
        + "pusha\n\tmov ax, _num \n\tmov cx, 00h \n\tmov bx,0Ah \n\tcmp ax,8000h \n\tjbe NextBin \n\t"
        + "nativa_printChar 2dh \n\tneg ax \n\tNextBin: \n\tmov dx,00h \n\tdiv bx \n\tadd dl,30h \n\tpush dx \n\t"
        + "inc cx \n\tcmp ax,09h \n\tjg NextBin \n\tadd al,30h \n\tnativa_printChar al \n\tFinBin: \n\tpop ax \n\tnativa_printChar al \n\t"
        + "loop FinBin \n\tpopa \nendm\n";
        return cadena;
    }

}
