const chalk= require('chalk');

console.log(chalk.blueBright("*****************************************"))
console.log(chalk.bold.bgBlueBright("Welcome to 'HOW WELL DO YOU KNOW ME QUIZ'"))
console.log(chalk.blueBright("*****************************************\n"))

console.log(chalk.bold.bgBlue("Hi! My name is Ritika and I'm a programmer. I created this simple quiz having only 7 Questions. Hope you have FUN answering :)"))

console.log(chalk.blueBright("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))
console.log(chalk.bold.blueBright("SOME RULES: \n 1. Each right answer gives you +1 score. \n 2. Each wrong answer gives you -1 score. "))
console.log(chalk.blueBright("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))


var readLineSync= require("readline-sync");

var userName= readLineSync.question(chalk.bgWhiteBright.blue("What is your name?:")
);

console.log(chalk.bgBlueBright("Namastey! "+ userName));
var score=0;
console.log("\n")

var ans1= readLineSync.question(chalk.bgWhiteBright.blue("Is my age greater than 25?:(y/n)"));
if(ans1=='n'){
  console.log(chalk.cyan("You are right :) "));
  score= score+1;
}
else {
  console.log(chalk.red("You are wrong :( "));
  score=score-1;
}

console.log(chalk.yellow("Your score is: "+ score));

var ans2= readLineSync.question(chalk.bgBlueBright("Is my hometown Delhi?(y/n):"));
if(ans2=='y'){
  console.log(chalk.cyan("You are right  :) "));
  score=score+1
}
else {
  score=score-1;
  console.log(chalk.red("You are wrong :( "));
}
console.log(chalk.yellow("Your score is: "+ score));


function check(question,answer){
  var ans= readLineSync.question(question)
  if(ans===answer){
    score++;
    console.log(chalk.cyan("You are right :)"))
    console.log(chalk.yellow("Your score is:"+score))
  }
  else {
    score--;
    console.log(chalk.red("You are wrong :("))
    console.log(chalk.yellow("Your Score is:"+score))
  }
}  

check(chalk.bgWhiteBright.blue("Whats my favrouite TV show? (The Office/Friends)"), "The Office")  ;

check (chalk.bgBlueBright("Whats the color of my phone cover? "),"pink");

check(chalk.bgWhiteBright.blue("Do i like Anime? (y/n):"),"y");

check(chalk.bgBlueBright("Which Football Club do i support?:"), "Chelsea");

check(chalk.bgWhiteBright.blue("How many Danceforms can i do?:"), "7");

console.log(chalk.bgBlueBright("Wohoo! Well done, You can send me a Screenshot of the final score on ritika.awasthy@gmail.com and ill update the leader board "))

console.log(chalk.bold.whiteBright("LEADER-BOARD"))
console.log(chalk.bgBlueBright("------------------------------ \n NAME       |     SCORE        \n Yukta      |        5         \n Aman       |        4         \n ----------------------------- "))