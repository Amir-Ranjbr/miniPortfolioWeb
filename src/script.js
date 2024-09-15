document.addEventListener('DOMContentLoaded',() =>{
    const hamburgIcon = document.querySelector('.hamburg')
    const navbar = document.querySelector('.dropdown')
    const cancelButton = document.querySelector('.cancel')

    const toggleNavbar = () =>{
        navbar.classList.toggle('active')
    }
    hamburgIcon.addEventListener('click',toggleNavbar)
    cancelButton.addEventListener('click',toggleNavbar)

    document.addEventListener('click',(e)=>{
        const isClickInsideNavbar = navbar.contains(e.target)
        const isClickOnHamburg = hamburgIcon.contains(e.target)
        if(!isClickInsideNavbar && !isClickOnHamburg){
            navbar.classList.remove('active')
        }
    })
})
// Typewriter Effect

const texts =[
    'DEVELOPER',
    'DESIGNER',
    'YOUTUBER'
]
let speed = 110;
const textElements = document.querySelector('.typewriter-text')

let textIndex = 0;
let charterIndex= 0;

const typeWriter =() =>{
    if(charterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charterIndex);
        charterIndex++;
        setTimeout(typeWriter,speed)
    }
    else{
        setTimeout(eraseText,1000)
    }
}
const eraseText =()=>{
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML =textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex +1) % texts.length;
        charterIndex = 0;
        setTimeout(typeWriter,500)
    }
}
window.onload = typeWriter