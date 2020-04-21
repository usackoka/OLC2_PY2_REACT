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
";"                                               return ';'
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
%}

%define parse.error verbose
%option bison-locations
%{
    // var ast = new AST.AST();
%}

%start S

%% /* Definición de la gramática */

S : LIST_BLOCK EOF{
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
}
;

PROCEDURE_END : res_end id {
}
;

ASIGNACION : res_stack '[' PRIMITIVO ']' '=' PRIMITIVO {
}
    | res_heap '[' PRIMITIVO ']' '=' PRIMITIVO {
}
    | id '=' res_heap '[' PRIMITIVO ']' {
}
    | id '=' res_stack '[' PRIMITIVO ']' {
}
    | id '=' PRIMITIVO {
}
    | id '=' PRIMITIVO OPERADOR PRIMITIVO {
}
;

OPERADOR : '+' {$$="+";} | '-' {$$="-";} | '*' {$$="*";} | '%' {$$="%";} | '/' {$$="/";}
;

NATIVAS : res_print '(' PARAMETRO ',' PRIMITIVO ')'{}
    | res_call id{

    }
;

PARAMETRO : tipoC{
}
    | tipoD{
    }
    | tipoE{
    }
;

ETQ : id ':'{}
;

PRIMITIVO : int{
}
    | double{
    }
    | '-' double {
    }
    | id
    {
    }
    | '-' int {
    }
;

SALTO_CONDICIONAL : res_if '(' PRIMITIVO SALTO PRIMITIVO ')' res_goto id
{
}
;

SALTO : '==' {$$="==";} | '!=' {$$="!=";} | '>' {$$=">";} | '<' {$$="<";} | '>=' {$$=">=";} | '<=' {$$="<=";}
;

SALTO_INCONDICIONAL : res_goto id {
}
;

%%