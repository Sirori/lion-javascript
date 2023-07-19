/* class */
function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두번째 인수는 문자타입이어야합니다.');
  }
  node.classList.add(className);
}

function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);

  if(!className){
    node.className = '';
    return;
  }

  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두번째 인수는 문자타입이어야합니다.');
  }
  node.classList.remove(className);
}

const toggleClass = (node, className)=>{
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두번째 인수는 문자타입이어야합니다.');
  }
  node.classList.toggle(className);
}

/* css */

// console.log(getComputedStyle(first).getPropertyValue('background-color'));

function setCss(node, prop, value){

  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  if(!value) throw new SyntaxError('setCss함수의 세번째 인수는 필수값입니다.');

  //객체의 속성에 접근할 때 .표기법은 사용할 수 없음
  node.style[prop] = value;
}

function getCss(node, prop){
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node).getPropertyValue(prop);
}

const css = (node, prop, value)=>{
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}