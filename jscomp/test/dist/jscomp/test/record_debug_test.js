// Generated by Melange
'use strict';

let Caml_exceptions = require("melange.js/caml_exceptions.js");
let Mt = require("./mt.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

let u_a = 2;

let u_b = {
  xx: 2,
  yy: 3
};

let u = {
  a: u_a,
  b: u_b
};

let A = /* @__PURE__ */Caml_exceptions.create("Record_debug_test.A");

let B = /* @__PURE__ */Caml_exceptions.create("Record_debug_test.B");

let v0 = {
  MEL_EXN_ID: A,
  _1: 3
};

let v1 = {
  MEL_EXN_ID: B,
  _1: 3,
  _2: 2
};

let N = {
  a: 0,
  b: 1
};

function N0_f(prim) {
  return prim;
}

let N0 = {
  a: 0,
  b: 1,
  f: N0_f
};

let i = String(3);

let a_2 = "" + i;

let a_3 = "" + i + i;

let a_4 = "" + i + i + i;

let a_5 = " " + i;

let a = [
  "",
  "a",
  a_2,
  a_3,
  a_4,
  a_5
];

eq("File \"jscomp/test/record_debug_test.ml\", line 59, characters 3-10", a, [
      "",
      "a",
      "3",
      "33",
      "333",
      " 3"
    ]);

Mt.from_pair_suites("jscomp/test/record_debug_test.ml", suites.contents);

let v = {
  a: 3,
  b: {
    xx: 2,
    yy: 3
  }
};

let h = {
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: {
        hd: 4,
        tl: /* [] */0
      }
    }
  }
};

let v2 = {
  NAME: "C",
  VAL: 2
};

let v3 = {
  NAME: "C",
  VAL: [
    2,
    3
  ]
};

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.v = v;
exports.u = u;
exports.h = h;
exports.A = A;
exports.B = B;
exports.v0 = v0;
exports.v1 = v1;
exports.v2 = v2;
exports.v3 = v3;
exports.N = N;
exports.N0 = N0;
/* i Not a pure module */
