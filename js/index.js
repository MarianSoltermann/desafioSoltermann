//FOR
/*
for(let alumno = 1; alumno <= 7; alumno++){
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Alumno #${alumno} Nombre: ${nombre}`;
  alert(mensaje);
}
*/

//WHILE

let entrada = prompt("Ingrese su contraseña");

while(entrada != "qwerty"){
  alert("Contraseña incorrecta");

  entrada = prompt("Ingrese su contraseña");
}

alert("Bienvenido");