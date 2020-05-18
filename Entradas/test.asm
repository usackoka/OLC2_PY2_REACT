var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42
, t43, t44, t45, t46, t47, t48, t49, t50, t51;


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
t0 = H;
#* //ascii: 97*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t1 = t0;
#* ////cambio simulado de entorno*#
t2 = P+2;
t3 = t2+1;
stack[t3] = t1;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
#* //============== Guardando valor en heap ======================*#
t4 = H;
#* //ascii: H*#
heap[H] = 72;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: l*#
heap[H] = 108;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t5 = t4;
#* ////cambio simulado de entorno*#
t6 = P+2;
t7 = t6+1;
stack[t7] = t5;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
t8 = 97+3;
print("%i",t8);
print("%c",10);
t9 = H;
#* //ascii: 97*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
t10 = H;
#* //ascii: 97*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //=============== Suma de strings ===================*#
t11 = t10;
t12 = t9;
t15 = H;
#* //====== copio primer string*#
L3:
t13 = heap[t11];
if (t13 == 3) goto L2;
heap[H] = t13;
H = H + 1;
t11 = t11+1;
goto L3;
#* //====== copio segundo string*#
L2:
t14 = heap[t12];
if (t14 == 3) goto L4;
heap[H] = t14;
H = H + 1;
t12 = t12+1;
goto L2;
L4:
heap[H] = 3;
H = H + 1;
#* //=================fin suma de strings====================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t16 = t15;
#* ////cambio simulado de entorno*#
t17 = P+2;
t18 = t17+1;
stack[t18] = t16;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
#* //============== Guardando valor en heap ======================*#
t19 = H;
#* //ascii: H*#
heap[H] = 72;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: l*#
heap[H] = 108;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
t20 = H;
#* //ascii: 97*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //=============== Suma de strings ===================*#
t21 = t20;
t22 = t19;
t25 = H;
#* //====== copio primer string*#
L6:
t23 = heap[t21];
if (t23 == 3) goto L5;
heap[H] = t23;
H = H + 1;
t21 = t21+1;
goto L6;
#* //====== copio segundo string*#
L5:
t24 = heap[t22];
if (t24 == 3) goto L7;
heap[H] = t24;
H = H + 1;
t22 = t22+1;
goto L5;
L7:
heap[H] = 3;
H = H + 1;
#* //=================fin suma de strings====================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t26 = t25;
#* ////cambio simulado de entorno*#
t27 = P+2;
t28 = t27+1;
stack[t28] = t26;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
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
t29 = P+1;
t30 = stack[t29];
L10:
t31 = heap[t30];
if (t31 == 3) goto L8;
goto L9;
L9:
#* //=== pregunto si lo que viene es un decimal*#
if (t31 <> 1) goto L11;
t30 = t30+1;
t31 = heap[t30];
print("%d",t31);
t30 = t30+1;
goto L10;
L11:
print("%c",t31);
t30 = t30+1;
goto L10;
L8:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t32 = P+1;
t33 = stack[t32];
L14:
t34 = heap[t33];
if (t34 == 3) goto L12;
goto L13;
L13:
print("%c",t34);
t33 = t33+1;
goto L14;
L12:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t42 = H;
t35 = P+1;
t36 = stack[t35];
t37 = t36;
#* //==== pregunto si es negativo*#
if (t36 >= 0) goto L23;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t37 = t37*-1;
t36 = t36*-1;
L23:
t38 = 0;
if (t37 <> 0) goto L16;
goto L22;
L16:
if (t37 < 1) goto L17;
t37 = t37/10;
t38 = t38+1;
goto L16;
L17:
t39 = t36;
if (t38 == 0) goto L15;
goto L18;
L18:
t38 = t38-1;
t40 = t38;
t41 = 1;
L19:
if (t40 == 0) goto L20;
goto L21;
L21:
t41 = t41*10;
t40 = t40-1;
goto L19;
L20:
t39 = t39/t41;
t40 = t39%1;
t39 = t39-t40;
t39 = t39+48;
heap[H] = t39;
H = H + 1;
t36 = t36%t41;
goto L17;
L22:
t44 = 48+0;
heap[H] = t44;
H = H + 1;
L15:
heap[H] = 3;
H = H + 1;
t43 = P+0;
stack[t43] = t42;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t46 = P+1;
t45 = P+2;
t46 = stack[t46];
t47 = stack[t45];
#* //si el exponente es negativo*#
if (t47 == 0) goto L25;
if (t47 < 0) goto L26;
t48 = t46;
t47 = t47-1;
L27:
if (t47 == 0) goto L28;
goto L29;
L28:
stack[P] = t46;
goto L24;
L29:
t46 = t46*t48;
t47 = t47-1;
goto L27;
#* //====== Retorno = 1*#
L25:
stack[P] = 1;
goto L24;
#* //====== Exponente negativo*#
L26:
t49 = 0-1;
t47 = t47*t49;
t50 = t46;
t47 = t47-1;
L30:
if (t47 == 0) goto L31;
t46 = t46*t50;
t47 = t47-1;
goto L30;
L31:
t46 = 1/t46;
stack[P] = t46;
L24:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
