#*=========== DECLARACION DE TEMPORALES USADOS *#
var t0;

#*============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL*#
var P,H;
var stack[];
var heap[];

P = 0;
H = 0;

#*======================= EJECUCION DEL MAIN ========================*#
call Principal;
goto L0;
#*====================================================*#
#*======== Funcion: Principal ============*#
#*====================================================*#
proc Principal begin
#*============== Guardando valor en heap ======================*#
t0 = H;
#*ascii: H*#
heap[H] = 72;
H = H + 1;
#*ascii: o*#
heap[H] = 111;
H = H + 1;
#*ascii: l*#
heap[H] = 108;
H = H + 1;
#*ascii: a*#
heap[H] = 97;
H = H + 1;
#*ascii:  *#
heap[H] = 32;
H = H + 1;
#*ascii: M*#
heap[H] = 77;
H = H + 1;
#*ascii: u*#
heap[H] = 117;
H = H + 1;
#*ascii: n*#
heap[H] = 110;
H = H + 1;
#*ascii: d*#
heap[H] = 100;
H = H + 1;
#*ascii: o*#
heap[H] = 111;
H = H + 1;
#*ascii: !*#
heap[H] = 33;
H = H + 1;
#*ascii: eos*#
heap[H] = 3;
H = H + 1;
#*==============================================================*#
#*======= llamada impresion cadena =======*#
#*posicion el heap*#
t1 = t0;
#*//cambio simulado de entorno*#
t2 = P+2;
t3 = t2+1;
stack[t3] = t1;
#*cambio real de ambito*#
P = P+2;
call nativa_imprimir_string2;
P = P-2;
#*======= fin llamada impresion cadena =======*#
L1:
end 
#*====================================================*#
#*======== FIN Funcion: Principal ========*#
#*====================================================*#
#*==================================================================*#
#*=============== COMIENZAN METODOS NATIVOS ========================*#
#*==================================================================*#
#*==================================================================*#
#*=================== NATIVA IMPRIMIR STRING =======================*#
#*==================================================================*#
proc nativa_imprimir_string begin
t4 = P+1;
t5 = stack[t4];
L4:
t6 = heap[t5];
if (t6 == 3) goto L2;
goto L3;
L3:
#*=== pregunto si lo que viene es un decimal*#
if (t6 <> 1) goto L5;
t5 = t5+1;
t6 = heap[t5];
print("%d",t6);
t5 = t5+1;
goto L4;
L5:
print("%c",t6);
t5 = t5+1;
goto L4;
L2:
print("%c",10);
end 
#*==================================================================*#
#*=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#*==================================================================*#
proc nativa_imprimir_string2 begin
t7 = P+1;
t8 = stack[t7];
L8:
t9 = heap[t8];
if (t9 == 3) goto L6;
goto L7;
L7:
print("%c",t9);
t8 = t8+1;
goto L8;
L6:
end 
#*==================================================================*#
#*=================== NATIVA TO INTEGER      =======================*#
#*==================================================================*#
proc nativa_int_to_string begin
t17 = H;
t10 = P+1;
t11 = stack[t10];
t12 = t11;
#*==== pregunto si es negativo*#
if (t11 >= 0) goto L17;
#*==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t12 = t12*-1;
t11 = t11*-1;
L17:
t13 = 0;
if (t12 <> 0) goto L10;
goto L16;
L10:
if (t12 < 1) goto L11;
t12 = t12/10;
t13 = t13+1;
goto L10;
L11:
t14 = t11;
if (t13 == 0) goto L9;
goto L12;
L12:
t13 = t13-1;
t15 = t13;
t16 = 1;
L13:
if (t15 == 0) goto L14;
goto L15;
L15:
t16 = t16*10;
t15 = t15-1;
goto L13;
L14:
t14 = t14/t16;
t15 = t14%1;
t14 = t14-t15;
t14 = t14+48;
heap[H] = t14;
H = H + 1;
t11 = t11%t16;
goto L11;
L16:
t19 = 48+0;
heap[H] = t19;
H = H + 1;
L9:
heap[H] = 3;
H = H + 1;
t18 = P+0;
stack[t18] = t17;
end 
#*==================================================================*#
#*=================== NATIVA POTENCIA ==============================*#
#*==================================================================*#
proc funcion_nativa_potencia begin
t21 = P+1;
t20 = P+2;
t21 = stack[t21];
t22 = stack[t20];
#*si el exponente es negativo*#
if (t22 == 0) goto L19;
if (t22 < 0) goto L20;
t23 = t21;
t22 = t22-1;
L21:
if (t22 == 0) goto L22;
goto L23;
L22:
stack[P] = t21;
goto L18;
L23:
t21 = t21*t23;
t22 = t22-1;
goto L21;
#*====== Retorno = 1*#
L19:
stack[P] = 1;
goto L18;
#*====== Exponente negativo*#
L20:
t24 = 0-1;
t22 = t22*t24;
t25 = t21;
t22 = t22-1;
L24:
if (t22 == 0) goto L25;
t21 = t21*t25;
t22 = t22-1;
goto L24;
L25:
t21 = 1/t21;
stack[P] = t21;
L18:
end 
L0:
#*==================== FIN DEL PROGRAMA =========================*#
