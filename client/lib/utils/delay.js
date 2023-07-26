import { getNode } from "../dom/getNode.js";
import { insertLast } from "../dom/insert.js";
import { xhrPromise } from "./xhr.js";

function delay(callback, timeout=1000){
  setTimeout(callback,timeout);
}

const first = getNode('.first');
const second = getNode('.second');





// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//     })
//   })
//   second.style.top = '100px'
//   console.log('b');
// })



// function delayP(
//   shouldReject =  false, //shouldReject 부분 이해 안감
//   timeout=1000, 
//   data='성공!', 
//   errorMessage = '알 수 없는 오류가 발생했습니다.'
//   ){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!shouldReject){
//         resolve(data)
//       }else{
//         reject({message: errorMessage});
//       }
//     }, timeout);
//   })
// }

// delayP(true, 1000, 'success', '404 not found')
// .then((res)=>{
//   console.log(res);
// })

// delayP()
// .then(
//   ({name,age})=>{
//     console.log( name );
//   }
// )
// .catch((err)=>{
//   console.log( err );
// })

// 객체 합성 mixin

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

function delayP(options){

  let config = {...defaultOptions}
  
  if(typeof options === 'number'){
    config.timeout = options;
  }

  if(typeof options === 'object'){
    config = {...defaultOptions, ...options}
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!shouldReject){
        resolve(data)
      }else{
        reject({message: errorMessage});
      }
    }, timeout);
  })
}

delayP({shouldReject: true})
.then((res)=>{
  // console.log(res);
})
.catch(({message})=>{
  // alert(message);
})
.finally(()=>{
  // console.log('어쨌든 실행됨');
})


async function delayA(){
  return '성공!'
}

const data = await delayA();

// console.log( data );

async function getData(){
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/25')
  const data1 = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/35')
  const data2 = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/1')
  const data3 = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/4')
  const data4 = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/7')
  const data5 = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/10')
  const data6 = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/13')
  
  // data.then((res)=>{
  //   console.log(res);
  // })

  const pokemon = await data;
  const pokemon1 = await data1;
  const pokemon2 = await data2;
  const pokemon3 = await data3;
  const pokemon4 = await data4;
  const pokemon5 = await data5;
  const pokemon6 = await data6;

  insertLast(document.body, `<img src="${pokemon.sprites['front_default']}" alt='' />`)
  insertLast(document.body, `<img src="${pokemon1.sprites['front_default']}" alt='' />`)
  insertLast(document.body, `<img src="${pokemon2.sprites['front_default']}" alt='' />`)
  insertLast(document.body, `<img src="${pokemon3.sprites['front_default']}" alt='' />`)
  insertLast(document.body, `<img src="${pokemon4.sprites['front_default']}" alt='' />`)
  insertLast(document.body, `<img src="${pokemon5.sprites['front_default']}" alt='' />`)
  insertLast(document.body, `<img src="${pokemon6.sprites['front_default']}" alt='' />`)
}


getData(data)

