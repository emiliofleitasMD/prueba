let name1 = "Giovanni"; // string / text
let age = 23 // number
let conjuntoDeAmigos = ["Joaquin", "Gio", "Abrahan"] // array de strings
let conjuntoDeEdad = [23,1,3]

let objecto = {
    name: "Adan",
    age: 23,
    conjunto: ["hello", "hola"]
}

function aumentarEdad(value) {
    age += value
}
aumentarEdad(20);

let canvas = document.createElement("canvas");
canvas.style.background = "#cdcdcd";
canvas.width = 1024;
canvas.height = 512;
document.body.appendChild(canvas);




console.log(objecto.conjunto)