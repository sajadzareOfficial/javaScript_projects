let $ = document

let Hour = $.getElementById("Hour")
let Min = $.getElementById("Min")
let second = $.getElementById("second")



setInterval(() => {
    let Time = new Date();
    Hour.innerHTML = Time.getHours();
    Min.innerHTML = Time.getMinutes();
    if(Time.getSeconds() <10){
        second.innerHTML = "0" + Time.getSeconds();

    }
    else{
    second.innerHTML = Time.getSeconds();
}
    console.log("0"+Time.getSeconds());
    
}, 1000);