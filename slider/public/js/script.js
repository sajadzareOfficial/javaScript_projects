const $ =  document
const imgElem = $.querySelector("img")
const H_One = $.querySelector("h1")
const btnLeft = $.querySelector(".btn__Left")
const btnRight = $.querySelector(".btn__right")
imgs = [  
    
	"./assets/photos/img (1).png",
    "./assets/photos/img (2).png",
    "./assets/photos/img (3).png",
    "./assets/photos/img (4).png",
	"./assets/photos/img (5).png",
	
]
let imgConter = 0

function next(){
    imgConter ++ 
    if(imgConter>imgs.length -1){
        imgConter = 0
    }
    imgElem.setAttribute("src",imgs[imgConter])
    
}
function prev(){
    imgConter--
    if (imgConter < 0 ){
        imgConter = imgs.length - 1
    } 
    imgElem.src = imgs[imgConter]
}

document.body.addEventListener("keydown" , function(event){
    if(event.key =="ArrowRight"){
        next()
    }
    if(event.key =="ArrowLeft"){
        prev()
    }
})
btnLeft.addEventListener("click",prev)
btnRight.addEventListener("click",next)
