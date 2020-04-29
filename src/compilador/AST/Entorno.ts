export class Entorno {
    padre:Entorno;
    
    public constructor(padre:Entorno){
        this.padre = padre;
    }
}