var t0, t1, t2, t3, t4, t5, t6;

#* //============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL*#
var P,H;
var stack[];
var heap[];
P = 0;
H = 0;

#* //======================= EJECUCION DEL MAIN ========================*#
call Principal;
#* //====================================================*#
#* //======== Funcion: Principal ============*#
#* //====================================================*#
proc Principal begin
    ## OPTIMIZACIONES DE LA 8 A LA 18
    x = x + 0;
    x = x - 0;
    x = x * 1;
    x = x / 1;
    x = y + 0;
    x = y - 0;
    x = y * 1;
    x = y / 1;
    x = y * 2;
    x = y * 0;
    x = 0 / y;

    ## OPTIMIZACIONES DE BLOQUES

    ## OPTIMIZACION REGLA 23
    t1=2+3; 
    t2=3*t1; 
    t3=4-2; 
    t4=t4*t3; 
    print("%e",t4);
    
end
#* //==================== FIN DEL PROGRAMA =========================*#
