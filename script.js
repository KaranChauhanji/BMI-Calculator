const userWeight=document.getElementById(`weight`);
const userHeight=document.getElementById(`height`);
const btn= document.getElementById(`btn`);
const container=document.querySelector(`.container`);
let ConditionText=document.createElement(`p`);
ConditionText.setAttribute("id","result");


btn.addEventListener(`click`,()=>{
    let userWeightn=Number(userWeight.value)
    let userHeightn=Number(userHeight.value)

    let BMI=((userWeightn)/(userHeightn*userHeightn))*10000
    console.log(BMI.toFixed(1))

    let condition;

    if(BMI <= 18.4){
        condition="UnderWeight"
        ConditionText.style.border= '4px solid red'
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        condition="Normal Weight"
        ConditionText.style.border= '4px solid green'

    }
    else if(BMI >= 25 && BMI <= 29.9){
        condition="Overweight"
        ConditionText.style.border= '4px solid blue'

    }
    else if(BMI >= 30){
        condition="Obese"
        ConditionText.style.border= '4px solid red'

    }
    
    ConditionText.textContent=`Your BMI is ${BMI.toFixed(1)} which means You are ${condition}`

    const previousResult = document.getElementById("result");
    if (previousResult) {
        container.removeChild(previousResult);
    }

    container.append(ConditionText)


})




