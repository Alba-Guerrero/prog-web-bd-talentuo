/* 
Crea un array con 5 nombres de ciudades, recorre el array con un bucle y escribe los nombres en un fichero de texto misCiudades.txt
Para conseguir esto debes escribir en el fichero de la siguiente forma, un createWriteStream  en el que se pueden escribir múltiples veces, con el “flag” a , append (significa concatenar)
Incluye \n para realizar saltos de línea
let writeSteam = moduleFs.createWriteStream('./log.txt', {flags: 'a'});
writeSteam.write('línea 1 \n');
writeSteam.write('línea 2 \n');
writeSteam.write('línea 3 \n');

*/
const moduleFs = require("fs")
const ciudades =["Oviedo","Santander","Gijon","Vigo","Madrid"]
let writeSteam = moduleFs.createWriteStream('./misCiudades.txt', {flags: 'a'});
ciudades.forEach((ciudad)=>{
    writeSteam.write(ciudad+' \n');
})
