const text = document.querySelector(".main-jumbotron-heading");
console.log(text.textContent);
const content = text.textContent;
const arraySplitted = content.split("");
text.textContent = "";

for (let i = 0; i < arraySplitted.length; i++) {
    text.innerHTML += "<span>" + arraySplitted[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fading');
    char++;
    if(char === content.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}