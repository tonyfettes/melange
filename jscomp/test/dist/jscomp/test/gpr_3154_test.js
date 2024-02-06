// Generated by Melange
'use strict';

let Caml_option = require("melange.js/caml_option.js");
let Js__Js_dict = require("melange.js/js_dict.js");
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

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

let d = {};

d["foo"] = undefined;

let match = Js__Js_dict.get(d, "foo");

if (match !== undefined && Caml_option.valFromOption(match) === undefined) {
  b("File \"jscomp/test/gpr_3154_test.ml\", line 12, characters 19-26", true);
} else {
  b("File \"jscomp/test/gpr_3154_test.ml\", line 13, characters 11-18", false);
}

let d0 = {};

d0["foo"] = undefined;

eq("File \"jscomp/test/gpr_3154_test.ml\", line 18, characters 5-12", Js__Js_dict.get(d0, "foo"), Caml_option.some(undefined));

Mt.from_pair_suites("Gpr_3154_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
/*  Not a pure module */
