%lex
%options case-insensitive
%locations
%s COMENT_MULTI
%x COMENT_SIMPLE
%%

\s+                         /* skip whitespace */
// ********** Comentario multilínea **********
"#*"                        { this.begin("COMENT_MULTI"); }
<COMENT_MULTI>"*#"          %{ this.begin('INITIAL'); %}
<COMENT_MULTI>[\t\r\n\f]    { }
<COMENT_MULTI>.             { }

// ********** Comentario de una línea **********
"##"                        { this.begin("COMENT_SIMPLE"); }
<COMENT_SIMPLE>[\t\f]       { }
<COMENT_SIMPLE>[\r\n]       %{ this.begin('INITIAL'); %}
<COMENT_SIMPLE>.            { }

// ********** Keywords **********
"var"                       return 'var';
"stack"                     return 'stack';
"heap"                      return 'heap';
"goto"                      return 'goto';
"begin"                     return 'begin';
"end"                       return 'end';
"call"                      return 'call';
"print"                     return 'print';
"if"                        return 'if';
"proc"                      return 'proc';

// ********** ER **********
[a-zA-Z_]([_a-zA-Z0-9ñN])*              return 'id'
[0-9]+"."[0-9]+\b                       return 'double';
[0-9]+\b                                return 'integer';
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
    const { Entorno } = require('./AST_JS/Entorno');
    const { NoOptimizados } = require('./AST_JS/NoOptimizados');
    const { Primitivo } = require('./AST_JS/Primitivo');
    const { Aritmetica } = require('./AST_JS/Aritmetica');
    const { Asignacion } = require('./AST_JS/Asignacion');
    const { If } = require('./AST_JS/If');
    const { Relacional } = require('./AST_JS/Relacional');
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

INICIAL:  LISTA_GLOBAL EOF
        {
            exports.entorno.instrucciones = $1;
            return exports.entorno;
        }
;

LISTA_GLOBAL :  LISTA_GLOBAL GLOBAL
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

GLOBAL :  DEC_VAR ';'
    { 
        $$ = new NoOptimizados($1+";")
    }
    | ASIGNACION ';'
    {  
        $$ = $1;
    }
    | id ':' 
    {
    }
    | goto id ';'
    {
    }
    | if '(' RELACIONAL ')' goto id ';'
    {
        $$ = new If($3,$6,@1.first_line,@1.first_column)
    }
    | proc id begin
    {
        $$ = new NoOptimizados("proc "+$2+" begin")
    }
    | end
    {
        $$ = new NoOptimizados("end")
    }
    | call id ';'
    {
        $$ = new NoOptimizados("call "+$2+";")
    }
    | print '(' string ',' CONSTANTE ')' ';'
    {
        $$ = new NoOptimizados("print("+$3+","+$5+");")
    }
;

DEC_VAR:  var LIST_VAR
    {
        $$ = "var "+$2;
    }
    | var heap '[' ']'
    {
        $$ = "var heap[]";
    }
    | var stack '[' ']'
    {
        $$ = "var stack[]";
    }
;

LIST_VAR:  LIST_VAR ',' id
    {
        $$ = $1+","+$3;
    }
    | LIST_VAR ',' id '=' CONSTANTE
    {
        $$ = $1+","+$3+" = "+$5;
    }
    | id
    {
        $$ = $1;
    }
    | id '=' CONSTANTE
    {
        $$ = $1+" = "+$3;
    }
;

ASIGNACION:  id '=' E
    {
        $$ = new Asignacion($1,$3,@2.first_line,@2.first_column+1)
    }
    | id '=' stack '[' CONSTANTE ']'
    {
        $$ = new Asignacion($1,"stack["+$5.value.toString()+"]",@2.first_line,@2.first_column+1)
    }
    | id '=' heap '[' CONSTANTE ']'
    {
        $$ = new Asignacion($1,"heap["+$5.value.toString()+"]",@2.first_line,@2.first_column+1)
    }
    | stack '[' CONSTANTE ']' '=' E
    {
        $$ = new Asignacion("stack["+$3.value.toString()+"]",$6,@2.first_line,@2.first_column+1)
    }
    | heap '[' CONSTANTE ']' '=' E
    {
        $$ = new Asignacion("heap["+$3.value.toString()+"]",$6,@2.first_line,@2.first_column+1)
    }
;

RELACIONAL:  CONSTANTE '<' CONSTANTE
    {
        $$ = new Relacional($1, $3, '<', @2.first_line, @2.first_column + 1)
    }
    | CONSTANTE '<=' CONSTANTE
    {
        $$ = new Relacional($1, $3, '<=', @2.first_line, @2.first_column + 1)
    }
    | CONSTANTE '>' CONSTANTE
    {
        $$ = new Relacional($1, $3, '>', @2.first_line, @2.first_column + 1)
    }
    | CONSTANTE '>=' CONSTANTE
    {
        $$ = new Relacional($1, $3, '>=', @2.first_line, @2.first_column + 1)
    }
    | CONSTANTE '<>' CONSTANTE
    {
        $$ = new Relacional($1, $3, '<>', @2.first_line, @2.first_column + 1)
    }
    | CONSTANTE '==' CONSTANTE
    {
        $$ = new Relacional($1, $3, '==', @2.first_line, @2.first_column + 1)
    }
;

E:  CONSTANTE '+' CONSTANTE
    {
        $$ = new Aritmetica($1, $3, '+', @2.first_line, @2.first_column + 1);
    }
    | CONSTANTE '-' CONSTANTE
    {
        $$ = new Aritmetica($1, $3, '-', @2.first_line, @2.first_column + 1);
    }
    | CONSTANTE '*' CONSTANTE
    {
        $$ = new Aritmetica($1, $3, '*', @2.first_line, @2.first_column + 1);
    }
    | CONSTANTE '/' CONSTANTE
    {
        $$ = new Aritmetica($1, $3, '/', @2.first_line, @2.first_column + 1);
    }
    | CONSTANTE '%' CONSTANTE
    {
        $$ = new Aritmetica($1, $3, '%', @2.first_line, @2.first_column + 1);
    }
    | CONSTANTE
    {
        $$ = $1;
    }
;    

CONSTANTE:  id
    {
        $$ = new Primitivo(Primitivo.TYPE.ID, $1, @1.first_line, @1.first_column + 1);
    }
    | integer
    {
        $$ = new Primitivo(Primitivo.TYPE.NUMBER, $1, @1.first_line, @1.first_column + 1);
    }
    | double
    {
        $$ = new Primitivo(Primitivo.TYPE.NUMBER, $1, @1.first_line, @1.first_column + 1);
    }
    | '-' integer
    {
        $$ = new Primitivo(Primitivo.TYPE.NUMBER, "-"+$2, @1.first_line, @1.first_column + 1);
    }
    | '-' double
    {
        $$ = new Primitivo(Primitivo.TYPE.NUMBER, "-"+$2, @1.first_line, @1.first_column + 1);
    }
;

%%

exports.entorno = new Entorno();