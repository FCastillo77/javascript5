import { calcularletras } from "./ejercicio1.js";
import { palabrarecortada } from "./ejercicio2.js";
import { separar } from "./ejercicio3.js";
import { repetircad } from "./ejercicio4.js";
import { invertircadena } from "./ejercicio5.js";
import { encontrarstring } from "./ejercicio6.js";
import { palindromo } from "./ejercicio7.js";
import { quitarcadenas } from "./ejercicio8.js";
import { numerosaleatorios } from "./ejercicio9.js";
import { numerocapicua } from "./ejercicio10.js";
import { factorial } from "./ejercicio11.js";
import { numeroprimo } from "./ejercicio12.js";
import { parimpar } from "./ejercicio13.js";
import { celciosaf } from "./ejercicio14.js";
import{binariodecimalyvic} from "./ejercicio15.js";
import{cantidaddescuento} from "./ejercicio16.js";
import{difanios} from "./ejercicio17.js"
console.log("Ejercicio 1");
console.log(calcularletras("arbol"));
console.log("Ejercicio 2");
console.log(palabrarecortada("Hola mundo", 7));
console.log("Ejercicio 3");
console.log(separar("Hola que-tal", "-"));
console.log("Ejercicio 4");
repetircad("hola  mundo", 2);
console.clear();
console.log("Ejercicio 5");
console.log(invertircadena("arbol"));
console.log("Ejercicio 6");
console.log(encontrarstring("hola mundo adios mundo", "mundo"));
console.log("Ejercicio 7");
console.log(palindromo("uwu"));
console.log("Ejercicio 8");
console.log(quitarcadenas("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
console.log("Ejercicio 9");
console.log(numerosaleatorios(501, 600));
console.log("Ejercicio 10");
console.log(numerocapicua(2002));
console.log("Ejercicio 11");
console.log(factorial(5));
console.clear();
console.log("Ejercicio 12");
console.log(numeroprimo(7));
console.log("Ejercicio 13");
console.log(parimpar(8));
console.log("Ejercicio 14");
console.log(celciosaf(3));
console.clear();
console.log("Ejercicio 15");
console.log("convertir de binario a decimal y viceversa");
//ingresar el numero y la base para que se transforme en la base opuesta
console.log(binariodecimalyvic(10,2));
console.log("Ejercicio 16");
//ingrese dos numeros el precio y el descuento pe 1000 pesos 20% de descuento
console.log(cantidaddescuento(1000,20));
console.log("Ejercicio 17");
//Ingresar la fecha tomando en cuenta que se debe ingresar anio mes y dia y los meses inician desde 0=enero
let a=new Date(1984,4,23);
console.log(difanios(a));



