//  const $ = document;
const inputElem = document.getElementById("Range");


inputElem.addEventListener("change", function (event){
    document.body.style.filter = `brightness(${event.target.value}%)`;
})





