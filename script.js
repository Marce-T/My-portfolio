const myFunction = () => {
    console.log('i`m here');
    const x = document.getElementById('myLinks');
    if(x.style.display === 'block') {
        x.style.display =  'none'
    } else {
        x.style.display = 'block';
    }

}


document.addEventListener("DOMContentLoaded", function() {
    let letter = 0
    const text = 'Lorem ipsum dolor sit consectetur.';
    function typeText(){
        if(letter < text.length){
            document.getElementById('type-js').innerHTML += text.charAt(letter);
            letter++;
            let speed = Math.floor(Math.random() * 150)+ 50;
            setTimeout(typeText, speed);
        }
    }
    typeText();
})

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ["My name is Marce", 'i´m just a begginner, in this world of the programming']
const typinDelay = 100;
const erasingDelay = 100;
const newTextDelay = 100; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if (charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains('typing'))cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typinDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex > 0){
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex=0;
        setTimeout(type, typinDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});