/* 
Crea un fichero miPassword.txt y escribe una palabra en él. Lee el fichero desde código y encripta su contenido utilizando el módulo simple-encryptor,
 guarda en contenido en un nuevo fichero miPasswordEncryptado.txt este fichero debe ser creado desde código.

*/

const encryptoFunc= require("simple-encryptor")
const moduleFs = require("fs")
const moduleEncryptor =encryptoFunc("EstoEsMisecretondsnjfbrobandoCossas54567")
const palabra ="Pruebita"

moduleFs.writeFileSync("miPassword.txt",palabra)

let password=moduleFs.readFileSync("miPassword.txt","utf-8")
let encriptada=moduleEncryptor.encrypt(password)
moduleFs.writeFileSync("miPasswordEncryptado.txt",encriptada)