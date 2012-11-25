exports.keys = keys

function keys (o) {
  var a = []
  for (var i in o) a.push(i)
  return a
}