
L1:
 asldkfjasd
 alskdfjskldf

t1 = 2
t2 = 45

goto l1

if 3>4 goto l1

ARITMETICAS Y RELACIONALES -- 
-------------------------------------------
a*b+c

t1 = a*b
t1 = t1+c

-------------------------------
if(4>5){
    print(1)
}else{
    print(0)
}

if 4>5 goto L1
goto L2
L1:
    print(1)
goto l3
l2:
    print(0)
l3:

---------------------------------
if(3>b && 1==c){
    print(1)
}else{
    print(0)
}

if 3>b goto l1
goto l2
l1:
if 1==c goto l3
goto l4
l3:
print(1)
goto l5
l2:
l4:
print(0)
l5:

------------------------------------
if(a*b+y>z && a!=0){
    if(1==b){
        a = a+1
    }
}else{
    a = a -1
}

t1 = a*b
t2 = t1+y
if t2 > z goto l1
goto l2
l1:
if a!=0 goto l3
goto l4
l3:
if 1==b goto l5
goto l6
l5:
a = a+1
goto l6
l2:
l4:
a = a -1
l6:

-------------------------------------
while(a+b*7>z){
    print(1)
}

l1:
t1 = b*7
t2 = a+t1 
if t2 > z goto l2
goto l3
l2:
print(1)
goto l1
l3:

-------------------------------------
STACK, HEAP

STACK -- valores temporales, o de entornos
HEAP -- informacion global, arreglos, estructuras, strings

int n = 4;
y();

public int y(){
    int a,b = 4;
    if(a>c){
        int c = 5;
    }
    return 0;
}