void Principal(){
    print("Esto debería de dar 14: "+(((5)+2)*2))

    if(45>6){
        print("Primer if correcto!");
    }else{
        print("Malo el if :c");
    }

    if(3 == 5){
        print("Malo segundo if")
    }else if(3.0 == 5){
        print("Malísimo segundo if")
    }else{
        print("Bueno el segundo if!!")
    }
}

void Principal(){
    print(ackermann(3,6))
}

Integer ackermann(Integer m,Integer n){
    if (m == 0) {
         return n + 1;
    } else if (n == 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}

Integer global1 = 45;
var global2 := "Hola soy global"
global global3 := "Hola soy global3"

void callBack(){
    print(n)
    print(global3)
}

void Principal(){
    var n := 0;
    while(n<10){
        print("n: "+n)
        n++;
    }
    callBack()
}

void Principal(){
    Integer[] var1 = {5,6,7,8};
    Integer num = 3;
    print("Valor de var1["+num+"] = "+var1[num])
}


String func1(String mensaje){
    print("Desde func1() ya puedes ir a dormir :v"+mensaje)
    return "retorno";
}

String dato(){
    print(1)
}

integer numero(){
    print(1)
}

void func2(){
    print("Desde func2")
}


void f1(Integer n1){
    global c2 := n1;
}

var mensaje := "Mi amor :*"

void Principal(){
    for(Integer i=0; i<100; i++){
        print(mensaje+" te amo mucho!! :3")
    }
}

void Principal(){
    String[] test = {"Hola","Mundo","Prueba","Arreglos"}
    print(test[2])
    test[2] = "Nuevo valor";
    print(test[2])
}

void Principal(){
    String[] test = {"Hola","Mundo","Prueba","Arreglos"}
    print("size: "+test.length)
}

define Nodo as [
    String nombre = "Nombre del nodo",
    integer numero = 40
];

void Principal(){
    Nodo nodo = strc Nodo();
    print("Nombre del nodo: "+nodo.nombre)
}

void Principal(){
    String n1 = 'H'+'O'+'L'+'A';
    print(n1)
}

void Principal(){
    print('a')
    print("Hola")
    print('a'+3);
    print('a'+'a')
    print('a'+"Hola")
}

void Principal(){
    print(false)
    boolean iguales = false
    print(false)
    if(iguales){

    }
}