exports.isArray = isArray
exports.forEach = forEach
exports.reduce = reduce
exports.filter = filter

function forEach (fn) {
  for (var i = 0, l = this.length; i < l; i ++) {
    if (this.hasOwnProperty(i)) {
      fn(this[i], i, this)
    }
  }
}
function reduce (callback, initialValue) {
  var previousValue = initialValue || this[0];
  for (var i = initialValue ? 0 : 1; i < this.length; i++) {
    previousValue = callback(previousValue, this[i], i, this);
  }
  return previousValue;
}
function isArray (a) {
  return a instanceof Array
    || Object.prototype.toString.call(a) === "[object Array]"
    || (typeof a === "object" && typeof a.length === "number") }
function filter (fun) {
  if (this == null) throw new TypeError();

  var t = Object(this);
  var len = t.length >>> 0;
  if (typeof fun != "function") throw new TypeError();

  var res = [];
  var thisp = arguments[1];
  for (var i = 0; i < len; i++) {
    if (i in t) {
      var val = t[i]; // in case fun mutates this
      if (fun.call(thisp, val, i, t))
        res.push(val);
    }
  }

  return res;
}