/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler // 실행연산자 ()가 없어도 됨
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');

function handler(){
  console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

// // first.onclick = handler;

// function handleClick() {
//   console.log('이벤트 메서드를 호출합니다.');
// }

// //click, mousemove, mouseover, mouseout, mousedown, mouseup
// const remove = bindEvent('.first', 'click', handleClick);

// setTimeout(()=>{
//   remove()
// }, 3000)


// 이벤트 객체(event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체를 생성한다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.
const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClick(e){
  
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;

}

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('click',handleClick);


ground.addEventListener('mousemove',throttle((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));