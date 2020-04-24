import prueba;

const PI := 3.1416
char n1,n2,n3,n4;
double n1,n2,n3 = 4;
var id := 23;
const id2 := 2;
global varGlobal := "string";
String varString = "String";
Integer a = 5;
Integer b = a++;  

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
}