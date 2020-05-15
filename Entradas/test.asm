var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31;


#* //============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL*#
var P,H;
var stack[];
var heap[];
P = 0;
H = 0;

#* //======================= EJECUCION DEL MAIN ========================*#
call Principal;
goto L0;
#* //====================================================*#
#* //======== Funcion: Principal ============*#
#* //====================================================*#
proc Principal begin
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: var1 TIPO: 3*#
#* //====== instanciando arreglo*#
t0 = H;
#* //=== en la primera posición guardo la dimensión*#
heap[H] = 4;
H = H + 1;
heap[H] = 5;
H = H + 1;
heap[H] = 6;
H = H + 1;
heap[H] = 7;
H = H + 1;
heap[H] = 8;
H = H + 1;
#* //=========== fin arreglo*#
heap[H] = 3;
H = H + 1;
L2:
#* //======= fin instancia arreglo*#
t2 = P+0;
stack[t2] = t0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
t6 = 2;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: var1 ===========*#
t7 = P+0;
t8 = stack[t7];
#* //============================================================*#
t4 = t8;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t3 = heap[t4];
if (t3 >= t6) goto L3;
t4 = t4+1;
t4 = t4+t6;
t3 = heap[t4];
goto L4;
#* //=== etiqueta indexoutofbounds*#
L3:
#* //===== fin acceso arreglo*#
L4:
print("%i",t3);
print("%c",10);
L1:
end 
#* //====================================================*#
#* //======== FIN Funcion: Principal ========*#
#* //====================================================*#
#* //==================================================================*#
#* //=============== COMIENZAN METODOS NATIVOS ========================*#
#* //==================================================================*#
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING =======================*#
#* //==================================================================*#
proc nativa_imprimir_string begin
t9 = P+1;
t10 = stack[t9];
L7:
t11 = heap[t10];
if (t11 == 3) goto L5;
goto L6;
L6:
#* //=== pregunto si lo que viene es un decimal*#
if (t11 <> 1) goto L8;
t10 = t10+1;
t11 = heap[t10];
print("%d",t11);
t10 = t10+1;
goto L7;
L8:
print("%c",t11);
t10 = t10+1;
goto L7;
L5:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t12 = P+1;
t13 = stack[t12];
L11:
t14 = heap[t13];
if (t14 == 3) goto L9;
goto L10;
L10:
print("%c",t14);
t13 = t13+1;
goto L11;
L9:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t22 = H;
t15 = P+1;
t16 = stack[t15];
t17 = t16;
#* //==== pregunto si es negativo*#
if (t16 >= 0) goto L20;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t17 = t17*-1;
t16 = t16*-1;
L20:
t18 = 0;
if (t17 <> 0) goto L13;
goto L19;
L13:
if (t17 < 1) goto L14;
t17 = t17/10;
t18 = t18+1;
goto L13;
L14:
t19 = t16;
if (t18 == 0) goto L12;
goto L15;
L15:
t18 = t18-1;
t20 = t18;
t21 = 1;
L16:
if (t20 == 0) goto L17;
goto L18;
L18:
t21 = t21*10;
t20 = t20-1;
goto L16;
L17:
t19 = t19/t21;
t20 = t19%1;
t19 = t19-t20;
t19 = t19+48;
heap[H] = t19;
H = H + 1;
t16 = t16%t21;
goto L14;
L19:
t24 = 48+0;
heap[H] = t24;
H = H + 1;
L12:
heap[H] = 3;
H = H + 1;
t23 = P+0;
stack[t23] = t22;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t26 = P+1;
t25 = P+2;
t26 = stack[t26];
t27 = stack[t25];
#* //si el exponente es negativo*#
if (t27 == 0) goto L22;
if (t27 < 0) goto L23;
t28 = t26;
t27 = t27-1;
L24:
if (t27 == 0) goto L25;
goto L26;
L25:
stack[P] = t26;
goto L21;
L26:
t26 = t26*t28;
t27 = t27-1;
goto L24;
#* //====== Retorno = 1*#
L22:
stack[P] = 1;
goto L21;
#* //====== Exponente negativo*#
L23:
t29 = 0-1;
t27 = t27*t29;
t30 = t26;
t27 = t27-1;
L27:
if (t27 == 0) goto L28;
t26 = t26*t30;
t27 = t27-1;
goto L27;
L28:
t26 = 1/t26;
stack[P] = t26;
L21:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
