exports.trim = trim

function trim () {
  return this.replace(/^\s+|\s+$/g, "")
}