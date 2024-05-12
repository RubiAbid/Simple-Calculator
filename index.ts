#!/usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { name: "firstNumber", message: "Enter first number", type: "number" },
  { name: "secondNumber", message: "Enter second number", type: "number" },
  {
    name: "operators",
    message: "Select an operator to perform operation",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulo",
      "Exponent",
    ],
    type: "list",
  },
]);

if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operators === "Modulo") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operators === "Exponent") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log("Please Select Valid Operator");
}