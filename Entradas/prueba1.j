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
    print(30)
    var i := 56;
    print(i)
    i = 40;
    print(i)
    i = 71;
    print(i)
    func1()
}

void func1(){
    print("Desde func1() ya puedes ir a dormir :v")
}

void f1(Integer n1){
    global c2 := n1;
}