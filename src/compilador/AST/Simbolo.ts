export class Simbolo{

    tipo:Object;
    id:string;
    posicion:number;
    fila:number;
    columna:number;
    constante:boolean;

    public constructor(tipo:Object,id:string,posicion:number,
        constante:boolean,fila:number,columna:number){
        this.tipo = tipo;
        this.constante = constante;
        this.id = id;
        this.posicion = posicion;
        this.fila = fila;
        this.columna = columna;
        this.tipo = tipo;
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