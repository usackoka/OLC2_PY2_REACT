var t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21
, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42
, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63
, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81, t82, t83, t84
, t85, t86, t87, t88, t89, t90, t91, t92, t93, t94, t95, t96, t97, t98, t99, t100, t101, t102, t103, t104, t105
, t106, t107, t108, t109, t110, t111, t112, t113, t114, t115, t116, t117, t118, t119, t120, t121, t122, t123, t124, t125, t126
, t127, t128, t129, t130, t131, t132, t133, t134, t135, t136, t137, t138, t139, t140, t141, t142, t143, t144, t145, t146, t147
, t148, t149, t150, t151, t152, t153, t154, t155, t156, t157, t158, t159, t160, t161, t162, t163, t164, t165, t166, t167, t168
, t169, t170, t171, t172, t173, t174, t175, t176, t177, t178, t179, t180, t181, t182, t183, t184, t185, t186, t187, t188, t189
, t190, t191, t192, t193, t194, t195, t196, t197, t198, t199, t200, t201, t202, t203, t204, t205, t206, t207, t208, t209, t210
, t211, t212, t213, t214, t215, t216, t217, t218, t219, t220, t221, t222, t223, t224, t225, t226, t227, t228, t229, t230, t231
, t232, t233, t234, t235, t236, t237, t238, t239, t240, t241, t242, t243, t244, t245, t246, t247, t248, t249, t250, t251, t252
, t253, t254, t255, t256, t257, t258, t259, t260, t261, t262, t263, t264, t265, t266, t267, t268, t269, t270, t271, t272, t273
, t274, t275, t276, t277, t278, t279, t280, t281, t282, t283, t284, t285, t286, t287, t288, t289, t290, t291, t292, t293, t294
, t295, t296, t297, t298, t299, t300, t301, t302, t303, t304, t305, t306, t307, t308, t309, t310, t311, t312, t313, t314, t315
, t316, t317, t318, t319, t320, t321, t322, t323, t324, t325, t326, t327, t328, t329, t330, t331, t332, t333, t334, t335, t336
, t337, t338, t339, t340, t341, t342, t343, t344, t345, t346, t347, t348, t349, t350, t351, t352, t353, t354, t355, t356, t357
, t358, t359, t360, t361, t362, t363, t364, t365, t366, t367, t368, t369, t370, t371, t372, t373, t374, t375, t376, t377, t378
, t379, t380, t381, t382, t383, t384, t385, t386, t387, t388, t389, t390, t391, t392, t393, t394, t395, t396, t397, t398, t399
, t400, t401, t402, t403, t404, t405, t406, t407, t408, t409, t410, t411, t412, t413, t414, t415, t416, t417, t418, t419, t420
, t421, t422, t423, t424, t425, t426, t427, t428, t429, t430, t431, t432, t433, t434, t435, t436, t437, t438, t439, t440, t441
, t442, t443, t444, t445, t446, t447, t448;


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
#* //================ DECLARANDO VARIABLE: i TIPO: 3*#
t0 = 0;
t1 = P+2;
stack[t1] = t0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: array TIPO: 3*#
#* //====== instanciando arreglo*#
t2 = H;
#* //=== en la primera posición guardo la dimensión*#
heap[H] = 13;
H = H + 1;
t3 = H;
H = H+13;
heap[t3] = 12;
t3 = t3+1;
heap[t3] = 9;
t3 = t3+1;
heap[t3] = 4;
t3 = t3+1;
heap[t3] = 99;
t3 = t3+1;
heap[t3] = 56;
t3 = t3+1;
heap[t3] = 34;
t3 = t3+1;
heap[t3] = 78;
t3 = t3+1;
heap[t3] = 22;
t3 = t3+1;
heap[t3] = 1;
t3 = t3+1;
heap[t3] = 3;
t3 = t3+1;
heap[t3] = 10;
t3 = t3+1;
heap[t3] = 13;
t3 = t3+1;
heap[t3] = 120;
t3 = t3+1;
#* //=========== fin arreglo*#
L2:
#* //======= fin instancia arreglo*#
t4 = P+3;
stack[t4] = t2;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //============== Guardando valor en heap ======================*#
t5 = H;
#* //ascii: 	*#
heap[H] = 9;
H = H + 1;
#* //ascii: Q*#
heap[H] = 81;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: k*#
heap[H] = 107;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: S*#
heap[H] = 83;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: t*#
heap[H] = 116;
H = H + 1;
#* //ascii: 
*#
heap[H] = 10;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t6 = t5;
#* ////cambio simulado de entorno*#
t7 = P+4;
t8 = t7+1;
stack[t8] = t6;
#* //cambio real de ambito*#
P = P+4;
call nativa_imprimir_string;
P = P-4;
#* //======= fin llamada impresion cadena =======*#
#* //============== Guardando valor en heap ======================*#
t9 = H;
#* //ascii: V*#
heap[H] = 86;
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
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
H = H + 1;
#* //ascii:  *#
heap[H] = 32;
H = H + 1;
#* //ascii: a*#
heap[H] = 97;
H = H + 1;
#* //ascii: n*#
heap[H] = 110;
H = H + 1;
#* //ascii: t*#
heap[H] = 116;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
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
#* //ascii: Q*#
heap[H] = 81;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: k*#
heap[H] = 107;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: t*#
heap[H] = 116;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t10 = t9;
#* ////cambio simulado de entorno*#
t11 = P+4;
t12 = t11+1;
stack[t12] = t10;
#* //cambio real de ambito*#
P = P+4;
call nativa_imprimir_string;
P = P-4;
#* //======= fin llamada impresion cadena =======*#
#* //=============== FOR =================*#
#* //============== DECLARACION VARIABLE ITERADORA*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //==== guardando valor ==========*#
t13 = P+2;
stack[t13] = 0;
#* //============== FIN REASIGNACION VARIABLE =================*#
#* //============== CONDICION FOR*#
L5:
#* //========= Obteniendo valor ID: i ===========*#
t14 = P+2;
t15 = stack[t14];
#* //============================================================*#
#* //========= Obteniendo valor ID: array ===========*#
t16 = P+3;
t17 = stack[t16];
#* //============================================================*#
#* //========== get length of array*#
t18 = heap[t17];
if (t15 < t18) goto L6;
goto L7;
L6:
t19 = 1;
goto L8;
L7:
t19 = 0;
L8:
if (t19 == 1) goto L3;
goto L4;
L3:
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: i ===========*#
t23 = P+2;
t24 = stack[t23];
#* //============================================================*#
t22 = t24;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t25 = P+3;
t26 = stack[t25];
#* //============================================================*#
t21 = t26;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t20 = heap[t21];
if (t22 >= t20) goto L9;
t21 = t21+1;
t21 = t21+t22;
t20 = heap[t21];
goto L10;
#* //=== etiqueta indexoutofbounds*#
L9:
#* //===== fin acceso arreglo*#
L10:
#* //============== Guardando valor en heap ======================*#
t27 = H;
#* //ascii: 	*#
heap[H] = 9;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: i ===========*#
t31 = P+2;
t32 = stack[t31];
#* //============================================================*#
t30 = t32;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t33 = P+3;
t34 = stack[t33];
#* //============================================================*#
t29 = t34;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t28 = heap[t29];
if (t30 >= t28) goto L11;
t29 = t29+1;
t29 = t29+t30;
t28 = heap[t29];
goto L12;
#* //=== etiqueta indexoutofbounds*#
L11:
#* //===== fin acceso arreglo*#
L12:
#* //======= llamada int a string =======*#
#* ////numero a convertir*#
t35 = t28;
#* ////cambio simulado de entorno*#
t36 = P+4;
t37 = t36+1;
stack[t37] = t35;
#* ////cambio real de ambito*#
P = P+4;
call nativa_int_to_string;
t38 = stack[P];
P = P-4;
#* //======================================*#
#* //=============== Suma de strings ===================*#
t39 = t38;
t40 = t27;
t43 = H;
#* //====== copio primer string*#
L14:
t41 = heap[t39];
if (t41 == 3) goto L13;
heap[H] = t41;
H = H + 1;
t39 = t39+1;
goto L14;
#* //====== copio segundo string*#
L13:
t42 = heap[t40];
if (t42 == 3) goto L15;
heap[H] = t42;
H = H + 1;
t40 = t40+1;
goto L13;
L15:
heap[H] = 3;
H = H + 1;
#* //=================fin suma de strings====================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t44 = t43;
#* ////cambio simulado de entorno*#
t45 = P+4;
t46 = t45+1;
stack[t46] = t44;
#* //cambio real de ambito*#
P = P+4;
call nativa_imprimir_string;
P = P-4;
#* //======= fin llamada impresion cadena =======*#
#* //============== EXPRESION FOR*#
#* //============= UNARIO MASMAS ============*#
#* //========= Aumentando valor ID: i ===========*#
t48 = P+2;
t49 = stack[t48];
t49 = t49+1;
stack[t48] = t49;
#* //============================================================*#
goto L5;
L4:
#* //=============== FIN FOR =================*#
#* //============== Guardando valor en heap ======================*#
t50 = H;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: -*#
heap[H] = 45;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t51 = t50;
#* ////cambio simulado de entorno*#
t52 = P+4;
t53 = t52+1;
stack[t53] = t51;
#* //cambio real de ambito*#
P = P+4;
call nativa_imprimir_string;
P = P-4;
#* //======= fin llamada impresion cadena =======*#
#* //============================================================================================*#
#* //===============LLAMADA FUNCION: quicksort_array_1_1_1 =========================*#
#* //============================================================================================*#
#* //======== Guardando temporales no usados =============*#
t54 = P+4;
stack[t54] = t3;
t55 = P+5;
stack[t55] = t5;
t56 = P+6;
stack[t56] = t9;
t57 = P+7;
stack[t57] = t17;
t58 = P+8;
stack[t58] = t19;
t59 = P+9;
stack[t59] = t20;
t60 = P+10;
stack[t60] = t21;
t61 = P+11;
stack[t61] = t22;
t62 = P+12;
stack[t62] = t24;
t63 = P+13;
stack[t63] = t26;
t64 = P+14;
stack[t64] = t28;
t65 = P+15;
stack[t65] = t29;
t66 = P+16;
stack[t66] = t30;
t67 = P+17;
stack[t67] = t32;
t68 = P+18;
stack[t68] = t34;
t69 = P+19;
stack[t69] = t43;
t70 = P+20;
stack[t70] = t47;
t71 = P+21;
stack[t71] = t49;
t72 = P+22;
stack[t72] = t50;
#* //=======================================================*#
#* //======== Guardando parametros =======================*#
#* //Cambio simulado de ambito*#
t73 = P+23;
t73 = t73+2;
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: array ===========*#
t74 = P+3;
t75 = stack[t74];
#* //============================================================*#
stack[t73] = t75;
t73 = t73+1;
#* //=======================================================*#
#* //================== parametro ==========================*#
stack[t73] = 0;
t73 = t73+1;
#* //=======================================================*#
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: array ===========*#
t76 = P+3;
t77 = stack[t76];
#* //============================================================*#
#* //========== get length of array*#
t78 = heap[t77];
t79 = t78-1;
stack[t73] = t79;
t73 = t73+1;
#* //=======================================================*#
#* //=======================================================*#
#* //Cambio real de ámbito*#
P = P+23;
call quicksort_array_1_1_1;
#* //================== RETORNO =============================*#
t80 = stack[P];
P = P-23;
#* //=======================================================*#
#* //======== Saco temporales guardados =============*#
t81 = P+4;
t3 = stack[t81];
t82 = P+5;
t5 = stack[t82];
t83 = P+6;
t9 = stack[t83];
t84 = P+7;
t17 = stack[t84];
t85 = P+8;
t19 = stack[t85];
t86 = P+9;
t20 = stack[t86];
t87 = P+10;
t21 = stack[t87];
t88 = P+11;
t22 = stack[t88];
t89 = P+12;
t24 = stack[t89];
t90 = P+13;
t26 = stack[t90];
t91 = P+14;
t28 = stack[t91];
t92 = P+15;
t29 = stack[t92];
t93 = P+16;
t30 = stack[t93];
t94 = P+17;
t32 = stack[t94];
t95 = P+18;
t34 = stack[t95];
t96 = P+19;
t43 = stack[t96];
t97 = P+20;
t47 = stack[t97];
t98 = P+21;
t49 = stack[t98];
t99 = P+22;
t50 = stack[t99];
#* //=======================================================*#
#* //============== Guardando valor en heap ======================*#
t100 = H;
#* //ascii: 
*#
heap[H] = 10;
H = H + 1;
#* //ascii: 
*#
heap[H] = 10;
H = H + 1;
#* //ascii: 
*#
heap[H] = 10;
H = H + 1;
#* //ascii: V*#
heap[H] = 86;
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
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
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
#* //ascii: s*#
heap[H] = 115;
H = H + 1;
#* //ascii: p*#
heap[H] = 112;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: e*#
heap[H] = 101;
H = H + 1;
#* //ascii: s*#
heap[H] = 115;
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
#* //ascii: Q*#
heap[H] = 81;
H = H + 1;
#* //ascii: u*#
heap[H] = 117;
H = H + 1;
#* //ascii: i*#
heap[H] = 105;
H = H + 1;
#* //ascii: c*#
heap[H] = 99;
H = H + 1;
#* //ascii: k*#
heap[H] = 107;
H = H + 1;
#* //ascii: S*#
heap[H] = 83;
H = H + 1;
#* //ascii: o*#
heap[H] = 111;
H = H + 1;
#* //ascii: r*#
heap[H] = 114;
H = H + 1;
#* //ascii: t*#
heap[H] = 116;
H = H + 1;
#* //ascii: :*#
heap[H] = 58;
H = H + 1;
#* //ascii: 
*#
heap[H] = 10;
H = H + 1;
#* //ascii: 
*#
heap[H] = 10;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t101 = t100;
#* ////cambio simulado de entorno*#
t102 = P+4;
t103 = t102+1;
stack[t103] = t101;
#* //cambio real de ambito*#
P = P+4;
call nativa_imprimir_string;
P = P-4;
#* //======= fin llamada impresion cadena =======*#
#* //=============== FOR =================*#
#* //============== DECLARACION VARIABLE ITERADORA*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //==== guardando valor ==========*#
t104 = P+2;
stack[t104] = 0;
#* //============== FIN REASIGNACION VARIABLE =================*#
#* //============== CONDICION FOR*#
L18:
#* //========= Obteniendo valor ID: i ===========*#
t105 = P+2;
t106 = stack[t105];
#* //============================================================*#
#* //========= Obteniendo valor ID: array ===========*#
t107 = P+3;
t108 = stack[t107];
#* //============================================================*#
#* //========== get length of array*#
t109 = heap[t108];
if (t106 < t109) goto L19;
goto L20;
L19:
t110 = 1;
goto L21;
L20:
t110 = 0;
L21:
if (t110 == 1) goto L16;
goto L17;
L16:
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: i ===========*#
t114 = P+2;
t115 = stack[t114];
#* //============================================================*#
t113 = t115;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t116 = P+3;
t117 = stack[t116];
#* //============================================================*#
t112 = t117;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t111 = heap[t112];
if (t113 >= t111) goto L22;
t112 = t112+1;
t112 = t112+t113;
t111 = heap[t112];
goto L23;
#* //=== etiqueta indexoutofbounds*#
L22:
#* //===== fin acceso arreglo*#
L23:
#* //============== Guardando valor en heap ======================*#
t118 = H;
#* //ascii: 	*#
heap[H] = 9;
H = H + 1;
#* //ascii: eos*#
heap[H] = 3;
H = H + 1;
#* //==============================================================*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: i ===========*#
t122 = P+2;
t123 = stack[t122];
#* //============================================================*#
t121 = t123;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t124 = P+3;
t125 = stack[t124];
#* //============================================================*#
t120 = t125;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t119 = heap[t120];
if (t121 >= t119) goto L24;
t120 = t120+1;
t120 = t120+t121;
t119 = heap[t120];
goto L25;
#* //=== etiqueta indexoutofbounds*#
L24:
#* //===== fin acceso arreglo*#
L25:
#* //======= llamada int a string =======*#
#* ////numero a convertir*#
t126 = t119;
#* ////cambio simulado de entorno*#
t127 = P+4;
t128 = t127+1;
stack[t128] = t126;
#* ////cambio real de ambito*#
P = P+4;
call nativa_int_to_string;
t129 = stack[P];
P = P-4;
#* //======================================*#
#* //=============== Suma de strings ===================*#
t130 = t129;
t131 = t118;
t134 = H;
#* //====== copio primer string*#
L27:
t132 = heap[t130];
if (t132 == 3) goto L26;
heap[H] = t132;
H = H + 1;
t130 = t130+1;
goto L27;
#* //====== copio segundo string*#
L26:
t133 = heap[t131];
if (t133 == 3) goto L28;
heap[H] = t133;
H = H + 1;
t131 = t131+1;
goto L26;
L28:
heap[H] = 3;
H = H + 1;
#* //=================fin suma de strings====================*#
#* //======= llamada impresion cadena =======*#
#* //posicion en heap*#
t135 = t134;
#* ////cambio simulado de entorno*#
t136 = P+4;
t137 = t136+1;
stack[t137] = t135;
#* //cambio real de ambito*#
P = P+4;
call nativa_imprimir_string;
P = P-4;
#* //======= fin llamada impresion cadena =======*#
#* //============== EXPRESION FOR*#
#* //============= UNARIO MASMAS ============*#
#* //========= Aumentando valor ID: i ===========*#
t139 = P+2;
t140 = stack[t139];
t140 = t140+1;
stack[t139] = t140;
#* //============================================================*#
goto L18;
L17:
#* //=============== FIN FOR =================*#
L1:
end 
#* //====================================================*#
#* //======== FIN Funcion: principal ========*#
#* //====================================================*#
#* //====================================================*#
#* //======== Funcion: quicksort_array_1_1_1 ============*#
#* //====================================================*#
proc quicksort_array_1_1_1 begin
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: lo TIPO: 3*#
#* //========= Obteniendo valor ID: low ===========*#
t141 = P+3;
t142 = stack[t141];
#* //============================================================*#
t143 = P+5;
stack[t143] = t142;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: hi TIPO: 3*#
#* //========= Obteniendo valor ID: n ===========*#
t144 = P+4;
t145 = stack[t144];
#* //============================================================*#
t146 = P+6;
stack[t146] = t145;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //========= Obteniendo valor ID: lo ===========*#
t147 = P+5;
t148 = stack[t147];
#* //============================================================*#
#* //========= Obteniendo valor ID: n ===========*#
t149 = P+4;
t150 = stack[t149];
#* //============================================================*#
if (t148 >= t150) goto L30;
goto L31;
L30:
t151 = 1;
goto L32;
L31:
t151 = 0;
L32:
#* //=============== IF =================*#
if (t151 <> 1) goto L33;
#* //======== return =================*#
goto L29;
#* //======= fin return ==============*#
goto L34;
L33:
L34:
#* //=============== FIN IF =================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: mid TIPO: 3*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: lo ===========*#
t155 = P+5;
t156 = stack[t155];
#* //============================================================*#
#* //========= Obteniendo valor ID: hi ===========*#
t157 = P+6;
t158 = stack[t157];
#* //============================================================*#
t159 = t156+t158;
t160 = t159/2;
t154 = 0;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t161 = P+2;
t162 = stack[t161];
#* //============================================================*#
t153 = t162;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t152 = heap[t153];
if (t154 >= t152) goto L35;
t153 = t153+1;
t153 = t153+t154;
t152 = heap[t153];
goto L36;
#* //=== etiqueta indexoutofbounds*#
L35:
#* //===== fin acceso arreglo*#
L36:
t163 = P+7;
stack[t163] = t152;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=========== WHILE ==============*#
L40:
#* //====== condicion while ==========*#
#* //========= Obteniendo valor ID: lo ===========*#
t164 = P+5;
t165 = stack[t164];
#* //============================================================*#
#* //========= Obteniendo valor ID: hi ===========*#
t166 = P+6;
t167 = stack[t166];
#* //============================================================*#
if (t165 < t167) goto L41;
goto L42;
L41:
t168 = 1;
goto L43;
L42:
t168 = 0;
L43:
#* //=================================*#
if (t168 == 1) goto L37;
goto L39;
L37:
#* //=========== WHILE ==============*#
L47:
#* //====== condicion while ==========*#
#* //========= Obteniendo valor ID: lo ===========*#
t169 = P+5;
t170 = stack[t169];
#* //============================================================*#
#* //========= Obteniendo valor ID: hi ===========*#
t171 = P+6;
t172 = stack[t171];
#* //============================================================*#
if (t170 < t172) goto L48;
goto L49;
L48:
t173 = 1;
goto L50;
L49:
t173 = 0;
L50:
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: lo ===========*#
t177 = P+5;
t178 = stack[t177];
#* //============================================================*#
t176 = t178;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t179 = P+2;
t180 = stack[t179];
#* //============================================================*#
t175 = t180;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t174 = heap[t175];
if (t176 >= t174) goto L51;
t175 = t175+1;
t175 = t175+t176;
t174 = heap[t175];
goto L52;
#* //=== etiqueta indexoutofbounds*#
L51:
#* //===== fin acceso arreglo*#
L52:
#* //========= Obteniendo valor ID: mid ===========*#
t181 = P+7;
t182 = stack[t181];
#* //============================================================*#
if (t174 < t182) goto L53;
goto L54;
L53:
t183 = 1;
goto L55;
L54:
t183 = 0;
L55:
if (t173 == 1) goto L56;
goto L57;
L56:
if (t183 == 1) goto L58;
goto L57;
L58:
t184 = 1;
goto L59;
L57:
t184 = 0;
L59:
#* //=================================*#
if (t184 == 1) goto L44;
goto L46;
L44:
#* //============= UNARIO MASMAS ============*#
#* //========= Obteniendo valor ID: lo ===========*#
t186 = P+5;
t187 = stack[t186];
#* //============================================================*#
t185 = t187+1;
#* //============= FIN UNARIO MASMAS ==========*#
goto L47;
L46:
#* //===================================*#
#* //=========== WHILE ==============*#
L63:
#* //====== condicion while ==========*#
#* //========= Obteniendo valor ID: lo ===========*#
t188 = P+5;
t189 = stack[t188];
#* //============================================================*#
#* //========= Obteniendo valor ID: hi ===========*#
t190 = P+6;
t191 = stack[t190];
#* //============================================================*#
if (t189 < t191) goto L64;
goto L65;
L64:
t192 = 1;
goto L66;
L65:
t192 = 0;
L66:
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: hi ===========*#
t196 = P+6;
t197 = stack[t196];
#* //============================================================*#
t195 = t197;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t198 = P+2;
t199 = stack[t198];
#* //============================================================*#
t194 = t199;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t193 = heap[t194];
if (t195 >= t193) goto L67;
t194 = t194+1;
t194 = t194+t195;
t193 = heap[t194];
goto L68;
#* //=== etiqueta indexoutofbounds*#
L67:
#* //===== fin acceso arreglo*#
L68:
#* //========= Obteniendo valor ID: mid ===========*#
t200 = P+7;
t201 = stack[t200];
#* //============================================================*#
if (t193 > t201) goto L69;
goto L70;
L69:
t202 = 1;
goto L71;
L70:
t202 = 0;
L71:
if (t192 == 1) goto L72;
goto L73;
L72:
if (t202 == 1) goto L74;
goto L73;
L74:
t203 = 1;
goto L75;
L73:
t203 = 0;
L75:
#* //=================================*#
if (t203 == 1) goto L60;
goto L62;
L60:
#* //============= UNARIO MENOSMENOS ============*#
#* //========= Obteniendo valor ID: hi ===========*#
t205 = P+6;
t206 = stack[t205];
#* //============================================================*#
t204 = t206-1;
#* //============= FIN UNARIO MENOSMENOS ==========*#
goto L63;
L62:
#* //===================================*#
#* //========= Obteniendo valor ID: lo ===========*#
t207 = P+5;
t208 = stack[t207];
#* //============================================================*#
#* //========= Obteniendo valor ID: hi ===========*#
t209 = P+6;
t210 = stack[t209];
#* //============================================================*#
if (t208 < t210) goto L76;
goto L77;
L76:
t211 = 1;
goto L78;
L77:
t211 = 0;
L78:
#* //=============== IF =================*#
if (t211 <> 1) goto L79;
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: T TIPO: 3*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: lo ===========*#
t215 = P+5;
t216 = stack[t215];
#* //============================================================*#
t214 = t216;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t217 = P+2;
t218 = stack[t217];
#* //============================================================*#
t213 = t218;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t212 = heap[t213];
if (t214 >= t212) goto L81;
t213 = t213+1;
t213 = t213+t214;
t212 = heap[t213];
goto L82;
#* //=== etiqueta indexoutofbounds*#
L81:
#* //===== fin acceso arreglo*#
L82:
t219 = P+8;
stack[t219] = t212;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //===== acceso a arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: hi ===========*#
t224 = P+6;
t225 = stack[t224];
#* //============================================================*#
t223 = t225;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t226 = P+2;
t227 = stack[t226];
#* //============================================================*#
t222 = t227;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t221 = heap[t222];
if (t223 >= t221) goto L83;
t222 = t222+1;
t222 = t222+t223;
t221 = heap[t222];
goto L84;
#* //=== etiqueta indexoutofbounds*#
L83:
#* //===== fin acceso arreglo*#
L84:
#* //==== guardando valor ==========*#
#* //===== get posicion de arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: lo ===========*#
t231 = P+5;
t232 = stack[t231];
#* //============================================================*#
t230 = t232;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t233 = P+2;
t234 = stack[t233];
#* //============================================================*#
t229 = t234;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t228 = heap[t229];
if (t230 >= t228) goto L85;
t229 = t229+1;
t229 = t229+t230;
goto L86;
#* //=== etiqueta indexoutofbounds*#
L85:
#* //===== fin acceso arreglo*#
L86:
heap[t229] = t221;
#* //============== FIN REASIGNACION VARIABLE =================*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //========= Obteniendo valor ID: T ===========*#
t236 = P+8;
t237 = stack[t236];
#* //============================================================*#
#* //==== guardando valor ==========*#
#* //===== get posicion de arreglo*#
#* //===== index a obtener del arreglo*#
#* //========= Obteniendo valor ID: hi ===========*#
t241 = P+6;
t242 = stack[t241];
#* //============================================================*#
t240 = t242;
#* //==== obtengo la posición en heap del arreglo*#
#* //========= Obteniendo valor ID: array ===========*#
t243 = P+2;
t244 = stack[t243];
#* //============================================================*#
t239 = t244;
#* //==== pregunto si el index es mayor al tamaño del arreglo*#
t238 = heap[t239];
if (t240 >= t238) goto L87;
t239 = t239+1;
t239 = t239+t240;
goto L88;
#* //=== etiqueta indexoutofbounds*#
L87:
#* //===== fin acceso arreglo*#
L88:
heap[t239] = t237;
#* //============== FIN REASIGNACION VARIABLE =================*#
goto L80;
L79:
L80:
#* //=============== FIN IF =================*#
goto L40;
L39:
#* //===================================*#
#* //========= Obteniendo valor ID: hi ===========*#
t245 = P+6;
t246 = stack[t245];
#* //============================================================*#
#* //========= Obteniendo valor ID: lo ===========*#
t247 = P+5;
t248 = stack[t247];
#* //============================================================*#
if (t246 < t248) goto L89;
goto L90;
L89:
t249 = 1;
goto L91;
L90:
t249 = 0;
L91:
#* //=============== IF =================*#
if (t249 <> 1) goto L92;
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: T TIPO: 3*#
#* //========= Obteniendo valor ID: hi ===========*#
t250 = P+6;
t251 = stack[t250];
#* //============================================================*#
t252 = P+8;
stack[t252] = t251;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //========= Obteniendo valor ID: lo ===========*#
t254 = P+5;
t255 = stack[t254];
#* //============================================================*#
#* //==== guardando valor ==========*#
t253 = P+6;
stack[t253] = t255;
#* //============== FIN REASIGNACION VARIABLE =================*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //========= Obteniendo valor ID: T ===========*#
t257 = P+8;
t258 = stack[t257];
#* //============================================================*#
#* //==== guardando valor ==========*#
t256 = P+5;
stack[t256] = t258;
#* //============== FIN REASIGNACION VARIABLE =================*#
goto L93;
L92:
L93:
#* //=============== FIN IF =================*#
#* //============================================================================================*#
#* //===============LLAMADA FUNCION: quicksort_array_1_1_1 =========================*#
#* //============================================================================================*#
#* //======== Guardando temporales no usados =============*#
t259 = P+8;
stack[t259] = t153;
t260 = P+9;
stack[t260] = t154;
t261 = P+10;
stack[t261] = t160;
t262 = P+11;
stack[t262] = t162;
t263 = P+12;
stack[t263] = t175;
t264 = P+13;
stack[t264] = t176;
t265 = P+14;
stack[t265] = t178;
t266 = P+15;
stack[t266] = t180;
t267 = P+16;
stack[t267] = t185;
t268 = P+17;
stack[t268] = t187;
t269 = P+18;
stack[t269] = t194;
t270 = P+19;
stack[t270] = t195;
t271 = P+20;
stack[t271] = t197;
t272 = P+21;
stack[t272] = t199;
t273 = P+22;
stack[t273] = t204;
t274 = P+23;
stack[t274] = t206;
t275 = P+24;
stack[t275] = t213;
t276 = P+25;
stack[t276] = t214;
t277 = P+26;
stack[t277] = t216;
t278 = P+27;
stack[t278] = t218;
t279 = P+28;
stack[t279] = t222;
t280 = P+29;
stack[t280] = t223;
t281 = P+30;
stack[t281] = t225;
t282 = P+31;
stack[t282] = t227;
t283 = P+32;
stack[t283] = t228;
t284 = P+33;
stack[t284] = t229;
t285 = P+34;
stack[t285] = t230;
t286 = P+35;
stack[t286] = t232;
t287 = P+36;
stack[t287] = t234;
t288 = P+37;
stack[t288] = t238;
t289 = P+38;
stack[t289] = t239;
t290 = P+39;
stack[t290] = t240;
t291 = P+40;
stack[t291] = t242;
t292 = P+41;
stack[t292] = t244;
#* //=======================================================*#
#* //======== Guardando parametros =======================*#
#* //Cambio simulado de ambito*#
t293 = P+42;
t293 = t293+2;
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: array ===========*#
t294 = P+2;
t295 = stack[t294];
#* //============================================================*#
stack[t293] = t295;
t293 = t293+1;
#* //=======================================================*#
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: low ===========*#
t296 = P+3;
t297 = stack[t296];
#* //============================================================*#
stack[t293] = t297;
t293 = t293+1;
#* //=======================================================*#
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: lo ===========*#
t298 = P+5;
t299 = stack[t298];
#* //============================================================*#
stack[t293] = t299;
t293 = t293+1;
#* //=======================================================*#
#* //=======================================================*#
#* //Cambio real de ámbito*#
P = P+42;
call quicksort_array_1_1_1;
#* //================== RETORNO =============================*#
t300 = stack[P];
P = P-42;
#* //=======================================================*#
#* //======== Saco temporales guardados =============*#
t301 = P+8;
t153 = stack[t301];
t302 = P+9;
t154 = stack[t302];
t303 = P+10;
t160 = stack[t303];
t304 = P+11;
t162 = stack[t304];
t305 = P+12;
t175 = stack[t305];
t306 = P+13;
t176 = stack[t306];
t307 = P+14;
t178 = stack[t307];
t308 = P+15;
t180 = stack[t308];
t309 = P+16;
t185 = stack[t309];
t310 = P+17;
t187 = stack[t310];
t311 = P+18;
t194 = stack[t311];
t312 = P+19;
t195 = stack[t312];
t313 = P+20;
t197 = stack[t313];
t314 = P+21;
t199 = stack[t314];
t315 = P+22;
t204 = stack[t315];
t316 = P+23;
t206 = stack[t316];
t317 = P+24;
t213 = stack[t317];
t318 = P+25;
t214 = stack[t318];
t319 = P+26;
t216 = stack[t319];
t320 = P+27;
t218 = stack[t320];
t321 = P+28;
t222 = stack[t321];
t322 = P+29;
t223 = stack[t322];
t323 = P+30;
t225 = stack[t323];
t324 = P+31;
t227 = stack[t324];
t325 = P+32;
t228 = stack[t325];
t326 = P+33;
t229 = stack[t326];
t327 = P+34;
t230 = stack[t327];
t328 = P+35;
t232 = stack[t328];
t329 = P+36;
t234 = stack[t329];
t330 = P+37;
t238 = stack[t330];
t331 = P+38;
t239 = stack[t331];
t332 = P+39;
t240 = stack[t332];
t333 = P+40;
t242 = stack[t333];
t334 = P+41;
t244 = stack[t334];
#* //=======================================================*#
#* //=================== DECLARACION DE VARIABLES ===================*#
#* //================ DECLARANDO VARIABLE: cond TIPO: 3*#
t335 = P+8;
stack[t335] = 0;
#* //============== FIN DECLARACION VARIABLES =================*#
#* //========= Obteniendo valor ID: lo ===========*#
t336 = P+5;
t337 = stack[t336];
#* //============================================================*#
#* //========= Obteniendo valor ID: low ===========*#
t338 = P+3;
t339 = stack[t338];
#* //============================================================*#
if (t337 == t339) goto L94;
goto L95;
L94:
t340 = 1;
goto L96;
L95:
t340 = 0;
L96:
#* //=============== IF =================*#
if (t340 <> 1) goto L97;
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //========= Obteniendo valor ID: lo ===========*#
t342 = P+5;
t343 = stack[t342];
#* //============================================================*#
t344 = t343+1;
#* //==== guardando valor ==========*#
t341 = P+8;
stack[t341] = t344;
#* //============== FIN REASIGNACION VARIABLE =================*#
goto L98;
L97:
#* //=============== Else =================*#
#* //=================== REASIGNACION DE VARIABLE ===================*#
#* //========= Obteniendo valor ID: lo ===========*#
t346 = P+5;
t347 = stack[t346];
#* //============================================================*#
#* //==== guardando valor ==========*#
t345 = P+8;
stack[t345] = t347;
#* //============== FIN REASIGNACION VARIABLE =================*#
#* //=============== FIN ELSE =================*#
L98:
#* //=============== FIN IF =================*#
#* //============================================================================================*#
#* //===============LLAMADA FUNCION: quicksort_array_1_1_1 =========================*#
#* //============================================================================================*#
#* //======== Guardando temporales no usados =============*#
t348 = P+9;
stack[t348] = t153;
t349 = P+10;
stack[t349] = t154;
t350 = P+11;
stack[t350] = t160;
t351 = P+12;
stack[t351] = t162;
t352 = P+13;
stack[t352] = t175;
t353 = P+14;
stack[t353] = t176;
t354 = P+15;
stack[t354] = t178;
t355 = P+16;
stack[t355] = t180;
t356 = P+17;
stack[t356] = t185;
t357 = P+18;
stack[t357] = t187;
t358 = P+19;
stack[t358] = t194;
t359 = P+20;
stack[t359] = t195;
t360 = P+21;
stack[t360] = t197;
t361 = P+22;
stack[t361] = t199;
t362 = P+23;
stack[t362] = t204;
t363 = P+24;
stack[t363] = t206;
t364 = P+25;
stack[t364] = t213;
t365 = P+26;
stack[t365] = t214;
t366 = P+27;
stack[t366] = t216;
t367 = P+28;
stack[t367] = t218;
t368 = P+29;
stack[t368] = t222;
t369 = P+30;
stack[t369] = t223;
t370 = P+31;
stack[t370] = t225;
t371 = P+32;
stack[t371] = t227;
t372 = P+33;
stack[t372] = t228;
t373 = P+34;
stack[t373] = t229;
t374 = P+35;
stack[t374] = t230;
t375 = P+36;
stack[t375] = t232;
t376 = P+37;
stack[t376] = t234;
t377 = P+38;
stack[t377] = t238;
t378 = P+39;
stack[t378] = t239;
t379 = P+40;
stack[t379] = t240;
t380 = P+41;
stack[t380] = t242;
t381 = P+42;
stack[t381] = t244;
t382 = P+43;
stack[t382] = t300;
#* //=======================================================*#
#* //======== Guardando parametros =======================*#
#* //Cambio simulado de ambito*#
t383 = P+44;
t383 = t383+2;
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: array ===========*#
t384 = P+2;
t385 = stack[t384];
#* //============================================================*#
stack[t383] = t385;
t383 = t383+1;
#* //=======================================================*#
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: cond ===========*#
t386 = P+8;
t387 = stack[t386];
#* //============================================================*#
stack[t383] = t387;
t383 = t383+1;
#* //=======================================================*#
#* //================== parametro ==========================*#
#* //========= Obteniendo valor ID: n ===========*#
t388 = P+4;
t389 = stack[t388];
#* //============================================================*#
stack[t383] = t389;
t383 = t383+1;
#* //=======================================================*#
#* //=======================================================*#
#* //Cambio real de ámbito*#
P = P+44;
call quicksort_array_1_1_1;
#* //================== RETORNO =============================*#
t390 = stack[P];
P = P-44;
#* //=======================================================*#
#* //======== Saco temporales guardados =============*#
t391 = P+9;
t153 = stack[t391];
t392 = P+10;
t154 = stack[t392];
t393 = P+11;
t160 = stack[t393];
t394 = P+12;
t162 = stack[t394];
t395 = P+13;
t175 = stack[t395];
t396 = P+14;
t176 = stack[t396];
t397 = P+15;
t178 = stack[t397];
t398 = P+16;
t180 = stack[t398];
t399 = P+17;
t185 = stack[t399];
t400 = P+18;
t187 = stack[t400];
t401 = P+19;
t194 = stack[t401];
t402 = P+20;
t195 = stack[t402];
t403 = P+21;
t197 = stack[t403];
t404 = P+22;
t199 = stack[t404];
t405 = P+23;
t204 = stack[t405];
t406 = P+24;
t206 = stack[t406];
t407 = P+25;
t213 = stack[t407];
t408 = P+26;
t214 = stack[t408];
t409 = P+27;
t216 = stack[t409];
t410 = P+28;
t218 = stack[t410];
t411 = P+29;
t222 = stack[t411];
t412 = P+30;
t223 = stack[t412];
t413 = P+31;
t225 = stack[t413];
t414 = P+32;
t227 = stack[t414];
t415 = P+33;
t228 = stack[t415];
t416 = P+34;
t229 = stack[t416];
t417 = P+35;
t230 = stack[t417];
t418 = P+36;
t232 = stack[t418];
t419 = P+37;
t234 = stack[t419];
t420 = P+38;
t238 = stack[t420];
t421 = P+39;
t239 = stack[t421];
t422 = P+40;
t240 = stack[t422];
t423 = P+41;
t242 = stack[t423];
t424 = P+42;
t244 = stack[t424];
t425 = P+43;
t300 = stack[t425];
#* //=======================================================*#
L29:
end 
#* //====================================================*#
#* //======== FIN Funcion: quicksort_array_1_1_1 ========*#
#* //====================================================*#
#* //==================================================================*#
#* //=============== COMIENZAN METODOS NATIVOS ========================*#
#* //==================================================================*#
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING =======================*#
#* //==================================================================*#
proc nativa_imprimir_string begin
t426 = P+1;
t427 = stack[t426];
L101:
t428 = heap[t427];
if (t428 == 3) goto L99;
goto L100;
L100:
#* //=== pregunto si lo que viene es un decimal*#
if (t428 <> 1) goto L102;
t427 = t427+1;
t428 = heap[t427];
print("%d",t428);
t427 = t427+1;
goto L101;
L102:
print("%c",t428);
t427 = t427+1;
goto L101;
L99:
print("%c",10);
end 
#* //==================================================================*#
#* //=================== NATIVA IMPRIMIR STRING SIN SALTO==============*#
#* //==================================================================*#
proc nativa_imprimir_string2 begin
t429 = P+1;
t430 = stack[t429];
L105:
t431 = heap[t430];
if (t431 == 3) goto L103;
goto L104;
L104:
print("%c",t431);
t430 = t430+1;
goto L105;
L103:
end 
#* //==================================================================*#
#* //=================== NATIVA TO INTEGER      =======================*#
#* //==================================================================*#
proc nativa_int_to_string begin
t439 = H;
t432 = P+1;
t433 = stack[t432];
t434 = t433;
#* //==== pregunto si es negativo*#
if (t433 >= 0) goto L114;
#* //==== agrego el menos a heap*#
heap[H] = 45;
H = H + 1;
t434 = t434*-1;
t433 = t433*-1;
L114:
t435 = 0;
if (t434 <> 0) goto L107;
goto L113;
L107:
if (t434 < 1) goto L108;
t434 = t434/10;
t435 = t435+1;
goto L107;
L108:
t436 = t433;
if (t435 == 0) goto L106;
goto L109;
L109:
t435 = t435-1;
t437 = t435;
t438 = 1;
L110:
if (t437 == 0) goto L111;
goto L112;
L112:
t438 = t438*10;
t437 = t437-1;
goto L110;
L111:
t436 = t436/t438;
t437 = t436%1;
t436 = t436-t437;
t436 = t436+48;
heap[H] = t436;
H = H + 1;
t433 = t433%t438;
goto L108;
L113:
t441 = 48+0;
heap[H] = t441;
H = H + 1;
L106:
heap[H] = 3;
H = H + 1;
t440 = P+0;
stack[t440] = t439;
end 
#* //==================================================================*#
#* //=================== NATIVA POTENCIA ==============================*#
#* //==================================================================*#
proc funcion_nativa_potencia begin
t443 = P+1;
t442 = P+2;
t443 = stack[t443];
t444 = stack[t442];
#* //si el exponente es negativo*#
if (t444 == 0) goto L116;
if (t444 < 0) goto L117;
t445 = t443;
t444 = t444-1;
L118:
if (t444 == 0) goto L119;
goto L120;
L119:
stack[P] = t443;
goto L115;
L120:
t443 = t443*t445;
t444 = t444-1;
goto L118;
#* //====== Retorno = 1*#
L116:
stack[P] = 1;
goto L115;
#* //====== Exponente negativo*#
L117:
t446 = 0-1;
t444 = t444*t446;
t447 = t443;
t444 = t444-1;
L121:
if (t444 == 0) goto L122;
t443 = t443*t447;
t444 = t444-1;
goto L121;
L122:
t443 = 1/t443;
stack[P] = t443;
L115:
end 
L0:
#* //==================== FIN DEL PROGRAMA =========================*#
