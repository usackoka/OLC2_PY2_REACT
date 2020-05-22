double pi = 3.1416;

void principal() {
        //Funciones, llamadas a funciones 
        print(getArea(2));
        print("\n");
        
            
}

double getArea(integer radius){
    return pi*getSquare(radius);
}

double getSquare(integer value){    
    return value^^2;
}