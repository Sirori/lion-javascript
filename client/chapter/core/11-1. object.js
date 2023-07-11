/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: "800px",
  height: "40vh",
  minHeight: "280px",
  transform: "translate(-50%, -50%)"
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

//authorization: 권한
//authentication: 인증

authUser = {
  uid: 'user-id-zjqorEe!@#',
  name: 'beom',
  email: 'siy__n@naver.com',
  isSignIn: true,
  permission: 'paid' // free \ paid
}

console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['email']);
// console.log(authUser['permission']);

// class로 객체
class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁');

//함수로 객체 만들기
// 계산된 프로퍼티 (computed property)
let computedProperty = 'phone'; // phone | tel

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
  ){
  return {
    name: name,
    email: email,
    [computedProp]: number
  }
}

const user1 = createUser('진승', 'victory@naver.com', 'tel', '010-1234-5678');
const user2 = createUser('희소', 'happyCow@naver.com');

/* shorthand property (단축 프로퍼티) */
// function createUser(
//   name,
//   email,
//   computedProp = 'phone',
//   number = '010-0000-0000'
//   ){
//   return {
//     name,
//     email,
//     [computedProp]: number
//   }
// }


// 프로퍼티 포함 여부 확인

for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1, key)){
    console.log(key);
  }
}

// 프로퍼티 나열

//key만 모아놓은 배열 만들기

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);


//getProp(object)
// function getProp(object){
//   if(typeof object !== 'object'){
//     throw new Error('getProp함수의 매개변수는 객체 타입이어야합니다.')
//   }
//   return Object.keys(object)
// }

function getP(object){
  let result = [];

  for(let key in object){
    if(({}).hasOwnProperty.call(object, key)){
      result.push(key)
    }
  }
  return result;
}

// console.log(getProp(authUser));


// // 프로퍼티 제거(remove) or 삭제 (delete)

// authUser.name = null;

// delete authUser.uid

// console.log(authUser);

function removeProperty(object, key){

  if(key === 'all'){
    for(let key of getP(object)){
      object[key] = null;
    }
    return object;
  }else if(typeof object !== 'object'){
    throw new Error('어쩌고 저쩌고');
  } 

  object[key] = null;
  return object;
}


function deleteProperty(object, key){
  if(isEmptyObject(object)){
    return;
  }

  delete object[key];

  return object;
}

deleteProperty(authUser, 'name')
removeProperty(authUser, 'all')

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin
}

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return getP(object).length === 0 // ? true : false;

  // return !(Object.keys(object).length);
}

isEmptyObject(authUser);


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [,,green] = color;

for(let [key,value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
}

Object.entries(authUser)

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(green);




/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700
}

const {권혜미, 이수연, 강예나, 김태일} = salaries;

console.log(권혜미);

function setElementCss(options){
  const {width: w, height: h, overflow: o, color} = options; //이름을 바꿔주는 방법
  
  console.log(h, color);
}

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange'
}

setElementCss(defaults);

// 배열의 구조분해할당: 순서가 정해져있음, 변수의 이름을 바꿀 수 있음
// 객체의 구조분해할당: 순서가 상관없음, 변수의 이름을 바꿀 수 있음