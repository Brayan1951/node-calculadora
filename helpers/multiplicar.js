const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5, listar = false, maximo = 10) => {
  let salida = '';
let consola=''
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= maximo; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
    }
    if (listar) {
      console.log("================".green);
      console.log(` Tabla del : `.green, colors.blue(base));
      console.log("================".green);

      console.log(consola);
    }

    fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
      err
        ? reject(`No se ha creado la tabla del ${base}, por ${err}`)
        : resolve(`tabla del ${base}.txt`);
    });
  });
  // console.log("================");
  // console.log(` Tabla del : ${base}`);
  // console.log("================");

  // for (let i = 1; i <= 10; i++) {

  //     salida += `   ${base} x ${i} = ${base*i} \n`;

  // }
  // console.log(salida);
  // fs.writeFile(`tabla del ${base}.txt`,salida,(err)=>{
  // if (err) throw err;
  // console.log(`tabla del ${base} creado exitosamente :D`);
  // })

  // return `la tabla del ${base}`
};

module.exports = {
  crearArchivo,
};
