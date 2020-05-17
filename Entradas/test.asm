var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42
, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52;


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
#* //================ DECLARANDO VARIABLE: test TIPO: 3*#
#* //====== instanciando arreglo*#
t0 = H;
#* //=== en la primera posición guardo la dimensión*#
heap[H] = 4;
H = H + 1;
t1 = H;
H = H+4;
#* //============== Guardando valor en heap ======================*#
t2 = H;
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
heap[t1] = t2;
t1 = t1+1;
#* //============== Guardando valor en heap ======================*#
t3 = H;
#* //ascii: M*#
heap[H] = 77;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: n*#
heap[H] = 110;
H = H + 1;
#* //ascii: d*#
heap[H] = 100;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
heap[t1] = t3;
t1 = t1+1;
#* //============== Guardando valor en heap ======================*#
t4 = H;
#* //ascii: P*#
heap[H] = 80;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: b*#
heap[H] = 98;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
heap[t1] = t4;
t1 = t1+1;
#* //============== Guardando valor en heap ======================*#
t5 = H;
#* //ascii: A*#
heap[H] = 65;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: g*#
heap[H] = 103;
H = H + 1;
#* //ascii: l*#
heap[H] = 108;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
heap[t1] = t5;
t1 = t1+1;
#* //=========== fin arreglo*#
L2:
#* //======= fin instancia arreglo*#
t6 = P+0;
stack[t6] = t0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
t9 = 2;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: test ===========*#
t10 = P+0;
t11 = stack[t10];
#* //============================================================*#
t8 = t11;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t7 = heap[t8];
if (t9 >= t7) goto L3;
t8 = t8+1;
t8 = t8+t9;
t7 = heap[t8];
goto L4;
#* //=== etiqueta indexoutofbounds*#
L3:
#* //===== fin acceso arreglo*#
L4:
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t12 = t7;
#* ////cambio simulado de entorno*#
t13 = P+3;
t14 = t13+1;
stack[t14] = t12;
#* //cambio real de ambito*#
P = P+3;
call nativa_imprimir_string;
P = P-3;
#* //======= fin llamada impresion cadena =======*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //============== Guardando valor en heap ======================*#
t16 = H;
#* //ascii: N*#
heap[H] = 78;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: v*#
heap[H] = 118;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: v*#
heap[H] = 118;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: l*#
heap[H] = 108;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //==== guardando valor ==========*#
#* //===== get posicion de arreglo*#
#* //===== index a obtener del arreglo*#
t19 = 2;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: test ===========*#
t20 = P+0;
t21 = stack[t20];
#* //============================================================*#
t18 = t21;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t17 = heap[t18];
if (t19 >= t17) goto L5;
t18 = t18+1;
t18 = t18+t19;
goto L6;
#* //=== etiqueta indexoutofbounds*#
L5:
#* //===== fin acceso arreglo*#
L6:
print("%i",t18);
print("%c",10);
# heap[t18] = t16;
#* //============== FIN REASIGNACION VARIABLE =================*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
t24 = 4;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: test ===========*#
t25 = P+0;
t26 = stack[t25];
#* //============================================================*#
t23 = t26;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t22 = heap[t23];
if (t24 >= t22) goto L7;
t23 = t23+1;
t23 = t23+t24;
t22 = heap[t23];
goto L8;
#* //=== etiqueta indexoutofbounds*#
L7:
#* //===== fin acceso arreglo*#
L8:
#* //======= llamada impresion cadena =======*#
#* //posicion el heap*#
t27 = t22;
#* ////cambio simulado de entorno*#
t28 = P+3;
t29 = t28+1;
stack[t29] = t27;
#* //cambio real de ambito*#
P = P+3;
call nativa_imprimir_string;
P = P-3;
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
t30 = P+1;
t31 = stack[t30];
L11:
t32 = heap[t31];
if (t32 == 3) goto L9;
goto L10;
L10:
#* //=== pregunto si lo que viene es un decimal*#
if (t32 <> 1) goto L12;
t31 = t31+1;
t32 = heap[t31];
print("%d",t32);
t31 = t31+1;
goto L11;
L12:
print("%c",t32);
t31 = t31+1;
goto L11;
L9:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t33 = P+1;
t34 = stack[t33];
L15:
t35 = heap[t34];
if (t35 == 3) goto L13;
goto L14;
L14:
print("%c",t35);
t34 = t34+1;
goto L15;
L13:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t43 = H;
t36 = P+1;
t37 = stack[t36];
t38 = t37;
#* //==== pregunto si es negativo*#
if (t37 >= 0) goto L24;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t38 = t38*-1;
t37 = t37*-1;
L24:
t39 = 0;
if (t38 <> 0) goto L17;
goto L23;
L17:
if (t38 < 1) goto L18;
t38 = t38/10;
t39 = t39+1;
goto L17;
L18:
t40 = t37;
if (t39 == 0) goto L16;
goto L19;
L19:
t39 = t39-1;
t41 = t39;
t42 = 1;
L20:
if (t41 == 0) goto L21;
goto L22;
L22:
t42 = t42*10;
t41 = t41-1;
goto L20;
L21:
t40 = t40/t42;
t41 = t40%1;
t40 = t40-t41;
t40 = t40+48;
heap[H] = t40;
H = H + 1;
t37 = t37%t42;
goto L18;
L23:
t45 = 48+0;
heap[H] = t45;
H = H + 1;
L16:
heap[H] = 3;
H = H + 1;
t44 = P+0;
stack[t44] = t43;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t47 = P+1;
t46 = P+2;
t47 = stack[t47];
t48 = stack[t46];
#* //si el exponente es negativo*#
if (t48 == 0) goto L26;
if (t48 < 0) goto L27;
t49 = t47;
t48 = t48-1;
L28:
if (t48 == 0) goto L29;
goto L30;
L29:
stack[P] = t47;
goto L25;
L30:
t47 = t47*t49;
t48 = t48-1;
goto L28;
#* //====== Retorno = 1*#
L26:
stack[P] = 1;
goto L25;
#* //====== Exponente negativo*#
L27:
t50 = 0-1;
t48 = t48*t50;
t51 = t47;
t48 = t48-1;
L31:
if (t48 == 0) goto L32;
t47 = t47*t51;
t48 = t48-1;
goto L31;
L32:
t47 = 1/t47;
stack[P] = t47;
L25:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
