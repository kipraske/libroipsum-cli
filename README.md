# libroipsum-cli
A command line wrapper for Andrew Duthie's [LibroIpsum](https://github.com/aduth/LibroIpsum) sample placeholder text tool. Since LibroIpsum was written in coffeescript, and since the usage just comes down to calling `new LibroIpsum(sourceText).generate(numberOfWords[, keyLength]);` it seems like having a tool to generate awesome LibroIpsum text directly from files on your computer with node.js would be a great next step.

## Usage

`node index.js [options]` where options include

* -f, --file        Plaintext file from which phrases are to be generated. (required)
* -w, --words       Number of words to be generated (default: 25)
* -k, --key-length  Length of key (integer), where larger number will create 
                    phrase more similar to original text (default: 6)
