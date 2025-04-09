const moduleFs = require("fs")
const folder = "./documents"
let files = moduleFs.readdirSync(folder)
files.forEach((file)=>{
    console.log(file)
    let textInFile = moduleFs.readFileSync("./documents/"+file,"utf-8")
    console.log(textInFile)
}
)