/* 

El siguiente programa contiene uno o varios errores, trata de solucionarlos. Depurar puede resultar muy útil para encontrar que partes del programa no funcionan correctamente.
const moduleFs = require("fs")
const phrase = "Text to write"
writeFileSync("myFile.txt")

*/

const moduleFs = require("fs")
const phrase = "Text to write"
moduleFs.writeFileSync("myFile.txt",phrase)
