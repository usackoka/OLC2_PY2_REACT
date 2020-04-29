import { Nodo } from './Nodo'
import { Entorno } from './Entorno';
import { Token } from './Token';

export class Principal {
    nodos: Array<Nodo>;
    entorno: Entorno;

    //variables para la traducción
    contadorEtiquetas:number;
    contadorTemporales:number;
    traduccion: string;

    //lista de errores semánticos
    erroresSemanticos: Array<Token>

    public constructor(){
        this.entorno = new Entorno(null,this);
        this.nodos = [];
        this.traduccion = "";
        this.erroresSemanticos = [];
        this.contadorEtiquetas = 0;
        this.contadorTemporales = 0;
    }

    public run():string{
        this.traduccion = "";

        //declaracion de temporales usados
        this.addComentario("=========== DECLARACION DE TEMPORALES USADOS ");
        this.traduccion += "var t0";
        let aux:number = 0;
        for(let i=1; i<this.contadorTemporales+1; i++){
            if(aux=20){
                this.traduccion += "\n";
                aux = 0;
            }
            this.traduccion += ", t"+i+""
            aux++;
        }
        this.traduccion += ";\n\n"

        this.addComentario("============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL");
        this.traduccion += "var P,H;\nvar stack[];\nvar heap[];\n\n" 

        //traduzco cada nodo encontrado
        this.nodos.forEach(nodo => {
            nodo.getTraduccion(this.entorno);
        });

        //traduzco llamda al main()
        this.addCall("principal");

        /**
         * Agrego los métodos nativos
         * Como métodos para imprimir string, casteo de enteros y potencia
         */
        this.addComentario("==================================================================");
        this.addComentario("=============== COMIENZAN METODOS NATIVOS ========================");
        this.addComentario("==================================================================");
        this.QuemadaString();
        this.QuemadaString2();
        this.QuemadaEntero();
        this.QuemadaPotencia();

        return this.traduccion;
    }

    //=================================== METODOS DE TRADUCCIÓN
    public addComentario(cadena:string){
        this.traduccion += "#*"+cadena+"*#\n";
    }
    
    public addError(lexema:string,mensaje:string, fila:number, columna:number){
        this.erroresSemanticos.push(new Token(lexema,"Error Semántico",mensaje,fila,columna));
    }
    
    public addTraduccion(cadena:string){
        this.traduccion += cadena;
    }
    
    public getTemp():string{
        return "t"+this.contadorTemporales++;
    }
    
    public getETQ():string{
        return "L"+this.contadorEtiquetas++;
    }

    public igual1(condicion:string, etiqueta:string){
        this.traduccion += "if ("+condicion+" == 1) goto "+etiqueta+";\n";
    }
    
    public addIgualQue(condicion:string,value:Object, etiqueta:string){
        this.traduccion += "if ("+condicion+" == "+value+") goto "+etiqueta+";\n";
    }
    
    public addMenorQue(condicion:string,value:Object, etiqueta:string){
        this.traduccion += "if ("+condicion+" < "+value+") goto "+etiqueta+";\n";
    }
    
    public addNoIgual(condicion:string,value:Object, etiqueta:string){
        this.traduccion += "if ("+condicion+" != "+value+") goto "+etiqueta+";\n";
    }
    
    public addMayorQue(condicion:string,value:Object, etiqueta:string){
        this.traduccion += "if ("+condicion+" > "+value+") goto "+etiqueta+";\n";
    }
    
    public addMayorIgual(condicion:string,value:Object, etiqueta:string){
        this.traduccion += "if ("+condicion+" >= "+value+") goto "+etiqueta+";\n";
    }
    
    public addMenorIgual(condicion:string,value:Object, etiqueta:string){
        this.traduccion += "if ("+condicion+" <= "+value+") goto "+etiqueta+";\n";
    }
    
    public addGoto(etq:string){
        this.traduccion += "goto "+etq+";\n";
    }
    
    public addETQ(etq:string){
        this.traduccion += etq+":\n";
    }
    
    public addValorEnHeap(posicion:string, valor:Object){
        this.traduccion += "heap["+posicion+"] = "+valor+";\n";
    }
    
    public addValorEnStack(posicion:string, valor:Object){
        this.traduccion += "stack["+posicion+"] = "+valor+";\n";
    }
    
    public addCall(idCall:string){
        this.traduccion += "call "+idCall+";\n";
    }
    
    public addValor(direccion:string, valor:Object){
        this.traduccion += direccion+" = "+valor+";\n";
    }
    
    public addGetStack(direccion:string, posicion:Object){
        this.traduccion += direccion+" = stack["+posicion+"];\n";
    }
    
    public addGetHeap(direccion:string, posicion:string){
        this.traduccion += direccion+" = heap["+posicion+"];\n";
    }
    
    public addValorOperacion(direccion:string, valor1:Object, operador:string ,valor2:Object){
        this.traduccion += direccion + " = " + valor1 + operador + valor2+";\n";
    }
    
    public incH(){
        this.traduccion += "H = H + 1;\n";
    }
    
    public addProc(idProc:string){
        this.traduccion += "proc "+idProc+" begin;\n";
    }
    
    public addEnd(idProc:string){
        this.traduccion += "end "+idProc + ";\n";
    }
    
    public QuemadaString(){
        var t1:string = this.getTemp();
        var t2:string = this.getTemp();
        var t3:string = this.getTemp();
        var l1:string = this.getETQ();;
        var l2:string = this.getETQ();;
        var l3:string = this.getETQ();;
        var nodecimal:string = this.getETQ();;
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA IMPRIMIR STRING =======================");
        this.addComentario("==================================================================");
        this.addProc("nativa_imprimir_string");
        this.addValorOperacion(t1, "P", "+", "1");
        this.addGetStack(t2, t1);
        this.addETQ(l3);
        this.addGetHeap(t3, t2);
        this.addIgualQue(t3,"3",l1);
        this.addGoto(l2);
        this.addETQ(l2);
        this.addComentario("=== pregunto si lo que viene es un decimal");
        this.addNoIgual(t3, 1, nodecimal);
        this.addValorOperacion(t2, t2, "+", 1);
        this.addGetHeap(t3, t2);
        this.addTraduccion("print(\"%d\","+t3+")");
        this.addValorOperacion(t2, t2, "+", "1");
        this.addGoto(l3);
        this.addETQ(nodecimal);
        this.addTraduccion("print(\"%c\","+t3+")\n");
        this.addValorOperacion(t2, t2, "+", "1");
        this.addGoto(l3);
        this.addETQ(l1);
        this.addTraduccion("print(\"%c\"," + 10 + ")\n");
        this.addEnd("nativa_imprimir_string");
    }
    
    public QuemadaString2() {
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA IMPRIMIR STRING SIN SALTO==============");
        this.addComentario("==================================================================");
        var t1:string = this.getTemp();
        var t2:string = this.getTemp();
        var t3:string = this.getTemp();
        var l1:string = this.getETQ();;
        var l2:string = this.getETQ();;
        var l3:string = this.getETQ();;

        this.addProc("nativa_imprimir_string2");
        this.addValorOperacion(t1, "P", "+", "1");
        this.addGetStack(t2, t1);
        this.addETQ(l3);
        this.addGetHeap(t3, t2);
        this.addIgualQue(t3,"3",l1);
        this.addGoto(l2);
        this.addETQ(l2);
        this.addTraduccion("print(\"%c\","+t3+")\n");
        this.addValorOperacion(t2, t2, "+", "1");
        this.addGoto(l3);
        this.addETQ(l1);
        this.addEnd("nativa_imprimir_string2");
    }
    
    public QuemadaPotencia() {
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA POTENCIA ==============================");
        this.addComentario("==================================================================");
        
        var t1:string = this.getTemp();
        var t2:string = this.getTemp();
        var t3:string = this.getTemp();
        var t4:string = this.getTemp();
        var t5:string = this.getTemp();
        var t6:string = this.getTemp();
        var l2:string = this.getETQ();;
        var l3:string = this.getETQ();;
        var l4:string = this.getETQ();;
        var l5:string = this.getETQ();;
        var l6:string = this.getETQ();;
        var l7:string = this.getETQ();;
        var l8:string = this.getETQ();;
        var l9:string = this.getETQ();;

        this.addProc("funcion_nativa_potencia");
        this.addValorOperacion(t2,"P", "+", 1);
        this.addValorOperacion(t1,"P", "+", 2);
        this.addGetStack(t2, t2);
        this.addGetStack(t3, t1);
        this.addComentario("si el exponente es negativo");
        this.addIgualQue(t3, 0, l3);
        this.addMenorQue(t3, 0, l4);
        this.addValor(t4, t2);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addETQ(l5);
        this.addIgualQue(t3, 0,l6);
        this.addGoto(l7);
        this.addETQ(l6);
        this.addValorEnStack("P",t2);
        this.addGoto(l2);
        this.addETQ(l7);
        this.addValorOperacion(t2, t2, "*", t4);
        this.addValorOperacion(t3, t3,"-", 1);
        this.addGoto(l5);
        this.addComentario("====== Retorno = 1");
        this.addETQ(l3);
        this.addValorEnStack("P", 1);
        this.addGoto(l2);
        this.addComentario("====== Exponente negativo");
        this.addETQ(l4);
        this.addValorOperacion(t5, 0, "-",1);
        this.addValorOperacion(t3, t3, "*",t5);
        this.addValor(t6, t2);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addETQ(l8);
        this.addIgualQue(t3,0,l9);
        this.addValorOperacion(t2, t2, "*", t6);
        this.addValorOperacion(t3, t3, "-", 1);
        this.addGoto(l8);
        this.addETQ(l9);
        this.addValorOperacion(t2, 1, "/", t2);
        this.addValorEnStack("P", t2);
        this.addETQ(l2);
        this.addEnd("funcion_nativa_potencia");
    }

    public QuemadaEntero(){
        this.addComentario("==================================================================");
        this.addComentario("=================== NATIVA TO INTEGER      =======================");
        this.addComentario("==================================================================");
        
        var t10:string = this.getTemp();
        var t11:string = this.getTemp();
        var t12:string = this.getTemp();
        var t13:string = this.getTemp();
        var t14:string = this.getTemp();
        var t15:string = this.getTemp();
        var t16:string = this.getTemp();
        var t17:string = this.getTemp();
        var t18:string = this.getTemp();
        var temporal:string = this.getTemp();

        var l10:string = this.getETQ();;
        var l11:string = this.getETQ();;
        var l12:string = this.getETQ();;
        var l14:string = this.getETQ();;
        var l15:string = this.getETQ();;
        var l16:string = this.getETQ();;
        var l17:string = this.getETQ();;
        var l18:string = this.getETQ();;
        var ll9:string = this.getETQ();;

        this.addProc("nativa_int_to_string");
        this.addValor(t17, "H");
        this.addValorOperacion(t10, "P", "+", 1);
        this.addGetStack(t11, t10);
        this.addValor(t12, t11);
        
        this.addComentario("==== pregunto si es negativo");
        this.addMayorIgual(t11, 0, ll9);
        this.addComentario("==== agrego el menos a heap");
        this.addValorEnHeap("H", 45);
        this.incH();
        this.addValorOperacion(t12, t12, "*", -1);
        this.addValorOperacion(t11, t11, "*", -1);
        
        this.addETQ(ll9);
        this.addValor(t13, 0);
        this.addNoIgual(t12, 0, l11);
        this.addGoto(l18);
        this.addETQ(l11);
        this.addMenorQue(t12, 1, l12);
        this.addValorOperacion(t12, t12, "/", 10);
        this.addValorOperacion(t13, t13, "+", 1);
        this.addGoto(l11);
        this.addETQ(l12);
        this.addValor(t14, t11);
        this.addIgualQue(t13,0, l10);
        this.addGoto(l14);
        this.addETQ(l14);
        this.addValorOperacion(t13, t13, "-",1);
        this.addValor(t15, t13);
        this.addValor(t16, 1);
        this.addETQ(l15);
        this.addIgualQue(t15, 0, l16);
        this.addGoto(l17);
        this.addETQ(l17);
        this.addValorOperacion(t16, t16, "*", 10);
        this.addValorOperacion(t15, t15, "-",1);
        this.addGoto(l15);
        this.addETQ(l16);
        this.addValorOperacion(t14, t14, "/", t16);
        this.addValorOperacion(t15, t14, "%", 1);
        this.addValorOperacion(t14, t14, "-", t15);
        this.addValorOperacion(t14, t14, "+", 48);
        this.addValorEnHeap("H",t14);
        this.incH();
        this.addValorOperacion(t11, t11, "%", t16);
        this.addGoto(l12);
        this.addETQ(l18);
        this.addValorOperacion(temporal, 48, "+", "0");
        this.addValorEnHeap("H", temporal);
        this.incH();
        this.addETQ(l10);
        this.addValorEnHeap("H",3);
        this.incH();
        this.addValorOperacion(t18, "P", "+", 0);
        this.addValorEnStack(t18, t17);
        this.addEnd("nativa_int_to_string");
    }
}
