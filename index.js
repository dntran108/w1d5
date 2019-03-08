var chalk = require("chalk");

var message = "Hello " + chalk`{italic.rgb(10,100,200) World!}`;
console.log(message);

message = "Hello " + chalk`{italic.rgb(10,100,200) World!}`;
console.log(message);

message = chalk.blue.bgRed.bold("Hello ") + chalk`{italic.rgb(10,100,200) World!}`;
console.log(message);

message = chalk.rgb(123, 45, 67).underline("Hello ") + chalk.bgBlue.underline.red ("World!");
console.log(message);

message = "Hello " + chalk.keyword("yellow") ('World!');
console.log(message);

message = "Hello " + chalk.bgKeyword('orange').keyword('blue')('World!');
console.log(message);


