const $ = document;
const Keyboard_Rows = $.querySelectorAll(".keyboard-rows");
const outPut = $.getElementById("output");

let Finall_output = "";

function Project_Starter(event){
    let Key_Presed = $.getElementById(event.key); 
    Animation_Handler(Key_Presed , event.code)//
    Text_Ootput_Handler(event,Key_Presed )
}

function Text_Ootput_Handler(event,Key_Presed){    
    if(event.code == "Space"){
        Finall_output+=" "
    }
    else if(event.code == "Backspace"){
       Finall_output =  Finall_output.slice(0,-1) 
       outPut.innerHTML = Finall_output
    }
    else if(event.key == "Shift" || event.key == "Control" || event.key == "Alt" || event.key == "CapsLock" ){
    }
    else{
        Finall_output += Key_Presed.innerHTML
        outPut.innerHTML = Finall_output
    }

}
function Animation_Handler(Key_Presed,SpaceElem){
    if (SpaceElem == "Space"){ //this if write for : select and Get SpaceDiv from Html
        let Space = $.getElementById("Space")
        Key_Presed = Space
    }   
    Key_Presed.classList.add('animattion')
    Key_Presed.addEventListener('animationend', function () {
        Key_Presed.classList.remove('animattion');
    })
}
document.body.addEventListener("keydown",Project_Starter)
