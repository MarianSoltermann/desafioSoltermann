
let totalPedido = 0;
let precioUnitario = 0;
let contador = 0;

alert(`Vamos a sumar los precios de los productos que agregaste al carrito y te mostraremos el total`);

function ingresarPrecio() {
  precioUnitario = Number(prompt(`Ingrese el precio del producto` + (contador + 1) + `:`));

while (precioUnitario > 0) {
  totalPedido = calcularTotal(precioUnitario);
  contador++;
  precioUnitario = Number(prompt(`Ingrese el precio del producto` + (contador + 1) + `:`));
}
if (precioUnitario <= 0 || isNaN(precioUnitario)) {
  console.log(`Ha introducido un número no válido`);
}
}

function calcularTotal(precioUnitario) {
  return totalPedido + precioUnitario;
}

function mostrarTotal() {
  console.log(`Cantidad de productos: ` + contador);
  console.log(`El precio total es $ ` + totalPedido);
}


ingresarPrecio();
calcularTotal();
mostrarTotal();