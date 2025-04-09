/* 
Crea un programa JavaScript que lea el fichero “ciudades.txt” y muestre su contenido por consola.

*/
const moduleFs = require("fs");

moduleFs.readFile("./ciudades.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
        return;
    }

    const lineas = data.split('\n');

    lineas.forEach(linea => {
        if (linea.trim() !== "") {
            const [pais, cpostal, ciudad] = linea.split('\t');
            console.log(`Pais: ${pais}, CP: ${cpostal}, Ciudad: ${ciudad}`);
        }
    });
});