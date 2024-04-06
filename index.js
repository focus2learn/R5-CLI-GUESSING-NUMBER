#! /usr/bin/env node
// CLI NUMBER GUSSING GAME, LEARNED FROM ONLINE RAMADAN CLASSES
// Practiced coding by Naushad Hussain Class (Sunday 9-12)
// Modified date March 30,2024
// generate Random number, and store it randnumber variable
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.clear();
// Get User Gussing Number from keyboard
do {
    const randnumber = Math.floor(Math.random() * 6 + 1);
    console.log(chalk.bgWhite.red("`\n\n\t\t\t\t......... GUESSING NUMBER GAME ......... \n\n"));
    const answer = await inquirer.prompt([
        {
            message: chalk.blue("\n\n\n\t\t\t\tEnter Your Gussing number between ( 1 - 6 )... : "),
            type: "number",
            name: "guessnumber"
        }
    ]);
    // Conditional Coding to match / unmatch the number
    if (answer.guessnumber === randnumber) {
        console.log(chalk.green(`\n\n\t\t\t\tCongratulations! This is Right Number......... :  ${answer.guessnumber}`));
    }
    else {
        console.log(chalk.red(`\n\n\t\t\t\tSorry !.... You Entered Wrong Number.......... :  ${answer.guessnumber}`));
    }
    // Get input to continue thsi game agian
    let answer2 = await inquirer.prompt([
        {
            name: "choice1",
            type: "confirm",
            message: chalk.yellow("\n\n\t\t\t\t Do You want to Play Again........."),
            default: "false"
        }
    ]);
    // Conditional Looping
    condition = answer2.choice1;
    console.clear();
} while (condition); // conditional looping
console.log(chalk.green("\n\n\n\n\t\t\t.... Hope You enjoyed Number Guessing Game....\n\n"));
