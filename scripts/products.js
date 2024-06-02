



/*document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("image-container");
  
    function createArticulosCard(ListaArticulos) {
      contenedor.innerHTML = ''; // Clear existing content
      ListaArticulos.forEach(product => {
        let figure = document.createElement("figure");
        let figcaption = document.createElement("figcaption");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
  
        name.textContent = product.NameArticulo;
        location.innerHTML = `<strong>Location:</strong> ${product.precio}`;
        dedication.innerHTML = `<strong>Dedicated:</strong> ${product.KindWood}`;
        area.innerHTML = `<strong>Size:</strong> ${product.weight} `;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.NameArticulo} Temple`);
        img.setAttribute("loading", "lazy");
  
        figcaption.appendChild(NameArticulo);
        figcaption.appendChild(precio);
        figcaption.appendChild(KindWood);
        figcaption.appendChild(weight);
  
        figure.appendChild(img);
        figure.appendChild(figcaption);
  
        contenedor.appendChild(figure);
      });
    }
  
    function filterArticulo(criteria) {
      let filteredArticulos = temples;
      switch (criteria) {
        case 'Old':
          filteredArticulos = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1990 );
          
          break;
        case 'New':
            filteredArticulos = ListaArticulos.filter(product => new Date(temple.dedicated).getFullYear() > 2000);
          break;
        case 'Large':
            filteredArticulos = ListaArticulos.filter(product => product.area > 16);
          break;
        case 'Small':
            filteredArticulos = ListaArticulos.filter(product => product.weight < 15);
          break;
        case 'Home':
        default:
            filteredArticulos = ListaArticulos;
          break;
      }
      createTempleCard(filteredArticulos);
    }
  

  
    // Initialize with all temples
    createArticuloCard(ListaArticulos);
  
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

const ListaArticulos = [
 
  {
      NameArticulo: "Solid patio table",
      precio: "2450",
      KindWood: "Deck Eucalipto",
      weight:"50 kg",
    imageUrl: "images/3.webp"   
  },
  {
      NameArticulo: "Outdoor armchair",
      precio: "3650",
      KindWood: "Deck Eucalipto",
      weight:"40 kg",
    imageUrl: "images/4.webp" 
  },
  {
      NameArticulo: "Family linving set",
      precio: "4000",
      KindWood: "Oak",
      weight:"55 kg",
    imageUrl: "images/5.webp" 
  },
  {
    NameArticulo: "Shelving",
    precio: "800",
    KindWood: "Birch",
    weight:"25 kg",
    imageUrl: "images/6.webp" 
  },
  {
      NameArticulo: "Dark dining set ",
      precio: "400",
      KindWood: "Mahogany",
      weight:"20 kg",
    imageUrl: "images/7.webp" 
  },
  {
      NameArticulo: "Family armchair set",
      precio: "500",
      KindWood: "Mahogany",
      weight:"18 kg",
    imageUrl: "images/8.webp" 
  },
  {
      NameArticulo: "Television shelf",
      precio: "1500",
      KindWood: "Oak",
      weight:"35 kg",
    imageUrl: "images/9.webp" 
  },
  {
      NameArticulo: "Clasic table",
      precio: "2000",
      KindWood: "Deck Eucalipto",
      weight:"38 kg",
    imageUrl: "images/10.webp" 
  },
  {
      NameArticulo: "Set of 3 chairs",
      precio: "2500",
    KindWood: "Oak",
    weight:"38 kg",
    imageUrl: "images/11.webp" 
  }
  // Add more temple objects here...
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("image-container");

  function createArticleCard(articulos) {
    contenedor.innerHTML = ""; // Clear existing content
    articulos.forEach(articulo => {
      let figure = document.createElement("figure");
      let figcaption = document.createElement("figcaption");
      let name = document.createElement("h3");
      let precio = document.createElement("p");
      let kindWood = document.createElement("p");
      let weight = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = articulo.NameArticulo;
      precio.innerHTML = `<strong>Price:</strong> $${articulo.precio}`;
      kindWood.innerHTML = `<strong>Kind of wood:</strong> ${articulo.KindWood}`;
      weight.innerHTML = `<strong>Weight:</strong> ${articulo.weight}`;
      img.setAttribute("src", articulo.imageUrl);
      img.setAttribute("alt", `${articulo.NameArticulo} Mueble`);
      img.setAttribute("loading", "lazy");

      figcaption.appendChild(name);
      figcaption.appendChild(precio);
      figcaption.appendChild(kindWood);
      figcaption.appendChild(weight);

      figure.appendChild(img);
      figure.appendChild(figcaption);

      contenedor.appendChild(figure);
    });
  }

  function filterArticulos(criteria) {
    let filteredArticulos = ListaArticulos;
    switch (criteria) {
      case "Expensive":
        filteredArticulos = ListaArticulos.filter(
          articulo => articulo.precio > 2000
        );
        break;
      case "Cheaper":
        filteredArticulos = ListaArticulos.filter(
          articulo => articulo.precio < 2000
        );
        break;
      case "Heavy":
        filteredArticulos = ListaArticulos.filter(
          articulo => articulo.weight > "25kg"
        );
        break;
      case "Lightweight":
        filteredArticulos = ListaArticulos.filter(
          articulo => articulo.weight < "25kg"
        );
        break;
      case "Home":
        window.location.href = "siteplan.html";
        return;
      default:
        filteredArticulos = ListaArticulos;
        break;
    }
    createArticleCard(filteredArticulos);
  }

  // Initialize with all articles
  createArticleCard(ListaArticulos);

  // Attach filter function to navigation links
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const criteria = event.target.title;
      filterArticulos(criteria);
    });
  });
});
