var LibroIpsum = require('libroipsum');
var argv = require('yargs')
		.usage('Usage: $0 <sourcetext> [options]')
		.demand(1)
		.options('w', {
			demand : true,
			alias : 'words',
			nargs : 1,
			describe : 'Number of words to be generated'
		})
		.options('k', {
			demand: false,
			alias: 'key-length',
			nargs: 1,
			describe: 'Length of key (integer), where larger number will create phrase more similar to original text (optional, defaults to 6)'
		})
		.argv;

var returnText = new LibroIpsum("Source text goes here eventually").generate(argv.w, argv.k);
console.log(returnText);