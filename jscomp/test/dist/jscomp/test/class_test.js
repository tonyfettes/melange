// Generated by Melange
'use strict';

let Caml_oo_curry = require("melange.js/caml_oo_curry.js");
let CamlinternalOO = require("melange/camlinternalOO.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");

let shared = [
  "move",
  "get_x"
];

let shared$1 = ["x"];

function point_init($$class) {
  let ids = CamlinternalOO.new_methods_variables($$class, shared, shared$1);
  let move = ids[0];
  let get_x = ids[1];
  let x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$1) {
            return self$1[x];
          }),
        move,
        (function (self$1, d) {
            self$1[x] = self$1[x] + d | 0;
          })
      ]);
  return function (env, self) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = 0;
    return self$1;
  };
}

let point = CamlinternalOO.make_class(shared, point_init);

let p = Curry._1(point[0], undefined);

let zero = Caml_oo_curry.js1(291546447, 1, p);

Caml_oo_curry.js2(-933174511, 2, p, 3);

let three = Caml_oo_curry.js1(291546447, 3, p);

let x0 = {
  contents: 0
};

function point2_init($$class) {
  let ids = CamlinternalOO.new_methods_variables($$class, shared, shared$1);
  let move = ids[0];
  let get_x = ids[1];
  let x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$2) {
            return self$2[x];
          }),
        move,
        (function (self$2, d) {
            self$2[x] = self$2[x] + d | 0;
          })
      ]);
  return function (env, self) {
    let self$1 = CamlinternalOO.create_object_opt(self, $$class);
    x0.contents = x0.contents + 1 | 0;
    self$1[x] = x0.contents;
    return self$1;
  };
}

let point2 = CamlinternalOO.make_class(shared, point2_init);

let tmp = Curry._1(point2[0], undefined);

let one = Caml_oo_curry.js1(291546447, 4, tmp);

let tmp$1 = Curry._1(point2[0], undefined);

let two = Caml_oo_curry.js1(291546447, 5, tmp$1);

let u = {
  x: 3,
  getX: (function () {
      let self = this ;
      return self.x;
    })
};

Mt.from_pair_suites("Class_test", {
      hd: [
        "File \"jscomp/test/class_test.ml\", line 38, characters 4-11",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: zero,
                    _1: 0
                  };
          })
      ],
      tl: {
        hd: [
          "File \"jscomp/test/class_test.ml\", line 39, characters 4-11",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: three,
                      _1: 3
                    };
            })
        ],
        tl: {
          hd: [
            "File \"jscomp/test/class_test.ml\", line 40, characters 4-11",
            (function (param) {
                return {
                        TAG: /* Eq */0,
                        _0: one,
                        _1: 1
                      };
              })
          ],
          tl: {
            hd: [
              "File \"jscomp/test/class_test.ml\", line 41, characters 4-11",
              (function (param) {
                  return {
                          TAG: /* Eq */0,
                          _0: two,
                          _1: 2
                        };
                })
            ],
            tl: /* [] */0
          }
        }
      }
    });

exports.point = point;
exports.p = p;
exports.zero = zero;
exports.three = three;
exports.x0 = x0;
exports.point2 = point2;
exports.one = one;
exports.two = two;
exports.u = u;
/* point Not a pure module */
