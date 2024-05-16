#! /usr/bin/env node

import inquirer from "inquirer";
import { first } from "rxjs";

console.log("SIMPLE CALCULATOR")
let msg = await inquirer.prompt([
  { message: "Enter First Number", name: "first", type: "number" },
  { message: "Enter Second Number", name: "second", type: "number" },
  {
    message: "Select an operation to perform action",
    name: "operator",
    type: "list",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
if(msg.operator=="Addition"){
    console.log(`Your Answer is ${msg.first + msg.second}`)
}
if(msg.operator=="Substraction"){
    console.log(`Your Answer is ${msg.first - msg.second}`)
}if(msg.operator=="Multiplication"){
    console.log(`Your Answer is ${msg.first * msg.second}`)
}if(msg.operator=="Division"){
    console.log(`Your Answer is ${msg.first / msg.second}`)
}
console.log(msg)

console.log("Thank You for using this calculator")

