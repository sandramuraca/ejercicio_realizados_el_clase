/*hacer un programa con 3 botones y que al prsionar diga 
que boton de esta tocando*/

/*1. armar html
2. crear 3 botones diferentes
3. agregar un evento a cada uno
4. el evento tiene que disparar un alert*/

const primerBoton = document.querySelector("#boton1");
const segundoBoton = document.querySelector("#boton2");
const tercerBoton = document.querySelector("#boton3");

primerBoton.addEventListener("click", () => {
    alert ("usted a tocado el boton 1");
});
segundoBoton.addEventListener("click", () => {
    alert ("usted a tocado el boton 2");
});
tercerBoton.addEventListener("click", () => {
    alert ("usted a tocado el boton 3");
});

/*hacer un programa que nos diga si queremos continuar
Presionar S tiene que salir un cartel que diga
"saliste del programa" y si apretas N un cartel
que siga "te quedaste en el programa" en caso de 
presionar otra letra tiene que salir un carte que diga "presiona N o S"
*/ 

// a un mismo elemento seleccionado por id se le pueden agregar varios eventos

const inputForm = document.querySelector("#inputForm");

inputForm.addEventListener ("keypress", (Event) => {
    console.log (Event);
    if (Event.key == "s"){
        alert ("saliste del programa");
    } else if (Event.key == "n"){
        alert("te quedaste en el programa");
    } else {
        alert ("tenes que presionar s o n");
    }
});

// esto es un funcion anonima
/*
() => {
    aca va el codigo
};
*/
//con esto guardo una funcion anomima en una variable

const otroInput = document.querySelector("#otroInput");

const saludar = () =>{
    alert("Hola como estas?");
};

console.log(saludar);
otroInput.addEventListener("keyup", saludar);


/*ejercicio 4 cuando presiono el boton subir sale un cartel con un saludo*/ 

const button = document.querySelector("#button");
const form = document.querySelector("#form");

button.addEventListener("click", (event) =>{
    event.stopPropagation(); // evita que se ejecute el evento del form ya que el boton esta dentro por default lo ejecutaria
    event.preventDefault(); // esto evita que la accion que por defecto realiza el elemento se lleve a cabo
    alert("buen dia!");
});

form.addEventListener("click", ()=>{
    alert("click en el form");
});
 /*Hacer un programa que se escriba en un texto en el input y cuando
 se haga click en el boton se nuestre en el titulo */

 //titulo para escribir lo del input
 const titulo = document.querySelector("#titulo");
 //ingreso de datos
 const text = document.querySelector("#text");
 //va a realizar la accion
 const botonSubir = document.querySelector("#botonSubir");
//en esta constante declaro la funcion paraq la OPCION 2
const cambiarTitulo = (event)=>{
    event.preventDefault();
    console.log(text.value);
    titulo.textContent = text.value;
};


 //opcion 1
 botonSubir.addEventListener("click", (event)=>{
     event.preventDefault();// esto se usa para que no mande la info del formulario, necesito utilizar ese dato y que no se recargue la pagina
     console.log(text.value);
     titulo.textContent = text.value;
 });

 //opcion 2
 botonSubir.addEventListener("click", cambiarTitulo);