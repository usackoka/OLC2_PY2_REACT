#*=========== DECLARACION DE TEMPORALES USADOS *#
var t0;

#*============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL*#
var P,H;
var stack[];
var heap[];

#*====================================================*#
#*======== Funcion: Principal ============*#
#*====================================================*#
proc Principal begin
L0:
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
t0 = P+1;
t1 = stack[t0];
L3:
t2 = heap[t1];
if (t2 == 3) goto L1;
goto L2;
L2:
#*=== pregunto si lo que viene es un decimal*#
if (t2 <> 1) goto L4;
t1 = t1+1;
t2 = heap[t1];
print("%d",t2);
t1 = t1+1;
goto L3;
L4:
print("%c",t2);
t1 = t1+1;
goto L3;
L1:
print("%c",10);
end 
#*==================================================================*#
#*=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#*==================================================================*#
proc nativa_imprimir_string2 begin
t3 = P+1;
t4 = stack[t3];
L7:
t5 = heap[t4];
if (t5 == 3) goto L5;
goto L6;
L6:
print("%c",t5);
t4 = t4+1;
goto L7;
L5:
end 
#*==================================================================*#
#*=================== NATIVA TO INTEGER      =======================*#
#*==================================================================*#
proc nativa_int_to_string begin
t13 = H;
t6 = P+1;
t7 = stack[t6];
t8 = t7;
#*==== pregunto si es negativo*#
if (t7 >= 0) goto L16;
#*==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t8 = t8*-1;
t7 = t7*-1;
L16:
t9 = 0;
if (t8 <> 0) goto L9;
goto L15;
L9:
if (t8 < 1) goto L10;
t8 = t8/10;
t9 = t9+1;
goto L9;
L10:
t10 = t7;
if (t9 == 0) goto L8;
goto L11;
L11:
t9 = t9-1;
t11 = t9;
t12 = 1;
L12:
if (t11 == 0) goto L13;
goto L14;
L14:
t12 = t12*10;
t11 = t11-1;
goto L12;
L13:
t10 = t10/t12;
t11 = t10%1;
t10 = t10-t11;
t10 = t10+48;
heap[H] = t10;
H = H + 1;
t7 = t7%t12;
goto L10;
L15:
t15 = 48+0;
heap[H] = t15;
H = H + 1;
L8:
heap[H] = 3;
H = H + 1;
t14 = P+0;
stack[t14] = t13;
end 
#*==================================================================*#
#*=================== NATIVA POTENCIA ==============================*#
#*==================================================================*#
proc funcion_nativa_potencia begin
t17 = P+1;
t16 = P+2;
t17 = stack[t17];
t18 = stack[t16];
#*si el exponente es negativo*#
if (t18 == 0) goto L18;
if (t18 < 0) goto L19;
t19 = t17;
t18 = t18-1;
L20:
if (t18 == 0) goto L21;
goto L22;
L21:
stack[P] = t17;
goto L17;
L22:
t17 = t17*t19;
t18 = t18-1;
goto L20;
#*====== Retorno = 1*#
L18:
stack[P] = 1;
goto L17;
#*====== Exponente negativo*#
L19:
t20 = 0-1;
t18 = t18*t20;
t21 = t17;
t18 = t18-1;
L23:
if (t18 == 0) goto L24;
t17 = t17*t21;
t18 = t18-1;
goto L23;
L24:
t17 = 1/t17;
stack[P] = t17;
L17:
end 
#*======================= EJECUCION DEL MAIN ========================*#
call principal;
