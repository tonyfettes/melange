

import * as Bytes from "./bytes.mjs";
import * as Curry from "./curry.mjs";
import * as Caml_array from "./caml_array.mjs";
import * as Caml_bytes from "./caml_bytes.mjs";
import * as Caml_lexer from "./caml_lexer.mjs";
import * as Caml_option from "./caml_option.mjs";
import * as Stdlib__no_aliases from "./stdlib__no_aliases.mjs";

var dummy_pos = {
  pos_fname: "",
  pos_lnum: 0,
  pos_bol: 0,
  pos_cnum: -1
};

function engine(tbl, state, buf) {
  var result = Caml_lexer.caml_lex_engine(tbl, state, buf);
  if (result >= 0 && buf.lex_curr_p !== dummy_pos) {
    buf.lex_start_p = buf.lex_curr_p;
    var init = buf.lex_curr_p;
    buf.lex_curr_p = {
      pos_fname: init.pos_fname,
      pos_lnum: init.pos_lnum,
      pos_bol: init.pos_bol,
      pos_cnum: buf.lex_abs_pos + buf.lex_curr_pos | 0
    };
  }
  return result;
}

function new_engine(tbl, state, buf) {
  var result = Caml_lexer.caml_new_lex_engine(tbl, state, buf);
  if (result >= 0 && buf.lex_curr_p !== dummy_pos) {
    buf.lex_start_p = buf.lex_curr_p;
    var init = buf.lex_curr_p;
    buf.lex_curr_p = {
      pos_fname: init.pos_fname,
      pos_lnum: init.pos_lnum,
      pos_bol: init.pos_bol,
      pos_cnum: buf.lex_abs_pos + buf.lex_curr_pos | 0
    };
  }
  return result;
}

var zero_pos = {
  pos_fname: "",
  pos_lnum: 1,
  pos_bol: 0,
  pos_cnum: 0
};

function from_function(with_positionsOpt, f) {
  var with_positions = with_positionsOpt !== undefined ? Caml_option.valFromOption(with_positionsOpt) : true;
  var partial_arg = Caml_bytes.caml_create_bytes(512);
  return {
          refill_buff: (function (param) {
              var read = Curry._2(f, partial_arg, partial_arg.length);
              var n = read > 0 ? read : (param.lex_eof_reached = true, 0);
              if ((param.lex_buffer_len + n | 0) > param.lex_buffer.length) {
                if (((param.lex_buffer_len - param.lex_start_pos | 0) + n | 0) <= param.lex_buffer.length) {
                  Bytes.blit(param.lex_buffer, param.lex_start_pos, param.lex_buffer, 0, param.lex_buffer_len - param.lex_start_pos | 0);
                } else {
                  var newlen = (param.lex_buffer.length << 1);
                  if (((param.lex_buffer_len - param.lex_start_pos | 0) + n | 0) > newlen) {
                    throw {
                          RE_EXN_ID: "Failure",
                          _1: "Lexing.lex_refill: cannot grow buffer",
                          Error: new Error()
                        };
                  }
                  var newbuf = Caml_bytes.caml_create_bytes(newlen);
                  Bytes.blit(param.lex_buffer, param.lex_start_pos, newbuf, 0, param.lex_buffer_len - param.lex_start_pos | 0);
                  param.lex_buffer = newbuf;
                }
                var s = param.lex_start_pos;
                param.lex_abs_pos = param.lex_abs_pos + s | 0;
                param.lex_curr_pos = param.lex_curr_pos - s | 0;
                param.lex_start_pos = 0;
                param.lex_last_pos = param.lex_last_pos - s | 0;
                param.lex_buffer_len = param.lex_buffer_len - s | 0;
                var t = param.lex_mem;
                for(var i = 0 ,i_finish = t.length; i < i_finish; ++i){
                  var v = Caml_array.get(t, i);
                  if (v >= 0) {
                    Caml_array.set(t, i, v - s | 0);
                  }
                  
                }
              }
              Bytes.blit(partial_arg, 0, param.lex_buffer, param.lex_buffer_len, n);
              param.lex_buffer_len = param.lex_buffer_len + n | 0;
              
            }),
          lex_buffer: Caml_bytes.caml_create_bytes(1024),
          lex_buffer_len: 0,
          lex_abs_pos: 0,
          lex_start_pos: 0,
          lex_curr_pos: 0,
          lex_last_pos: 0,
          lex_last_action: 0,
          lex_eof_reached: false,
          lex_mem: [],
          lex_start_p: with_positions ? zero_pos : dummy_pos,
          lex_curr_p: with_positions ? zero_pos : dummy_pos
        };
}

function from_channel(with_positions, ic) {
  return from_function(with_positions, (function (buf, n) {
                return Stdlib__no_aliases.input(ic, buf, 0, n);
              }));
}

function from_string(with_positionsOpt, s) {
  var with_positions = with_positionsOpt !== undefined ? Caml_option.valFromOption(with_positionsOpt) : true;
  return {
          refill_buff: (function (lexbuf) {
              lexbuf.lex_eof_reached = true;
              
            }),
          lex_buffer: Bytes.of_string(s),
          lex_buffer_len: s.length,
          lex_abs_pos: 0,
          lex_start_pos: 0,
          lex_curr_pos: 0,
          lex_last_pos: 0,
          lex_last_action: 0,
          lex_eof_reached: true,
          lex_mem: [],
          lex_start_p: with_positions ? zero_pos : dummy_pos,
          lex_curr_p: with_positions ? zero_pos : dummy_pos
        };
}

function set_position(lexbuf, position) {
  lexbuf.lex_curr_p = {
    pos_fname: lexbuf.lex_curr_p.pos_fname,
    pos_lnum: position.pos_lnum,
    pos_bol: position.pos_bol,
    pos_cnum: position.pos_cnum
  };
  lexbuf.lex_abs_pos = position.pos_cnum;
  
}

function set_filename(lexbuf, fname) {
  var init = lexbuf.lex_curr_p;
  lexbuf.lex_curr_p = {
    pos_fname: fname,
    pos_lnum: init.pos_lnum,
    pos_bol: init.pos_bol,
    pos_cnum: init.pos_cnum
  };
  
}

function with_positions(lexbuf) {
  return lexbuf.lex_curr_p !== dummy_pos;
}

function lexeme(lexbuf) {
  var len = lexbuf.lex_curr_pos - lexbuf.lex_start_pos | 0;
  return Bytes.sub_string(lexbuf.lex_buffer, lexbuf.lex_start_pos, len);
}

function sub_lexeme(lexbuf, i1, i2) {
  var len = i2 - i1 | 0;
  return Bytes.sub_string(lexbuf.lex_buffer, i1, len);
}

function sub_lexeme_opt(lexbuf, i1, i2) {
  if (i1 < 0) {
    return ;
  }
  var len = i2 - i1 | 0;
  return Caml_option.some(Bytes.sub_string(lexbuf.lex_buffer, i1, len));
}

function sub_lexeme_char(lexbuf, i) {
  return Caml_bytes.get(lexbuf.lex_buffer, i);
}

function sub_lexeme_char_opt(lexbuf, i) {
  if (i >= 0) {
    return Caml_option.some(Caml_bytes.get(lexbuf.lex_buffer, i));
  }
  
}

function lexeme_char(lexbuf, i) {
  return Caml_bytes.get(lexbuf.lex_buffer, lexbuf.lex_start_pos + i | 0);
}

function lexeme_start(lexbuf) {
  return lexbuf.lex_start_p.pos_cnum;
}

function lexeme_end(lexbuf) {
  return lexbuf.lex_curr_p.pos_cnum;
}

function lexeme_start_p(lexbuf) {
  return lexbuf.lex_start_p;
}

function lexeme_end_p(lexbuf) {
  return lexbuf.lex_curr_p;
}

function new_line(lexbuf) {
  var lcp = lexbuf.lex_curr_p;
  if (lcp !== dummy_pos) {
    lexbuf.lex_curr_p = {
      pos_fname: lcp.pos_fname,
      pos_lnum: lcp.pos_lnum + 1 | 0,
      pos_bol: lcp.pos_cnum,
      pos_cnum: lcp.pos_cnum
    };
    return ;
  }
  
}

function flush_input(lb) {
  lb.lex_curr_pos = 0;
  lb.lex_abs_pos = 0;
  var lcp = lb.lex_curr_p;
  if (lcp !== dummy_pos) {
    lb.lex_curr_p = {
      pos_fname: lcp.pos_fname,
      pos_lnum: 1,
      pos_bol: 0,
      pos_cnum: 0
    };
  }
  lb.lex_buffer_len = 0;
  
}

export {
  dummy_pos ,
  from_channel ,
  from_string ,
  from_function ,
  set_position ,
  set_filename ,
  with_positions ,
  lexeme ,
  lexeme_char ,
  lexeme_start ,
  lexeme_end ,
  lexeme_start_p ,
  lexeme_end_p ,
  new_line ,
  flush_input ,
  sub_lexeme ,
  sub_lexeme_opt ,
  sub_lexeme_char ,
  sub_lexeme_char_opt ,
  engine ,
  new_engine ,
  
}
/* No side effect */
