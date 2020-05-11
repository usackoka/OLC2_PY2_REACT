import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";

export class Primitivo extends Expresion{

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
                entorno.addComentario("============== Guardando valor en heap char ======================");
                let charac:string = this.value.toString().charAt(1);
                retorno = entorno.getTemp();
                entorno.addValor(retorno,"H");
                let ascii:number = charac.charCodeAt(0);
                entorno.addComentario("ascii: "+charac);
                entorno.addValorEnHeap("H",ascii);
                entorno.incH();
                entorno.addComentario("ascii: eos");
                entorno.addValorEnHeap("H","3");
                entorno.incH();
                entorno.addComentario("==============================================================");
                return retorno;
            case Expresion.State.ID:
                //sólo cuando la varia
                let temp = entorno.getTemp();
                let tretorno = entorno.getTemp();
                let posicion = entorno.getValor(this.value.toString(), this.fila, this.columna);
                entorno.addComentario("========= Obteniendo valor ID: " + this.value+" ===========");
                entorno.addValorOperacion(temp, "P", "+", posicion);
                entorno.addGetStack(tretorno, temp);
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