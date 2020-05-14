var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42
, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63
, t64, t65, t66, t67, t68, t69, t70, t71, t72;


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
#* //============== Guardando valor en heap ======================*#
t0 = H;
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
#* //============== Guardando valor en heap ======================*#
t1 = H;
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
#* //============== Comparacion de cadenas (igual_igual) ===========*#
t2 = t0;
t3 = t1;
L5:
t4 = heap[t2];
t5 = heap[t3];
if (t4 == t5) goto L2;
goto L3;
L2:
t2 = t2+1;
t3 = t3+1;
t4 = heap[t2];
if (t4 == 3) goto L4;
goto L5;
L4:
t4 = heap[t3];
if (t4 == 3) goto L6;
goto L3;
L6:
#* //==== cadenas iguales*#
t6 = 1;
goto L7;
L3:
#* //==== cadenas no iguales*#
t6 = 0;
L7:
#* //=============== IF =================*#
if (t6 <> 1) goto L8;
#* //============== Guardando valor en heap ======================*#
t7 = H;
#* //ascii: B*#
heap[H] = 66;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: n*#
heap[H] = 110;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: l*#
heap[H] = 108;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: m*#
heap[H] = 109;
H = H + 1;
#* //ascii: p*#
heap[H] = 112;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: n*#
heap[H] = 110;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: d*#
heap[H] = 100;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: d*#
heap[H] = 100;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: n*#
heap[H] = 110;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t8 = t7;
#* ////cambio simulado de entorno*#
t9 = P+2;
t10 = t9+1;
stack[t10] = t8;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
goto L9;
L8:
L9:
#* //=============== FIN IF =================*#
#* //=============== FOR =================*#
#* //============== DECLARACION VARIABLE ITERADORA*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: i TIPO: 3*#
t11 = P+0;
stack[t11] = 0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //============== CONDICION FOR*#
L12:
#* //========= Obteniendo valor ID: i ===========*#
t12 = P+0;
t13 = stack[t12];
#* //============================================================*#
if (t13 < 10) goto L13;
goto L14;
L13:
t14 = 1;
goto L15;
L14:
t14 = 0;
L15:
if (t14 == 1) goto L10;
goto L11;
L10:
#* //============== Guardando valor en heap ======================*#
t15 = H;
#* //ascii: v*#
heap[H] = 118;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: b*#
heap[H] = 98;
H = H + 1;
#* //ascii: l*#
heap[H] = 108;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii: :*#
heap[H] = 58;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //========= Obteniendo valor ID: i ===========*#
t16 = P+0;
t17 = stack[t16];
#* //============================================================*#
#* //========= Obteniendo valor ID: i ===========*#
t18 = P+0;
t19 = stack[t18];
#* //============================================================*#
#* //======= llamada int a string =======*#
#* ////numero a convertir*#
t20 = t19;
#* ////cambio simulado de entorno*#
t21 = P+3;
t22 = t21+1;
stack[t22] = t20;
#* ////cambio real de ambito*#
P = P+3;
call nativa_int_to_string;
t23 = stack[P];
P = P-3;
#* //======================================*#
#* //=============== Suma de strings ===================*#
t24 = t15;
t25 = t23;
t28 = H;
#* //====== copio primer string*#
L17:
t26 = heap[t24];
if (t26 == 3) goto L16;
heap[H] = t26;
H = H + 1;
t24 = t24+1;
goto L17;
#* //====== copio segundo string*#
L16:
t27 = heap[t25];
if (t27 == 3) goto L18;
heap[H] = t27;
H = H + 1;
t25 = t25+1;
goto L16;
L18:
heap[H] = 3;
H = H + 1;
#* //=================fin suma de strings====================*#
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t29 = t28;
#* ////cambio simulado de entorno*#
t30 = P+3;
t31 = t30+1;
stack[t31] = t29;
#* //cambio real de ambito*#
P = P+3;
call nativa_imprimir_string;
P = P-3;
#* //======= fin llamada impresion cadena =======*#
#* //============== EXPRESION FOR*#
#* //============= UNARIO MASMAS ============*#
#* //========= Aumentando valor ID: i ===========*#
t33 = P+-1;
t34 = stack[t33];
t34 = t34+1;
stack[t33] = t34;
#* //============================================================*#
goto L12;
L11:
#* //=============== FIN FOR =================*#
#* //============== Guardando valor en heap ======================*#
t35 = H;
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
#* //ascii: 1*#
heap[H] = 49;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //============== Guardando valor en heap ======================*#
t36 = H;
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
#* //============== Comparacion de cadenas (igual_igual) ===========*#
t37 = t35;
t38 = t36;
L22:
t39 = heap[t37];
t40 = heap[t38];
if (t39 == t40) goto L19;
goto L20;
L19:
t37 = t37+1;
t38 = t38+1;
t39 = heap[t37];
if (t39 == 3) goto L21;
goto L22;
L21:
t39 = heap[t38];
if (t39 == 3) goto L23;
goto L20;
L23:
#* //==== cadenas iguales*#
t41 = 1;
goto L24;
L20:
#* //==== cadenas no iguales*#
t41 = 0;
L24:
#* //=============== IF =================*#
if (t41 <> 1) goto L25;
#* //============== Guardando valor en heap ======================*#
t42 = H;
#* //ascii: A*#
heap[H] = 65;
H = H + 1;
#* //ascii: q*#
heap[H] = 113;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: í*#
heap[H] = 237;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: n*#
heap[H] = 110;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t43 = t42;
#* ////cambio simulado de entorno*#
t44 = P+2;
t45 = t44+1;
stack[t45] = t43;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
goto L26;
L25:
#* //=============== Else =================*#
#* //============== Guardando valor en heap ======================*#
t46 = H;
#* //ascii: A*#
heap[H] = 65;
H = H + 1;
#* //ascii: q*#
heap[H] = 113;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: í*#
heap[H] = 237;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: t*#
heap[H] = 116;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: m*#
heap[H] = 109;
H = H + 1;
#* //ascii: p*#
heap[H] = 112;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: x*#
heap[H] = 120;
H = H + 1;
#* //ascii: 2*#
heap[H] = 50;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t47 = t46;
#* ////cambio simulado de entorno*#
t48 = P+2;
t49 = t48+1;
stack[t49] = t47;
#* //cambio real de ambito*#
P = P+2;
call nativa_imprimir_string;
P = P-2;
#* //======= fin llamada impresion cadena =======*#
#* //=============== FIN ELSE =================*#
L26:
#* //=============== FIN IF =================*#
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
t50 = P+1;
t51 = stack[t50];
L29:
t52 = heap[t51];
if (t52 == 3) goto L27;
goto L28;
L28:
#* //=== pregunto si lo que viene es un decimal*#
if (t52 <> 1) goto L30;
t51 = t51+1;
t52 = heap[t51];
print("%d",t52);
t51 = t51+1;
goto L29;
L30:
print("%c",t52);
t51 = t51+1;
goto L29;
L27:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t53 = P+1;
t54 = stack[t53];
L33:
t55 = heap[t54];
if (t55 == 3) goto L31;
goto L32;
L32:
print("%c",t55);
t54 = t54+1;
goto L33;
L31:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t63 = H;
t56 = P+1;
t57 = stack[t56];
t58 = t57;
#* //==== pregunto si es negativo*#
if (t57 >= 0) goto L42;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t58 = t58*-1;
t57 = t57*-1;
L42:
t59 = 0;
if (t58 <> 0) goto L35;
goto L41;
L35:
if (t58 < 1) goto L36;
t58 = t58/10;
t59 = t59+1;
goto L35;
L36:
t60 = t57;
if (t59 == 0) goto L34;
goto L37;
L37:
t59 = t59-1;
t61 = t59;
t62 = 1;
L38:
if (t61 == 0) goto L39;
goto L40;
L40:
t62 = t62*10;
t61 = t61-1;
goto L38;
L39:
t60 = t60/t62;
t61 = t60%1;
t60 = t60-t61;
t60 = t60+48;
heap[H] = t60;
H = H + 1;
t57 = t57%t62;
goto L36;
L41:
t65 = 48+0;
heap[H] = t65;
H = H + 1;
L34:
heap[H] = 3;
H = H + 1;
t64 = P+0;
stack[t64] = t63;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t67 = P+1;
t66 = P+2;
t67 = stack[t67];
t68 = stack[t66];
#* //si el exponente es negativo*#
if (t68 == 0) goto L44;
if (t68 < 0) goto L45;
t69 = t67;
t68 = t68-1;
L46:
if (t68 == 0) goto L47;
goto L48;
L47:
stack[P] = t67;
goto L43;
L48:
t67 = t67*t69;
t68 = t68-1;
goto L46;
#* //====== Retorno = 1*#
L44:
stack[P] = 1;
goto L43;
#* //====== Exponente negativo*#
L45:
t70 = 0-1;
t68 = t68*t70;
t71 = t67;
t68 = t68-1;
L49:
if (t68 == 0) goto L50;
t67 = t67*t71;
t68 = t68-1;
goto L49;
L50:
t67 = 1/t67;
stack[P] = t67;
L43:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
