function insertBefore(node, text){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫번째 인수는 ELEMENT NODE이어야합니다.') 
  }
  node.insertAdjacentHTML('beforebegin', text);
}

function insertFirst(node, text){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫번째 인수는 ELEMENT NODE이어야합니다.') 
  }  
  node.insertAdjacentHTML('beforeend', text);
}  

function insertLast(node, text){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫번째 인수는 ELEMENT NODE이어야합니다.') 
  }
  node.insertAdjacentHTML('afterbegin', text);
}

function insertAfter(node, text){
  if(typeof node === 'string') node = getNode(node);

  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫번째 인수는 ELEMENT NODE이어야합니다.') 
  }
  node.insertAdjacentHTML('afterend', text);
}

