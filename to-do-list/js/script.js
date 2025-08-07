// let main_container = document.querySelector('.main_container')
let tex_box_container = document.querySelector('.tex_box_container')
let TextBox = document.querySelector('.text_box')
let text = document.querySelector('.text')
let input = document.getElementById('input')
let imges = document.querySelectorAll('.img')
function removeElem(){
    TextBox.remove()
}

input.addEventListener('keypress',function(event){
    if(event.code === 'Enter'){
       
        let newElem = document.createElement('div')
        let newImg = document.createElement('img')
        newElem.setAttribute('class','text_box')
        newImg.setAttribute('class','img')
        newImg.setAttribute('src','img/trash-can-svgrepo-com.svg')
        let texting = document.createElement('p') 
        texting.setAttribute('class', 'text')
        texting.innerHTML = input.value
        newImg.addEventListener('click', function() {
            newElem.remove()
        })
        console.log(input.value)
        newElem.append(texting)
        newElem.append(newImg)
        tex_box_container.append(newElem)

        
    }
})
imges.forEach(function(img) {
    img.addEventListener('click',removeElem)
    console.log(img)
});


