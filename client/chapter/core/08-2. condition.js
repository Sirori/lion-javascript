/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy: false}; //모두 true이기 때문에 마지막 값이 반환됨

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy: true}; // [2,3].length가 첫번째 Truthy이기 때문에 2가 반환됨