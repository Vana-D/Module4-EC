/*
    Project: Lab 05: The Calculate MPG Application v2
    Date: 10/04/23
    Author: Van Do
    Type: do/ while loop
*/

/*  Validate Repeat Entry in Lab 5 (Extra Credit 5 points)

    There’s a line of code in lab 5 that asks the user if they want to repeat their entry. The code resembled the image outlined below.

    Your job in this part of the assignment is to validate that entry. If it’s anything other than “y” or “n”, the prompt should simply reappear until the user enters a valid entry.
*/


// CREATE VARIABLES
let miles;
let gallons;
let mpg;
let again;

// DO WHILE LOOP
do {
    miles = parseFloat(prompt('Enter the miles driven.'));
    gallons = parseFloat([prompt('Enter the number of gallons fuel tank holds')]);
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles to the gallon.`)
    } else {
        alert('One or both entries is invalid.')
    }
    
    again = prompt('Run applications again? (y/n)', 'y');
    while (true) {
        if (again == 'n' || again == 'y'){
            break;
        } else {
           again = prompt('Please enter "n" for no and "y" for yes to run the application again.');
        }
    }
} while (again === 'y');

console.log('The program has been terminated.');
