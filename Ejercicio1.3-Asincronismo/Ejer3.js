/*Crea una función transformCentimetersToMeters(a) que se asíncrona (recuerda incluir la palabra clave async). 
Ejecuta esa función utilizando un .then imprime el resultado por consola.*/

let transformCentimetersToMeters = async (a) => {

    return a / 100;
}



transformCentimetersToMeters(10).then((e) => {
     console.log(e) }
    )