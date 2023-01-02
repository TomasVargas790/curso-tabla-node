console.clear();
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs'); 

crearArchivo(argv.b,argv.l,argv.u)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err + "Algo se rompio xd"))








//let base = 2;



/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */

