import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { InterfazAcceso } from "../IntefazAcceso";

export class Primitivo extends Expresion implements InterfazAcceso{

    value:Object;

    public constructor(value:Object, TIPO:Object, fila:number, columna:number){
        super();
        this.value = value;
        this.TIPO = TIPO;
        this.fila = fila;
        this.columna = columna;

        //para quitarle las comillas
        if(this.TIPO === Expresion.State.STRING){
            this.value = this.trimComillas(this.value.toString());
        }
    }

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, this.value.toString());
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        switch (this.TIPO) {
            case Expresion.State.NULL:
                return "-1";
            case Expresion.State.BOOLEAN:
                return (this.value)?"1":"0";
            case Expresion.State.DOUBLE:
            case Expresion.State.INTEGER:
                return this.value.toString();
            case Expresion.State.STRING:
                entorno.addComentario("============== Guardando valor en heap ======================");
                var caracteres:Array<string> = Array.from(this.value.toString());
                caracteres = this.getCaracteres(caracteres);
                var retorno:string = entorno.getTemp();
                entorno.addValor(retorno,"H");
                caracteres.forEach(caracter=>{
                    entorno.addComentario("ascii: "+String.fromCharCode(Number(caracter)));
                    entorno.addValorEnHeap("H",caracter);
                    entorno.incH();
                });
                entorno.addComentario("ascii: eos");
                entorno.addValorEnHeap("H","3");
                entorno.incH();
                entorno.addComentario("==============================================================");
                return retorno;
            case Expresion.State.CHAR:
                return this.value.toString().charCodeAt(1).toString();
            case Expresion.State.ID:
                let temp = entorno.getTemp();
                let tretorno = entorno.getTemp();
                let posicion = entorno.getValor(this.value.toString(), this.fila, this.columna);
                entorno.addComentario("========= Obteniendo valor ID: " + this.value+" ===========");
                if(entorno.isGlobal(this.value.toString(), this.fila, this.columna)){
                    entorno.addGetHeap(tretorno, posicion);
                }else{
                    entorno.addValorOperacion(temp, "P", "+", posicion);
                    entorno.addGetStack(tretorno, temp);
                }
                entorno.addComentario("============================================================");
                //guardo los temporales usados
                entorno.addTempUsed(temp);
                return tretorno;
            default:
                console.log('No soportado en primitivo TIPO: '+this.TIPO+" fila: "+this.fila)
                return "-1";
        }
    }

    public getTipo(entorno:Entorno):Object{
        if (this.TIPO == Expresion.State.ID) {
            var vari= entorno.getTipo(this.value.toString(), this.fila, this.columna);
            return vari;
        }
        return this.TIPO;
    }
    
    public getPosicion(entorno:Entorno):string{
        return entorno.getValor(this.value.toString(), this.fila, this.columna);
    }

    public isInHeap(entorno:Entorno):boolean{
        return entorno.isGlobal(this.value.toString(),this.fila,this.columna)
    }

    public incrementar(entorno:Entorno):string{
        let temp = entorno.getTemp();
        let tretorno = entorno.getTemp();
        let posicion = entorno.getValor(this.value.toString(), this.fila, this.columna);
        entorno.addComentario("========= Aumentando valor ID: " + this.value+" ===========");
        entorno.addValorOperacion(temp, "P", "+", posicion);
        entorno.addGetStack(tretorno, temp);
        entorno.addValorOperacion(tretorno,tretorno,"+",1);
        entorno.addValorEnStack(temp,tretorno);
        entorno.addComentario("============================================================");
        //guardo los temporales usados
        entorno.addTempUsed(temp);
        return tretorno;
    }

    public decrementar(entorno:Entorno):string{
        let temp = entorno.getTemp();
        let tretorno = entorno.getTemp();
        let posicion = entorno.getValor(this.value.toString(), this.fila, this.columna);
        entorno.addComentario("========= Aumentando valor ID: " + this.value+" ===========");
        entorno.addValorOperacion(temp, "P", "+", posicion);
        entorno.addGetStack(tretorno, temp);
        entorno.addValorOperacion(tretorno,tretorno,"-",1);
        entorno.addValorEnStack(temp,tretorno);
        entorno.addComentario("============================================================");
        //guardo los temporales usados
        entorno.addTempUsed(temp);
        return tretorno;
    }

    public trimComillas(cadena:string):string{
        if(cadena.length>1){
            if(cadena.charAt(0) == '\"'){
                cadena = cadena.substring(1,cadena.length);
            }
            if(cadena.charAt(cadena.length-1) == '\"'){
                cadena = cadena.substring(0,cadena.length-1);
            }
        }
        return cadena;
    }

    public getCaracteres(caracteres:Array<string>):Array<string>{
        var caracteresNuevo:Array<string> = [];
        for (let i=0; i<caracteres.length; i++) {
            if(caracteres[i] == ('\\')){
                switch(caracteres[++i]){
                    case 'a':
                        caracteresNuevo.push("7");
                        break;
                    case 'b':
                        caracteresNuevo.push("8");
                        break;
                    case 'f':
                        caracteresNuevo.push("12");
                        break;
                    case 'n':
                        caracteresNuevo.push("10");
                        break;
                    case 'r':
                        caracteresNuevo.push("13");
                        break;
                    case 't':
                        caracteresNuevo.push("9");
                        break;
                    case 'v':
                        caracteresNuevo.push("11");
                        break;
                    default:
                        caracteresNuevo.push("47");
                        --i;
                        break;
                }
            }else{
                caracteresNuevo.push(caracteres[i].charCodeAt(0).toString());
            }
        }
        let tmp:Array<string> = [];
        for (let i = 0; i < caracteresNuevo.length; i++) {
            tmp.push(caracteresNuevo[i]);            
        }
        return tmp;
    }
}