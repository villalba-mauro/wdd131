/*const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Cordoba Temple",
      location: "Cordoba Temple",
      dedicated: "2015, May, 17",
      area: 863259,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/47f77971f2ad3eb7013b86d2f14e1e491333566c/full/320%2C/0/default"
    },
    {
      templeName: "Mendoza Temple",
      location: "Mendoza Temple",
      dedicated: "2024, September, 22",
      area: 120678,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/b1333311a0ecf368866ab2fdc70b44a401991dc5/full/320%2C/0/default"
    },
    {
      templeName: "Buenos Aires Temple",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 110540,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/320%2C/0/default"
    }
    // Add more temple objects here...
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("image-container");
  
    function createTempleCard(temples) {
      contenedor.innerHTML = ''; // Clear existing content
      temples.forEach(temple => {
        let figure = document.createElement("figure");
        let figcaption = document.createElement('figcaption');
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
  
        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
  
        figcaption.appendChild(name);
        figcaption.appendChild(location);
        figcaption.appendChild(dedication);
        figcaption.appendChild(area);
        figcaption.appendChild(img);
  
        contenedor.appendChild(figure);
      });
    }
  
    function filterTemples(criteria) {
      let filteredTemples = temples;
      switch (criteria) {
        case 'Old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
        case 'New':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
        case 'Large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case 'Small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        case 'Home':
        default:
          filteredTemples = temples;
          break;
      }
      createTempleCard(filteredTemples);
    }
  
    // Initialize with all temples
    createTempleCard(temples);
  
    // Attach filter function to navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const criteria = event.target.title;
        filterTemples(criteria);
      });
    });
  });
  */

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Cordoba Temple",
      location: "Cordoba Temple",
      dedicated: "2015, May, 17",
      area: 863259,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/47f77971f2ad3eb7013b86d2f14e1e491333566c/full/320%2C/0/default"
    },
    {
      templeName: "Mendoza Temple",
      location: "Mendoza Temple",
      dedicated: "2024, September, 22",
      area: 120678,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/b1333311a0ecf368866ab2fdc70b44a401991dc5/full/320%2C/0/default"
    },
    {
      templeName: "Buenos Aires Temple",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 110540,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/320%2C/0/default"
    }
    // Add more temple objects here...
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("image-container");
  
    function createTempleCard(temples) {
      contenedor.innerHTML = ''; // Clear existing content
      temples.forEach(temple => {
        let figure = document.createElement("figure");
        let figcaption = document.createElement("figcaption");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
  
        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
  
        figcaption.appendChild(name);
        figcaption.appendChild(location);
        figcaption.appendChild(dedication);
        figcaption.appendChild(area);
  
        figure.appendChild(img);
        figure.appendChild(figcaption);
        
        contenedor.appendChild(figure);
      });
    }
  
    function filterTemples(criteria) {
      let filteredTemples = temples;
      switch (criteria) {
        case 'Old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
        case 'New':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
        case 'Large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case 'Small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        case 'Home':
        default:
          filteredTemples = temples;
          break;
      }
      createTempleCard(filteredTemples);
    }
  
    // Initialize with all temples
    createTempleCard(temples);
  
    // Attach filter function to navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const criteria = event.target.title;
        filterTemples(criteria);
      });
    });
  });
  