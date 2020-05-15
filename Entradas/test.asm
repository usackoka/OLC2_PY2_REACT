var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42;


#* //============= DECLARACION DE ESTRUCTURAS Y VARIABLES DE CONTROL*#
var P,H;
var stack[];
var heap[];
P = 0;
H = 0;

#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: mensaje TIPO: 0*#
#* //============== Guardando valor en heap ======================*#
t0 = H;
#* //ascii: M*#
heap[H] = 77;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: m*#
heap[H] = 109;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: :*#
heap[H] = 58;
H = H + 1;
#* //ascii: **#
heap[H] = 42;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
t1 = H;
heap[t1] = t0;
H = H + 1;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //======================= EJECUCION DEL MAIN ========================*#
call Principal;
goto L0;
#* //====================================================*#
#* //======== Funcion: Principal ============*#
#* //====================================================*#
proc Principal begin
#* //=============== FOR =================*#
#* //============== DECLARACION VARIABLE ITERADORA*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: i TIPO: 3*#
t2 = P+0;
stack[t2] = 0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //============== CONDICION FOR*#
L4:
#* //========= Obteniendo valor ID: i ===========*#
t3 = P+0;
t4 = stack[t3];
#* //============================================================*#
if (t4 < 100) goto L5;
goto L6;
L5:
t5 = 1;
goto L7;
L6:
t5 = 0;
L7:
if (t5 == 1) goto L2;
goto L3;
L2:
#* //========= Obteniendo valor ID: mensaje ===========*#
t7 = heap[t1];
#* //============================================================*#
#* //============== Guardando valor en heap ======================*#
t8 = H;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: t*#
heap[H] = 116;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: m*#
heap[H] = 109;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: m*#
heap[H] = 109;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: h*#
heap[H] = 104;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: !*#
heap[H] = 33;
H = H + 1;
#* //ascii: !*#
heap[H] = 33;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: :*#
heap[H] = 58;
H = H + 1;
#* //ascii: 3*#
heap[H] = 51;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //=============== Suma de strings ===================*#
t9 = t7;
t10 = t8;
t13 = H;
#* //====== copio primer string*#
L9:
t11 = heap[t9];
if (t11 == 3) goto L8;
heap[H] = t11;
H = H + 1;
t9 = t9+1;
goto L9;
#* //====== copio segundo string*#
L8:
t12 = heap[t10];
if (t12 == 3) goto L10;
heap[H] = t12;
H = H + 1;
t10 = t10+1;
goto L8;
L10:
heap[H] = 3;
H = H + 1;
#* //=================fin suma de strings====================*#
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t14 = t13;
#* ////cambio simulado de entorno*#
t15 = P+3;
t16 = t15+1;
stack[t16] = t14;
#* //cambio real de ambito*#
P = P+3;
call nativa_imprimir_string;
P = P-3;
#* //======= fin llamada impresion cadena =======*#
#* //============== EXPRESION FOR*#
#* //============= UNARIO MASMAS ============*#
#* //========= Aumentando valor ID: i ===========*#
t18 = P+0;
t19 = stack[t18];
t19 = t19+1;
stack[t18] = t19;
#* //============================================================*#
goto L4;
L3:
#* //=============== FIN FOR =================*#
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
t20 = P+1;
t21 = stack[t20];
L13:
t22 = heap[t21];
if (t22 == 3) goto L11;
goto L12;
L12:
#* //=== pregunto si lo que viene es un decimal*#
if (t22 <> 1) goto L14;
t21 = t21+1;
t22 = heap[t21];
print("%d",t22);
t21 = t21+1;
goto L13;
L14:
print("%c",t22);
t21 = t21+1;
goto L13;
L11:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t23 = P+1;
t24 = stack[t23];
L17:
t25 = heap[t24];
if (t25 == 3) goto L15;
goto L16;
L16:
print("%c",t25);
t24 = t24+1;
goto L17;
L15:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t33 = H;
t26 = P+1;
t27 = stack[t26];
t28 = t27;
#* //==== pregunto si es negativo*#
if (t27 >= 0) goto L26;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t28 = t28*-1;
t27 = t27*-1;
L26:
t29 = 0;
if (t28 <> 0) goto L19;
goto L25;
L19:
if (t28 < 1) goto L20;
t28 = t28/10;
t29 = t29+1;
goto L19;
L20:
t30 = t27;
if (t29 == 0) goto L18;
goto L21;
L21:
t29 = t29-1;
t31 = t29;
t32 = 1;
L22:
if (t31 == 0) goto L23;
goto L24;
L24:
t32 = t32*10;
t31 = t31-1;
goto L22;
L23:
t30 = t30/t32;
t31 = t30%1;
t30 = t30-t31;
t30 = t30+48;
heap[H] = t30;
H = H + 1;
t27 = t27%t32;
goto L20;
L25:
t35 = 48+0;
heap[H] = t35;
H = H + 1;
L18:
heap[H] = 3;
H = H + 1;
t34 = P+0;
stack[t34] = t33;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t37 = P+1;
t36 = P+2;
t37 = stack[t37];
t38 = stack[t36];
#* //si el exponente es negativo*#
if (t38 == 0) goto L28;
if (t38 < 0) goto L29;
t39 = t37;
t38 = t38-1;
L30:
if (t38 == 0) goto L31;
goto L32;
L31:
stack[P] = t37;
goto L27;
L32:
t37 = t37*t39;
t38 = t38-1;
goto L30;
#* //====== Retorno = 1*#
L28:
stack[P] = 1;
goto L27;
#* //====== Exponente negativo*#
L29:
t40 = 0-1;
t38 = t38*t40;
t41 = t37;
t38 = t38-1;
L33:
if (t38 == 0) goto L34;
t37 = t37*t41;
t38 = t38-1;
goto L33;
L34:
t37 = 1/t37;
stack[P] = t37;
L27:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
