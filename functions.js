//^ FUNCTIONS ====================================================================================

// NAMED FUNCTIONS
function logger() {
  console.log('NAMED FUNCTION')
}
logger()

// ANONYMOUS FUNCTIONS
const result = function () {
  let result = "RESULT"
  return result
}
console.log(' =>', result())


// IMMEDIATELY INVOKED FUNCTIONS
const _result = (function (a, b) {
  let result = a + b
  return result
})(21, 322)

console.log('res =>', _result)

