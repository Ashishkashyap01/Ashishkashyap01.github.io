const text = "Hi, I'm a Developer";
let index = 0;

function type() {
document.querySelector(".typing").innerText = text.slice(0,index);
index++;

if(index <= text.length){
setTimeout(type,100);
}
}

type();
