var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25;


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
#* //================ DECLARANDO VARIABLE: i TIPO: null*#
t0 = P+0;
stack[t0] = 56;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //========= Obteniendo valor ID: i ===========*#
t1 = P+0;
t2 = stack[t1];
#* //============================================================*#
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
t3 = P+1;
t4 = stack[t3];
L4:
t5 = heap[t4];
if (t5 == 3) goto L2;
goto L3;
L3:
#* //=== pregunto si lo que viene es un decimal*#
if (t5 <> 1) goto L5;
t4 = t4+1;
t5 = heap[t4];
print("%d",t5);
t4 = t4+1;
goto L4;
L5:
print("%c",t5);
t4 = t4+1;
goto L4;
L2:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t6 = P+1;
t7 = stack[t6];
L8:
t8 = heap[t7];
if (t8 == 3) goto L6;
goto L7;
L7:
print("%c",t8);
t7 = t7+1;
goto L8;
L6:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t16 = H;
t9 = P+1;
t10 = stack[t9];
t11 = t10;
#* //==== pregunto si es negativo*#
if (t10 >= 0) goto L17;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t11 = t11*-1;
t10 = t10*-1;
L17:
t12 = 0;
if (t11 <> 0) goto L10;
goto L16;
L10:
if (t11 < 1) goto L11;
t11 = t11/10;
t12 = t12+1;
goto L10;
L11:
t13 = t10;
if (t12 == 0) goto L9;
goto L12;
L12:
t12 = t12-1;
t14 = t12;
t15 = 1;
L13:
if (t14 == 0) goto L14;
goto L15;
L15:
t15 = t15*10;
t14 = t14-1;
goto L13;
L14:
t13 = t13/t15;
t14 = t13%1;
t13 = t13-t14;
t13 = t13+48;
heap[H] = t13;
H = H + 1;
t10 = t10%t15;
goto L11;
L16:
t18 = 48+0;
heap[H] = t18;
H = H + 1;
L9:
heap[H] = 3;
H = H + 1;
t17 = P+0;
stack[t17] = t16;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t20 = P+1;
t19 = P+2;
t20 = stack[t20];
t21 = stack[t19];
#* //si el exponente es negativo*#
if (t21 == 0) goto L19;
if (t21 < 0) goto L20;
t22 = t20;
t21 = t21-1;
L21:
if (t21 == 0) goto L22;
goto L23;
L22:
stack[P] = t20;
goto L18;
L23:
t20 = t20*t22;
t21 = t21-1;
goto L21;
#* //====== Retorno = 1*#
L19:
stack[P] = 1;
goto L18;
#* //====== Exponente negativo*#
L20:
t23 = 0-1;
t21 = t21*t23;
t24 = t20;
t21 = t21-1;
L24:
if (t21 == 0) goto L25;
t20 = t20*t24;
t21 = t21-1;
goto L24;
L25:
t20 = 1/t20;
stack[P] = t20;
L18:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
