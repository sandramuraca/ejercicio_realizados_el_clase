//ejercicio Heladeria

let gusto1 = prompt(`Ingrese el primer gusto`);
let gusto2 = prompt(`Ingrese el segundo gusto`);
let gusto3 = prompt(`Ingrese el tercer gusto`);

//el console.log se puede reemplazar por un alert

console.log (`Aqui tiene su helado ${gusto1}, ${gusto2} y ${gusto3}`);


//Ejercicio Años perro

const edad = prompt(`cual es tu edad?`);
const edadPerro = edad * 7; // si quiero hacer una operacion con suma el dato hay que colocarlo con number(edad)
console.log(`Tu edad perro es ${edadPerro}`);


//funciones
function saludo(nombre){
    console.log(`Hola ${nombre}`);
};

saludo("Adriana");
saludo("Juan");


function presentacion(nombre, edad){
    alert(`Su nombre es ${nombre} y su edad es ${edad}`);
};

presentacion(`Sandra`, `42`);
presentacion(`Cristian`, `40`);


//ejercicios sumar dos parametros
const sumar = (parametro1, parametro2) =>{
    let suma = Number(parametro1) + Number(parametro2);
    console.log(`el sesultado de la suma es ${suma}`)      
}

sumar (5, 9);