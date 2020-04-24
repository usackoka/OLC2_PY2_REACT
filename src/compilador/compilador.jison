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
"import"                            return 'res_import'

"private"                           return 'res_private'
"public"                            return 'res_public'
"void"                              return 'res_void'

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
%}

/* operator associations and precedence */
%left '||'
%left '&&'
%left '==='
%left '!=' '=='
%left '>' '>=' '<' '<='
%left '+' '-'
%left '*' '/' '%'
%right Ttypecast
%left '^^'
%right '!' UTmenos UTmas '++' '--'
%left Tincremento Tdecremento
%left '(' ')'

%define parse.error verbose
%option bison-locations
%{
    // var ast = new AST.AST();
%}

%start S

%% /* Definición de la gramática */

S : PUEDE_IMPORT DECLARACIONES EOF
    {
    }
;

PUEDE_IMPORT : res_import LISTA_ID PUEDE_SEMICOLON
    |
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
    | DECLARACION_VARIABLE PUEDE_SEMICOLON
    {
    }
;

DECLARACION_VARIABLE : TIPO_VAR id ':' '=' E
    | TIPO LISTA_ID '=' E
    | TIPO LISTA_ID
;

LISTA_ID : LISTA_ID ',' id 
    | id
;

TIPO_VAR : res_var
    | res_const
    | res_global
;

TIPO : TYPE '[' ']'
    | TYPE 
;

TYPE : res_integer
    | res_double
    | res_char
    | res_boolean
    | res_void
    | id
;

ASIGNACION_VARIABLE : id '=' E 
    {
    }
;

FUNCION : TIPO id '(' PARAMETROS ')' '{' BLOQUES '}'
;

PARAMETROS : LISTA_PARAMETROS
    {
    }
    | /* empty */
    {
    }
;

LISTA_PARAMETROS : LISTA_PARAMETROS ',' TIPO id
    {
    }
    | TIPO id
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

LISTA_BLOQUES : LISTA_BLOQUES INSTRUCCION PUEDE_SEMICOLON
    {
    }
    | LISTA_BLOQUES SENTENCIA
    {
    } 
    | LISTA_BLOQUES DECLARACION_VARIABLE PUEDE_SEMICOLON 
    {
    }
    | SENTENCIA 
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
    | LIST_ACCESO
    {
    }
; 

LIST_ACCESO : LIST_ACCESO '.' ACCESO 
    | ACCESO
;

ACCESO : id '.' 
    {
    }
    | id '[' E ']'
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
    | E '++' %prec Tincremento
    {
    }
    | E '--' %prec Tdecremento
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