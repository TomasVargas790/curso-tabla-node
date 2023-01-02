
const fs = require('fs');
const colors = require('colors');

/* const crearArchivo = async (base = 5) => {

    try {    
        console.clear();
        console.log("========================");
        console.log(`       TABLA DEL ${base}`);
        console.log("========================");

        let salida = "";

        for (let i = 0; i < 11; i++) {
            salida += `${base}x${i}=${i * base}\n`;
        }

        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla del ${base} creada`;
    } catch (err) {
        throw err;
    }
} */

const crearArchivo = (base = 5, l, u = 10) => {

    console.clear();

    let salida, consola = "";

    for (let i = 0; i <= u; i++) {
        salida += `${base}x${i}=${i * base}\n`;
        consola += `${base}x${i}=${i * base}\n`.rainbow;
    }

    if (l != false) {
        console.log("========================".yellow);
        console.log(`  TABLA DEL ${colors.black(base)}           `.bgWhite);
        console.log("========================".yellow);
        console.log(consola);
    }


    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
            resolve(colors.bgBlue(`tabla del ${base} creada`));
        } catch (err) {
            reject(err);
        }
    });

}

module.exports = {
    crearArchivo
}