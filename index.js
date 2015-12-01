const math = require('./math')

console.assert(math.add(1, 2) === 3, 'add')
console.assert(math.subtract(2, 1) === 1, 'subtract')
console.assert(math.multiply(2, 2) === 4, 'multiply')

console.log('assertions passed')
