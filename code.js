
const afish = document.getElementById("parag");
const loantype = document.querySelectorAll(".bank");
const calcul = document.querySelector(".bob");
const title = document.getElementById("option");
const LOAN = document.getElementById("LOAN");
const output1 = document.getElementById("parag");
const output2 = document.getElementById("para");
const output3 = document.getElementById("par");
const output4 = document.getElementById("pa");
const output5 = document.getElementById("pag");
let rate = 0;
let selectedtype = "";
loantype.forEach(Button =>{
    Button.addEventListener("click", e => {
    console.log(e.target.value)
    const type = e.target.value
    LOAN.style.display = 'flex';
    title.textContent = type;
    selectedtype = type;
    return type;
  
    })

}

)
    
function secondfunction(){
    const border = document.getElementById("fin")
const loan = Number(document.getElementById("loan").value);
const duration = Number(document.getElementById("duration").value);
const salary= Number(document.getElementById("salary").value);
border.style.display = 'block'
    switch(selectedtype){

        case "house": rate = 0.045
            break;

        case "appartment": rate = 0.05
            break;

            case "land": rate = 0.06
            break;

            case "business": rate = 0.07
            break;

            case "personal": rate = 0.08
            break;
            }
    t = rate/12
    p = Math.pow(t+1 , duration)
    M = loan * (t * p) / (p - 1)
    totalinterest = (M * duration) - loan
    repayment = (M * duration)
    if(M <= salary * 0.4){
        
    output1.textContent = selectedtype
    output2.textContent = loan
    output3.textContent = M.toFixed(2)
    output4.textContent = totalinterest.toFixed(2)
    output5.textContent = repayment.toFixed(2)
}
else {
    output1.textContent = "the loan is not available with this income."
    output2.textContent = ""
    output3.textContent = ""
    output4.textContent = ""
    output5.textContent = ""
}
}
