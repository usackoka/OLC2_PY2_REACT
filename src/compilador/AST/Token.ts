export class Token{

    descripcion:string;
    tipo:string; 
    lexema:string;
    fila:number;
    columna:number;

    public constructor(lexema:string, tipo:string,descripcion:string, fila:number, columna:number){
        this.descripcion = descripcion;
        this.lexema = lexema;
        this.fila = fila;
        this.columna = columna;
        this.tipo = tipo;
    }

    public toString():string{
        return "TOKEN";
    }
}