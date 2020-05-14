export class Simbolo{

    tipo:Object;
    id:string;
    posicion:Object;
    fila:number;
    columna:number;
    constante:boolean;
    global:boolean;

    public constructor(tipo:Object,id:string,posicion:Object,
        constante:boolean,global:boolean,fila:number,columna:number){
        this.tipo = tipo;
        this.constante = constante;
        this.id = id;
        this.posicion = posicion;
        this.fila = fila;
        this.columna = columna;
        this.tipo = tipo;
        this.global = global;
    }

    public toString():string{
        return "{\n" +
                "\t\"tipo\": \"" + this.tipo + "\",\n" +
                "\t\"id\": \"" + this.id + "\",\n" +
                "\t\"posicion\": " + this.posicion + ",\n" +
                "\t\"fila\": " + this.fila + ",\n" +
                "\t\"columna\": " + this.columna + ",\n" +
                "\t\"constante\": " + this.constante + "\n" +
                "}";
    }
}