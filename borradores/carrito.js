const listaProductosCarrito = document.getElementById("listaProductosCarrito");
const botonComprar = document.getElementById("botonComprar");
const formularioPago = document.getElementById("formularioPago");

let total = 0; // Variable para almacenar el total acumulado

// Función para recibir y mostrar la información del producto
function mostrarProductoEnCarrito(producto, precio) {
  // Crear un elemento HTML para mostrar el producto
  const elementoLista = document.createElement("li");
  elementoLista.textContent = producto.nombre + " - $" + precio;
  listaProductosCarrito.appendChild(elementoLista);

  // Actualizar el total
  total += precio;
  document.querySelector("p.total").textContent = "Total: $" + total.toFixed(2);

  // Limpiar el almacenamiento temporal (opcional)
  localStorage.removeItem("productoCarrito");
}

// Mostrar el producto al cargar la página del carrito
const productoCarrito = JSON.parse(localStorage.getItem("productoCarrito"));
if (productoCarrito) {
  mostrarProductoEnCarrito(productoCarrito, productoCarrito.precio); // Pasar el precio del producto
}

// Evento de submit del formulario de pago
formularioPago.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  // Obtener el número de tarjeta del formulario
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;

  // Validar el número de tarjeta (opcional)
  // ...

  // Mostrar alerta de compra
  alert("¡Su compra está en camino! El número de tarjeta utilizado es: " + numeroTarjeta);

  // Redirigir a otra página (opcional)
  // window.location.href = "...";
});
