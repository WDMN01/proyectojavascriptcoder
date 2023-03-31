const carritoel = document.getElementById("carrito");
const items = document.getElementById('items');
const vercarrito =document.getElementById("vercarrito");
let mark = '';
let int = {};
let carrito= [];
let carrocompra= [];
let carroalamacenado;
let capacidad ={};
let total;
let recupercarro;
let carritocontent;
const modalcontainer = document.getElementById("modal-container");
document.addEventListener('DOMContentLoaded', ()=>{
   fetchData()
})

const fetchData = async() =>{
   try{
      const res = await fetch('../json/stock.json')
      const data = await res.json()
      //console.log(data)
      cards(data)
      
   }catch(error){
      console.log(error)
   }
}

const cards = data =>{
   data.forEach(producto => {
      mark += generateproducto(producto.id, producto.nombre, producto.imagen, producto.cantidad, producto.precio);   
      //console.log(producto)
      //int = JSON.parse('{}')
      
   });

   document.getElementById("container").innerHTML = mark;

}

function generateproducto(id, nombre, imagen, cantidad, precio){
   return `
      <div class="card">
         <h3>${id}</h3>
         <h3>${nombre}</h3>
         <img src="${imagen}">
         <h3>Disponible ${cantidad} unidades</h3>
         <p>Precio: ${precio}</p>
         <button class= "btn-dark" id="${id}" onclick="agregaralcarrito('${imagen}','${nombre}','${precio}')" >Agregar al carrito</button>
      </div>
   `;
}
recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));
   
function agregaralcarrito(imagen, nombre, precio){

   carrocompra.unshift({imagen,nombre, precio});
   
   //console.log(nombre)
   //console.log(precio)
   let carritomarkup =`<h2 class="titulocarrito">Carrito</h2><ul>`;
   function generateprodcarrito(imagen, nombre, precio){
      return `<li class="productos">${imagen, nombre, precio}</li>`;
      
   }
   for (let prodencarrito of carrocompra){
      carritomarkup += generateprodcarrito(prodencarrito.imagen,prodencarrito.nombre, prodencarrito.precio0);
      
   }
   carritomarkup += `</ul>`;
   carritoel.innerHTML = carritomarkup;
   console.log(carrocompra)
   carroalamacenado = localStorage.setItem('carroalmacenado',JSON.stringify(carrocompra))
   recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));
   console.log(nombre,precio)
   
   
}
vercarrito.addEventListener("click", () => {
   recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));
   //console.log(nombre)
   const modalHeader = document.createElement("div");
   modalHeader.innerHTML= `
      <h1 class=modal-header-title>Carrito</h1>
   `
   modalcontainer.append(modalHeader);
   const modalbutton =document.createElement("h1");
   modalbutton.innerText = "X";
   modalbutton.className = "modal-header-button";
   
   modalHeader.append(modalbutton);
   for(let el of recupercarro) {
      carritocontent= document.createElement("div");
      carritocontent.className = "modal-content";
      carritocontent.innerHTML = `
      <img src="${el.imagen}">
      <h3>${el.nombre}</h3>
      <p>${el.precio} </p>
      `;
      console.log(el.imagen,el.nombre,el.precio)
      modalcontainer.append(carritocontent);    
    }
    
});
