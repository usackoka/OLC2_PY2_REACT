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
"stack"                                           return 'res_stack'
"heap"                                            return 'res_heap'
"jne"                                             return 'res_jne'
"je"                                              return 'res_je'
"jg"                                              return 'res_jg'
"jl"                                              return 'res_jl'
"jge"                                             return 'res_jge'
"jle"                                             return 'res_jle'
"jmp"                                             return 'res_jmp'
"print"                                           return 'res_print'
"begin"                                           return 'res_begin'
"end"                                             return 'res_end'
"call"                                            return 'res_call'
"$_in_value"                                      return 'res_in_value'
"%c"                                              return 'tipoC'
"%e"                                              return 'tipoE'
"%d"                                              return 'tipoD'
//-----------------------------------------------------------------------
({letras}|"_")({letras}+|{digito}*|"_")*          return 'id'
{digito}+"."{digito}+                             return 'double'
{digito}+                                         return 'int'
//-----------------------------------------------------------------------
","                                               return ','
":"                                               return ':'
"("                                               return '('
")"                                               return ')'
"%"                                               return '%'
"+"                                               return '+'
"-"                                               return '-'
"*"                                               return '*'
"/"                                               return '/'
"="                                               return '='
//-----------------------------------------------------------------------
<<EOF>>                                           return 'EOF'
. %{console.log("FILA: " + (yylloc.first_line) + " COL: " + (yylloc.first_column) + " Lexico " + "Caracter Invalido cerca de: \""+ yytext + "\""); %}
//-----------------------------------------------------------------------
//---------------------------SINTACTICO----------------------------------
//-----------------------------------------------------------------------
%%
/lex
%{
    const { AST } = require("./AST/AST");
    const { Primitivo }= require("./AST/Primitivo");
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
    | ASIGNACION
    | NATIVAS
    | ETQ
    | SALTO_CONDICIONAL
    | SALTO_INCONDICIONAL
;

PROCEDURE_BEGIN : res_begin ',' ',' ',' id {
    exports.ast.addNewETQ($5,@1.first_line, @1.first_column, true);
}
;

PROCEDURE_END : res_end ',' ',' ',' id {
    exports.ast.addNewR4D($5,@1.first_line, @1.first_column);
}
;

/*
PROCEDURE : res_begin ',' ',' ',' id
            LIST_BLOCK
            res_end ',' ',' ',' id
            {
                $$ = new Procedure.Procedure($5,$6,@1.first_column, @1.first_line);
                //ast.addNewETQ($5,@1.first_column, @1.first_line, true);
                //ast.addNewR4D($5,@1.first_column, @1.first_line);
            }
;
*/

ASIGNACION : OPERADOR ',' PUEDE_VALOR PUEDE_VALOR DIRECCION {
    exports.ast.addNewAsignacion($1,$3,$4,$5,@2.first_line,@2.first_column);
}
;

OPERADOR : '+' {$$="+";} | '-' {$$="-";} | '*' {$$="*";} | '%' {$$="%";} | '/' {$$="/";} | '=' {$$="=";}
;

DIRECCION : res_stack {$$="stack";}
    | res_heap {$$="heap";}
    | id {$$=$1;}
;

PUEDE_VALOR : PRIMITIVO ',' {$$=$1;}
    | res_stack ',' {$$="stack";}
    | res_heap ','{$$="heap";}
    | ',' {$$ = "";}
;

NATIVAS : res_print '(' PARAMETRO ',' PRIMITIVO ')'{
    exports.ast.addNewPrint($3,$5,@1.first_line,@1.first_column);
}
    | res_call ',' ',' ',' id{
        exports.ast.addNewCall4D($5,@1.first_line,@1.first_column);
    }
    | res_call ',' ',' ',' res_in_value
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

SALTO_CONDICIONAL : SALTO ',' PRIMITIVO ',' PRIMITIVO ',' id
{
    exports.ast.addNewCondicional($1,$3,$5,$7,@2.first_line, @2.first_column);
}
;

SALTO : res_je {$$="je";} | res_jne {$$="jne";} | res_jg {$$="jg";} | res_jl {$$="jl";} | res_jge {$$="jge";} | res_jle {$$="jle";}
;

SALTO_INCONDICIONAL : res_jmp ',' ',' ',' id {
    exports.ast.addNewJMP($5,@1.first_line, @1.first_column);
}
;

%%

exports.ast = new AST();