import prueba, prueba2;

const PI := 3.1416
Char n1 = 'c';
char n1,n2,n3,n4;
double n1,n2,n3 = 4;
var id := 23;
const id2 := 2;
global varGlobal := "string";
String varString = "String";
Integer a = 5;
Integer b = a++;  

Define Estudiante as[
    Integer edad,
    String cadena = "Hola"
]

Define Nodo as[
    String[] arregloValores = null,
    Nodo siguiente = null,
    Nodo anterior = null,
    String valor
];

void sinParametros(){
    log("Hola")
    hola = fun1(3);
}

Double[] areaCirculo(Double radio) { 
    log("calculando área de un círculo de rario " + radio)
    return PI * radio ^ 2;
}

void log(String msg, CHAR[] varchar1) {
    print(msg);
    try{
        if(divisor === 0){
            throw strc ArithmeticException()
        }
    }catch(ArithmeticException e){
        print(e.message)
    }
    return;
}

eSTRUctura[] funcion1(eSTRUctura[] parametro1, Double[] parametro2){
    Global var1 := "Cadena";
    String cadena = var1.toUpperCase().toLowerCase();
    return null;
}

void testSentencias(){
    while(true){
        print("while simple")
    }

    global c := '4'
    c = '9'

    for(Integer i=0; i<10; i++){
        print(i)
    }

    for( ; ;){
        // Valido, al no tener condición de salida esto genera un ciclo infinito
        Print("Hola");
        Break;
    }

    Integer a = 0;
    for(;a<3;){
        a = a+1;
        print(a)
    }

    switch('a'){
        case 'j':
            print("J")
            break;
        case 'L':
            print("L")
        case 'm':
            PRINT("M O L")
        default:
            print("def")
    }
}

void test(){
    charcad = var1.toUpperCase().toLowerCase().charAt(0); 

    //forma de definir arreglos1
    Double arreglo1 = {1.0,2.0,3.0,4.0,5.0,6.0}

    //forma de definir arreglos2
    Integer[] vale = strc Integer[6];

    var nodo := strc Nodo();
    nodo.siguiente = strc Nodo();
    nodo.siguiente.valor = "Hola"
    nodo.siguiente.arregloValores[5] = "Hola";

    return strc Nodo[5];
}

Double func(){
    print("func1()")
}

double n = 3.0