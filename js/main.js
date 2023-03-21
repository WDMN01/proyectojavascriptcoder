let carrito = 0;
let juegomesa1= 100000;
let juegomesa2= 85000;
let juegolanzador1= 55000;
let juegoexterior1= 120000;
const producto= 
    {nombre:"tio_rico", valor: 100000};
let iva=0.19;

let costenvio= 0;
let nombre = prompt("Cual es tu nombre");
let car;
let envio = prompt("¿Desea agregar un producto al carrito? S/N")
while(envio != "N"){
    if (envio == "S"){
        let productoin = prompt("¿Que producto desea agregar al carrito?");
        if(producto.nombre == productoin){
            car= parseInt(producto.valor, 10);
            carrito+=car;
            alert('producto agregado +$' +producto.valor);
            alert('Total en carrito $ '+carrito);

         }else{
            alert('No tenemos ese producto en el inventario')
        }
    }else{
    alert('Gracias por visitarnos '+nombre);
    }
    envio = prompt("¿Desea agregar otro producto al carrito? S/N");
}
let ciudad = prompt("¿A que ciudad hara el envio?");

switch(ciudad){
    case "bogota":
        costenvio +=4000;
        alert('el costo del envio es de $ ' + costenvio);
    break;
    case "medellin":
        costenvio +=6000;
        alert('el costo del envio es de $ ' + costenvio);
    break;
    case "barranquilla":
        costenvio +=7000;
        alert('el costo del envio es de $ ' + costenvio);
    default:
        costenvio += 8500;
        alert('el costo del envio es de $ ' + costenvio);
    break;
}
alert('se suma $ '+costenvio+ ' del costo de envio');
let impiva = carrito * iva;

let  total = (carrito + impiva + costenvio);
alert("total $ " +total )



