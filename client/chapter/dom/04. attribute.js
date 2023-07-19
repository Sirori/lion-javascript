/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

console.dir(first.className);
console.dir(first.id);
console.log(first.size); // 비표준 속성(임의로 준 속성)이므로 undefined를 반환함


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

console.log(first.hasAttribute('class')); //표준 비표준을 따지지 않고 존재 유무만을 확인함
console.log(first.getAttribute('size')); //위와 마찬가지로 표준 비표준을 따지지 않음
first.setAttribute('title', '메세지'); //속성을 변경(변경할 시 기존 값이 제거되기 때문에 유의해야함) 혹은 추가가 가능함
first.removeAttribute('title');
console.log(first.attributes); //해당 요소의 모든 속성과 값들을 객체로 반환함(이터러블)

for(value of first.attributes){
  console.log(value);
}

function getAttr(node, prop){

  //넘어온 대상이 문자인지를 체크한 후 element node로 변경
  if(typeof node === 'string'){
    node = getNode(node);
  }
  return node.getAttribute(prop)
}

function setAttr(node, prop, value){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof prop !== 'string'){
    throw new TypeError('setAttr 함수에서 두번째 인수는 문자 타입이어야합니다.')
  }

  if(!node[prop] && prop !== 'class' && prop !== 'title'){
    node.dataset[prop] =value;
    return;
  }

  node.setAttribute(prop, value);
} 

// function attr(node, prop, value){
//   // if(!value){
//   //   return getAttr(node, prop);
//   // }else{
//   //   setAttr(node, prop, value);
//   // }

//   return !value ? getAttr(node,prop) : setAttr(node, prop, value);
// }

const arrowAttr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node, prop, value);

console.log(getAttr('.first', 'class'));
console.log(setAttr('.first', 'title', '인사멘트'));
setAttr('.first', 'asdfji', 'hi')


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

console.log(first.dataset); // 케밥 case가 모두 카멜 case로 변환되어 나온다.
console.log(first.dataset.size);
console.log(first.dataset.animation = 'paused'); //setter