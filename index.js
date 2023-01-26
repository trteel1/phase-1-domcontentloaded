// Your code goes here
const text = document.querySelector('#text')
function UpdateInner() {
    text.innerHTML = "This is really cool!"
}

function alertClick() {
    text.innerHTML = 'Hey, You find the Default Text: "JavaScript is so cool. It lets me add text to my page programmatically."'
}


document.addEventListener('DOMContentLoaded', UpdateInner);

text.addEventListener('click', alertClick);