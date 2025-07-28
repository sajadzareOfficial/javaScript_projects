let Body = document.body
let loading = document.querySelector(".loading")
let container = document.querySelector(".container")
let alert__notFound = document.querySelector(".alert__notFound")
let inputHtml=document.querySelector('.input__main')
let search_img = document.getElementById('search_img')

// -----start whether box -----
let City_name = document.getElementById('City_name')
let City_deg = document.getElementById('City_deg')
let City_Whether = document.getElementById('City_Whether')
//------------------- 
let randomImage= Math.round(Math.random()*4)
console.log(randomImage)
Body.style.backgroundImage=`url(jpg/${randomImage}.jpg)`
// ----------------

let whethers={
    // la:[whethe   r="50deg",tipe='sune'],

    tabriz:{whether:"50deg",tipe:'sune'},
    tehran:{whether:"10deg",tipe:'windy'},
    shiraz:{whether:"30deg",tipe:'good'},
    mashad:{whether:"25deg",tipe:'very good'},
}
search_img.addEventListener('click',function(){
    
    container.style.display = 'none'
    loading.style.display = 'block'
    if (whethers[inputHtml.value]!=undefined){
        setTimeout(function(){
            loading.style.display = 'none'
            let whether__box = document.querySelector(".wether__box")
            whether__box.style.display = 'block'
            City_name.innerHTML = inputHtml.value
            City_deg.innerHTML = whethers[inputHtml.value].whether
            City_Whether.innerHTML = whethers[inputHtml.value].tipe


        },3000)
        


    }
    else{
        setTimeout(function(){
            loading.style.display='none'
            alert__notFound.style.display='block'

        },3000)

        
        }

    
})
