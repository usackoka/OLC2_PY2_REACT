%lex
%{
%}
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
"im'*'t"                            return 'res_im'*'t'

"private"                           return 'res_private'
"public"                            return 'res_public'
"void"                              return 'void'

"var"                               return 'res_var'
"const"                             return 'res_const'
"global"                            return 'res_global'

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

//----------------------------------------------------------------------
//----------------------------------------------------------------------
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
"-"                                               return '--'
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
({letras}|"_")({letras}+|{digito}*|"_")*          return 'id'
{digito}+"."{digito}+                             return 'double'
{digito}+                                         return 'int'
\"([^\"\n\\\\]|\\\"|\\)*\"  					  return 'string'
\'([^'\n\t]|'\n'|'\t'|'\0'|'\"')?\'               return 'char'
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
<<EOF>>                                           return 'EOF'
. %{console.log("FILA: " + (yylloc.first_line) + " COL: " + (yylloc.first_column) + " Lexico " + "Caracter Invalido cerca de: \""+ yytext + "\""); %}
//-----------------------------------------------------------------------
//---------------------------SINTACTICO----------------------------------
//-----------------------------------------------------------------------
%%
/lex
%{
    const { AST } = require("./AST_JS/AST");
    const { Primitivo }= require("./AST_JS/Primitivo");
%}

%define parse.error verbose
%option bison-locations
%{
    // var ast = new AST.AST();
%}

%start S

%% /* Definición de la gramática */

S : DECLARACIONES EOF
    {
        principal.setNodos(a);
    }
;

DECLARACIONES: DECLARACIONES DECLARACION
    {
    }
    | DECLARACION
    {
    }
;

DECLARACION : FUNCION
    {
    }
    | SENTENCIA
    {
    }
    | INSTRUCCION ';'
    {
    }
;

VARIABLE : id '=' E 
    {
    }
    | ACCESO_ESTRUCTURA2 '=' E 
    {
    }
;

FUNCION : id '=' res_function '(' PARAMETROS1 ')' '{' BLOQUES '}'
    {
    }
    | id '=' '(' PARAMETROS ')' '=' '>' '{' BLOQUES '}'
    {
    }
    | id '=' E '=' '>' '{' BLOQUES '}'
    {
    }
    | id '=' '(' id '=' E ')' '=' '>' '{' BLOQUES '}'
    {
    }
;

PARAMETROS1 : LISTA_PARAMETROS
    {
    }
    | /* empty */
    {
    }
;

PARAMETROS : PARAMETRO ',' LISTA_PARAMETROS
    {
    }
    | /* empty */
    {
    }
;

LISTA_PARAMETROS : LISTA_PARAMETROS ',' PARAMETRO
    {
    }
    | PARAMETRO
    {
    }
;

PARAMETRO : id 
    {
    }
    | id '=' E
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

LISTA_BLOQUES : LISTA_BLOQUES INSTRUCCION ';'
    {
    }
    | LISTA_BLOQUES SENTENCIA
    {
    }
    | SENTENCIA 
    {
    }
    | INSTRUCCION ';'
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
    | VARIABLE
    {
    }
    | RETURN
    {
    }
;

RETURN : res_return '(' E ')'
    {
    }
    | res_return
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

DOWHILE : res_do '{' BLOQUES '}' res_while '(' E ')' ';'
    {
    }
;

FOR : res_for '(' id res_in E ')' '{' BLOQUES '}'
    {
    }
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

PARAMETROS_LLAMADA : LISTA_LLAMADA
    {
    }
    | /* empty */
    {
    }
;

LISTA_LLAMADA : LISTA_LLAMADA ',' E
    {
    }
    | LISTA_LLAMADA ',' res_default
    {
    }
    | res_default
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
    | LLAMADA
    {
    }
    | '(' E ')'
    {
    }
    | ACCESO_ESTRUCTURA
    {
    }
;

ACCESO_ESTRUCTURA2 : id '[' E ']'
    {
    }
;


ACCESO_ESTRUCTURA : id
    {
    }
    | ACCESO_ESTRUCTURA '[' E ']'
    {
    }
;

LLAMADA : id '(' PARAMETROS_LLAMADA ')'
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

UNARIA: '-' E
    {
    }
    | '!' E
    {
    }
    | '+' E
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
    | E '!=' E
    {
    }
;

ex'*'ts.ast = new AST();