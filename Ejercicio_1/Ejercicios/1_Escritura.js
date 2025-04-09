/*
Crea un programa que escriba tu nombre en el fichero de texto misDatos.txt
*/

const moduleFs = require("fs")
const phrase = "Alba GG"
moduleFs.writeFileSync("misDatos.txt",phrase)


