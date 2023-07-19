/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'box second'); // setter 
console.log(first.className); // getter
// console.log(first.className = 'second'); // (setter를 두번 선언하면 뒤에 나온 내용이 덮어쓴다.)

// add, remove, toggle, contains

first.classList.add('hello');
first.classList.remove('hello');
// 클래스 한번에 모두 지우기 => first.className = '';
first.classList.toggle('is-active'); // 반환값 있음(boolean값).
console.log(first.classList.contains('hello'));

// function addClass(node, className){
//   if(typeof node === 'string') node = getNode(node);

//   if(typeof className !== 'string'){
//     throw new TypeError('addClass 함수의 두번째 인수는 문자타입이어야합니다.');
//   }
//   node.classList.add(className);
// }

addClass('.first', 'hello');


/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter  
console.log(first.style.backgroundColor); // getter

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// console.log(getComputedStyle(first).backgroundColor);
console.log(getComputedStyle(first).getPropertyValue('background-color'));

function setCss(node, prop, value){

  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  if(!value) throw new SyntaxError('setCss함수의 세번째 인수는 필수값입니다.');

  //객체의 속성에 접근할 때 .표기법은 사용할 수 없음
  node.style[prop] = value;
}

// setCss('.first', 'color', 'pink');

console.log(css('.first', 'font-size'));
console.log(css('.first', 'background-color', 'red'));