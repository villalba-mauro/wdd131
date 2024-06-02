

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


const product_select = document.querySelector("#producto");
let numVisits = Number(window.localStorage.getItem("visitas")) || 0;
numVisits++;

//function to add Product Options to the select element
addProductOptions();

function addProductOptions(){
  ListaArticulos.forEach(product => {
      let option = document.createElement("option");
      option.textContent = product.NameArticulo;
      /*option.value = product.id;*/
      
      product_select.appendChild(option);
  });
}