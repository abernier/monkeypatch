exports.patch = patch;

exports.deep = require('./deep');
exports.Date = require('./date');
exports.Object = require('./object');
exports.Array = require('./array');
exports.String = require('./string');

function patch(Object, Date, Array, String) {
  if (!Date.parse || isNaN(Date.parse("2010-12-29T07:31:06Z"))) {
    Date.parse = this.Date.parse
  }

  Date.prototype.toISOString = Date.prototype.toISOString
    || this.Date.toISOString

  Date.now = Date.now
    || this.Date.now

  Object.keys = Object.keys
    || this.Object.keys

  Array.prototype.forEach = Array.prototype.forEach
    || this.Array.forEach

  Array.prototype.reduce = Array.prototype.reduce
    || this.Array.reduce

  Array.isArray = Array.isArray
    || this.Array.isArray

  String.prototype.trim = String.prototype.trim
    || this.String.trim
}