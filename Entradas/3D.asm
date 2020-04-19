
if(30>4){
    print(1)
}else{
    print(0)
}

;3D
if 30>4 goto l1
goto l2
l1:
print(1)
goto l3
l2:
print(0)
l3:

-------------------------------------------------------------------------------------------------------------
26 DIAS

1. Interfaz -- 19,20
    - Meter JISON A proyecto

3. Ejecucion (3D) -- 21, 22
    - Gramatica 3D, recuperacion de errores
    - Interprete 3D

2. Compilacion (Traduccion) 
    - Gramatica J#, recuperacion de errores -- 23, 24
    - Declaracion de variables y constantes (globales, locales, etc...) 28
    - Operaciones (Aritmeticas, Unaria, Logicas, Relacionales, aumento/decremento) -- 25, 26, 27
    - Sentencias (if, for, while, switch, try catch, transferencia(break,continue), print, import) -- 29, 30, 1
    - Funciones (Llamadas, return) -- 2, 3
    - Casteos -- 4, 5
    - Estructuras -  Acceso
        - Arreglos -- 9, 10
        - Objetos -- 7, 8
    - Nativas -- 6

4. Optimización 
    - Optimización por mirilla -- 12, 13
    - Optimizacion por bloque -- 14, 15

5. Reportes -- 11
    - Tabla de errores
    - Tabla de simbolos
    - Reporte de AST 
    - Reporte heap y stack 