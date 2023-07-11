/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// rest parameter
let calcAllMoney = (a, b, ...args)=>{
  
  console.log(args);

  // let total = 0;
  // args.forEach((item)=>{
  //   total += item;
  // })
  
  // return args.reduce(function(acc, item){
  //   return acc + item;
  // }, 0)

  // return args.reduce((acc, item) => acc + item, 0)

  // return total;
};

// const result = calcAllMoney(1000, 500, 200, 2000);

// console.log(result);

// function Button(){

// }

// 일반함수 : 나를 호출한 대상을 this로 바인딩한다.
// 화살표함수 : this를 바인딩하지 않고 사용한다면 부모 요소를 가져온다.

// 화살표 함수와 this


//this를 쓰는 이유

// 함수선언문
function normalFunction(){
  console.log(this);
}

// 함수표현식
const expressionFunction = function(){
  console.log(this);
}

// 화살표함수식
const arrowFunction = ()=>{
  console.log(this);
}

//객체 안에서의 this

//객체의 메서드를 정의할때는 화살표 함수보다 일반 함수가 더 좋음
//매서드 내에서 함수를 호출할때는 화살표 함수가 더 좋음

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function(){

    this.grades.forEach((item)=>{
      this.total += item;
    })

    console.log(this.total)
  }
}



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 