var t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39;
var P,H;
var stack[];
var heap[];
P = 0
H = 0
call Principal;
goto L0;
proc Principal begin
t0 = P
stack[t0] = 1
t1 = P
t2 = stack[t1]
if (t2<>1 ) goto L2;
t3 = P
t4 = stack[t3]
if (t4==1 ) goto L4;
goto L5;
L4:
t5 = H
heap[H] = 116
H = H+1
heap[H] = 114
H = H+1
heap[H] = 117
H = H+1
heap[H] = 101
H = H+1
heap[H] = 3
H = H+1
t6 = t5
t7 = P+3
t8 = t7+1
stack[t8] = t6
P = P+3
call nativa_imprimir_string;
P = P-3
goto L6;
L5:
t9 = H
heap[H] = 102
H = H+1
heap[H] = 97
H = H+1
heap[H] = 108
H = H+1
heap[H] = 115
H = H+1
heap[H] = 101
H = H+1
heap[H] = 3
H = H+1
t10 = t9
t11 = P+3
t12 = t11+1
stack[t12] = t10
P = P+3
call nativa_imprimir_string;
P = P-3
L6:
goto L3;
L2:
L3:
t14 = P+3
t15 = t14+1
stack[t15] = 2
t16 = t14+2
stack[t16] = 4
P = P+3
call funcion_nativa_potencia;
t13 = stack[P]
P = P-3
print("%i",[object Object]);
print("%c",[object Object]);
L1:
end
proc nativa_imprimir_string begin
t17 = P+1
t18 = stack[t17]
L9:
t19 = heap[t18]
if (t19==3 ) goto L7;
goto L8;
L8:
if (t19<>1 ) goto L10;
t18 = t18+1
t19 = heap[t18]
print("%d",[object Object]);
t18 = t18+1
goto L9;
L10:
print("%c",[object Object]);
t18 = t18+1
goto L9;
L7:
print("%c",[object Object]);
end
proc nativa_imprimir_string2 begin
t20 = P+1
t21 = stack[t20]
L13:
t22 = heap[t21]
if (t22==3 ) goto L11;
goto L12;
L12:
print("%c",[object Object]);
t21 = t21+1
goto L13;
L11:
end
proc nativa_int_to_string begin
t30 = H
t23 = P+1
t24 = stack[t23]
t25 = t24
if (t24>=0 ) goto L22;
heap[H] = 45
H = H+1
t25 = t25*-1
t24 = t24*-1
L22:
t26 = 0
if (t25<>0 ) goto L15;
goto L21;
L15:
if (t25<1 ) goto L16;
t25 = t25/10
t26 = t26+1
goto L15;
L16:
t27 = t24
if (t26==0 ) goto L14;
goto L17;
L17:
t26 = t26-1
t28 = t26
t29 = 1
L18:
if (t28==0 ) goto L19;
goto L20;
L20:
t29 = t29*10
t28 = t28-1
goto L18;
L19:
t27 = t27/t29
t28 = t27%1
t27 = t27-t28
t27 = t27+48
heap[H] = t27
H = H+1
t24 = t24%t29
goto L16;
L21:
t32 = 48
heap[H] = t32
H = H+1
L14:
heap[H] = 3
H = H+1
t31 = P
stack[t31] = t30
end
proc funcion_nativa_potencia begin
t34 = P+1
t33 = P+2
t34 = stack[t34]
t35 = stack[t33]
if (t35==0 ) goto L24;
if (t35<0 ) goto L25;
t36 = t34
t35 = t35-1
L26:
if (t35==0 ) goto L27;
goto L28;
L27:
stack[P] = t34
goto L23;
L28:
t34 = t34*t36
t35 = t35-1
goto L26;
L24:
stack[P] = 1
goto L23;
L25:
t37 = 0-1
t35 = t35*t37
t38 = t34
t35 = t35-1
L29:
if (t35==0 ) goto L30;
t34 = t34*t38
t35 = t35-1
goto L29;
L30:
t34 = 1/t34
stack[P] = t34
L23:
end
L0:
