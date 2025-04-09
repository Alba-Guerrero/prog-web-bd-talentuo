const encryptFunction = require("simple-encryptor")
const moduleEncrypt = encryptFunction("mySecreto1289284ngkjhsrieuthjkbnadfshfiu")
let encrypted = moduleEncrypt.encrypt("Curso de programación")
console.log("encrypted %s",encrypted)

let decrypted = moduleEncrypt.decrypt(encrypted)
console.log("decrypted %s",decrypted)
