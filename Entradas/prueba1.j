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
    print(ackermann(3,4))
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