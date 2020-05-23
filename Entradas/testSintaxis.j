const str := "";
global str2 := "Global";

void Principal(){
    String[] arregloString = strc String[5];
    arregloString[0] = "Hola"
    arregloString[1] = "Mundo"
    arregloString[2] = "!";
    str = arregloString[0] + arregloString[1] + arregloString[2]
    str2 = arregloString[0] + arregloString[1] + arregloString[2]
    print(str2)

    printArregloint()
}

void printArregloint(){
    Integer arr1 = {5,6,7,8,9,10}
    for(Integer i=0;i<arr1.length; i++){
        print(arr1[i])
    }
}