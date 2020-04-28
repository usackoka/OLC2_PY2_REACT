%lex
%options case-insensitive
%locations
letras = [A-Za-zÑñ]
digito = [0-9]
%s COMENT_MULTI
%x COMENT_SIMPLE
%%
\s+                   /* skip whitespace */
//============================== ESTADOS =================================
"/*"                {this.begin("COMENT_MULTI");}
<COMENT_MULTI>"*/"  %{this.begin('INITIAL');%}
<COMENT_MULTI>.                {}
<COMENT_MULTI>[\t\r\n\f]      {}
//-----------------------------------------------------------------------
//-------------------------- Comentario multilinea ---------------------
"//"                {this.begin("COMENT_SIMPLE");}
<COMENT_SIMPLE>[\r\n]   %{this.begin('INITIAL');%}
<COMENT_SIMPLE>.     {}
<COMENT_SIMPLE>[\t\f]      {}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
//----Reservadas----->
"import"                            return 'res_import'

"private"                           return 'res_private'
"public"                            return 'res_public'
"void"                              return 'res_void'

"var"                               return 'res_var'
"const"                             return 'res_const'
"global"                            return 'res_global'

"define"                            return 'res_define'
"as"                                return 'res_as'

"integer"                           return 'res_integer'
"double"                            return 'res_double'
"char"                              return 'res_char'
"boolean"                           return 'res_boolean'

"true"                              return 'res_true'
"false"                             return 'res_false'

"if"                                return 'res_if'
"else"                              return 'res_else'
"case"                              return 'res_case'
"default"                           return 'res_default'
"switch"                            return 'res_switch'
"while"                             return 'res_while'
"do"                                return 'res_do'
"for"                               return 'res_for'
"break"                             return 'res_break'
"continue"                          return 'res_continue'
"return"                            return 'res_return'

"strc"                              return 'res_strc'

"print"                             return 'res_print'

"ArithmeticException"               return 'res_ae'
"IndexOutOfBoundException"          return 'res_iobe'
"UncaughtException"                 return 'res_ue'
"NullPointerException"              return 'res_npe'
"InvalidCastingException"           return 'res_ice'
"HeapOverflowError"                 return 'res_hoe'
"StackOverflowError"                return 'res_soe'

"throw"                             return 'res_throw'
"try"                               return 'res_try'
"catch"                             return 'res_catch'

"null"                              return 'res_null'

//-----------------------------------------------------------------------
({letras}|"_")({letras}+|{digito}*|"_")*          return 'id'
\"([^\"\n\\\\]|\\\"|\\)*\"  					  return 'string'
\'([^'\n\t]|'\n'|'\t'|'\0'|'\"')?\'               return 'char'
{digito}+"."{digito}+                             return 'double'
{digito}+                                         return 'int'
//----------------------------------------------------------------------
//----------------------------------------------------------------------
"$"         return '$'
"."     return '.'
"["                                               return '['
"]"                                               return ']'
"("                                               return '('
")"                                               return ')'
"{"                                               return '{'
"}"                                               return '}'
","                                               return ','
":"                                               return ':'
";"                                               return ';'
"%"                                               return '%'
"++"                                               return '++'
"+"                                               return '+'
"--"                                               return '--'
"-"                                               return '-'
"*"                                               return '*'
"/"                                               return '/'
"==="                                              return '==='
"=="                                              return '=='
"="                                               return '='
"!="                                                return '!='
">"                                                 return '>'
">="                                                 return '>='
"<"                                                 return '<'
"<="                                                 return '<='
"&&"                        return '&&'
"||"                        return '||'
"!"                         return '!'
"^^"                         return '^^'
"^"                         return '^'
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
<<EOF>>                                           return 'EOF'
. %{console.log("FILA: " + (yylloc.first_line) + " COL: " + (yylloc.first_column) + " Lexico " + "Caracter Invalido cerca de: \""+ yytext + "\""); %}
//-----------------------------------------------------------------------
//---------------------------SINTACTICO----------------------------------
//-----------------------------------------------------------------------
/lex
%{
    const { Principal } = require("./AST_JS/Principal");
%}

/* operator associations and precedence */
%right '='
%left '.'
%left '++' '--'
%left '^'
%left '||'
%left '&&'
%left '!=' '==' '==='
%nonassoc '>' '>=' '<' '<='
%left '+' '-'
%left '*' '/' '%'
%right Ttypecast
%left '^^'
%right '!' UTmenos UTmas 
%left '[' ']'

%start S

%% /* Definición de la gramática */

S : DECLARACIONES EOF
    {
        return exports.principal;
    }
;

DECLARACIONES: DECLARACIONES DECLARACION
    {
        exports.principal.nodos.push($2);
    }
    | DECLARACION
    {
        exports.principal.nodos.push($1);
    }
;

DECLARACION : FUNCION
    {
        $$ = $1;
    }
    | DECLARACION_VARIABLE PUEDE_SEMICOLON
    {
    }
    | DECLARACION_STRUCT PUEDE_SEMICOLON
    |
    {
    }
    | res_import LISTA_ID PUEDE_SEMICOLON
    {
    }
;

//=================== STRUCTS ==========================

DECLARACION_STRUCT : res_define id res_as '[' LISTA_ATRIBUTOS ']'
    {

    }
;

LISTA_ATRIBUTOS : LISTA_ATRIBUTOS ',' ATRIBUTO 
    {

    }
    | ATRIBUTO
    {

    }
;

ATRIBUTO : TIPO_DATO id 
    {
    }
    | TIPO_DATO id '=' E
    {
    }
;

///============================================================

FUNCION : TIPO_DATO id '(' PARAMETROS ')' '{' BLOQUES '}' 
    {
    }
    | res_void id '(' PARAMETROS ')' '{' BLOQUES '}' 
    {

    }
;

DECLARACION_VARIABLE : TIPO_VAR id ':' '=' E
    {

    }
    | TIPO_DATO LISTA_ID '=' E
    {

    }
    | TIPO_DATO LISTA_ID
    {

    }
;

LISTA_ID : LISTA_ID ',' id 
    {

    }
    | id
    {

    }
;

TIPO_VAR : res_var
    {
    }
    | res_const
    {
    }
    | res_global
    {
    }
;

TIPO_DATO : TYPE '[' ']' 
    {
    }
    | TYPE 
    {
    }
;

TYPE : res_integer
    {
    }
    | res_double
    {
    }
    | res_char
    {
    }
    | res_boolean
    {
    }
    | id
    {
    }
;

ASIGNACION_VARIABLE : id '=' E
    {

    }
    | id LIST_ACCESO1 '=' E
    {

    }
;

LIST_ACCESO1: '.' id
    {
    }
    | '.' id '[' E ']'
    {
    }
    | LIST_ACCESO1 '.' id '[' E ']'
    {
    }
    | LIST_ACCESO1 '.' id 
    {
    }
;

PARAMETROS : LISTA_PARAMETROS
    {
    }
    | /* empty */
    {
    }
;

LISTA_PARAMETROS : LISTA_PARAMETROS ',' TIPO_DATO id
    {
    }
    | TIPO_DATO id
    {
    }
;

BLOQUES : LISTA_BLOQUES
    {
    }
    | /* empty */
    {
    }
;

LISTA_BLOQUES : LISTA_BLOQUES BLOQUE
    {
    }
    | BLOQUE
    {

    }
;

BLOQUE : SENTENCIA 
    {
    }
    | INSTRUCCION PUEDE_SEMICOLON
    {
    }
    | DECLARACION_VARIABLE PUEDE_SEMICOLON
    {
    }
;

SENTENCIA : IF
    {
    }
    | SWITCH
    {
    }
    | WHILE
    {
    }
    | DOWHILE
    {
    }
    | FOR
    {
    }
    | TRY_CATCH
    {
    }
    | NATIVAS PUEDE_SEMICOLON
    {
    }
;

NATIVAS : res_print '(' E ')' 
    {
    }
;

INSTRUCCION : res_break
    {
    }
    | res_continue
    {
    }
    | LLAMADA
    {
    }
    | ASIGNACION_VARIABLE
    {
    }
    | RETURN
    {
    }
;

RETURN : res_return E
    {
    }
    | res_return
    {
    }
    | res_throw NEW_EXCEPTION
    {
    }
;

TRY_CATCH : res_try '{' BLOQUES '}' res_catch '(' EXCEPTION id ')' '{' BLOQUES '}'
    {
    }
;

IF : res_if '(' E ')' '{' BLOQUES '}'
    {
    }
    | res_if '(' E ')' '{' BLOQUES '}' ELSE
    {
    }
;

ELSE : res_else IF
    {
    }
    | res_else '{' BLOQUES '}'
    {
    }
;

WHILE : res_while '(' E ')' '{' BLOQUES '}'
    {
    }
;

DOWHILE : res_do '{' BLOQUES '}' res_while '(' E ')' PUEDE_SEMICOLON
    {
    }
;

FOR : res_for '(' INICIO_FOR ';' CONDICION_FOR ';' FIN_FOR ')' '{' BLOQUES '}'
    {
    }
;

INICIO_FOR : id '=' E
    {
    }
    | TIPO_DATO id '=' E
    {
    }
    |
    {
    }
;

CONDICION_FOR : E
    |
;

FIN_FOR : E
    |
;

SWITCH : res_switch '(' E ')' '{' LISTA_CASOS DEFAULT '}'
    {
    }
;

LISTA_CASOS : LISTA_CASOS res_case E ':' BLOQUES
    {
    }
    | res_case E ':' BLOQUES
    {
    }
;

DEFAULT : res_default ':' BLOQUES
    {
    }
    | /*empty*/
    {
    }
;

PARAMETROS_LLAMADA : LISTA_PAR
    {
    }
    | /* empty */
    {
    }
;

LISTA_PAR : LISTA_PAR ',' PAR 
    {

    }
    | PAR
    {

    }
;

PAR : '$' E 
    {

    }
    | E 
    {

    }
;

LISTA_E : LISTA_E ',' E
    {
    }
    | E
    {
    }
;

E : CONSTANTE    
    {
    }
    | BINARIA
    {
    }
    | UNARIA
    {
    }
    | '(' E ')'
    {
    }
    | LIST_ACCESO
    {
    }
    | E_ARREGLO
    {
    }
    | NEW_STRUCT 
    {
    }
; 

NEW_STRUCT : res_strc id '(' ')'
    {
    }
;

E_ARREGLO : res_strc TYPE '[' E ']'
    {
    }
    | '{' LISTA_E '}'
    {
    }
;

//============================= ACCESOS DEL LADO DE LA EXPRESION
LIST_ACCESO : LIST_ACCESO '.' ACCESO 
    | ACCESO
;

ACCESO : id
    {
    }
    | LLAMADA
    {
    }
    | id '[' E ']'
    {
    }
    | LLAMADA '[' E ']'
    {
    }
;

LLAMADA : id '(' PARAMETROS_LLAMADA ')'
    {
    }
;

NEW_EXCEPTION := res_strc EXCEPTION '(' ')'
    {
    }
;

CONSTANTE : int
    {
    }
    | res_true
    {
    }
    | res_false
    {
    }
    | double
    {
    }
    | res_null
    {
    }
    | string
    {
    }
    | char
    {
    }
;

BINARIA : ARITMETICA
    {
    }
    | LOGICA
    {
    }
    | RELACIONAL
    {
    }
;

UNARIA: '-' E %prec UTmenos
    {
    }
    | '!' E
    {
    }
    | '+' E %prec UTmas
    {
    }
    | E '++'
    {
    }
    | E '--'
    {
    }
;

ARITMETICA : E '+' E
    {
    }
    | E '-' E
    {
    }
    | E '*' E
    {
    }
    | E '/' E
    {
    }
    | E '^^' E
    {
    }
    | E '%' E
    {
    }
;

LOGICA : E '||' E
    {
    }
    | E '&&' E
    {
    }
    | E '^' E
    {
    }
;

RELACIONAL : E '<' E
    {
    }
    | E '<=' E
    {
    }
    | E '>' E
    {
    }
    | E '>=' E
    {
    }
    | E '==' E
    {
    }
    | E '===' E
    {
    }
    | E '!=' E
    {
    }
;

EXCEPTION : res_ae
    | res_iobe
    | res_ue
    | res_npe
    | res_ice
    | res_hoe
    | res_soe
;

PUEDE_SEMICOLON : ';' | ;
%%

exports.principal = new Principal();