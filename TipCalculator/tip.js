

function calculateTip()
{
   let result = document.getElementById("result");

    //Display the tip amount
    tip.addEventListener("click",()=>{
        // Get the bill amount and tip percentage from the input fields
    let billAmount = document.getElementById("billAmount").value;
    let billTipPercent = document.getElementById("Tippercent").value;

    //calculate the tip amount
    let tipAmount = (billAmount*billTipPercent)/100;
    //Display the tip amount
    result.innerText = "Tip Amount: $" + tipAmount.toFixed(2);
    });
}
// Call the function to set up the event listener
// even if we are runnung in dom calling function is necessary to make it work 
calculateTip();
