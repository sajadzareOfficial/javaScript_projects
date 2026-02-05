const $ = document;
const Input_Title = $.getElementById("Title");
const Input_Auther = $.getElementById("Auther");
const Input_Year = $.getElementById("Year");
const Button = $.getElementById("Button");
const ButtonClear = $.getElementById("ButtonClear");


let finall_book_List = []; // [["Input_Title","Input_Auther","Input_Year"]];

function LocalStorage_setItem(event){  
    if(Input_Title.value =="" ){
        alert("invalid Title Data")
        Input_Title.focus()
        return 
    }
    else if(Input_Auther.value ==""){
        alert("invalid Auther Data")
        Input_Auther.focus()
        return 
    }
    else if(Input_Year.value =="" ){
        alert("invalid Year Data")
        Input_Auther.focus()
        return 
    }
    else{
        let dict  = {
            id: finall_book_List.length +1,
            Title: Input_Title.value,
            Auther : Input_Auther.value,
            Year : Input_Year.value
        }
        finall_book_List.push(dict)
        setLocalStorage(finall_book_List)
    }
    
}


function booksGenerator(){
    let Info_Books = $.querySelector(".Info_Books");
    Info_Books.innerHTML = ''
    
    
    if (finall_book_List == []){
        return
    }
    else{
        finall_book_List.forEach(element => {

            let Dynamic_Item = $.createElement("div")
            Dynamic_Item.innerHTML = ''
            Dynamic_Item.setAttribute("class","Dynamic_Item mb-0.5 flex justify-around items-center bg-gray-200")

            let Title = $.createElement("p");
            Title.setAttribute("class","w-1/3 flex items-center justify-center");
            Title.innerHTML = element.Title

            let Auther = $.createElement("p");
            Auther.setAttribute("class","w-1/3 flex items-center justify-center");
            Auther.innerHTML = element.Auther

            let Year = $.createElement("p")
            Year.setAttribute("class","w-1/3 flex items-center justify-center");
            Year.innerHTML = element.Year
            
            Dynamic_Item.appendChild(Title)
            Dynamic_Item.appendChild(Auther)
            Dynamic_Item.appendChild(Year)
            Info_Books.appendChild(Dynamic_Item)
            console.log(Info_Books)
            
        });
    }
}

function clearInputs (){
    Input_Title.value = ""
    Input_Title.focus()
    Input_Auther.value = ""
    Input_Year.value = ""
}

function setLocalStorage (Books_list){
    localStorage.setItem("PREV_BOOK_Data",JSON.stringify(Books_list))
    clearInputs()
    booksGenerator()
}




Button.addEventListener("click" ,LocalStorage_setItem)


window.addEventListener("load",function(event){
    let Datas= localStorage.getItem("PREV_BOOK_Data");
    if (Datas!= null){
        finall_book_List = JSON.parse(Datas)  
    }
    booksGenerator()  
})
