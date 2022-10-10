var frutas = ["manzana","platano","cereza","fresa"];
console.log(frutas);
// se muestra en consola todo el arrays

console.log(frutas.length);
//se muestra cantidad de elementos en arrays 4

console.log(frutas[0]);
// posicion dentro arrays manzana




var masFrutas = frutas.push("uvas");
console.log(masFrutas);

var ultimo= frutas.pop("uvas");
console.log(ultimo);

var nuevaLongitud = frutas.unshift("uvas");
console.log(nuevaLongitud);

var borrarFruta = frutas.shift("uvas");
console.log(borrarfruta);


var nuevaLongitud = frutas.unshift("uvas");
console.log(nuevaLongitud);

var borraFruta = frutas.shift("manzana");
console.log(borrarFruta);

var posicion = frutas.indexOf("cereza");
console.log(posicion);