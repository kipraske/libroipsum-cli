var LibroIpsum = require('libroipsum');
var argv = require('yargs').argv;

var returnText = new LibroIpsum("Source Text is here").generate(26, 2);
console.log(returnText);