var fs = require('fs');
var LibroIpsum = require('libroipsum');
var argv = require('yargs')
		.usage('Usage: $0 [options]')
		.options('f', {
			demand : true,
			alias : 'file',
			nargs : 1,
			describe : 'Plaintext file from which phrases are to be generated.'
		})
		.options('w', {
			demand : false,
			alias : 'words',
			nargs : 1,
			describe : 'Number of words to be generated',
			default : 25
		})
		.options('k', {
			demand: false,
			alias: 'key-length',
			nargs: 1,
			describe: 'Length of key (integer), where larger number will create phrase more similar to original text',
			default : 6
		})
		.argv;

var sourceText = fs.readFileSync(argv.f, {encoding : 'utf8'});
var returnText = new LibroIpsum(sourceText).generate(argv.w, argv.k);
console.log(returnText);