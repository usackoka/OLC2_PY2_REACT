import { Entorno } from "./Entorno";
import { Nodo } from "./Nodo";

export class Primitivo extends Nodo {
    isNumeric1():boolean {
        if (this.TIPO==Primitivo.TYPE.NUMBER)return true;
        else return false;
    }

    value:Object;
    TIPO:Primitivo.TYPE;

    constructor(TIPO:Primitivo.TYPE, value:Object, fila: number, columna: number) {
        super(fila,columna);
        this.value = value;
        this.TIPO = TIPO;
    }

    public getMirrilla(entorno:Entorno): string{
        return this.value.toString();
    };

    public getBloque(entorno:Entorno): string{
        if (this.TIPO==Primitivo.TYPE.ID)Nodo.popTemporal(this.value.toString().toLowerCase());
        return this.value.toString();
    };
    public getBloqueGraf(entorno: Entorno): string {
        return this.value.toString();
    }

    public getNormal(entorno: Entorno): string {
        return this.value.toString();
    }

    public getVal0(): string {
        return this.value.toString();
    }

    public isNumeric():boolean{
        if (this.value === parseInt(this.value.toString(), 10))
            return true;
        else
            return false
    }

    public isZero():boolean{
        if(this.value===0 || this.value==="0" || this.value==='0'
            || this.value===0.0 || this.value==="0.0" || this.value==='0.0'){
            return true;
        }
        return false;
    }

    public isUno():boolean{
        if(this.value===1 || this.value==="1" || this.value==='1'
            || this.value===1.0 || this.value==="1.0" || this.value==='1.0'){
            return true;
        }
        return false;
    }

    public isDos():boolean{
        if(this.value===2 || this.value==="2" || this.value==='2'
            || this.value===2.0 || this.value==="2.0" || this.value==='2.0'){
            return true;
        }
        return false;
    }
}

export namespace Primitivo{
    export enum TYPE{
        NUMBER,
        ID
    }
}