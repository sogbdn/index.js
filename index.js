// package chalk
var chalk = require("chalk");

var message = "Hello " + chalk.bold.bgMagenta.underline("World");
console.log(message);
var message = "Hello " + chalk.underline.blue.inverse("World");
console.log(message);
var message = "Hello " + chalk.italic.bgGreen("World");
console.log(message);
var message = "Hello " + chalk.black.yellow("World");
console.log(message);



