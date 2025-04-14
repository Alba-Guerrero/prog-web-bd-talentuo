/*
7 Cambio de divisas y ficheros

Crea un fichero de texto moneyEUR.txt e incluye dentro de él la cantidad 100, obtén el valor de ese documento y transfórmalo a la divisa JPY utilizando el módulo asíncrono currency-converter-lt . 
•	Revisa el ejemplo realizado en clase
•	Recuerda que el módulo currency-converter-lt no es parte nativa de node.js y debe ser instalado.
*/
const fs = require("fs")
const CC = require("currency-converter-lt")
let importe = parseFloat(fs.readFileSync("./moneyEUR.txt","utf-8"))
console.log("Importe "+ importe) 
let currencyConv = new CC({ from: "EUR", to: "JPY", amount: importe})

currencyConv.convert().then((e) => { console.log(e) })
