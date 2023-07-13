

function earth(){

  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio']
  }

  let gravity = 10;

  return function(value){
    console.log(water);
    gravity = value;
  }

  // return tiger
}

const ufo = earth()

ufo(5)



const button = document.querySelector('button');

// let isClicked = true; //전역 오염

function handleClick(){

  let isClicked = true;

  return function(){
    if(isClicked){
      document.body.style.backgroundColor = 'orange';
    }else{
      document.body.style.backgroundColor = 'transparent';
    }
  
    isClicked = !isClicked;
  }
}

button.addEventListener('click', handleClick())



// useState

function useState(initValue){

  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read, write]
}

const [state, setState] = useState(true);