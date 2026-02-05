let $ = document;
let colors = $.querySelectorAll(".colors")

function Color_Handler(event){
    document.documentElement.style.setProperty('--color-primary',event.target.dataset.color)
}


colors.forEach(element => {
    element.addEventListener("click" , Color_Handler)
});