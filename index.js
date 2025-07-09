let cpiData = {};
fetch('cpi_data.json')
    .then(response => response.json())
    .then(data => {
        cpiData = data;
    })
    .catch(error => {
        console.error("Failed to load CPI data:", error);
    });

function runCalc() {
    const amount = document.getElementById("Amount");
    const year = document.getElementById("Year");

    let numAmount;
    let beReady = 0;
    let adjustedValue;

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
        if (yearAmount > 1773 && yearAmount < 2025) {
            console.log(yearAmount + " valid year check");
            beReady += 1;
            console.log("added one, for year")
        } else {
            year.value = "Enter a year 2024 - 1774";
        }
    } else {
        console.log(yearAmount);
        console.log("Not a number")
        year.value = "No, enter a number";
    }

    ////////
    console.log("ready check" + beReady)
    if (beReady == 2) {
        cpifrom = cpiData[yearAmount.toString()];
        cpito = cpiData["2025"];
        adjustedValue = numAmount * (cpito / cpifrom)
        adjustedValue = adjustedValue.toFixed(2)
        console.log("cpito: " + cpito)
        console.log("cpifrom: " + cpifrom)
        console.log("final: " + adjustedValue)
        //// display
        document.getElementById("displayfinal").innerHTML = "$" +
            numAmount + " in " + yearAmount + " is <span id=finalcolor>$" + adjustedValue + "</span> in 2025!"

    }



}