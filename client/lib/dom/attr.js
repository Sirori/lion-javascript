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

function attr(node, prop, value){
  // if(!value){
  //   return getAttr(node, prop);
  // }else{
  //   setAttr(node, prop, value);
  // }

  return !value ? getAttr(node,prop) : setAttr(node, prop, value);
}

const arrowAttr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node, prop, value);