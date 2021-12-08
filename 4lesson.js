const POSITIVE_ROOT_TYPE = 0
const NEGATIVE_ROOT_TYPE = 1

function calcRoot(a, b, discriminant, type = POSITIVE_ROOT_TYPE) {
  const discriminantSqrt = Math.sqrt(discriminant)

  const topCalculationRootResult = type === POSITIVE_ROOT_TYPE
    ? -b + discriminantSqrt
    : -b - discriminantSqrt

  return topCalculationRootResult / (2 * a)
}

function calcQuadraticEquation(a, b, c) {
  const preparedA = Number(a),
    preparedB = Number(b),
    preparedC = Number(c)

  const discriminant = preparedB ** 2 - 4 * preparedA * preparedC

  if (discriminant > 0) {
    const root1 = calcRoot(preparedA, preparedB, discriminant)
    const root2 = calcRoot(preparedA, preparedB, discriminant, NEGATIVE_ROOT_TYPE)

    return root1 + root2
  }

  if (discriminant === 0) {
    return calcRoot(preparedA, preparedB, discriminant)
  }

  return NaN
}

console.log(calcQuadraticEquation(1,4,2))
console.log(calcQuadraticEquation(1,2,1))
console.log(calcQuadraticEquation(2,2,2))