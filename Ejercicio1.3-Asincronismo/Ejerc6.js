/*El siguiente programa contiene uno o varios errores, trata de solucionarlos. Depurar puede resultar muy útil para encontrar que partes del programa no funcionan correctamente.

let calculateIVA = async (value) => {
    return value*0.21;
}

let init = async () => {
    let result = calculateIVA(20)
    console.log(result)
}

init();
*/

let calculateIVA = async (value) => {
    return value*0.21;
}

let init = async () => {
    let result = await calculateIVA(20)
    console.log(result)
}

init();