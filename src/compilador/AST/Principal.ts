import { Nodo } from './Nodo'
import { Entorno } from './Entorno';

export class Principal {
    nodos: Array<Nodo>;
    entorno: Entorno;

    public constructor(){
        this.entorno = new Entorno(null);
    }
}
