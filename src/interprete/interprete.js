/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var interprete = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,16],$V2=[1,12],$V3=[1,19],$V4=[1,20],$V5=[1,21],$V6=[1,22],$V7=[1,23],$V8=[1,24],$V9=[1,14],$Va=[1,15],$Vb=[1,25],$Vc=[1,26],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,30],$Vh=[1,18],$Vi=[5,14,16,17,21,22,23,24,25,26,30,34,43,44,45,46,47,48,49],$Vj=[1,47],$Vk=[1,51],$Vl=[1,50],$Vm=[1,45],$Vn=[1,46],$Vo=[1,48],$Vp=[1,49],$Vq=[15,16,22,27,28,40,41],$Vr=[15,33];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"S":3,"LIST_BLOCK":4,"EOF":5,"BLOCK":6,"PROCEDURE_BEGIN":7,"PROCEDURE_END":8,"ASIGNACION":9,"NATIVAS":10,"ETQ":11,"SALTO_CONDICIONAL":12,"SALTO_INCONDICIONAL":13,"res_begin":14,",":15,"id":16,"res_end":17,"OPERADOR":18,"PUEDE_VALOR":19,"DIRECCION":20,"+":21,"-":22,"*":23,"%":24,"/":25,"=":26,"res_stack":27,"res_heap":28,"PRIMITIVO":29,"res_print":30,"(":31,"PARAMETRO":32,")":33,"res_call":34,"res_in_value":35,"tipoC":36,"tipoD":37,"tipoE":38,":":39,"int":40,"double":41,"SALTO":42,"res_je":43,"res_jne":44,"res_jg":45,"res_jl":46,"res_jge":47,"res_jle":48,"res_jmp":49,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"res_begin",15:",",16:"id",17:"res_end",21:"+",22:"-",23:"*",24:"%",25:"/",26:"=",27:"res_stack",28:"res_heap",30:"res_print",31:"(",33:")",34:"res_call",35:"res_in_value",36:"tipoC",37:"tipoD",38:"tipoE",39:":",40:"int",41:"double",43:"res_je",44:"res_jne",45:"res_jg",46:"res_jl",47:"res_jge",48:"res_jle",49:"res_jmp"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,5],[8,5],[9,5],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[20,1],[20,1],[20,1],[19,2],[19,2],[19,2],[19,1],[10,6],[10,5],[10,5],[32,1],[32,1],[32,1],[11,2],[29,1],[29,1],[29,2],[29,1],[29,2],[12,7],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[13,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

    //return new AST.AST();
    return exports.ast;

break;
case 11:

    exports.ast.addNewETQ($$[$0],_$[$0-4].first_line, _$[$0-4].first_column, true);

break;
case 12:

    exports.ast.addNewR4D($$[$0],_$[$0-4].first_line, _$[$0-4].first_column);

break;
case 13:

    exports.ast.addNewAsignacion($$[$0-4],$$[$0-2],$$[$0-1],$$[$0],_$[$0-3].first_line,_$[$0-3].first_column);

break;
case 14:
this.$="+";
break;
case 15:
this.$="-";
break;
case 16:
this.$="*";
break;
case 17:
this.$="%";
break;
case 18:
this.$="/";
break;
case 19:
this.$="=";
break;
case 20: case 24:
this.$="stack";
break;
case 21: case 25:
this.$="heap";
break;
case 22:
this.$=$$[$0];
break;
case 23:
this.$=$$[$0-1];
break;
case 26:
this.$ = "";
break;
case 27:

    exports.ast.addNewPrint($$[$0-3],$$[$0-1],_$[$0-5].first_line,_$[$0-5].first_column);

break;
case 28:

        exports.ast.addNewCall4D($$[$0],_$[$0-4].first_line,_$[$0-4].first_column);
    
break;
case 30:

    this.$ = "%c";

break;
case 31:

        this.$ = "%d";
    
break;
case 32:

        this.$ = "%e";
    
break;
case 33:

    this.$ = exports.ast.addNewETQ($$[$0-1],_$[$0-1].first_line, _$[$0-1].first_column, false);

break;
case 34:

    var p = new Primitivo(_$[$0].first_line, _$[$0].first_column,"", Number($$[$0]));
    this.$ = p;

break;
case 35:

        var p = new Primitivo(_$[$0].first_line, _$[$0].first_column,"",Number($$[$0]));
        this.$ = p;
    
break;
case 36:

        var p = new Primitivo(_$[$0-1].first_line, _$[$0-1].first_column,"",-(Number($$[$0])));
        this.$ = p;
    
break;
case 37:

        var p = new Primitivo(_$[$0].first_line, _$[$0].first_column, $$[$0],0);
        this.$ = p;
    
break;
case 38:

        var p = new Primitivo(_$[$0-1].first_line, _$[$0-1].first_column,"", -(Number($$[$0])));
        this.$ = p;
    
break;
case 39:

    exports.ast.addNewCondicional($$[$0-6],$$[$0-4],$$[$0-2],$$[$0],_$[$0-5].first_line, _$[$0-5].first_column);

break;
case 40:
this.$="je";
break;
case 41:
this.$="jne";
break;
case 42:
this.$="jg";
break;
case 43:
this.$="jl";
break;
case 44:
this.$="jge";
break;
case 45:
this.$="jle";
break;
case 46:

    exports.ast.addNewJMP($$[$0],_$[$0-4].first_line, _$[$0-4].first_column);

break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,18:13,21:$V3,22:$V4,23:$V5,24:$V6,25:$V7,26:$V8,30:$V9,34:$Va,42:17,43:$Vb,44:$Vc,45:$Vd,46:$Ve,47:$Vf,48:$Vg,49:$Vh},{1:[3]},{5:[1,31],6:32,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,18:13,21:$V3,22:$V4,23:$V5,24:$V6,25:$V7,26:$V8,30:$V9,34:$Va,42:17,43:$Vb,44:$Vc,45:$Vd,46:$Ve,47:$Vf,48:$Vg,49:$Vh},o($Vi,[2,3]),o($Vi,[2,4]),o($Vi,[2,5]),o($Vi,[2,6]),o($Vi,[2,7]),o($Vi,[2,8]),o($Vi,[2,9]),o($Vi,[2,10]),{15:[1,33]},{15:[1,34]},{15:[1,35]},{31:[1,36]},{15:[1,37]},{39:[1,38]},{15:[1,39]},{15:[1,40]},{15:[2,14]},{15:[2,15]},{15:[2,16]},{15:[2,17]},{15:[2,18]},{15:[2,19]},{15:[2,40]},{15:[2,41]},{15:[2,42]},{15:[2,43]},{15:[2,44]},{15:[2,45]},{1:[2,1]},o($Vi,[2,2]),{15:[1,41]},{15:[1,42]},{15:$Vj,16:$Vk,19:43,22:$Vl,27:$Vm,28:$Vn,29:44,40:$Vo,41:$Vp},{32:52,36:[1,53],37:[1,54],38:[1,55]},{15:[1,56]},o($Vi,[2,33]),{16:$Vk,22:$Vl,29:57,40:$Vo,41:$Vp},{15:[1,58]},{15:[1,59]},{15:[1,60]},{15:$Vj,16:$Vk,19:61,22:$Vl,27:$Vm,28:$Vn,29:44,40:$Vo,41:$Vp},{15:[1,62]},{15:[1,63]},{15:[1,64]},o($Vq,[2,26]),o($Vr,[2,34]),o($Vr,[2,35]),{40:[1,66],41:[1,65]},o($Vr,[2,37]),{15:[1,67]},{15:[2,30]},{15:[2,31]},{15:[2,32]},{15:[1,68]},{15:[1,69]},{15:[1,70]},{16:[1,71]},{16:[1,72]},{16:[1,76],20:73,27:[1,74],28:[1,75]},o($Vq,[2,23]),o($Vq,[2,24]),o($Vq,[2,25]),o($Vr,[2,36]),o($Vr,[2,38]),{16:$Vk,22:$Vl,29:77,40:$Vo,41:$Vp},{16:[1,78],35:[1,79]},{16:$Vk,22:$Vl,29:80,40:$Vo,41:$Vp},{16:[1,81]},o($Vi,[2,11]),o($Vi,[2,12]),o($Vi,[2,13]),o($Vi,[2,20]),o($Vi,[2,21]),o($Vi,[2,22]),{33:[1,82]},o($Vi,[2,28]),o($Vi,[2,29]),{15:[1,83]},o($Vi,[2,46]),o($Vi,[2,27]),{16:[1,84]},o($Vi,[2,39])],
defaultActions: {19:[2,14],20:[2,15],21:[2,16],22:[2,17],23:[2,18],24:[2,19],25:[2,40],26:[2,41],27:[2,42],28:[2,43],29:[2,44],30:[2,45],31:[2,1],53:[2,30],54:[2,31],55:[2,32]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const { AST } = require("./AST_JS/AST");
    const { Primitivo }= require("./AST_JS/Primitivo");

    // var ast = new AST.AST();


exports.ast = new AST();/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:this.begin("COMENT_MULTI");
break;
case 2:this.begin('INITIAL');
break;
case 3:
break;
case 4:
break;
case 5:this.begin("COMENT_SIMPLE");
break;
case 6:this.begin('INITIAL');
break;
case 7:
break;
case 8:
break;
case 9:return 27
break;
case 10:return 28
break;
case 11:return 44
break;
case 12:return 43
break;
case 13:return 45
break;
case 14:return 46
break;
case 15:return 47
break;
case 16:return 48
break;
case 17:return 49
break;
case 18:return 30
break;
case 19:return 14
break;
case 20:return 17
break;
case 21:return 34
break;
case 22:return 35
break;
case 23:return 36
break;
case 24:return 38
break;
case 25:return 37
break;
case 26:return 16
break;
case 27:return 41
break;
case 28:return 40
break;
case 29:return 15
break;
case 30:return 39
break;
case 31:return 31
break;
case 32:return 33
break;
case 33:return 24
break;
case 34:return 21
break;
case 35:return 22
break;
case 36:return 23
break;
case 37:return 25
break;
case 38:return 26
break;
case 39:return 5
break;
case 40:console.log("FILA: " + (yy_.yylloc.first_line) + " COL: " + (yy_.yylloc.first_column) + " Lexico " + "Caracter Invalido cerca de: \""+ yy_.yytext + "\""); 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\*)/i,/^(?:\*\/)/i,/^(?:.)/i,/^(?:[\t\r\n\f])/i,/^(?:\/\/)/i,/^(?:[\r\n])/i,/^(?:.)/i,/^(?:[\t\f])/i,/^(?:stack\b)/i,/^(?:heap\b)/i,/^(?:jne\b)/i,/^(?:je\b)/i,/^(?:jg\b)/i,/^(?:jl\b)/i,/^(?:jge\b)/i,/^(?:jle\b)/i,/^(?:jmp\b)/i,/^(?:print\b)/i,/^(?:begin\b)/i,/^(?:end\b)/i,/^(?:call\b)/i,/^(?:\$_in_value\b)/i,/^(?:%c\b)/i,/^(?:%e\b)/i,/^(?:%d\b)/i,/^(?:(([A-Za-zÑñ])|_)(([A-Za-zÑñ])+|([0-9])*|_)*)/i,/^(?:([0-9])+\.([0-9])+)/i,/^(?:([0-9])+)/i,/^(?:,)/i,/^(?::)/i,/^(?:\()/i,/^(?:\))/i,/^(?:%)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:=)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"COMENT_SIMPLE":{"rules":[6,7,8],"inclusive":false},"COMENT_MULTI":{"rules":[0,1,2,3,4,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true},"INITIAL":{"rules":[0,1,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = interprete;
exports.Parser = interprete.Parser;
exports.parse = function () { return interprete.parse.apply(interprete, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}