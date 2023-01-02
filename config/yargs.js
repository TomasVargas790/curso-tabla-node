const argv = require('yargs')
    .option('b', {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base a multiplicar"
    })
    .option('l', {
        alias: "listar",
        type: 'boolean',
        default: false,
        describe: "Indica si se quiere listar la tabla o solo crearla"
    })
    .option('u', {
        alias: "until",
        type: 'number',
        default: 10,
        describe: "Indica hasta que numero debe ser la tabla"
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero";
        } else {
            if (isNaN(argv.u)) {
                throw "el limite tiene que ser un numero";
            } else {
                return true;
            }
        }

    })
    .argv;

module.exports = argv