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

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const product_select = document.querySelector("#producto");
let numVisits = Number(window.localStorage.getItem("visitas")) || 0;
numVisits++;

//function to add Product Options to the select element
addProductOptions();

function addProductOptions(){
  products.forEach(product => {
      let option = document.createElement("option");
      option.textContent = product.name;
      option.value = product.id;
      
      product_select.appendChild(option);
  });
}

// Function to increment visit count
/*function incrementVisitCount() {
    // ... (same as before)
  }
  
  // Load visit count from Local Storage on page load
  incrementVisitCount();
  
  // Get a reference to the submit button
  const submitButton = document.querySelector("button.boton");
  
  // Add event listener to the submit button
  submitButton.addEventListener("click", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    // Increment visit count again on submit
    incrementVisitCount();
});*/










  