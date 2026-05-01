//^ ARRAYS =======================================================================================

const colors = ['RED', "BLUE", "GREEN", "YELLOW", "WHITE", 'BLACK', "PINK"]

const newArray = new Array('1', "2")

// REVERSE ---------------------------------------------------------------------------------------
const reversed = colors.reverse()
colors.reverse()

// SHIFT - UNSHIFT - POP - PUSH ------------------------------------------------------------------
const shifted = colors.shift()
colors.unshift(shifted)

const popped = colors.pop()
colors.push(popped)

// INDEX OF --------------------------------------------------------------------------------------
const result = colors.indexOf('RED')
console.log('INDEX OF =>', result) // 0

// JOIN ------------------------------------------------------------------------------------------
const joined = colors.join('__')
console.log('JOINED =>', joined)

// SLICE - SPLICE -----------------------------------------------------------------------------------------
const sliced = colors.slice(0, 4)
console.log(colors) // colors

console.log("%c COLORS ===> ", "color:yellow", sliced) // ["RED" , "BLUE", "GREEN" , "YELLOW"]

 