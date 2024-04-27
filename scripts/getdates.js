// Obtener el elemento <span> para el año actual
var currentYearElement = document.getElementById("currentyear");

// Obtener el año actual
var currentYear = new Date().getFullYear();

// Actualizar el contenido del <span> con el año actual
currentYearElement.textContent = "© " + currentYear;

// Obtener el elemento <p> para la fecha de última modificación
var lastModifiedElement = document.getElementById("lastModified");

// Obtener la fecha de última modificación del documento
var lastModifiedDate = new Date(document.lastModified);

// Formatear la fecha de última modificación
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

// Actualizar el contenido de <p> con la fecha de última modificación
lastModifiedElement.textContent = "Last modified: " + formattedDate;
