/*
    Project: Lab 06: The Future Value Application
    Date: 10/04/23
    Author: Van Do
    Type: for loop, while loop
*/

/*  Validate Numeric Entries in Lab 6 (Extra Credit 5 points)

    There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. The code resembled the image outlined below.

    Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.
*/

// CREATE VARIABLES
let futureValue;
let investment;
let rate;
let years;
let i;

// COLLECT VALUES FROM USER
while (true) {
    investment = parseFloat(prompt('How much do you want to invest? (xxxx.xx)'));
        if (investment <= 0)  {
            alert('Investment amount (xxxx.xx) must be greater than 0.');
        } else if (isNaN(investment)){
            alert('Please enter a numeric amount for investment (xxxx.xx) ');
        } else {
           break;
        }
    }

// RATE MUST BE BETWEEN 0% AND 6%
while (true) {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
        if (rate < 0 || rate >= 6) {
            alert('Please enter a Interest rate (xx.x) between 0% and 6%');
        } else if (isNaN(rate)) {
            alert('Please enter a numeric number between 0% and 6%');
        } else {
            break;
        }
    }

// YEARS SHOULD BE A NUMBER BETWEEN 1 and 30.
while (true) {
    years = parseFloat(prompt('Enter the number of years', 10));
        if (years <= 0 || years >= 31) {
            alert('Investment Years must be between 1 and 30.');
        } else if (isNaN(years)) {
            alert('Please enter a numeric value between 1 and 30.');
        } else {
            break;
        }
    }

// CALCULATE FUTURE VALUE
futureValue = investment;
for (i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY THE RESULTS
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
