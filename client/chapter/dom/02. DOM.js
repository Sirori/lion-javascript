/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById

// const message = document.getElementById('messeage');

// document.querySelector('.first')

// console.log(message);

// - getElementsByTagName
// - getElementsByClassName

getNode('.first') // <span class="first"></span>

const first = getNode('.first')

const span = getNodes('span')

console.log(span);

// - querySelector
// const first = document.querySelector('.first');

// console.log(first);

// - querySelectorAll
// const [firstSpan, secondSpan] = document.querySelectorAll('span');

// console.log(firstSpan);
// console.log(secondSpan);

// - closest
console.log(first.closest('h1')); //event delegation

/* 문서 대상 확인 */
// - matches
console.log(first.matches('#message'));

// - contains : 선택자의 자식들 중에 해당 element가 있는지
// console.log(first.contains(secondSpan));