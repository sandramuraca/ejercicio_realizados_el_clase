/*Crear una página que:Tenga un input para la url de la imagen, un INPUT para el título, un TEXTAREA para la descripción, un INPUT para la url externo y un CHECKBOX que diga LINK EXTERNO. 
Tenga una card simple y estilizada con: 
    -imagen
    - título
    - descripción
    - y un link que diga: Ver más.
A medida que se modifiquen los campos, se modifique respectivamente los distintos elementos de la card.
Si el checkbox no está seleccionado, el link Ver más no se muestre y el input de la url externa se deshabilite.
Si el checkbox está seleccionado, el link Ver más se muestre y el input de la url externa se habilite.

1. crear inputs neesarios en el html
2. crear esqueleto de la card en html
3. crear constantes para cada elemente que uso en mi html
4. crear eventos por cada uno de los inputs que este ligado a la card que voy a usar
5. si esta chequed el link de ver mas se tiene que visualizar y el inputde ver mas se habilita, si no, no*/

//inputs
const inputImg = document.querySelector("#inputImg");
const inputTitulo = document.querySelector("#inputTitulo");
const inputDescripcion = document.querySelector("#inputDescripcion");
const inputUrl = document.querySelector("#inputUrl");
const inputCheck = document.querySelector("#inputCheck");

//card

const titulo = document.querySelector("#titulo");
const img = document.querySelector("#img");
const descripcion = document.querySelector("#descripcion");
const verMas = document.querySelector("#url");

//eventos

inputTitulo.addEventListener("input",() => {
    titulo.textContent = inputTitulo.value;
});

inputDescripcion.addEventListener("input",() => {
    descripcion.textContent = inputDescripcion.value;
});

inputImg.addEventListener("input",() => {
    img.src = inputImg.value;
});

inputUrl.addEventListener("input",() => {
    verMas.href = inputUrl.value;
});

inputCheck.addEventListener("input", ()=> {
    if(inputCheck.checked){
        verMas.style = "display: block;";
        inputUrl.disabled = false;
    } else {
        verMas.style = "display:none;";
        inputUrl.disabled = true;
    }
})

