const textLess0 =
  'The discriminant is less than zero, the equation has no real solutions.';
const textEq0 =
  'The discriminant is zero, the quadratic equation has one real root: ';
const textGreater0 = `The discriminant is greater than zero, the quadratic equation has two real roots: `;

function checkFirstCondition(a) {
  if (a === 0) {
    throw Error(`Please type not the ${a}`);
  } else if (typeof a != 'number') {
    throw Error(`Don't type this symbol - ${a}. Please type only number`);
  }
}

function quadraticEquation (a, b, c) {
  const D = b * b - 4 * a * c;
  console.log('D = ' + D);

  checkFirstCondition(a);

  if (D < 0) {
    return textLess0;
  } else if (D == 0) {
    equationEq0 = (-b + Math.sqrt(D)) / (2 * a);

    return textEq0 + equationEq0;
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
  }
  return textGreater0 + x1 + '' + ' and ' + x2;
};
console.log(quadraticEquation(9, 6, 1));

let principal;
let n;
let rate;
let time;

function compoundInterest(principal, n, rate, time) {
  const CI = principal * Math.pow(1 + rate / n, n * time);
  const income = CI - principal;

  return income;
}
console.log(compoundInterest(2000, 12, 1, 5));
