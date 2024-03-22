#! /usr/bin/env node
import inquirer from "inquirer";

const randomeNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomeNumber);
console.log("Welcome to number Guesing Game");

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
  },
]);

if (answers.userGuessedNumber === randomeNumber) {
  console.log("Congutratulations! you guessed right number.");
} else {
  console.log("You guessed wrong number.");
}
