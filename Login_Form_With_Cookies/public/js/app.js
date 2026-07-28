import {colorHandler} from './functions/colorHandler.js'
import {FormHandler} from './functions/formHandler.js'
const btn = document.getElementById('btn');
const form = document.getElementById('form');

let obj1 = new FormHandler();   
form.addEventListener("submit", event => event.preventDefault());
btn.addEventListener("click", event => {
        if(document.forms['MainForm']['userName'].value && 
            document.forms['MainForm']['userFamily'].value &&
            document.forms['MainForm']['password1'].value === document.forms['MainForm']['password2'].value
        ){

            obj1.cookieSeter()
        }
        else{
            alert('password are not once !!')
        }
        event.target.classList.add("animate-ping");
        setTimeout(item => event.target.classList.remove("animate-ping"), 1000);
    })

window.addEventListener("load" , event=>obj1.cookieGeter())
colorHandler()

