import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { Primitivo } from "./Primitivo";
import { ListAcceso } from "./ListAcceso";
export class Unario extends Expresion{

    unario:Expresion;
    TIPO_OPERACION:Unario.TYPE;

    public constructor(TIPO_OPERACION:Unario.TYPE,unario:Expresion,fila:number,columna:number){
        super();
        this.TIPO_OPERACION = TIPO_OPERACION;
        this.unario = unario;
        this.fila = fila;
        this.columna = columna;
    }

    public getTraduccion(entorno:Entorno):string{
        switch(this.TIPO_OPERACION){
            case Unario.TYPE.MENOS:
                return this.MENOS(entorno);
            case Unario.TYPE.MAS:
                return this.MAS(entorno);
            case Unario.TYPE.NOT:
                return this.NOT(entorno);
            case Unario.TYPE.MASMAS:
                return this.MASMAS(entorno);
            case Unario.TYPE.MENOSMENOS:
                return this.MENOSMENOS(entorno);
            default:
                entorno.addError("UNARIO-TRAD:"+this.TIPO_OPERACION,"No se encontró este tipo de Operación",this.fila,this.columna);
                return "0";
        }
    }

    public MENOS(entorno:Entorno):string{
        entorno.addComentario("=========== UNARIO MENOS ===============");
        let ret = entorno.getTemp();
        entorno.addValorOperacion(ret, this.unario.getTraduccion(entorno).toString(), "*", "-1");
        entorno.addComentario("============ FIN UNARIO ====================");
        return ret;
    }

    public MAS(entorno:Entorno):string{
        entorno.addComentario("=========== UNARIO MAS ===============");
        let ret = this.unario.getTraduccion(entorno)
        entorno.addComentario("============ FIN UNARIO ====================");
        return ret;
    }

    public NOT(entorno:Entorno):string{
        entorno.addComentario("============= UNARIO NOT ============");
        let ret = entorno.getTemp();
        let etq1 = entorno.getETQ();
        let etq2 = entorno.getETQ();
        entorno.addIgualQue(this.unario.getTraduccion(entorno),0, etq1);
        entorno.addValor(ret, 0);
        entorno.addGoto(etq2);
        entorno.addETQ(etq1);
        entorno.addValor(ret, 1);
        entorno.addETQ(etq2);
        entorno.addComentario("============= FIN UNARIO NOT ==========");
        return ret;
    }

    public MASMAS(entorno:Entorno):string{
        entorno.addComentario("============= UNARIO MASMAS ============");
        let ret = entorno.getTemp()
        console.dir(this.unario)
        if(this.unario instanceof ListAcceso){
            return this.unario.incrementar(entorno);
        }
        entorno.addValorOperacion(ret,this.unario.getTraduccion(entorno),"+",1);
        entorno.addComentario("============= FIN UNARIO MASMAS ==========");
        return ret;
    }

    public MENOSMENOS(entorno:Entorno):string{
        entorno.addComentario("============= UNARIO MENOSMENOS ============");
        let ret = entorno.getTemp()
        if(this.unario instanceof ListAcceso){
            this.unario.decrementar(entorno);
        }
        entorno.addValorOperacion(ret,this.unario.getTraduccion(entorno),"-",1);
        entorno.addComentario("============= FIN UNARIO MENOSMENOS ==========");
        return ret;
    }

    public getTipo(entorno:Entorno):Object{
        return this.unario.getTipo(entorno);
    }
}

export namespace Unario
{
    export enum TYPE
    {
        NOT, MENOS, MAS,
        MASMAS, MENOSMENOS
    }
}