let title = document.title
let h1Elem= document.querySelector('.h1Elem')
let input= document.querySelector('.input')
let convert= document.getElementById('convert')
let reset= document.getElementById('reset')
let change= document.getElementById('change')
let change_h1Elem= true
function clicking(convertt=false,resett=false,changee=false){
    if(convertt==true){
        let inputValue= input.value
        console.log(inputValue)
        
        if(h1Elem.innerHTML=='Convert to C to F'){
            let CtoF = ((inputValue-32)/1.8)            
            console.log(CtoF)
        }
        if(h1Elem.innerHTML=='Convert to F to C'){
            let FtoC = ((1.8 * inputValue) + 32)
            console.log(FtoC)

        }
    }
    if(resett==true){
        h1Elem.innerHTML='Convert to C to F'
        input.setAttribute('placeholder','Convert to C to F')    
        input.value = ''
        return true

    }if(changee==true){
        change_h1Elem = !change_h1Elem
        let val = change_h1Elem ? 'Convert to C to F' : "Convert to F to C"
        h1Elem.innerHTML = val
        input.setAttribute('placeholder', val)

    }
}

change.addEventListener('click',function(){
    // let change1=false
    clicking(false,false,true)
})
reset.addEventListener('click',function(){
    clicking(false,true,false)
})
convert.addEventListener('click',function(){
    clicking(true,false,false)
})