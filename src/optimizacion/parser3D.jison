/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
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
[a-zA-Z_]([_a-zA-Z0-9ñN])*              return 'tknId'
[0-9]+"."[0-9]+\b                       return 'tknDouble';
[0-9]+\b                                return 'tknInteger';
\"([^\"\n\\\\]|\\\"|\\)*\"  			return 'tknString';

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
.                           %{
                                console.log("Error Léxico: Caracter inválido cerca de: \""+ yytext + "\". [" + (yylloc.first_line) + ", " + (yylloc.first_column + 1)+ "]."); 
                            %}

/lex
%{
    /*const { AST } = require('./analizador_js/abstractas/AST');

    const { Aritmetica, TiposAritmetica } = require('./analizador_js/expresiones/Aritmetica');
    const { Casteo } = require('./analizador_js/expresiones/Casteo');
    const { Funcion } = require('./analizador_js/expresiones/Funcion');
    const { Logica, TiposLogica } = require('./analizador_js/expresiones/Logica');
    const { Primitiva } = require('./analizador_js/expresiones/Primitiva');
    const { Relacional, TiposRelacional } = require('./analizador_js/expresiones/Relacional');
    
    const { Imprimir } = require('./analizador_js/instrucciones/Imprimir');
    
    const { Arbol } = require('./analizador_js/tablaSimbolos/Arbol');
    const { Tipo } = require('./analizador_js/tablaSimbolos/Tipo');*/

    const { Aritmetica, TiposAritmetica } = require('./analizador3D_js/expresiones/Aritmetica');
    const { Primitiva } = require('./analizador3D_js/expresiones/Primitiva');

    const { Asignacion } = require('./analizador3D_js/instrucciones/Asignacion');

    const { Arbol3D } = require('./analizador3D_js/tablaSimbolos/Arbol');
    const { Tipo } = require('./analizador3D_js/tablaSimbolos/Tipo');
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

INICIAL
    : AUX_INICIAL EOF
        {
            exports.tree.instrucciones = $1;
            return exports.tree;
        }
    ;

AUX_INICIAL
    : AUX_INICIAL GLOBAL
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

GLOBAL   
    : DEC_VAR ';'
        {  
            
        }
    | var heap '[' ']' ';'
        {  
            
        }
    | var stack '[' ']' ';'
        {  
            
        }
    | ASIGNACION ';'
        {  
            $$ = $1;
        }
    | tknId ':' 
        {  

        }
    | goto tknId ';'
        {

        }
    | if '(' EXPRESION ')' goto tknId ';'
        {

        }
    | proc tknId begin AUX_INICIAL end
        {

        }
    | call tknId ';'
        {

        }
    | print '(' tknString ',' OPC_EXPRESION ')' ';'
        {

        }
    ;

DEC_VAR
    : var LIST_VAR
        {  
            
        }
    ;

LIST_VAR
    : LIST_VAR ',' tknId
        {  
            
        }
    | LIST_VAR ',' tknId '=' EXPRESION
        {  
            
        }
    | tknId
        {  
            
        }
    | tknId '=' EXPRESION
        {  
            
        }
    ;

ASIGNACION
    : tknId '=' EXPRESION
        {
            $$ = new Asignacion($1, $3, @1.first_line, @1.first_column + 1);
        }
    | stack '[' EXPRESION ']' '=' EXPRESION
        {
            
        }
    | heap '[' EXPRESION ']' '=' EXPRESION
        {
            
        }
    ;

EXPRESION
    : OPC_EXPRESION '<' OPC_EXPRESION
        {
            
        }
    | OPC_EXPRESION '<=' OPC_EXPRESION
        {
            
        }
    | OPC_EXPRESION '>' OPC_EXPRESION
        {
            
        }
    | OPC_EXPRESION '>=' OPC_EXPRESION
        {
            
        }
    | OPC_EXPRESION '<>' OPC_EXPRESION
        {
            
        }
    | OPC_EXPRESION '==' OPC_EXPRESION
        {
            
        }
    | ARITMETICA
        {
            $$ = $1;
        }
    ;

ARITMETICA
    : OPC_EXPRESION '+' OPC_EXPRESION
        {
            $$ = new Aritmetica($1, $3, TiposAritmetica.OperadorAritmetico.SUMA, @2.first_line, @2.first_column + 1);
        }
    | OPC_EXPRESION '-' OPC_EXPRESION
        {
            $$ = new Aritmetica($1, $3, TiposAritmetica.OperadorAritmetico.RESTA, @2.first_line, @2.first_column + 1);
        }
    | OPC_EXPRESION '*' OPC_EXPRESION
        {
            $$ = new Aritmetica($1, $3, TiposAritmetica.OperadorAritmetico.MULTIPLICACION, @2.first_line, @2.first_column + 1);
        }
    | OPC_EXPRESION '/' OPC_EXPRESION
        {
            $$ = new Aritmetica($1, $3, TiposAritmetica.OperadorAritmetico.DIVISION, @2.first_line, @2.first_column + 1);
        }
    | OPC_EXPRESION '%' OPC_EXPRESION
        {
            $$ = new Aritmetica($1, $3, TiposAritmetica.OperadorAritmetico.MODULO, @2.first_line, @2.first_column + 1);
        }
    | OPC_EXPRESION
        {
            $$ = $1;
        }
    ;    

OPC_EXPRESION
    : DEF_EXPRESION
        {
            $$ = $1;
        }
    | '-' DEF_EXPRESION
        {
            $$ = new Aritmetica($2, null, TiposAritmetica.OperadorAritmetico.RESTA, @1.first_line, @1.first_column + 1);
        }
    ;

DEF_EXPRESION
    : tknId
        {
            $$ = new Primitiva(Tipo.Tipos.IDENTIFICADOR, $1, @1.first_line, @1.first_column + 1);
        }
    | tknInteger
        {
            $$ = new Primitiva(Tipo.Tipos.INTEGER, $1, @1.first_line, @1.first_column + 1);
        }
    | tknDouble
        {
            $$ = new Primitiva(Tipo.Tipos.DOUBLE, $1, @1.first_line, @1.first_column + 1);
        }
    | stack '[' EXPRESION ']'
        {
            $$ = new Primitiva(Tipo.Tipos.STACK, $3, @1.first_line, @1.first_column + 1);
        }
    | heap '[' EXPRESION ']'
        {
            $$ = new Primitiva(Tipo.Tipos.HEAP, $3, @1.first_line, @1.first_column + 1);
        }
    ;

%%

exports.tree = new Arbol3D();