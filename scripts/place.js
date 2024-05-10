

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


// Definir variables estáticas para temperatura y velocidad del viento
let temperatura = 12; // temp en grados Celcius
let velocidadviento = 11; // Vel en k/h

// Función para calcular el factor de sensación térmica
function calculateWindChill(temperatura,velocidadviento){
    let windChill = 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(velocidadviento, 0.16) + 0.3965 * temperatura * Math.pow(velocidadviento, 0.16);
    return windChill
};  


// Función para mostrar el factor de sensación térmica en la página
function mostrarST(){
     // Calcular el factor de sensación térmica
    let SensacionTermica = calculateWindChill(temperatura,velocidadviento);

     
    // Mostrar el factor de sensación térmica en la página
    document.getElementById("sensacion-termica").innerText = "Wind Chill " + SensacionTermica.toFixed(2) + " °C";
}

window.onload = function() {
    mostrarST()
};