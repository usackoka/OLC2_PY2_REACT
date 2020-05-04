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
    print(c2)
    f1(5)
    print(c2)
    f1(4)
    print(c2)
}

void f1(Integer n1){
    global c2 := n1;
}