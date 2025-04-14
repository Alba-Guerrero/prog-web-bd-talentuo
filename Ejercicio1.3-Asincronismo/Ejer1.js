/*1 Funciones de callback

Crea una función transformCentimetersToMeters(a,callback) que reciba un parámetro a con el número de centímetros, los transforme en centímetros y luego envíe ese dato como parámetro a la función de callback.
La función de callback debe imprimir ese dato por consola.
*/

let transformCentimetersToMeters = (a, functionCallBack) => {

    let resultado = a / 100;
    functionCallBack(resultado)

}

let callback = (e) => {
    console.log(e)
}

transformCentimetersToMeters(10, callback)