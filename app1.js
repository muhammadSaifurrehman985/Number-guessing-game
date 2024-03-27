import inquirer from "inquirer";
let guess = 7;
let target = 5;
let gues = await inquirer.prompt([{
        name: "value1",
        type: "number",
        message: "kindly enter your guess number"
    }]);
if (gues.value1 < target) {
    console.log("your guess is to low");
}
else if (gues.value1 > target) {
    console.log("your target is too high");
}
else {
    console.log("you got it right");
}
