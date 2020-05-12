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

    //expresiones
    const { Expresion } = require("./AST_JS/Expresion");
    const { Funcion } = require("./AST_JS/Expresiones/Funcion");
    const { Parametro } = require("./AST_JS/Expresiones/Parametro");
    const { Primitivo } = require("./AST_JS/Expresiones/Primitivo");
    const { TipoArreglo } = require("./AST_JS/Expresiones/TipoArreglo");
    const { Aritmetica } = require("./AST_JS/Expresiones/Aritmetica");
    const { Relacional } = require("./AST_JS/Expresiones/Relacional")
    const { Logica } = require("./AST_JS/Expresiones/Logica")
    const { Unario } = require("./AST_JS/Expresiones/Unario")
    const { Llamada } = require("./AST_JS/Expresiones/Llamada")
    const { ParametroLlamada } = require("./AST_JS/Expresiones/ParametroLlamada");

    //sentencias
    const { Print } = require("./AST_JS/Sentencias/Print");
    const { If } = require("./AST_JS/Sentencias/If");
    const { Else } = require("./AST_JS/Sentencias/Else");
    const { Continue } = require("./AST_JS/Sentencias/Continue");
    const { Break } = require("./AST_JS/Sentencias/Break");
    const { Declaracion } = require("./AST_JS/Sentencias/Declaracion");
    const { Reasignacion } = require("./AST_JS/Sentencias/Reasignacion");

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
        let dec = $1;
        dec.isGlobal = true;
        $$ = dec;
    }
    | DECLARACION_STRUCT PUEDE_SEMICOLON
    {
        $$ = $1;
    }
    | res_import LISTA_ID PUEDE_SEMICOLON
    {
        $$ = $1;
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
        $$ = new Funcion($1, $2, $4, $7, @2.first_line,@2.first_column);
    }
    | res_void id '(' PARAMETROS ')' '{' BLOQUES '}' 
    {
        $$ = new Funcion(Expresion.State.VOID, $2, $4, $7, @2.first_line,@2.first_column);
    }
;

DECLARACION_VARIABLE : TIPO_VAR id ':' '=' E
    {
        $$ = new Declaracion(null,[$2],$1,$5,@2.first_line,@2.first_column);
    }
    | TIPO_DATO LISTA_ID '=' E
    {
        $$ = new Declaracion($1,$2,Declaracion.State.NONE,$4,@3.first_line,@3.first_column);
    }
    | TIPO_DATO LISTA_ID
    {
        $$ = new Declaracion($1,$2,Declaracion.State.NONE,null,@1.first_line,@1.first_column);
    }
;

LISTA_ID : LISTA_ID ',' id 
    {
        var list = $1;
        list.push($3)
        $$ = list;
    }
    | id
    {
        var list = [];
        list.push($1)
        $$ = list;
    }
;

TIPO_VAR : res_var
    {
        $$ = Declaracion.State.VAR;
    }
    | res_const
    {
        $$ = Declaracion.State.CONST;
    }
    | res_global
    {
        $$ = Declaracion.State.GLOBAL;
    }
;

TIPO_DATO : TYPE '[' ']' 
    {
        $$ = new TipoArreglo($1,@2.first_line,@2.first_column);
    }
    | TYPE 
    {
        $$ = $1;
    }
;

TYPE : res_integer
    {
        $$ = Expresion.State.INTEGER;
    }
    | res_double
    {
        $$ = Expresion.State.DOUBLE;
    }
    | res_char
    {
        $$ = Expresion.State.CHAR;
    }
    | res_boolean
    {
        $$ = Expresion.State.BOOLEAN;
    }
    | id
    {
        if($1.toLowerCase() === "string"){
            $$ = Expresion.State.STRING;
        }else{
            $$ = $1;
        }
    }
;

ASIGNACION_VARIABLE : id '=' E
    {
        $$ = new Reasignacion($1,$3,@2.first_line,@2.first_column)
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
        $$ = $1;
    }
    | /* empty */
    {
        $$ = [];
    }
;

LISTA_PARAMETROS : LISTA_PARAMETROS ',' TIPO_DATO id
    {
        var lista = $1;
        lista.push(new Parametro($3,$4,@4.first_line,@4.first_column));
        $$ = lista;
    }
    | TIPO_DATO id
    {
        var lista = [];
        lista.push(new Parametro($1,$2,@2.first_line,@2.first_column));
        $$ = lista;
    }
;

BLOQUES : LISTA_BLOQUES
    {
        $$ = $1;
    }
    | /* empty */
    {
        $$ = null;
    }
;

LISTA_BLOQUES : LISTA_BLOQUES BLOQUE
    {
        var lista = $1;
        lista.push($2);
        $$ = lista;
    }
    | BLOQUE
    {
        var lista = [];
        lista.push($1);
        $$ = lista;
    }
;

BLOQUE : SENTENCIA 
    {
        $$ = $1;
    }
    | INSTRUCCION PUEDE_SEMICOLON
    {
        $$ = $1;
    }
    | DECLARACION_VARIABLE PUEDE_SEMICOLON
    {
        $$ = $1;
    }
;

SENTENCIA : IF
    {
        $$ = $1;
    }
    | SWITCH
    {
        $$ = $1;
    }
    | WHILE
    {
        $$ = $1;
    }
    | DOWHILE
    {
        $$ = $1;
    }
    | FOR
    {
        $$ = $1;
    }
    | TRY_CATCH
    {
        $$ = $1;
    }
;

NATIVAS : res_print '(' E ')' 
    {
        $$ = new Print($3,@1.first_line,@1.first_column);
    }
;

INSTRUCCION : res_break
    {
        $$ = new Break(@1.first_line,@1.first_column);
    }
    | res_continue
    {
        $$ = new Continue(@1.first_line,@1.first_column);
    }
    | LLAMADA
    {
        $$ = $1;
    }
    | ASIGNACION_VARIABLE
    {
        $$ = $1;
    }
    | RETURN ';'
    {
        $$ = $1;
    }
    | NATIVAS
    {
        $$ = $1;
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
        $$ = new If($3,$6,null,@1.first_line,@1.first_column);
    }
    | res_if '(' E ')' '{' BLOQUES '}' ELSE
    {
        $$ = new If($3,$6,$8,@1.first_line,@1.first_column);
    }
;

ELSE : res_else IF
    {
        $$ = $2;
    }
    | res_else '{' BLOQUES '}'
    {
        $$ = new Else($3,@1.first_line,@1.first_column);
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
        $$ = $1;
    }
    | /* empty */
    {
        $$ = [];
    }
;

LISTA_PAR : LISTA_PAR ',' PAR 
    {
        var list = $1;
        list.push($3)
        $$ = list;
    }
    | PAR
    {
        var list = [];
        list.push($1)
        $$ = list;
    }
;

PAR : '$' E 
    {
        $$ = new ParametroLlamada($2,true)
    }
    | E 
    {
        $$ = new ParametroLlamada($1,false)
    }
;

LISTA_E : LISTA_E ',' E
    {
        var list = $1;
        list.push($3)
        $$ = list;
    }
    | E
    {
        var list = [];
        list.push($1)
        $$ = list;
    }
;

E : CONSTANTE    
    {
        $$ = $1;
    }
    | BINARIA
    {
        $$ = $1;
    }
    | UNARIA
    {
        $$ = $1;
    }
    | '(' E ')'
    {
        $$ = $2;
    }
    | LIST_ACCESO
    {
        $$ = $1;
    }
    | E_ARREGLO
    {
        $$ = $1;
    }
    | NEW_STRUCT 
    {
        $$ = $1;
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
    {
        $$ = $1;
    }
;

ACCESO : id
    {
        $$ = new Primitivo($1,Expresion.State.ID,@1.first_line,@1.first_column);
    }
    | LLAMADA
    {
        $$ = $1;
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
        $$ = new Llamada($1,$3,@1.first_line,@1.first_column)
    }
;

NEW_EXCEPTION := res_strc EXCEPTION '(' ')'
    {
    }
;

CONSTANTE : int
    {
        $$ = new Primitivo(Number($1),Expresion.State.INTEGER,@1.first_line,@1.first_column);
    }
    | res_true
    {
        $$ = new Primitivo(true,Expresion.State.BOOLEAN,@1.first_line,@1.first_column);
    }
    | res_false
    {
        $$ = new Primitivo(false,Expresion.State.BOOLEAN,@1.first_line,@1.first_column);
    }
    | double
    {
        $$ = new Primitivo(Number($1),Expresion.State.DOUBLE,@1.first_line,@1.first_column);
    }
    | res_null
    {
        $$ = new Primitivo(null,Expresion.State.NULL,@1.first_line,@1.first_column);
    }
    | string
    {
        $$ = new Primitivo($1,Expresion.State.STRING,@1.first_line,@1.first_column);
    }
    | char
    {
        $$ = new Primitivo($1,Expresion.State.CHAR,@1.first_line,@1.first_column);
    }
;

BINARIA : ARITMETICA
    {
        $$ = $1;
    }
    | LOGICA
    {
        $$ = $1;
    }
    | RELACIONAL
    {
        $$ = $1;
    }
;

UNARIA: '-' E %prec UTmenos
    {
        $$ = new Unario(Unario.TYPE.MENOS,$2,@1.first_line,@1.first_column);
    }
    | '!' E
    {
        $$ = new Unario(Unario.TYPE.NOT,$2,@1.first_line,@1.first_column);
    }
    | '+' E %prec UTmas
    {
        $$ = new Unario(Unario.TYPE.MAS,$2,@1.first_line,@1.first_column);
    }
    | E '++'
    {
        $$ = new Unario(Unario.TYPE.MASMAS,$1,@2.first_line,@2.first_column);
    }
    | E '--'
    {
        $$ = new Unario(Unario.TYPE.MENOSMENOS,$1,@2.first_line,@2.first_column);
    }
;

ARITMETICA : E '+' E
    {
        $$ = new Aritmetica(Aritmetica.TYPE.SUMA,$1,$3,@2.first_line,@2.first_column);
    }
    | E '-' E
    {
        $$ = new Aritmetica(Aritmetica.TYPE.RESTA,$1,$3,@2.first_line,@2.first_column);
    }
    | E '*' E
    {
        $$ = new Aritmetica(Aritmetica.TYPE.MULTIPLICACION,$1,$3,@2.first_line,@2.first_column);
    }
    | E '/' E
    {
        $$ = new Aritmetica(Aritmetica.TYPE.DIVISION,$1,$3,@2.first_line,@2.first_column);
    }
    | E '^^' E
    {
        $$ = new Aritmetica(Aritmetica.TYPE.POTENCIA,$1,$3,@2.first_line,@2.first_column);
    }
    | E '%' E
    {
        $$ = new Aritmetica(Aritmetica.TYPE.MODULAR,$1,$3,@2.first_line,@2.first_column);
    }
;

LOGICA : E '||' E
    {
        $$ = new Logica(Logica.TYPE.OR,$1,$3,@2.first_line,@2.first_column);
    }
    | E '&&' E
    {
        $$ = new Logica(Logica.TYPE.AND,$1,$3,@2.first_line,@2.first_column);
    }
    | E '^' E
    {
        $$ = new Logica(Logica.TYPE.XOR,$1,$3,@2.first_line,@2.first_column);
    }
;

RELACIONAL : E '<' E
    {
        $$ = new Relacional(Relacional.TYPE.MENORQUE,$1,$3,@2.first_line,@2.first_column);
    }
    | E '<=' E
    {
        $$ = new Relacional(Relacional.TYPE.MENORIGUAL,$1,$3,@2.first_line,@2.first_column);
    }
    | E '>' E
    {
        $$ = new Relacional(Relacional.TYPE.MAYORQUE,$1,$3,@2.first_line,@2.first_column);
    }
    | E '>=' E
    {
        $$ = new Relacional(Relacional.TYPE.MAYORIGUAL,$1,$3,@2.first_line,@2.first_column);
    }
    | E '==' E
    {
        $$ = new Relacional(Relacional.TYPE.IGUAL,$1,$3,@2.first_line,@2.first_column);
    }
    | E '===' E
    {
        $$ = new Relacional(Relacional.TYPE.IGUAL_REFERENCIA,$1,$3,@2.first_line,@2.first_column);
    }
    | E '!=' E
    {
        $$ = new Relacional(Relacional.TYPE.DIFERENTE,$1,$3,@2.first_line,@2.first_column);
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