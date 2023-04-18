const carritoel = document.getElementById("carrito");
const items = document.getElementById('items');
const vercarrito =document.getElementById("vercarrito");
const suma = document.getElementById("vercarrito");

let prodencarrito;
let mark = '';
let int = {};
let carrito= [];
let carrocompra= [];
let carroalamacenado;
let capacidad ={};
let total;
let recupercarro;
let carritocontent;
let acumula = 0;
let precioint;
let el;
let ele;
let cantidadsel;
let cantidadtot=0;
let encontrar;
let inte;
let li;
let elemento;
let cantidadcarro;
let cantidadelem;
let encontrar2;
let comparacion;
let sup;
let eliminar;
let asumi;
let repeat;
let restar;

//let repeatproduct;

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
         <button class= "btn-dark" id="${id}" onclick="agregaralcarrito('${imagen}','${nombre}','${precio}','${cantidad}')" >Agregar al carrito</button>
      </div>
   `;
}
recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));
 


function agregaralcarrito( imagen, nombre, precio, cantidad){
   
      
   console.log(nombre)
   repeat = carrocompra.some((repeatproduct) => repeatproduct.nombre == nombre)
   console.log(repeat)
   if(repeat ){
      
      carrocompra.map((pro) =>{
      if(pro.nombre === nombre){

         pro.cantidad++;
         console.log(pro.cantidad)        
      }   
      
   } );
   }else{
      carrocompra.unshift({ imagen,nombre, precio, cantidad});
   }

   //carrocompra.forEach(mnb => {
   //  }
   //);
   
      //console.log(elemento)
   
    

   
   
   
   
   
   let carritomarkup;
   function generateprodcarrito(imagen, nombre, precio, cantidad){
      
   }
   comparacion= carrocompra;
   for ( prodencarrito of carrocompra){
      carritomarkup += generateprodcarrito(prodencarrito.imagen,prodencarrito.nombre, prodencarrito.precio, prodencarrito.cantidad );
      inte= prodencarrito.nombre
   
   
   }
   



   console.log(carrocompra)
   carroalamacenado = localStorage.setItem('carroalmacenado',JSON.stringify(carrocompra))
   recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));
   console.log(nombre,precio)
   
   cantidadtot = 0;
   for(elemento of recupercarro){
   encontrar = recupercarro.some(x => x.nombre == inte);
   if(encontrar == true){
      cantidadtot +=1;
   }
   else{
      cantidadtot +=0;
   }
   
   cantidadcarro =document.getElementById("cantidade");
   li = document.createElement("h2");
   li.innerHTML =cantidadtot;
   cantidadcarro.innerHTML = "";
   }
   cantidadcarro.appendChild(li);
   console.log(cantidadtot)

}
recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));




//vercarrito.addEventListener("click", () => {
const dibujarcarrito = () =>{   
   modalcontainer.innerHTML = "";
   modalcontainer.style.display = "flex";
   recupercarro=  JSON.parse(localStorage.getItem('carroalmacenado'));
   
   const modalHeader = document.createElement("div");
   modalHeader.className= "headercarrito"
   modalHeader.innerHTML= `
      <h1 class=modal-header-title>Carrito</h1>
   `
   modalcontainer.append(modalHeader);
   const modalbutton =document.createElement("h1");
   modalbutton.innerText = "X";
   modalbutton.className = "modal-header-button";

   modalbutton.addEventListener("click", () =>{
      modalcontainer.style.display = "none";

   });
   
   modalHeader.append(modalbutton);

   if(encontrar2 == true){
      console.log(encontrar2);
   }
   
   for( el of recupercarro) {
      carritocontent= document.createElement("div");
      carritocontent.className = "modal-content";
      carritocontent.innerHTML = `
      <button class="menos" onclick="restprod('${el.nombre}', '${el.cantidad}')"><img src="../imagenes/menos.png" id="bmenos"></button>
      <h3 class="cantidade">Cantidad<br>${el.cantidad}</h3>
      <button class="mas" onclick="sumarprod('${el.nombre}', '${el.cantidad}')"><img src="../imagenes/mas.png" id="bmas"></button>
      <p class="totalprodcarr">Total: ${el.cantidad * el.precio}</>
      <img class="imagencarrito" src="${el.imagen}">
      <h1 class="nomprod">${el.nombre}</h1>
      <p class="preprod">${el.precio} </p>
      <span class="delete-product" onclick="eliminarproducto('${el.nombre}')">✖️</span>
      `;

      //console.log(el.imagen,el.nombre,el.precio)
      modalcontainer.append(carritocontent); 

      //let eliminar = carritocontent.querySelector(".delete-product");

      //eliminar.addEventListener("click", ()=>{
      //   eliminarproducto(el.nombre);
         //console.log(el.nombre);
      //});


      //console.log(el)

   
      //eliminar = document.createElement("span");
      //eliminar.innerText = "X";
      //eliminar.className = "delete-product";
      //carritocontent.append(eliminar);
      
      
      //eliminar.addEventListener("click", eliminarproducto);

      
      
   };


   const total = recupercarro.reduce((acumula, el) => acumula + parseInt(el.precio, 10)* parseInt(el.cantidad, 10), 0);
   const totalcompra = document.createElement("div")
   totalcompra.className ="tota-compra"
   totalcompra.innerHTML = `Total a pagar: ${total}`;
   modalcontainer.append(totalcompra);
   console.log(total);
};

const eliminarproducto = (mm) =>{
   const foundid =  recupercarro.find( (elemento) => elemento.nombre == mm);
   console.log(foundid);
   let ilm = recupercarro;
   //console.log(ilm)

   //recupercarro.delete.foundid
   //console.log(recupercarro)
   
   //console.log(recupercarro);
   let filtro = recupercarro.filter((carritoid)=>{ 
      //console.log(recupercarro);
   //localStorage.clear();
   //carroalamacenado = localStorage.setItem('carroalmacenado',JSON.stringify(carrocompra));   
   //modalcontainer.innerHTML = "";

   return carritoid !== foundid ;
   
   });
   cantidadtot -=1;
   console.log(cantidadtot);
   cantidadcarro.innerHTML = "";
   cantidadcarro.innerHTML = cantidadtot ;
   console.log(filtro);
   //recupercarro =filtro 
   localStorage.clear();
   carroalamacenado = localStorage.setItem('carroalmacenado',JSON.stringify(filtro))
   console.log(recupercarro)
   dibujarcarrito(recupercarro);
 
   
   
};

const sumarprod = (nombre) =>{
   carrocompra.map((pro) =>{
      if(pro.nombre === nombre){

         pro.cantidad++;
         console.log(pro) 
         localStorage.clear()
         carroalamacenado = localStorage.setItem('carroalmacenado',JSON.stringify(carrocompra))     
         dibujarcarrito();   
      }   
        
      
   });
     
}
const restprod = (nombre) =>{
   carrocompra.map((pro) =>{
      if(pro.nombre === nombre && pro.cantidad >0){

         pro.cantidad--;
         console.log(pro) 
         localStorage.clear()
         carroalamacenado = localStorage.setItem('carroalmacenado',JSON.stringify(carrocompra))     
         dibujarcarrito();   
      }   
        
      
   });
     
}



vercarrito.addEventListener("click", dibujarcarrito);



