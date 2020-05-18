%lex
%options case-insensitive
%locations
%s COMENT_MULTI
%x COMENT_SIMPLE
%%

\s+                         /* skip whitespace */
// ********** Comentario multilínea **********
"#*"                        { this.res_begin("COMENT_MULTI"); }
<COMENT_MULTI>"*#"          %{ this.res_begin('INITIAL'); %}
<COMENT_MULTI>[\t\r\n\f]    { }
<COMENT_MULTI>.             { }

// ********** Comentario de una línea **********
"##"                        { this.res_begin("COMENT_SIMPLE"); }
<COMENT_SIMPLE>[\t\f]       { }
<COMENT_SIMPLE>[\r\n]       %{ this.res_begin('INITIAL'); %}
<COMENT_SIMPLE>.            { }

// ********** Keywords **********
"var"                       return 'res_var';
"stack"                     return 'res_stack';
"heap"                      return 'res_heap';
"goto"                      return 'res_goto';
"begin"                     return 'res_begin';
"end"                       return 'res_end';
"call"                      return 'res_call';
"print"                     return 'res_print';
"if"                        return 'res_if';
"proc"                      return 'res_proc';

// ********** ER **********
[a-zA-Z_]([_a-zA-Z0-9ñN])*              return 'id'
[0-9]+"."[0-9]+\b                       return 'double';
[0-9]+\b                                return 'int';
\"([^\"\n\\\\]|\\\"|\\)*\"  			return 'string';

// ********** Tokens **********
"("                         return '(';
")"                         return ')';
"["                         return '[';
"]"                         return ']';
":"                         return ':';
","                         return ',';
";"                         return ';';
"%"                         return '%';
"*"                         return '*';
"/"                         return '/';
"+"                         return '+';
"-"                         return '-';
"=="                        return '==';
">="                        return '>=';
"<="                        return '<=';
"<>"                        return '<>';
">"                         return '>';
"<"                         return '<';
"="                         return '=';

<<EOF>>                     return 'EOF';
. %{
    console.log("Error Léxico: Caracter inválido cerca de: \""+ yytext + "\". [" + (yylloc.first_line) + ", " + (yylloc.first_column + 1)+ "]."); 
%}

/lex
%{
    const { Aritmetica, Aritmetica } = require('./AST_JS/Aritmetica');
    const { Primitivo } = require('./AST_JS/Primitivo');
    const { Asignacion } = require('./AST_JS/Asignacion');
    const { Entorno } = require('./AST_JS/Arbol');
    const { Tipo } = require('./AST_JS/Tipo');
%}

%define parse.error verbose
%option bison-locations
%{
    
%}

/* operator associations and precedence */
%right '='
%right ':'
%left '==' '<>'
%nonassoc '<' '<=' '>' '>='
%left '+' '-'
%left '*' '/' '%'
%left '[' ']'

%start INICIAL

%% /* language grammar */

INICIAL : BLOQUES EOF
        {
            exports.ast.instrucciones = $1;
            return exports.ast;
        }
;

BLOQUES : BLOQUES GLOBAL
        {  
            $$ = $1;
            $$.push($2);
        }
    | GLOBAL
        {  
            $$ = [];
            $$.push($1);
        }
;

GLOBAL  : DEC_VAR ';'
        {  
            
        }
    | res_var res_heap '[' ']' ';'
        {  
            
        }
    | res_var res_stack '[' ']' ';'
        {  
            
        }
    | ASIGNACION ';'
        {  
            $$ = $1;
        }
    | id ':' 
        {  

        }
    | res_goto id ';'
        {

        }
    | res_if '(' E ')' res_goto id ';'
        {

        }
    | res_proc id res_begin BLOQUES res_end
        {

        }
    | res_call id ';'
        {

        }
    | res_print '(' string ',' PRIMITIVO ')' ';'
        {

        }
;

DEC_VAR : res_var LIST_DECLARACION
        {  
            
        }
;

LIST_DECLARACION : id
        {  
            
        }
    | id '=' E
        {  
            
        } : LIST_DECLARACION ',' id
        {  
            
        }
    | LIST_DECLARACION ',' id '=' E
        {  
            
        }
;

ASIGNACION : id '=' ARITMETICA
        {
            $$ = new Asignacion($1, $3, @1.first_line, @1.first_column + 1);
        }
    | res_stack '[' PRIMITIVO ']' '=' ARITMETICA
        {
            
        }
    | res_heap '[' PRIMITIVO ']' '=' ARITMETICA
        {
            
        }
;

E : PRIMITIVO '<' PRIMITIVO
        {
            
        }
    | PRIMITIVO '<=' PRIMITIVO
        {
            
        }
    | PRIMITIVO '>' PRIMITIVO
        {
            
        }
    | PRIMITIVO '>=' PRIMITIVO
        {
            
        }
    | PRIMITIVO '<>' PRIMITIVO
        {
            
        }
    | PRIMITIVO '==' PRIMITIVO
        {
            
        }
    | ARITMETICA
        {
            $$ = $1;
        }
;

ARITMETICA : PRIMITIVO '+' PRIMITIVO
        {
            $$ = new Aritmetica($1, $3, Aritmetica.TYPE.SUMA, @2.first_line, @2.first_column + 1);
        }
    | PRIMITIVO '-' PRIMITIVO
        {
            $$ = new Aritmetica($1, $3, Aritmetica.TYPE.RESTA, @2.first_line, @2.first_column + 1);
        }
    | PRIMITIVO '*' PRIMITIVO
        {
            $$ = new Aritmetica($1, $3, Aritmetica.TYPE.MULTIPLICACION, @2.first_line, @2.first_column + 1);
        }
    | PRIMITIVO '/' PRIMITIVO
        {
            $$ = new Aritmetica($1, $3, Aritmetica.TYPE.DIVISION, @2.first_line, @2.first_column + 1);
        }
    | PRIMITIVO '%' PRIMITIVO
        {
            $$ = new Aritmetica($1, $3, Aritmetica.TYPE.MODULO, @2.first_line, @2.first_column + 1);
        }
    | PRIMITIVO
        {
            $$ = $1;
        }
;    

PRIMITIVO : CONSTANTE
        {
            $$ = $1;
        }
    | '-' CONSTANTE
        {
            $$ = new Aritmetica($2, null, Aritmetica.TYPE.RESTA, @1.first_line, @1.first_column + 1);
        }
;

CONSTANTE : id
        {
            $$ = new Primitivo(Primitivo.TYPE.IDENTIFICADOR, $1, @1.first_line, @1.first_column + 1);
        }
    | int
        {
            $$ = new Primitivo(Primitivo.TYPE.INTEGER, $1, @1.first_line, @1.first_column + 1);
        }
    | double
        {
            $$ = new Primitivo(Primitivo.TYPE.DOUBLE, $1, @1.first_line, @1.first_column + 1);
        }
    | res_stack '[' E ']'
        {
            $$ = new Primitivo(Primitivo.TYPE.STACK, $3, @1.first_line, @1.first_column + 1);
        }
    | res_heap '[' E ']'
        {
            $$ = new Primitivo(Primitivo.TYPE.HEAP, $3, @1.first_line, @1.first_column + 1);
        }
;

%%

exports.ast = new Entorno();