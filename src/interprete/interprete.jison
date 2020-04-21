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
"#*"                {this.begin("COMENT_MULTI");}
<COMENT_MULTI>"*#"  %{this.begin('INITIAL');%}
<COMENT_MULTI>.                {}
<COMENT_MULTI>[\t\r\n\f]      {}
//-----------------------------------------------------------------------
//-------------------------- Comentario multilinea ---------------------
"#"                {this.begin("COMENT_SIMPLE");}
<COMENT_SIMPLE>[\r\n]   %{this.begin('INITIAL');%}
<COMENT_SIMPLE>.     {}
<COMENT_SIMPLE>[\t\f]      {}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
//----Reservadas----->
"stack"                                           return 'res_stack'
"heap"                                            return 'res_heap'
"if"                                                return 'res_if'
"goto"                                             return 'res_goto'
"print"                                           return 'res_print'
"proc"                                           return 'res_proc'
"begin"                                           return 'res_begin'
"end"                                             return 'res_end'
"call"                                            return 'res_call'
"%c"                                              return 'tipoC'
"%e"                                              return 'tipoE'
"%d"                                              return 'tipoD'
//-----------------------------------------------------------------------
({letras}|"_")({letras}+|{digito}*|"_")*          return 'id'
{digito}+"."{digito}+                             return 'double'
{digito}+                                         return 'int'
//-----------------------------------------------------------------------
"["                                               return '['
"]"                                               return ']'
","                                               return ','
":"                                               return ':'
":"                                               return ';'
"("                                               return '('
")"                                               return ')'
"%"                                               return '%'
"+"                                               return '+'
"-"                                               return '-'
"*"                                               return '*'
"/"                                               return '/'
"="                                               return '='
"=="                                              return '=='
"!="                                                return '!='
">"                                                 return '>'
">="                                                 return '>='
"<"                                                 return '<'
"<="                                                 return '<='
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

S : LIST_BLOCK EOF{
    //return new AST.AST();
    return exports.ast;
}
;

LIST_BLOCK : LIST_BLOCK BLOCK
    | BLOCK 
;

BLOCK : PROCEDURE_BEGIN
    | PROCEDURE_END
    | ASIGNACION ';'
    | NATIVAS ';'
    | ETQ
    | SALTO_CONDICIONAL
    | SALTO_INCONDICIONAL
;

PROCEDURE_BEGIN : res_proc id res_begin {
    exports.ast.addNewETQ($2,@1.first_line, @1.first_column, true);
}
;

PROCEDURE_END : res_end id {
    exports.ast.addNewR4D($2,@1.first_line, @1.first_column);
}
;

/*
PROCEDURE : res_proc ',' ',' ',' id
            LIST_BLOCK
            res_end ',' ',' ',' id
            {
                $$ = new Procedure.Procedure($5,$6,@1.first_column, @1.first_line);
                //ast.addNewETQ($5,@1.first_column, @1.first_line, true);
                //ast.addNewR4D($5,@1.first_column, @1.first_line);
            }
;
*/

ASIGNACION : res_stack '[' PRIMITIVO ']' '=' PRIMITIVO {
        exports.ast.addNewAsignacion("stack","=",$3,$6);
}
    | res_heap '[' PRIMITIVO ']' '=' PRIMITIVO {
        exports.ast.addNewAsignacion("heap","=",$3,$6);
}
    | id '=' res_heap '[' PRIMITIVO ']' {
        exports.ast.addNewAsignacion($1,"=","heap",$5);
}
    | id '=' res_stack '[' PRIMITIVO ']' {
        exports.ast.addNewAsignacion($1,"=","stack",$5);
}
    | id '=' PRIMITIVO {
        exports.ast.addNewAsignacion($1,"=",$3);
}
    | id '=' PRIMITIVO OPERADOR PRIMITIVO {
        exports.ast.addNewAsignacion($1,$4,$3,$5);
}
;

OPERADOR : '+' {$$="+";} | '-' {$$="-";} | '*' {$$="*";} | '%' {$$="%";} | '/' {$$="/";}
;

NATIVAS : res_print '(' PARAMETRO ',' PRIMITIVO ')'{
    exports.ast.addNewPrint($3,$5,@1.first_line,@1.first_column);
}
    | res_call id{
        exports.ast.addNewCall4D($2,@1.first_line,@1.first_column);
    }
;

PARAMETRO : tipoC{
    $$ = "%c";
}
    | tipoD{
        $$ = "%d";
    }
    | tipoE{
        $$ = "%e";
    }
;

ETQ : id ':'{
    $$ = exports.ast.addNewETQ($1,@1.first_line, @1.first_column, false);
}
;

PRIMITIVO : int{
    var p = new Primitivo(@1.first_line, @1.first_column,"", Number($1));
    $$ = p;
}
    | double{
        var p = new Primitivo(@1.first_line, @1.first_column,"",Number($1));
        $$ = p;
    }
    | '-' double {
        var p = new Primitivo(@1.first_line, @1.first_column,"",-(Number($2)));
        $$ = p;
    }
    | id
    {
        var p = new Primitivo(@1.first_line, @1.first_column, $1,0);
        $$ = p;
    }
    | '-' int {
        var p = new Primitivo(@1.first_line, @1.first_column,"", -(Number($2)));
        $$ = p;
    }
;

SALTO_CONDICIONAL : res_if '(' PRIMITIVO SALTO PRIMITIVO ')' res_goto id
{
    exports.ast.addNewCondicional($4,$3,$5,$8,@2.first_line, @2.first_column);
}
;

SALTO : '==' {$$="==";} | '!=' {$$="!=";} | '>' {$$=">";} | '<' {$$="<";} | '>=' {$$=">=";} | '<=' {$$="<=";}
;

SALTO_INCONDICIONAL : res_goto id {
    exports.ast.addNewJMP($2,@1.first_line, @1.first_column);
}
;

%%

exports.ast = new AST();