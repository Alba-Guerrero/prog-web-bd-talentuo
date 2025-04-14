/*
Modifica el siguiente código para que la función functionSayHello utilice una función de callback en lugar de un return. La función debe recibir dos parámetros, 
(1) el name y (2) la función de callback

let functionSayHello = (name) => {
    return "Hello "+name;
}

// return
let resultReturn= functionSayHello("Jhon")
console.log(resultReturn);
*/

let functionSayHello = (name, functionCB) => {
    functionCB("Hello " + name)
}


callBackFunc = (a) => {
    console.log(a)
}

// return
functionSayHello("Jhon", callBackFunc)