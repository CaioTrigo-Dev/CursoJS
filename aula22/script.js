let varA = 'A'
let varB = 'B'
let varC = 'C'

VarCopy = varA
varA = varB
varB = varC
varC = VarCopy

console.log(varA, varB, varC)