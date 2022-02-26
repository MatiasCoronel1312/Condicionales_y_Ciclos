/*------Condicionales----------*/

let nombreDeUsuario = prompt("ingrese su nombre");
if ((nombreDeUsuario == null) || (nombreDeUsuario == '')) {
    alert("Hola Usuario");
}
else {
    alert("Hola " + nombreDeUsuario);
}
let edad = parseInt(prompt("Ingrese su edad"));
/*----------Bucles--------*/
//numeros pares
if (edad < 18) {
    console.log("Usuario menor de edad");
    let numeroLimite = parseInt(prompt("Numeros pares del 0 al ..."));
    for (let i = 0; i <= numeroLimite; i += 2) {
        alert(i);
    }
}
//Calendario
else if (edad > 18) {
    console.log("Usuario mayor de edad");
    let ingresarMes = prompt("Ingresar el Mes");
    let ingresarDia = parseInt(prompt("Ingresar el dia"));
    for (let i = 1; i <= ingresarDia; i++) {
        alert(ingresarMes + " " + i);
    }
}
else {
    console.error("Usuario no ingreso edad");
}
