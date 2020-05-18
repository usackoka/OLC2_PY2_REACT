S : DECLARACIONES

DECLARACIONES: DECLARACIONES DECLARACION
    | DECLARACION

DECLARACION : FUNCION
    | DECLARACION_VARIABLE PUEDE_SEMICOLON
    | DECLARACION_STRUCT PUEDE_SEMICOLON
    | import LISTA_ID PUEDE_SEMICOLON

//=================== STRUCTS ==========================

DECLARACION_STRUCT : define id as '[' LISTA_ATRIBUTOS ']'
    
LISTA_ATRIBUTOS : LISTA_ATRIBUTOS ',' ATRIBUTO 
    | ATRIBUTO

ATRIBUTO : TIPO_DATO id 
    | TIPO_DATO id '=' E

///============================================================
FUNCION : TIPO_DATO id '(' PARAMETROS ')' '' 
    | void id '(' PARAMETROS ')' '' 

DECLARACION_VARIABLE : TIPO_VAR id ':' '=' E
    | TIPO_DATO LISTA_ID '=' E
    | TIPO_DATO LISTA_ID

LISTA_ID : LISTA_ID ',' id 
    | id


TIPO_VAR : var
    | const
    | global


TIPO_DATO : TYPE '[' E ']' 
    | TYPE '[' ']' 
    | TYPE 

TYPE : integer
    | double
    | char
    | boolean
    | id

ASIGNACION_VARIABLE : TIPO_DATO '=' E
    | TIPO_DATO LIST_ACCESO1 '=' E

LIST_ACCESO1: LIST_ACCESO1 '.' id '[' E ']'
    | LIST_ACCESO1 '.' id 
    | LIST_ACCESO1 '.' LLAMADA
    | '.' id
    | '.' id '[' E ']'

PARAMETROS : LISTA_PARAMETROS
    | /* empty */


LISTA_PARAMETROS : LISTA_PARAMETROS ',' TIPO_DATO id
    | TIPO_DATO id


BLOQUES : LISTA_BLOQUES
    | /* empty */

LISTA_BLOQUES : LISTA_BLOQUES BLOQUE
    | BLOQUE

BLOQUE : SENTENCIA 
    | INSTRUCCION PUEDE_SEMICOLON
    | DECLARACION_VARIABLE PUEDE_SEMICOLON

SENTENCIA : IF
    | SWITCH
    | WHILE
    | DOWHILE
    | FOR
    | TRY_CATCH

NATIVAS : print '(' E ')' 

INSTRUCCION : break
    | continue
    | LLAMADA
    | ASIGNACION_VARIABLE
    | RETURN ''
    | NATIVAS
    | id '++'
    | id '--'


RETURN : return E
    | return
    | throw NEW_EXCEPTION

TRY_CATCH : try ''

IF : if '(' E ')' ''
    | if '(' E ')' '' ELSE

ELSE : else IF
    | else ''

WHILE : while '(' E ')' ''

DOWHILE : do '' while '(' E ')' PUEDE_SEMICOLON

FOR : for '(' INICIO_FOR '' CONDICION_FOR '' FIN_FOR ')' ''

INICIO_FOR : id '=' E
    | TIPO_DATO id '=' E
    |

CONDICION_FOR : E
    |

FIN_FOR : E
    | 

SWITCH : switch '(' E ')' ''
    {        $$ = $6
        $$.elseif = $7
        $$.setExpresionSwitch($3)}


LISTA_CASOS : LISTA_CASOS case E ':' BLOQUES
    | case E ':' BLOQUES

DEFAULT : default ':' BLOQUES
    | /*empty*/

PARAMETROS_LLAMADA : LISTA_PAR
    | /* empty */

LISTA_PAR : LISTA_PAR ',' PAR 
    | PAR

PAR : '$' E 
    | E 

LISTA_E : LISTA_E ',' E
    | E

E : CONSTANTE    
    | BINARIA
    | UNARIA
    | '(' E ')'
    | LIST_ACCESO
    | E_ARREGLO
    | NEW_STRUCT 

NEW_STRUCT : strc id '(' ')'

E_ARREGLO : strc TYPE '[' E ']'
    | ''

//============================= ACCESOS DEL LADO DE LA EXPRESION
LIST_ACCESO : LIST_ACCESO '.' ACCESO 
    | ACCESO

ACCESO : id
    | LLAMADA
    | id '[' E ']'

LLAMADA : id '(' PARAMETROS_LLAMADA ')'

NEW_EXCEPTION := strc EXCEPTION '(' ')'

CONSTANTE : int
    | true
    | false
    | double
    | null
    | string
    | char


BINARIA : ARITMETICA
    | LOGICA
    | RELACIONAL


TIPO_CASTEO : integer
    | char
    | double


UNARIA: '(' TIPO_CASTEO ')' E
    | '-' E
    | '!' E
    | '+' E
    | E '++'
    | E '--'


ARITMETICA : E '+' E
    | E '-' E
    | E '*' E
    | E '/' E
    | E '^^' E
    | E '%' E


LOGICA : E '||' E
    | E '&&' E
    | E '^' E


RELACIONAL : E '<' E
    | E '<=' E
    | E '>' E
    | E '>=' E
    | E '==' E
    | E '===' E
    | E '!=' E


EXCEPTION : ae
    | iobe
    | ue
    | npe
    | ice
    | hoe
    | soe


PUEDE_SEMICOLON : '' 
| 