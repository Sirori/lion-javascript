// 모듈 프로그래밍 => js의 어려운 문법은 x 방법론

//getNode 가져오기

import { getNode, getNodes, clearContents, insertLast } from './lib/index.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');
const calculator = getNode('.calculator');

// [page 1]
// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. 화면 출력하기

function handleInput(){
  let firstValue = Number(first.value);
  let secondValue = Number(second.value);
  let total = firstValue + secondValue;
  
  clearContents(result)
  
  insertLast(result, total)
}

function handleClear(){
  clearContents(first);
  clearContents(second);
  result.textContent = '-'
}

// [page 2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들기


// [page 3]
// 위 내용을 이벤트 위임으로 변경
// .calculator 이벤트 input

function page2(){


  const calculator = getNode('.calculator');
  const clear = getNode('#clear');
  const result = getNode('.result');
  const numberInputs = Array.from(
    getNodes('input:not(#clear)')
  )
  
  console.log( numberInputs );
  
  
  function handleInput(){
    
    const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)
  
  
    console.log(  );
  
    clearContents(result);
    insertLast(result,total);
    
  }
  
  function handleClick(){
  
  
    numberInputs.forEach(clearContents);
    result.textContent = '-'
  }
  
  calculator.addEventListener('input',handleInput);
  clear.addEventListener('click',handleClick);
  
  // [page-3]
  // 위 내용을 이벤트 위임으로 변경 
  // .calculator 이벤트 input 
  
  
  }