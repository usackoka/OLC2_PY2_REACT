var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42
, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58;


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
#* //======== Funcion: principal ============*#
#* //====================================================*#
proc principal begin
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: arreglo TIPO: 3*#
#* //====== instanciando arreglo*#
t0 = H;
#* //=== en la primera posición guardo la dimensión*#
heap[H] = 5;
H = H + 1;
t1 = H;
H = H+5;
heap[t1] = 2;
t1 = t1+1;
heap[t1] = 1;
t1 = t1+1;
heap[t1] = 3;
t1 = t1+1;
heap[t1] = 5;
t1 = t1+1;
heap[t1] = 4;
t1 = t1+1;
#* //=========== fin arreglo*#
L2:
#* //======= fin instancia arreglo*#
t2 = P+0;
stack[t2] = t0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: arreglo_ordenado TIPO: 3*#
#* //====== instanciando arreglo*#
t3 = H;
#* //=== en la primera posición guardo la dimensión*#
heap[H] = 5;
H = H + 1;
t4 = H;
H = H+5;
heap[t4] = 1;
t4 = t4+1;
heap[t4] = 2;
t4 = t4+1;
heap[t4] = 3;
t4 = t4+1;
heap[t4] = 4;
t4 = t4+1;
heap[t4] = 5;
t4 = t4+1;
#* //=========== fin arreglo*#
L3:
#* //======= fin instancia arreglo*#
t5 = P+1;
stack[t5] = t3;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: iguales TIPO: 3*#
t6 = P+2;
stack[t6] = 1;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: size TIPO: 3*#
#* //========= Obteniendo valor ID: arreglo_ordenado ===========*#
t7 = P+1;
t8 = stack[t7];
#* //============================================================*#
#* //========== get length of array*#
t9 = heap[t8];
t10 = P+3;
stack[t10] = t9;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=============== FOR =================*#
#* //============== DECLARACION VARIABLE ITERADORA*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: i TIPO: 3*#
t11 = P+0;
stack[t11] = 0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //============== CONDICION FOR*#
L6:
#* //========= Obteniendo valor ID: i ===========*#
t12 = P+0;
t13 = stack[t12];
#* //============================================================*#
#* //========= Obteniendo valor ID: size ===========*#
t14 = P+3;
t15 = stack[t14];
#* //============================================================*#
if (t13 < t15) goto L7;
goto L8;
L7:
t16 = 1;
goto L9;
L8:
t16 = 0;
L9:
if (t16 == 1) goto L4;
goto L5;
L4:
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: i ===========*#
t20 = P+0;
t21 = stack[t20];
#* //============================================================*#
t19 = t21;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: arreglo ===========*#
t22 = P+0;
t23 = stack[t22];
#* //============================================================*#
t18 = t23;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t17 = heap[t18];
if (t19 >= t17) goto L10;
t18 = t18+1;
t18 = t18+t19;
t17 = heap[t18];
goto L11;
#* //=== etiqueta indexoutofbounds*#
L10:
#* //===== fin acceso arreglo*#
L11:
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: i ===========*#
t27 = P+0;
t28 = stack[t27];
#* //============================================================*#
t26 = t28;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: arreglo_ordenado ===========*#
t29 = P+1;
t30 = stack[t29];
#* //============================================================*#
t25 = t30;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t24 = heap[t25];
if (t26 >= t24) goto L12;
t25 = t25+1;
t25 = t25+t26;
t24 = heap[t25];
goto L13;
#* //=== etiqueta indexoutofbounds*#
L12:
#* //===== fin acceso arreglo*#
L13:
if (t17 <> t24) goto L14;
goto L15;
L14:
t31 = 1;
goto L16;
L15:
t31 = 0;
L16:
#* //=============== IF =================*#
if (t31 <> 1) goto L17;
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //==== guardando valor ==========*#
t32 = P+2;
stack[t32] = 0;
#* //============== FIN REASIGNACION VARIABLE =================*#
goto L18;
L17:
L18:
#* //=============== FIN IF =================*#
#* //============== EXPRESION FOR*#
#* //============= UNARIO MASMAS ============*#
#* //========= Aumentando valor ID: i ===========*#
t34 = P+0;
t35 = stack[t34];
t35 = t35+1;
stack[t34] = t35;
#* //============================================================*#
goto L6;
L5:
#* //=============== FIN FOR =================*#
L1:
end 
#* //====================================================*#
#* //======== FIN Funcion: principal ========*#
#* //====================================================*#
#* //==================================================================*#
#* //=============== COMIENZAN METODOS NATIVOS ========================*#
#* //==================================================================*#
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING =======================*#
#* //==================================================================*#
proc nativa_imprimir_string begin
t36 = P+1;
t37 = stack[t36];
L21:
t38 = heap[t37];
if (t38 == 3) goto L19;
goto L20;
L20:
#* //=== pregunto si lo que viene es un decimal*#
if (t38 <> 1) goto L22;
t37 = t37+1;
t38 = heap[t37];
print("%d",t38);
t37 = t37+1;
goto L21;
L22:
print("%c",t38);
t37 = t37+1;
goto L21;
L19:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t39 = P+1;
t40 = stack[t39];
L25:
t41 = heap[t40];
if (t41 == 3) goto L23;
goto L24;
L24:
print("%c",t41);
t40 = t40+1;
goto L25;
L23:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t49 = H;
t42 = P+1;
t43 = stack[t42];
t44 = t43;
#* //==== pregunto si es negativo*#
if (t43 >= 0) goto L34;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t44 = t44*-1;
t43 = t43*-1;
L34:
t45 = 0;
if (t44 <> 0) goto L27;
goto L33;
L27:
if (t44 < 1) goto L28;
t44 = t44/10;
t45 = t45+1;
goto L27;
L28:
t46 = t43;
if (t45 == 0) goto L26;
goto L29;
L29:
t45 = t45-1;
t47 = t45;
t48 = 1;
L30:
if (t47 == 0) goto L31;
goto L32;
L32:
t48 = t48*10;
t47 = t47-1;
goto L30;
L31:
t46 = t46/t48;
t47 = t46%1;
t46 = t46-t47;
t46 = t46+48;
heap[H] = t46;
H = H + 1;
t43 = t43%t48;
goto L28;
L33:
t51 = 48+0;
heap[H] = t51;
H = H + 1;
L26:
heap[H] = 3;
H = H + 1;
t50 = P+0;
stack[t50] = t49;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t53 = P+1;
t52 = P+2;
t53 = stack[t53];
t54 = stack[t52];
#* //si el exponente es negativo*#
if (t54 == 0) goto L36;
if (t54 < 0) goto L37;
t55 = t53;
t54 = t54-1;
L38:
if (t54 == 0) goto L39;
goto L40;
L39:
stack[P] = t53;
goto L35;
L40:
t53 = t53*t55;
t54 = t54-1;
goto L38;
#* //====== Retorno = 1*#
L36:
stack[P] = 1;
goto L35;
#* //====== Exponente negativo*#
L37:
t56 = 0-1;
t54 = t54*t56;
t57 = t53;
t54 = t54-1;
L41:
if (t54 == 0) goto L42;
t53 = t53*t57;
t54 = t54-1;
goto L41;
L42:
t53 = 1/t53;
stack[P] = t53;
L35:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
