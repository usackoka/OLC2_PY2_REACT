import { Nodo } from "./Nodo";
import { Entorno } from "./Entorno";

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
        if(this.direccion === subOpt){
            entorno.addOptimizacion({regla:this.getEquivalente(this.expresion.optimizacionRealizada),
                fila:this.fila,columna:this.columna})
            return "";
        }

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
        return "";
    };
    
}