function runCalc() {
    const amount = document.getElementById("Amount");
    const year = document.getElementById("Year");

    let numAmount;
    let beReady = 0;

    console.log(amount.value);
    //console.log(year);

 // valid input check
    numAmount = parseInt(amount.value)
    yearAmount = parseInt(year.value)

    if (Number.isInteger(numAmount)) {
        console.log(numAmount + " passses number check");
        if (numAmount > 0) {
            console.log(numAmount + " passses positive check");
            beReady += 1;
            console.log("added one, for amount")
        } else {
            amount.value = "Enter a positive number";
        }
    } else {
        console.log(numAmount);
        console.log("Not a number")
        amount.value = "No, enter a number";
    }


    if (Number.isInteger(yearAmount)) {
        console.log(yearAmount + " passses number check");
        if (yearAmount > 1799) {
            console.log(yearAmount + " valid year check");
            beReady += 1;
            console.log("added one, for year")
        } else {
            year.value = "Enter a year 2025 - 1800";
        }
    } else {
        console.log(yearAmount);
        console.log("Not a number")
        year.value = "No, enter a number";
    }

    ////////

    if (beReady == 2) {



        
    }
    
}