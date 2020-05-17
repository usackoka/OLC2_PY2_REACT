var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37;


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
heap[H] = t2;
H = H + 1;
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
heap[H] = t3;
H = H + 1;
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
heap[H] = t4;
H = H + 1;
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
heap[H] = t5;
H = H + 1;
#* //=========== fin arreglo*#
heap[H] = 3;
H = H + 1;
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
# * //============================================================*#
t8 = t11;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t7 = heap[t8];
if (t9 >= t7) goto L3;
t8 = t8+1;
t8 = t8+t9;
print("%i",t7);
print("%c",10);
print("%i",t8);
# t7 = heap[t8];
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
t15 = P+1;
t16 = stack[t15];
L7:
t17 = heap[t16];
if (t17 == 3) goto L5;
goto L6;
L6:
#* //=== pregunto si lo que viene es un decimal*#
if (t17 <> 1) goto L8;
t16 = t16+1;
t17 = heap[t16];
print("%d",t17);
t16 = t16+1;
goto L7;
L8:
print("%c",t17);
t16 = t16+1;
goto L7;
L5:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t18 = P+1;
t19 = stack[t18];
L11:
t20 = heap[t19];
if (t20 == 3) goto L9;
goto L10;
L10:
print("%c",t20);
t19 = t19+1;
goto L11;
L9:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t28 = H;
t21 = P+1;
t22 = stack[t21];
t23 = t22;
#* //==== pregunto si es negativo*#
if (t22 >= 0) goto L20;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t23 = t23*-1;
t22 = t22*-1;
L20:
t24 = 0;
if (t23 <> 0) goto L13;
goto L19;
L13:
if (t23 < 1) goto L14;
t23 = t23/10;
t24 = t24+1;
goto L13;
L14:
t25 = t22;
if (t24 == 0) goto L12;
goto L15;
L15:
t24 = t24-1;
t26 = t24;
t27 = 1;
L16:
if (t26 == 0) goto L17;
goto L18;
L18:
t27 = t27*10;
t26 = t26-1;
goto L16;
L17:
t25 = t25/t27;
t26 = t25%1;
t25 = t25-t26;
t25 = t25+48;
heap[H] = t25;
H = H + 1;
t22 = t22%t27;
goto L14;
L19:
t30 = 48+0;
heap[H] = t30;
H = H + 1;
L12:
heap[H] = 3;
H = H + 1;
t29 = P+0;
stack[t29] = t28;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t32 = P+1;
t31 = P+2;
t32 = stack[t32];
t33 = stack[t31];
#* //si el exponente es negativo*#
if (t33 == 0) goto L22;
if (t33 < 0) goto L23;
t34 = t32;
t33 = t33-1;
L24:
if (t33 == 0) goto L25;
goto L26;
L25:
stack[P] = t32;
goto L21;
L26:
t32 = t32*t34;
t33 = t33-1;
goto L24;
#* //====== Retorno = 1*#
L22:
stack[P] = 1;
goto L21;
#* //====== Exponente negativo*#
L23:
t35 = 0-1;
t33 = t33*t35;
t36 = t32;
t33 = t33-1;
L27:
if (t33 == 0) goto L28;
t32 = t32*t36;
t33 = t33-1;
goto L27;
L28:
t32 = 1/t32;
stack[P] = t32;
L21:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
