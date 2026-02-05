const $ = document;
const Width_Range = $.getElementById("Width_Range");
const Weight_Number = $.getElementById("Weight_Number");
const Height_Range = $.getElementById("Height_Range");
const Height_Number = $.getElementById("Height_Number");
const BMI_Number = $.getElementById("BMI_Number");
const BMI_Status = $.getElementById("BMI_Status");

let Finall_weight = 100; // 100 is Default value Set in Input-range
let finall_height = 100; // 100 is Default value Set in Input-range
function Width_Handler(event){
    // console.log(event.target.value);
    Weight_Number.innerHTML = `${event.target.value} kg`;
    Finall_weight = event.target.value
    Bmi_Handler(Finall_weight,finall_height)
}
function Height_Handler(event){
    // console.log(event.target.value);
    Height_Number.innerHTML = `${event.target.value} cm`;
    finall_height = event.target.value
    Bmi_Handler(Finall_weight,finall_height)

}
function Bmi_Handler(weight,height){
    height = height/100;
    BMI = (weight / (height*height)).toFixed(1)
    BMI_Number.innerHTML = BMI
    if(BMI <18.5){
        BMI_Status.innerHTML= "onderWeight "
        BMI_Number.style.color = "yellow"
    }
    else if(18.5<BMI && BMI<24.5){
        BMI_Status.innerHTML= "normal "
        BMI_Number.style.color = "green"
    }
    else if(24.5<BMI && BMI<29.1){
        BMI_Status.innerHTML= "high"
        BMI_Number.style.color = "brown"
    }
    else{
        BMI_Status.innerHTML= "veryy high"
        BMI_Number.style.color = "red"

    }
    //Normal
    
    
    //Bad
    //Very_Bad
    

}

Width_Range.addEventListener("change",Width_Handler);
Height_Range.addEventListener("change",Height_Handler);



