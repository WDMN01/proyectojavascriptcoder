console.log("correcto");
const carritoel = document.getElementById("carrito");
const carrito = [];
let markup = '';
let data;
let course;
fetch('../json/stock.json').then( (resp) => resp.json()).then( (data) =>{

      
   for (let course of data) {
      markup += generateproducto( course.id, course.nombre, course.imagen,course.cantidad, course.precio);
   }
   document.getElementById("container").innerHTML = markup;
   

} );
function generateproducto(id, nombre, imagen, cantidad, precio){
   return `
   <div class="card">
      <h3>${id}</h3>
      <h3>${nombre}</h3>
      <img src="${imagen}">
      <h3>Disponible ${cantidad} unidades</h3>
      <p>Precio: ${precio}</p>
      <button onclick= "agregaralcarrito('${nombre}')">Agregar al carrito</button>
   </div>
   `;
}

function agregaralcarrito(nombre){
   carrito.push(data.find(course.nombre === nombre ));
   let carritomarkup =`h2>Carrito</h2><ul>`;
   function generateprodcarrito(nombre){
      return `<li>${nombre}</li>`;
   }
   for (let prodencarrito of carrito){
      carritomarkup += generateprodcarrito(prodencarrito.nombre);
   }
   carritomarkup += `</ul>`;
   carritoel.innerHTML = carritomarkup;
}
