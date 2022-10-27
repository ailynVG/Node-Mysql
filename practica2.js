/*Primer ejemplo de una cadena de caracteres 
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana"}';*/

/*Segundo ejemplo conviertiendo una cadena de caracteres a objeto
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana"}';
var obj = JSON.parse(json);*/

/*Tercer ejemplo mostrando el objeto
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana"}';
var obj = JSON.parse(json);
console.log(obj.nombre);*/

/*Cuarto ejemplo modificando un dato de la cadena
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana"}';
var obj = JSON.parse(json);console.log(obj.nombre);obj.nombre = "Pedro";
console.log(obj.nombre);*/

/*Cuarto ejemplo agregando un arreglo a la cadena
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana",
"hobbies":["ajedrez","video juegos","comics"]}';*/

/*Quinto ejemplo accediendo a datos mediante el indice
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana",
"hobbies":["ajedrez","video juegos","comics"]}';
var obj = JSON.parse(json);
console.log(obj.hobbies[0]);
obj.hobbies[0] = "peliculas";
console.log(obj.hobbies[0]);*/

/*Sexto ejemplo agregando un json dentro de otro json*/
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana","hobbies":["ajedrez","video juegos","comics"],"mascota":{ "especie":"perro", "nombre":"dui", "edad":1 } }'; 
var obj = JSON.parse(json); 
var nombreMascota = obj.mascota.nombre;
console.log(nombreMascota);