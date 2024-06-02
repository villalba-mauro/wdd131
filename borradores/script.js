const botonAgregar1 = document.getElementById("agregarCarrito1");
const botonAgregar2 = document.getElementById("agregarCarrito2");
const botonVerCarrito = document.getElementById("verCarrito");

// Función para agregar un producto al carrito y almacenar su información
function agregarProductoAlCarrito(idProducto) {
  console.log("Agregando producto al carrito: " + idProducto);

  // Obtener la información del producto (imagen, nombre, precio, etc.)
  const producto = {
    id: idProducto,
    // ... Obtener la información del producto (imagen, nombre, precio, etc.)
  };

  // Almacenar la información del producto temporalmente
  localStorage.setItem("productoCarrito", JSON.stringify(producto));

  // Mostrar un mensaje de confirmación (opcional)
  alert("Producto agregado al carrito!");
}

// Evento de clic para el botón "Agregar al carrito 1"
botonAgregar1.addEventListener("click", function() {
  agregarProductoAlCarrito(1); // ID del producto 1
});

// Evento de clic para el botón "Agregar al carrito 2"
botonAgregar2.addEventListener("click", function() {
  agregarProductoAlCarrito(2); // ID del producto 2
});

// Evento de clic para el botón "Ver carrito"
botonVerCarrito.addEventListener("click", function() {
  const productoCarrito = JSON.parse(localStorage.getItem("productoCarrito"));

  if (productoCarrito) {
    window.location.href = "carrito.html";
  } else {
    alert("El carrito está vacío.");
  }
});
