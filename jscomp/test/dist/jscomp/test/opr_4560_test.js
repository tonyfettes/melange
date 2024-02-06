// Generated by Melange
'use strict';

let Caml_oo_curry = require("melange.js/caml_oo_curry.js");
let CamlinternalOO = require("melange/camlinternalOO.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");

let shared = ["b"];

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

let object_tables = /* Cons */{
  key: undefined,
  data: undefined,
  next: undefined
};

let object_tables$1 = /* Cons */{
  key: undefined,
  data: undefined,
  next: undefined
};

function c1_init($$class) {
  let b = CamlinternalOO.get_method_label($$class, "b");
  CamlinternalOO.set_method($$class, b, (function (self$1) {
          if (!object_tables.key) {
            let $$class = CamlinternalOO.create_table([
                  "c",
                  "h"
                ]);
            let env = CamlinternalOO.new_variable($$class, "");
            let ids = CamlinternalOO.get_method_labels($$class, [
                  "h",
                  "c"
                ]);
            let h = ids[0];
            let c = ids[1];
            CamlinternalOO.set_methods($$class, [
                  c,
                  (function (self$2) {
                      let env$1 = self$2[env];
                      if (!object_tables$1.key) {
                        let $$class = CamlinternalOO.create_table(["d"]);
                        let env$2 = CamlinternalOO.new_variable($$class, "");
                        let d = CamlinternalOO.get_method_label($$class, "d");
                        CamlinternalOO.set_method($$class, d, (function (self$3) {
                                let env$3 = self$3[env$2];
                                let tmp = env$3[1];
                                return Curry._1(tmp[0][env$3[0]], tmp);
                              }));
                        let env_init = function (env$3) {
                          let self = CamlinternalOO.create_object_opt(undefined, $$class);
                          self[env$2] = env$3;
                          return self;
                        };
                        CamlinternalOO.init_class($$class);
                        object_tables$1.key = env_init;
                      }
                      return Curry._1(object_tables$1.key, [
                                  env$1[0],
                                  env$1[1]
                                ]);
                    }),
                  h,
                  (function (self$2) {
                      return 33;
                    })
                ]);
            let env_init = function (env$1) {
              let self = CamlinternalOO.create_object_opt(undefined, $$class);
              self[env] = env$1;
              return self;
            };
            CamlinternalOO.init_class($$class);
            object_tables.key = env_init;
          }
          return Curry._1(object_tables.key, [
                      b,
                      self$1
                    ]);
        }));
  return function (env, self) {
    return CamlinternalOO.create_object_opt(self, $$class);
  };
}

let c1 = CamlinternalOO.make_class(shared, c1_init);

function c2_init($$class) {
  let ids = CamlinternalOO.get_method_labels($$class, [
        "b",
        "a"
      ]);
  let a = ids[1];
  let inh = CamlinternalOO.inherits($$class, 0, 0, shared, c1, true);
  let obj_init = inh[0];
  CamlinternalOO.set_method($$class, a, (function (self$4) {
          
        }));
  return function (env, self) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._1(obj_init, self$1);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

let c2 = CamlinternalOO.make_class([
      "a",
      "b"
    ], c2_init);

let tmp = Curry._1(c2[0], undefined);

Caml_oo_curry.js1(98, 1, tmp);

let tmp$1 = Curry._1(c1[0], undefined);

let tmp$2 = Caml_oo_curry.js1(98, 2, tmp$1);

let tmp$3 = Caml_oo_curry.js1(99, 3, tmp$2);

let tmp$4 = Caml_oo_curry.js1(100, 4, tmp$3);

let e = Caml_oo_curry.js1(104, 5, tmp$4);

eq("File \"jscomp/test/opr_4560_test.ml\", line 26, characters 3-10", e, 33);

Mt.from_pair_suites("jscomp/test/opr_4560_test.ml", suites.contents);

let magic = 33;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.magic = magic;
exports.c1 = c1;
exports.c2 = c2;
exports.e = e;
/* c1 Not a pure module */
