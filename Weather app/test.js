let Body = document.body
let randomImage= Math.round(Math.random()*4)
console.log(randomImage)
Body.style.backgroundImage=`url(${randomImage}.jpg)`
// ----------------
let inputHtml=document.querySelector('.input__main')
let whether={
    a:[hava="clude",baaad='little'],
    tabriz:[hava="clude",baaad='little'],
    tehran:[hava="1000",baaad='very'],
    shiraz:[hava="150",baaad='vvvvreeee'],
    mashad:[hava="1000",baaad='liiitle'],
}
inputHtml.addEventListener('change',function(){
    let loading = document.querySelector(".loading")
    let search_box = document.querySelector(".container")
    let alert__notFound = document.querySelector(".alert__notFound")
    search_box.style.display = 'none'
    loading.style.display = 'block'
    if (whether[inputHtml.value]!=undefined){
        setTimeout(function(){
            loading.style.display = 'none'
            let whether__box = document.querySelector(".wether__box")
            whether__box.style.display = 'block'
        },3000)
        


    }
    else{
        setTimeout(function(){
            loading.style.display='none'
            alert__notFound.style.display='block'

        },3000)

        
        }

    
})
