/*
Crea una función asíncrona nameStartsWithA(name) que retorna true si el nombre empieza por “A” y false sí no.
 Ejecuta esa función utilizando un await e imprime el resultado por consola.*/

let nameStartsWithA = async (name) => {
    return name.toLowerCase().startsWith("a")
}

let resultado = async () => {
    let result = await nameStartsWithA("Alba")
    console.log(result)
}

resultado();