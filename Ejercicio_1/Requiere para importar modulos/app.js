const moduleFs = require("fs")
const phrase = "Text to write"
moduleFs.writeFileSync("myFile.txt",phrase)
