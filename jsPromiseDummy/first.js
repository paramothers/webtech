let async = true;

let xhr = new XMLHttpRequest();
xhr.open('get','data.json', async);

xhr.send();
cl
let timpStamp = Date.now()+ 3000;
while(Date.now() < timpStamp){
  console.log('Waiting..');
}

function listener(){
    console.log('Greetings from listener');
}

xhr.addEventListener('load',listener);
xhr.addEventListener('error',listener);

