import { Nodo, lista_temporales_Usados } from "./Nodo";
import { Asignacion } from './Asignacion'
import { Goto } from "./Goto";
import { ETQ } from "./ETQ";
import { If } from "./If";
import { NodoBloque, lista_nodos_Bloque_Guardados } from "./NodoBloque";
import { NoOptimizados } from "./NoOptimizados";

export class Entorno {
   
    
 

    instrucciones:Array<Nodo>
    optimizacion:string
    optimizaciones:[{no: number, regla: number, descripcion: string, fila: number, columna: number}]
    contadorOptimizaciones:number;

    listUtilizadas:Array<string>;
    listaFirsRuleId:Array<{id1:string,id2:string}>;
    idEtqRule2: string;
    cad_Grafica: string;

    constructor () {
        this.instrucciones = [];
        this.optimizacion = "";
        this.optimizaciones = [{no: 0, regla: 0, descripcion: '', fila: 0, columna: 0}];
        this.optimizaciones.pop()
        this.contadorOptimizaciones = 0;
        
        this.listUtilizadas = [];
        this.listaFirsRuleId=[];
        this.idEtqRule2="";
        this.cad_Grafica ="";
    }

    public getGraficaBloques():string{
        NodoBloque.limpiarNodos();
        let bool_cabecera =true;
        let contOb = 0;
        let lista_bloques:Array<NodoBloque> = [];
        let lastBLoque:NodoBloque = new NodoBloque("","");
        let enlaces_extra="";

        let lista_nodo_enlaces:Array<{dir1:string,dir2:string}> = [];
        for (let ii = 0; ii < this.instrucciones.length; ii++) {
            const nodo= this.instrucciones[ii];
            if (bool_cabecera){
                let cab1 = "L?"+contOb;
                let idN = "";
                let cadInicio  = nodo.getBloqueGraf(this);
                if (nodo instanceof ETQ){
                    idN = (<ETQ>nodo).etiqueta;
                }
                lastBLoque = new NodoBloque(idN,cab1);
                lastBLoque.setCadInicio(cadInicio);
                lastBLoque.addIns(nodo)
                lista_bloques.push(lastBLoque); 
                bool_cabecera = false;
                contOb++;
            }else {
                if (nodo instanceof ETQ){
                    lastBLoque = new NodoBloque((<ETQ>nodo).etiqueta,"L?"+contOb);
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lastBLoque.addIns(nodo)
                    lista_bloques.push(lastBLoque); 
                    lista_nodos_Bloque_Guardados.push(lastBLoque);
                    contOb++;
                }else if (nodo instanceof Goto){
                    lastBLoque = new NodoBloque("","L?"+contOb);
                    lastBLoque.addIns(nodo)
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lista_bloques.push(lastBLoque); 
                   
                   lista_nodo_enlaces.push({dir1:"L?"+contOb,dir2:(<Goto>nodo).etiqueta})
                    contOb++;
                }
                    
                else if (  nodo instanceof If){
                    lastBLoque = new NodoBloque("","L?"+contOb);
                    lastBLoque.addIns(nodo)
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lista_bloques.push(lastBLoque); 
                    lista_nodo_enlaces.push({dir1:"L?"+contOb,dir2:(<If>nodo).etiqueta})
                    contOb++;
                }else if (nodo instanceof NoOptimizados && (<NoOptimizados>nodo).getBloqueGraf(this)=="end"){
                    lastBLoque.addIns(nodo)
                     lastBLoque.addCad (nodo.getBloqueGraf(this));
                    bool_cabecera = true;
                   // NodoBloque.limpiarNodos();
                }else if (nodo instanceof NoOptimizados && (<NoOptimizados>nodo).getBloqueGraf(this).startsWith("proc")){
                    lastBLoque = new NodoBloque("","L?"+contOb);
                    lastBLoque.addIns(nodo)
                    lastBLoque.setCadInicio(nodo.getBloqueGraf(this));
                    lista_bloques.push(lastBLoque); 
                    contOb++;
                }
                else {
                    lastBLoque.addIns(nodo)
                    lastBLoque.addCad (nodo.getBloqueGraf(this));
                }

            }
            
        }
        lista_nodo_enlaces.forEach(nodo => {
            enlaces_extra+=NodoBloque.getGotoEnlace(nodo.dir1,nodo.dir2);
        });
     
        
       let id_ante = "";
       this.cad_Grafica ="digraph G {\n"
       lista_bloques.forEach(element => {
           if (id_ante!=""){
            this.cad_Grafica+= id_ante+"->"+element.idgraf+"\n";
           // b1 -> b2
           }
           id_ante =element.idgraf;
           this.cad_Grafica+=element.getNodo()+"\n";

       });
        return this.cad_Grafica+enlaces_extra+"}";
    }
    
    //variables y métodos --- para optimización de bloques
    public addUtilizadas(variable:string){
        this.listUtilizadas.push(variable)
    }

    public addOptimizacion(opt:{regla:number,fila:number,columna:number}){
        this.optimizaciones.push({
            no: this.contadorOptimizaciones++, 
            regla: opt.regla, 
            descripcion: this.getDescripcion(opt.regla), 
            fila: opt.fila, 
            columna: opt.columna
        })
    }

    public getMirilla(){
        //obtengo la mirilla de cada nodo
        let b1:boolean=false;
        let string_ex_rule2 ="";
        for (let ii = 0; ii < this.instrucciones.length; ii++) {
            const nodo= this.instrucciones[ii];
            if (nodo instanceof Goto){
                //regla 2
                    this.optimizacion += string_ex_rule2;
                    string_ex_rule2 = nodo.getMirrilla(this)+"\n"
                    b1=true;
            }else if (nodo instanceof ETQ){
                      let guardar = nodo.getMirrilla(this)+"\n"
                      let etq1:string = (<ETQ>nodo).etiqueta;
                      if (this.idEtqRule2!=etq1.toLowerCase()) this.optimizacion += string_ex_rule2 +guardar;
                      else this.optimizacion +=guardar;
                      b1=false;
                      string_ex_rule2 = "";
                      this.setUltimaEtqRegla2("");
            }else if (nodo instanceof If){
                        let if1:If = <If>nodo;
                        //Regla 4
                        if (if1.condicion.isTrue(this)  && ((ii+1)< this.instrucciones.length) 
                        &&this.instrucciones[ii+1] instanceof Goto ){
                            this.addOptimizacion({regla:4, fila:if1.fila,columna:if1.columna})
                            if (b1){
                                string_ex_rule2   += if1.getGotoOnly()+"\n"
                            }else {
                                this.optimizacion += if1.getGotoOnly()+"\n"
                            } 
                            ii++;
                            
                        }
                        //Regla 5
                        else if (if1.condicion.isFalse(this) && ((ii+1)< this.instrucciones.length) 
                        &&this.instrucciones[ii+1] instanceof Goto ){
                            this.addOptimizacion({regla:5, fila:if1.fila,columna:if1.columna})
                            if (b1){
                                string_ex_rule2   += this.instrucciones[ii+1].getMirrilla(this)+"\n"
                            }else {
                                this.optimizacion += this.instrucciones[ii+1].getMirrilla(this)+"\n"
                            } 
                            ii++;
                            
                        }
                        else if (b1){
                            string_ex_rule2 += nodo.getMirrilla(this)+"\n"
                        }else {
                            this.optimizacion += nodo.getMirrilla(this)+"\n"
                        } 
            }
            else if (b1){
                string_ex_rule2 += nodo.getMirrilla(this)+"\n"
            }else {
                this.optimizacion += nodo.getMirrilla(this)+"\n"
            } 
            
        }
        this.optimizacion += string_ex_rule2;
       // this.instrucciones.forEach(nodo=>{
         //   this.optimizacion += nodo.getMirrilla(this)+"\n"
        //})

       
        return this.optimizacion
    }

    
    public getBloques(){
        this.optimizacion="";
                //primer recorrido para guardar los usados de lado derecho
                this.instrucciones.forEach(nodo=>{
                    nodo.getBloque(this); 
                }) 
        
                //busco todos los que cumplan con la regla 23
                this.instrucciones.forEach(nodo=>{
                    if(nodo instanceof Asignacion){
                        //pregunto si la direccion está entre las que se usaron
                        if(lista_temporales_Usados.includes(nodo.direccion)){
                            this.addOptimizacion({regla:23,fila:nodo.fila,columna:nodo.columna})
                            
                        }else   this.optimizacion += nodo.getNormal(this)+"\n";
                    }else   this.optimizacion += nodo.getNormal(this)+"\n";
                  
                })

        return this.optimizacion;
    }


    addFirsRuleId(direccion: string,direccion2:string) {
        this.listaFirsRuleId.push({id1:direccion,id2:direccion2});
    }

    ClearListFirstRuleId() {
        this.listaFirsRuleId = [];
    }

    getFirstRuleBuscarId(v1:string,v2:string):boolean {
       let t1:boolean=false;
        this.listaFirsRuleId.forEach(element =>{
            if ( !t1 &&element.id1==v2 && element.id2==v1){
                t1=true;
                return true;
            }

            
       });
       return t1;
    }
   
    removeFirsRuleId(v1: string) {

        this.listaFirsRuleId= this.listaFirsRuleId.filter(function(value, index, arr){ return value.id1 != v1;});

    }

    removeFirsRuleId1(v1: string) {
        this.listaFirsRuleId= this.listaFirsRuleId.filter(function(value, index, arr){ return value.id2 != v1;});

    }

    setUltimaEtqRegla2(etiqueta: string) {
        this.idEtqRule2 = etiqueta;
    }
  
  

    public getDescripcion(regla:number):string{
        switch(regla){
            case 1:
                return "Eliminación de instrucciones redundantes de carga y  almacenamiento "
            case 2:
            case 3:
            case 4:
            case 5:
                return "Eliminación de código inalcanzable "
            case 6:
            case 7:
                return "Optimizaciones de flujo de control "
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                return "Simplificación algebraica y por fuerza"
            case 23:
                return "Redundancia parcial - variables inutilizadas"
        }
        return "Optimización sin descripción"
    }
}