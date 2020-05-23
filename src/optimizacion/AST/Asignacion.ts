import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";
import { Primitivo } from './Primitivo';

export class Asignacion extends Nodo {

    direccion: string;
    expresion: Nodo;

    constructor (direccion:string, expresion:Nodo, fila:number, columna:number) {
        super(fila, columna);
        this.direccion = direccion;
        this.expresion = expresion;
    }

    public getMirrilla(entorno:Entorno): string{
        let subOpt = this.expresion.getMirrilla(entorno)

        //esto lo quitaria
        if(this.direccion === subOpt){
            entorno.addOptimizacion({regla:this.getEquivalente(this.expresion.optimizacionRealizada),
                fila:this.fila,columna:this.columna})
            return "";
        }


        //Regla 1
            if (this.expresion instanceof (Primitivo)){
                let exp1:Primitivo = <Primitivo> this.expresion;
                if (exp1.TIPO==Primitivo.TYPE.ID) {
                    if (entorno.getFirstRuleBuscarId(this.direccion,exp1.value.toString().toLowerCase())){
                        entorno.addOptimizacion({regla:1,
                            fila:this.fila,columna:this.columna})
                        return "";
    
                    }else {
                        entorno.addFirsRuleId(this.direccion,exp1.value.toString().toLowerCase());
                        return this.direccion+" = "+subOpt + ';';
                    }
                }
            }
            //quitar de la lista regla1
            entorno.removeFirsRuleId(this.direccion.toLocaleLowerCase());
        

        return this.direccion+" = "+subOpt + ';';
    };

    public getEquivalente(realizada:number):number{
        switch(realizada){
            case 12:
                return 8;
            case 13:
                return 9;
            case 14:
                return 10;
            case 15:
                return 11;
            default:
                return 1;
        }
    }

    public getBloque(entorno:Entorno): string{
        let subOpt = this.expresion.getBloque(entorno)

        return this.direccion+" = "+subOpt + ';';
    };

    public getBloqueGraf(entorno: Entorno): string {
        let subOpt = this.expresion.getBloqueGraf(entorno)
        return this.direccion+" = "+subOpt + ';';
    }
    
}