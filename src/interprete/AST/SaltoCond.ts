import { Nodo4D } from "./Nodo4D";
import { AST } from './AST'

export class SaltoCond extends Nodo4D {
    public valor1: Nodo4D;
    public valor2: Nodo4D;
    public idETQ: string;
    public salto: string;

    constructor(salto: string, valor1: Nodo4D, valor2: Nodo4D, idETQ: string, fila: number, columna: number) {
        super();
        this.salto = salto;
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.idETQ = idETQ;
        this.fila = fila;
        this.columna = columna;
    }

    public getValor(arbol: AST): number {
        let number1:number = this.valor1.getValor(arbol);
        let number2:number = this.valor2.getValor(arbol);

        //console.log(this.salto+" "+number1+" == "+number2);

        switch (this.salto) {
            case "je":
                if (number1 == number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "jne":
                if (number1 != number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "jg":
                if (number1 > number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "jl":
                if (number1 < number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "jge":
                if (number1 >= number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
            case "jle":
                if (number1 <= number2) {
                    arbol.ejecutarETQ(this.idETQ);
                }
                break;
        }
        return null;
    }

    public getTraduccion(arbol: AST): string {
        let number1:string = this.valor1.getTraduccion(arbol);
        let number2:string = this.valor2.getTraduccion(arbol);

        
        arbol.addTraduccion("MOV AX, " + number1 + "\n");
        arbol.addTraduccion("CMP AX, " + number2 + "\n");

        switch (this.salto) {
            case "je":
                arbol.addTraduccion("JE " + this.idETQ + "\n");
                return "";
            case "jne":
                arbol.addTraduccion("JNE " + this.idETQ + "\n");
                return "";
            case "jg":
                arbol.addTraduccion("JG " + this.idETQ + "\n");
                return "";
            case "jl":
                arbol.addTraduccion("JL " + this.idETQ + "\n");
                return "";
            case "jge":
                arbol.addTraduccion("JGE " + this.idETQ + "\n");
                return "";
            case "jle":
                arbol.addTraduccion("JLE " + this.idETQ + "\n");
                return "";
        }
        return null;
    }
}