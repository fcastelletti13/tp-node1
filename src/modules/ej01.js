function concatenarString() {
    const readline1 = require("Inserte un string: ");
    const rl1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const readline2 = require("Inserte otro string: ");
    const rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return(`${rl1.output} ${rl2.output}`);
}


module.exports = {
    concatenarString
}