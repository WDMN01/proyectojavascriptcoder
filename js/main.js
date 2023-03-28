let carrito = 0;

const producto= [
    {nombre:"tio_rico", valor: 100000}, 
    {nombre:"balon", valor:"40000"}, 
    {nombre:"funko_spiderman", valor:"65000"}
];

let nomprod = ["tio_rico ", "balon ", "funko_spiderman " ];
let iva=0.19;
let encontrar;
let paso;
let prods= [];
let costenvio= 0;
let nombre = prompt("Cual es tu nombre");
let car;
let impiva;
for ( let value of nomprod) {
    value += 1;
    prods = prods + value;
}
alert('Los productos disponibles son: ' + prods);
let envio = prompt("¿Desea agregar un producto al carrito? S/N")
while(envio.toUpperCase()  != "N"){
    if (envio.toUpperCase()  == "S"){
        let productoin = prompt("¿Que producto desea agregar al carrito?");
        encontrar = producto.some(x => x.nombre == productoin);
        alert(''+encontrar);
        if(encontrar == true){
            paso= producto.find(x => x.nombre == productoin);
            car= parseInt(paso.valor, 10);
            carrito+=car;
            alert('producto agregado +$' +car);
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
function costextra(){
    impiva = carrito * iva;
    let  total = (carrito + impiva + costenvio);
    return total;
} 

alert("total $ " + costextra() );



