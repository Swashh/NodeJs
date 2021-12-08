function calcSumInArray (inputList) {
  let result = 0

  for(const item of inputList) {
    if (item % 2 !== 0) {
      continue
    }
    result += Number(item)
  }
  return result
}

// console.log(calcSumInArray([1,2,3,4,5,6]))



function getMaxValue (inputList) {
  let result = -Infinity

  for(const item of inputList) {
    const preparedItem = Number(item)

    if (isNaN(preparedItem) || preparedItem <= result) {
      continue
    }
    result = preparedItem
  }
  return result
}

// console.log(getMaxValue([2,3,4,5,Infinity]))



function getMaxLengthString (inputList) {
  let result = ' '
  let maxStringLength = 0

  for(const item of inputList) {
    const preparedItem = String(item)
    const itemLength = preparedItem.length

    if (itemLength <= maxStringLength) {
      continue
    }
    result = preparedItem
    maxStringLength = itemLength
  }
  return result
}

console.log(getMaxLengthString(['asd',3,4,5]))



function getDigits (input) {
  let result = []
  let preparedNumber = String(input)

  for(const digit of preparedNumber) {
    result.push(Number(digit))
  }
  return result
}

console.log(getDigits(123))

