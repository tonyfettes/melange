


function make(v) {
  return {
          v: v
        };
}

function get(r) {
  return r.v;
}

function set(r, v) {
  r.v = v;
  
}

function exchange(r, v) {
  var cur = r.v;
  r.v = v;
  return cur;
}

function compare_and_set(r, seen, v) {
  var cur = r.v;
  if (cur === seen) {
    r.v = v;
    return true;
  } else {
    return false;
  }
}

function fetch_and_add(r, n) {
  var cur = r.v;
  r.v = cur + n | 0;
  return cur;
}

function incr(r) {
  fetch_and_add(r, 1);
  
}

function decr(r) {
  fetch_and_add(r, -1);
  
}

export {
  make ,
  get ,
  set ,
  exchange ,
  compare_and_set ,
  fetch_and_add ,
  incr ,
  decr ,
  
}
/* No side effect */
