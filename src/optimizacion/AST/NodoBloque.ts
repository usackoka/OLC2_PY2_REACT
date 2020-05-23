import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";


export let lista_nodos_Bloque_Guardados:Array<NodoBloque> = []; 
export class NodoBloque  {
    static getGotoEnlace(enlace1: string, etiqueta: string) {
        for (let ii = 0; ii < lista_nodos_Bloque_Guardados.length; ii++) {
            const element = lista_nodos_Bloque_Guardados[ii];
            if (element.id!="" && element.id==etiqueta){
                return  "\""+enlace1+"\"->"+element.idgraf+" [constraint=false];\n";
            }
            
        }
        return ;
    }
    static limpiarNodos() {
       lista_nodos_Bloque_Guardados=[];
    }
   
   
    id: string;

    lista_instrucciones: Array<Nodo>;
    cadenaBloque: string;
    idgraf: string;

    constructor (idReal:string,cadena: string) {
        this.id = idReal;
        this.idgraf = "\""+cadena+"\"";
        this.lista_instrucciones = [];
        this.cadenaBloque="";

       
        
    }
     addCad(arg0: string) {
        this.cadenaBloque+=arg0+"\\l"
      }
      addIns(nodo: Nodo) {
          this.lista_instrucciones.push(nodo);
      }

      setCadInicio(cadInicio: string) {
        this.cadenaBloque=cadInicio+"\\l"
    }


    getNodo():string {
        return this.idgraf+" [shape=box,ALIGN=\"LEFT\", label=\""+this.cadenaBloque+"\"]";

    }


    
}