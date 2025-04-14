/*Modifica el siguiente código para que la función calculateIVA sea asíncrona (recuerda incluir la palabra clave async) Utiliza then para ejecutar la función e imprimir el resultado por consola.

let calculateIVA = (value) => {
    return value*0.21;
}

// return
let resultReturn= calculateIVA(30)
console.log(resultReturn);
*/


let calculateIVA = async (value) => {
    return value*0.21;
}

// return
 calculateIVA(30).then ((resultReturn)=>{console.log(resultReturn);})
