let $= document
let contry = $.getElementById('contry')
let cont={
    iran:["tehran","mashad",'tabriz'],
    usa:['la','texaz'],
    japon:['hakomazi'],
}
let secondInput= $.getElementById('condom');
contry.addEventListener("change",function (){
    for (const [key, value] of Object.entries(cont)) {   
        if (contry.value== key){
            console.log(cont[key])
            secondInput.innerHTML+=`<option>${cont[key]}</option>`
        }
      }
})