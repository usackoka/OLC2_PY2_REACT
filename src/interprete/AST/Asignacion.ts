import { Nodo4D } from './Nodo4D';
import { AST } from './AST';
import { Primitivo } from './Primitivo';

export class Asignacion extends Nodo4D{

    operador:string;
    valor1:Object;
    valor2:Object;
    direccion:string;

    public constructor(operador:string, valor1:Object, valor2:Object, direccion:string,
        fila:number, columna:number){
        super();
        this.fila = fila;
        this.columna = columna;
        this.operador = operador;
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.direccion = direccion;
    }

    public getValor(arbol:AST):number{
        switch(this.operador){
            case "=":
                this.IGUAL(arbol);
                break;
            case "*":
                this.MUL(arbol);
                break;
            case "/":
                this.DIV(arbol);
                break;
            case "%":
                this.MOD(arbol);
                break;
            case "+":
                this.ADD(arbol);
                break;
            case "-":
                this.SUB(arbol);
                break;
            default:
                console.log("NO EXISTE EL OPERADOR: "+this.operador+" ASIGNACION.TS");
        }
        return -1;
    }

    public IGUAL(arbol:AST){
        //pregunto por la dirección
        if(this.direccion == "stack"){
            arbol.setStack(this.getIndexStruct(arbol),this.getValorStruct(arbol));
        }
        else if(this.direccion == "heap"){
            arbol.setHeap(this.getIndexStruct(arbol),this.getValorStruct(arbol));
        }else{//temporal
            arbol.setTemporal(this.direccion,this.getIndexStruct(arbol));
        }
    }

    public SUB(arbol:AST){
        let number1:number = (<Nodo4D>this.valor1).getValor(arbol);
        let number2:number = (<Nodo4D>this.valor2).getValor(arbol);
        let result:number = number1-number2;
        arbol.setTemporal(this.direccion,result);
    }

    public ADD(arbol:AST){
        let number1:number = (<Nodo4D>this.valor1).getValor(arbol);
        let number2:number = (<Nodo4D>this.valor2).getValor(arbol);
        let result:number = number1+number2;
        arbol.setTemporal(this.direccion,result);
    }

    public MOD(arbol:AST){
        let number1:number = (<Nodo4D>this.valor1).getValor(arbol);
        let number2:number = (<Nodo4D>this.valor2).getValor(arbol);
        let result:number = number1%number2;
        arbol.setTemporal(this.direccion,result);
    }

    public DIV(arbol:AST){
        let number1:number = (<Nodo4D>this.valor1).getValor(arbol);
        let number2:number = (<Nodo4D>this.valor2).getValor(arbol);
        let result:number = number1/number2;
        arbol.setTemporal(this.direccion,result);
    }

    public MUL(arbol:AST){
        let number1:number = (<Nodo4D>this.valor1).getValor(arbol);
        let number2:number = (<Nodo4D>this.valor2).getValor(arbol);
        let result:number = number1*number2;
        arbol.setTemporal(this.direccion,result);
    }

    public getIndexStruct(arbol:AST):number{
        if(this.valor1.toString() === "stack"){
            return arbol.getStack(this.getValorStruct(arbol));
        }else if(this.valor1.toString() === "heap"){
            return arbol.getHeap(this.getValorStruct(arbol));
        }
        return (<Nodo4D>this.valor1).getValor(arbol);
    }

    public getValorStruct(arbol:AST):number{
        return (<Nodo4D>this.valor2).getValor(arbol);
    }

    //======================== TRADUCCION ASSEMBLER =================================
    public getTraduccion(arbol:AST):string{
        switch(this.operador){
            case "=":
                return this.IGUAL_ASM(arbol);
            case "*":
                return this.MUL_ASM(arbol);
            case "/":
                return this.DIV_ASM(arbol);
            case "%":
                return this.MOD_ASM(arbol);
            case "+":
                return this.ADD_ASM(arbol);
            case "-":
                return this.SUB_ASM(arbol);
            default:
                console.log("NO EXISTE EL OPERADOR: "+this.operador+" ASIGNACION.TS");
                return this.IGUAL_ASM(arbol);
        }
    }

    public getValor2(arbol:AST):string{
        return (<Nodo4D>this.valor2).getTraduccion(arbol);
    }

    public getIndexStruct_ASM(arbol:AST):string{
        if(this.valor1.toString() == "stack"){
            arbol.addTraduccion("MOV si,"+this.getValor2(arbol));
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV AX, stackk[si]");
            return "AX";
        }else if(this.valor1.toString() == "heap"){
            arbol.addTraduccion("MOV si,"+this.getValor2(arbol));
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV AX, heap[si]");
            return "AX";
        }
        arbol.addTraduccion("MOV si,"+(<Nodo4D>this.valor1).getTraduccion(arbol));
        return "si";
    }

    public IGUAL_ASM(arbol:AST):string{
        //pregunto por la dirección
        if(this.direccion == "stack"){
            arbol.addTraduccion("MOV CX, "+this.getValor2(arbol));
            this.getIndexStruct_ASM(arbol);
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV stackk[si], CX");
        }
        else if(this.direccion == "heap"){
            arbol.addTraduccion("MOV CX, "+this.getValor2(arbol));
            this.getIndexStruct_ASM(arbol)
            arbol.addTraduccion("ADD si, si");
            arbol.addTraduccion("MOV heap[si], CX"); 
        }else{//temporal
            arbol.addTemporalASM(this.direccion); 
            arbol.addTraduccion("MOV "+this.direccion+", "+this.getIndexStruct_ASM(arbol));     
        }
        return ""; 
    }  
 
    public MUL_ASM(arbol:AST):string{
        arbol.addTraduccion("MOV AX," + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("MOV BX," + this.getValor2(arbol));
        arbol.addTraduccion("MUL BX");
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV "+this.direccion+" , AX");
        return "";
    }

    public DIV_ASM(arbol:AST):string{
        arbol.addTraduccion("MOV DX,0");
        arbol.addTraduccion("MOV AX," + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("MOV BX," + this.getValor2(arbol));
        arbol.addTraduccion("DIV BX");
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV "+this.direccion+" , AX");
        return "";
    }

    public MOD_ASM(arbol:AST):string{
        arbol.addTraduccion("MOV DX,0");
        arbol.addTraduccion("MOV AX," + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("MOV BX," + this.getValor2(arbol));
        arbol.addTraduccion("DIV BX");
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV "+this.direccion+" , DX");
        return "";
    }

    public ADD_ASM(arbol:AST):string{
        arbol.addTraduccion("MOV AX, " + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("ADD AX, " + this.getValor2(arbol));
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV "+this.direccion+" , AX");
        return "";
    }

    public SUB_ASM(arbol:AST):string{
        arbol.addTraduccion("MOV AX, " + this.getIndexStruct_ASM(arbol));
        arbol.addTraduccion("SUB AX, " + this.getValor2(arbol));
        arbol.addTemporalASM(this.direccion);
        arbol.addTraduccion("MOV "+this.direccion+" , AX");
        return "";
    }
}