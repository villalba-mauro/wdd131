const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Function to get the current year and populate it in the footer
function getCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

// Function to get the date of last modification and populate it in the footer
// Function to get the date of last modification and populate it in the footer
function getLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes().toString().padStart(2, '0')}`;
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}

// Call the function to get and display the current year when the page loads
getCurrentYear();

// Call the function to get and display the date of last modification when the page loads
getLastModifiedDate();



// -----------------------------CAMBIA DE COLOR EL H2-------------------------

//variables
const caja = document.getElementById("#caja");
const h2 = document.getElementById("p2");

// Se guarda el color origina primero y dps se define el color a cambiar
const colorOriginal = p2.style.color;
const nuevoColor = "#850808";


//Funcion para cambiar el color, primero se verifica el color actual y dps lo cambia
function changeColor(){
    
    if (p2.style.color ===colorOriginal){
        p2.style.color = nuevoColor;
    } else{
        p2.style.color = colorOriginal
    }
}

p2.addEventListener('click',changeColor);

//---------------------------------    ------------------------------

// --------------------- CAMBIAR IMAGEN------------------

//Seleccionamos la imagen primero
const Image = document.getElementById('logo-image');

const currentImage = Image.src;
const newImage = 'images/logo2.webp';

// Esta función cambia la URL de la imagen src a la nueva imagen y luego la vuelve a la original.

function changeImagen(){
    if (Image.src === currentImage){  // Usar comparación estricta (===)
        Image.src = newImage;
    } else{
        Image.src = currentImage;
    }
}

//Se llama a la funcion "changeImagen"
Image.addEventListener('click', changeImagen);



var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Función para mostrar u ocultar el botón dependiendo del ancho de la pantalla
function toggleScrollButton() {
    if (window.innerWidth < 640 && window.scrollY > 200) {
        scrollToTopBtn.style.display = "block"; // Muestra el botón si la pantalla es pequeña y el desplazamiento es mayor a 200px
    } else {
        scrollToTopBtn.style.display = "none"; // Oculta el botón en otros casos
    }
}

// Muestra u oculta el botón al cargar la página
window.addEventListener("load", toggleScrollButton);

// Muestra u oculta el botón al cambiar el tamaño de la pantalla
window.addEventListener("resize", toggleScrollButton);

// Muestra u oculta el botón al hacer scroll
window.addEventListener("scroll", toggleScrollButton);

// Agrega un evento de desplazamiento hacia arriba cuando se hace clic en el botón
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
});
