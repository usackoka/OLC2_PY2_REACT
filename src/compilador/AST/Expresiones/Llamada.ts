import { Entorno } from "../Entorno";
import { Expresion } from "../Expresion";
import { ParametroLlamada } from "./ParametroLlamada";
import { TipoArreglo } from "./TipoArreglo";

export class Llamada extends Expresion{

    id:string;
    parametros:Array<ParametroLlamada>
    temporalesGuardados:Map<string,number>;

    public constructor(id:string, parametros:Array<ParametroLlamada>, fila:number, columna:number){
        super();
        this.id = id;
        this.parametros = parametros;
        this.fila = fila;
        this.columna = columna;
        this.temporalesGuardados = new Map();
    }   

    public getGrafica(entorno:Entorno):string{
        let cont_raiz = entorno.getNextContGraph();
        entorno.addNodoGraph(cont_raiz, this.id+"()");
        
        for(let nodo of this.parametros){
            let cont_hijo = nodo.getGrafica(entorno);
            entorno.addRelacion(cont_raiz,cont_hijo);
        }
        
        return cont_raiz.toString();
    }

    public getTraduccion(entorno:Entorno):string{
        let firmaLlamada = this.getFirma(entorno);
        entorno.addComentario("============================================================================================");
        entorno.addComentario("===============LLAMADA FUNCION: "+this.id+firmaLlamada+" =========================");
        entorno.addComentario("============================================================================================");
        //paso 0: guardar los temporales usados y el primer temporal de la funcion
        //paso 1: verificar que exista el método //pendiente
        //paso 2: verificar en que ultimo temporal voy
        let temporalFinal = entorno.getContadorTemporales();
        //paso 3: primer temporal de la funcion
        let temporalInicial = entorno.primerTemporal;
        //paso 4: mientras el primer temporal del entorno no sea igual al último
        entorno.addComentario("======== Guardando temporales no usados =============");
        while (temporalInicial < temporalFinal)
        {
            if (!entorno.temporalesUsados.includes("t" + temporalInicial))
            {
                let temporal = entorno.getTemp();
                entorno.addValorOperacion(temporal, "P", "+", entorno.size);
                entorno.addValorEnStack(temporal, "t"+temporalInicial);
                //=================guardo los usados
                entorno.addTempUsed(temporal);
                //==================================
                this.temporalesGuardados.set("t" + temporalInicial, entorno.size);
                entorno.size++;
            }
            temporalInicial++;
        }
        entorno.addComentario("=======================================================");

        //llamada a funcion
        entorno.addComentario("======== Guardando parametros =======================");
        let t1 = entorno.getTemp();
        entorno.addComentario("Cambio simulado de ambito");
        entorno.addValorOperacion(t1, "P","+", entorno.size);
        
        entorno.addValorOperacion(t1, t1, "+", 2);

        this.parametros.forEach(exp=>{
            entorno.addComentario("================== parametro ==========================");
            let tValor = exp.getTraduccion(entorno)
            entorno.addValorEnStack(t1, tValor);
            entorno.addValorOperacion(t1, t1, "+", 1);
            entorno.addTempUsed(tValor);
            entorno.addComentario("=======================================================");
        })

        entorno.addComentario("=======================================================");
        entorno.addTempUsed(t1);

        entorno.addComentario("Cambio real de ámbito");
        entorno.addValorOperacion("P", "P", "+", entorno.size);
        entorno.addCall(this.id + firmaLlamada);
        //valor del retorno
        entorno.addComentario("================== RETORNO =============================");
        let temporalRetorno = entorno.getTemp();
        entorno.addGetStack(temporalRetorno, "P");
        entorno.addValorOperacion("P", "P", "-", entorno.size);
        entorno.addComentario("=======================================================");

        entorno.addComentario("======== Saco temporales guardados =============");
        //sacar los guardados
        this.temporalesGuardados.forEach((value, key,map) => {
            let tmp = entorno.getTemp();
            entorno.addValorOperacion(tmp, "P", "+", value);
            entorno.addGetStack(key, tmp);
            //=================guardo los usados
            entorno.addTempUsed(tmp);
            entorno.size--;
            //==================================
        });
        entorno.addComentario("=======================================================");
        return temporalRetorno;
    }

    public getTipo(entorno:Entorno){
        return entorno.getTipoFuncion(this.id+this.getFirma(entorno),this.fila,this.columna)
    }

    public getFirma(entorno:Entorno) {
        let firma = "";
        this.parametros.forEach(p=>{
            let tip = p.getTipo(entorno);
            firma += "_" + (tip instanceof TipoArreglo ? tip.getTipo(entorno) : tip);
        })
        return firma;
    }
}