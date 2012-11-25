exports.parse = parse
exports.toISOString = toISOString
exports.now = now

function now () {
  return new Date().getTime()
}
function parse (s) {
  // s is something like "2010-12-29T07:31:06Z"
  s = s.split("T")
  var ds = s[0]
    , ts = s[1]
    , d = new Date()
  ds = ds.split("-")
  ts = ts.split(":")
  var tz = ts[2].substr(2)
  ts[2] = ts[2].substr(0, 2)
  d.setUTCFullYear(+ds[0])
  d.setUTCMonth(+ds[1]-1)
  d.setUTCDate(+ds[2])
  d.setUTCHours(+ts[0])
  d.setUTCMinutes(+ts[1])
  d.setUTCSeconds(+ts[2])
  d.setUTCMilliseconds(0)
  return d.getTime()
}
exports.toISOString = toISOString
function toISOString () { return ISODateString(this) }
function pad(n){return n<10 ? '0'+n : n}
function ISODateString(d){
  return d.getUTCFullYear()+'-'
    + pad(d.getUTCMonth()+1)+'-'
    + pad(d.getUTCDate())+'T'
    + pad(d.getUTCHours())+':'
    + pad(d.getUTCMinutes())+':'
    + pad(d.getUTCSeconds())+'Z'
}