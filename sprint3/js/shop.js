// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var sumaTotal = 0;
const minItemCooking=3;
const minItemCupcake=10;
const cookingDiscount=0.8; //20%
const cupkaeDiscount=0.7;//30%
var ahorroTotal=0;
var precioFinal=sumaTotalconDescuento();
var contador=document.getElementById('count_product');
var showTotal= document.getElementById('sumaTotal');
var discount= document.getElementById('descuentoAplicable');
var ahorro= document.getElementById('ahorro');

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    for (var i=0;i< products.length;i++){
        if (id===products[i].id){ 
            console.log('\nEl producto '+products[i].name+' ha sido añadido al carrito!!');
            
            cartList.push(products[i]);
            generateCart(products[i]);
            totalSuma(products[i].price);
            // if(id==1){
            //     alert('Promocion!!\nCompra 3 y te damos un 20% de descuento'); //Alertar al usuario cuando añade al carrito!
            // }
            // else if(id==3){
            //     alert('Promocion!!\nCompra 10 y te damos un 30% de descuento');
            // }
          
        }
    }
    console.log('\nLista de articulos en el carrito: \n');
    showCartList();
    
    // showTotal.innerHTML=sumaTotal;
    
    contador.innerHTML++;
}

// Exercise 2
function cleanCart() {
    console.log('Se ha vaciado el carrito');
    cartList= [];
    cart=[];
    ahorroTotal=sumaTotal=contador.innerHTML=0;
    ahorro.innerHTML=ahorroTotal;
    showTotal.innerHTML=sumaTotal;
    discount.style.backgroundColor='#FFFFFF'

    //otros metodos para vaciar Arrays
    //cart= [];
    // cart.length=0;
    // delete cart[0];

}

// Exercise 3
function calculateTotal() { // el calculo total incluyendo el descuento se encuentra en la función sumaTotalconDescuento
    // Calculate total price of the cart using the "cartList" array

    let suma=0;
    if(cartList.length>0){
        for(var i=0;i<cartList.length;i++){
            suma+=cartList[i].price;
        }
    }
    else{
        console.log('El carro esta vacio');
    }
    console.log('El precio total es: '+suma);
}

// Exercise 4
function generateCart(producto) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let posicion=comprobarProducto(producto); //comprobamos si el producto existe en la lista CART
    
    if(posicion>=0){ // si el producto esta en la lista no hace falta crearlo
        cart[posicion].cantidad++;
        cart[posicion].subtotal=producto.price*cart[posicion].cantidad;

        showItemsCart();
        
        applyPromotionsCart(cart[posicion]);
    }
    else{
        createElementCart(producto); // si no esta en la lista debemos crearlo
    }

}

function comprobarProducto(producto){
    
    let posicion=-1;
    for (var i=0;i<cart.length;i++){
        if(producto.id==cart[i].id){
            posicion=i;
        }
    }
    return posicion;
}

function createElementCart(producto){
    // console.log('\n************************** CREATE ELEMENT ************************************\n');
    var elemento={};
    if(producto.id==3 || producto.id==1){ //Estos articulos tienen la particularidad de tener descuentos
        elemento.name=producto.name;
        elemento.id=producto.id;
        elemento.descuento=producto.offer.percent;
        elemento.cantidad=1;
        elemento.precio=producto.price;
        elemento.tipo=producto.type;
        elemento.subtotal=producto.price; 
        elemento.subtotalWithDiscount=0;
    }
    else{
        elemento.name=producto.name;
        elemento.id=producto.id;
        elemento.cantidad=1;
        elemento.precio=producto.price;
        elemento.tipo=producto.type;
        elemento.subtotal=producto.price; 
    }
    cart.push(elemento);

    console.log(' CREATE Lista de CART');
    showItemsCart();
    
}

// Exercise 5

function aplicarDescuento(){
    let subtotali=0;
    
    let vacio=true;
    for(var i=0; i<cart.length;i++){
        if(cart[i].id==1 && cart[i].cantidad>=3){
            // console.log('PUNTO 1 subtotal es: '+subtotali+' cart en i es: '+JSON.stringify(cart[i]));
            subtotali+=cart[i].subtotal-cart[i].subtotalWithDiscount;   
            // console.log('PUNTO 2 subtotal es: '+subtotali+' cart en i es: '+JSON.stringify(cart[i]));
            discount.style.backgroundColor='#ffd700';
            vacio=false;

        } 
        if(cart[i].cantidad>=10 &&cart[i].id==3){
            // console.log('PUNTO 3 subtotal es: '+subtotali+' cart en i es: '+JSON.stringify(cart[i]));
            subtotali+=cart[i].subtotal-cart[i].subtotalWithDiscount; 
            // console.log('PUNTO 4 subtotal es: '+subtotali+' cart en i es: '+JSON.stringify(cart[i]));
            discount.style.backgroundColor='#3bc6b6';   
            vacio=false;       
        }
    }
    subtotali=parseFloat(dosDecimales(subtotali));
    ahorro.innerHTML=subtotali;
    if(vacio&&cart.length>0 ){
        alert('Todavia no se pueden aplicar descuentos');
    }
    return subtotali;
}


function applyPromotionsCart(producto) {
   
    // Apply promotions to each item in the array "cart"
    // let descuento=document.getElementById('descuentoAplicable'); 
    let descontar=0;
    // let ahorroCooking=0,ahorroCupcake=0;
    let alertaTexto="Enhorabuena tienes un descuento!!\nHaz click en el boton de <b>AHORRO </b><u>cada vez</u> para saber cunato te ahorras";
    
    if(producto.id==1 && producto.cantidad>=minItemCooking){
        // console.log('DENTRO DE COOKING INICIO Ahorro total es: '+ahorroTotal+' ahorro es: '+ahorro.innerHTML);
        alert(alertaTexto) ;
        // descuento.style.backgroundColor='#ffd700';
        producto.subtotalWithDiscount=producto.subtotal*cookingDiscount;
        producto.subtotalWithDiscount=dosDecimales(producto.subtotalWithDiscount);  
        descontar=producto.subtotal-producto.subtotalWithDiscount;
        // totalSuma(-descontar);
        descontar=dosDecimales(descontar); 
        // ahorroCooking=parseFloat(descontar);
        // producto.subtotal=producto.subtotalWithDiscount;
        
        showItemsCart();
        // console.log('DENTRO DE COOKING SALIR Ahorro total es: '+ahorroTotal+' ahorro es: '+ahorro.innerHTML);
    }
    if(producto.id==3 && producto.cantidad>=minItemCupcake){
        // console.log('DENTRO CUPCAKE INCIO Ahorro total es: '+ahorroTotal+' ahorro es: '+ahorro.innerHTML);
        alert(alertaTexto);
        // descuento.style.backgroundColor='#3bc6b6';
        producto.subtotalWithDiscount=producto.subtotal*cupkaeDiscount;
        producto.subtotalWithDiscount=dosDecimales(producto.subtotalWithDiscount);       
        descontar=producto.subtotal-producto.subtotalWithDiscount;  
        descontar=dosDecimales(descontar); 
        // totalSuma(-descontar);
        descontar=dosDecimales(descontar); 
        // ahorroCupcake=parseFloat(descontar);
        // producto.subtotal=producto.subtotalWithDiscount;
        
        showItemsCart();
        
    }   
    
    
    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    let encontrado=false;
   
    if(cart.length==0){
        alert('No hay ningun producto en la lista');
    }
    else{
        for (var i=0;i<cart.length;i++){
            if(id==cart[i].id){
                console.log('PUNTO 0: '+JSON.stringify(cart[i]))
                encontrado=true;
                console.log('PUNTO 1: sumatotal'+sumaTotal+' y precio articulo: '+cart[i].precio);
                console.log('PUNTO 2: sumatotal'+sumaTotal+' y precio articulo negativo: '+(-cart[i].precio));
                totalSuma(-cart[i].precio);

               if(cart[i].cantidad>1){
                    cart[i].cantidad--;
                    cart[i].subtotal-=cart[i].precio;                                                     
               }
               else{
                   if(i==0){
                       cart.shift();
                   }
                   else if(i==cart.length-1){
                       cart.pop()
                   }
                   else{
                       cart.splice(i,1);
                   }

               }               
               
            }

    }
    if(!encontrado){
        console.log('El producto no esta en la lista'); 
    }
     showItemsCart();
    }
    
   
    

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



function open_modal(){
	console.log("Open Modal");
}

function showItemsCart(){
    for (var i=0;i<cart.length;i++){
        console.log((i+1)+'-'+JSON.stringify(cart[i]));
    }
}
function showCartList(){
    for (var i=0;i<cartList.length;i++){
        console.log((i+1)+'-'+cartList[i].name);
    }
}
function dosDecimales(numero){
    return Number.parseFloat(numero).toFixed(2);
}

function totalSuma(numero){
    
    sumaTotal+=numero;
    
    showTotal.innerHTML=sumaTotal;
    console.log('Sumatotal: '+sumaTotal);
    // document.querySelector('#sumaTotal').value=sumaTotal;
   
}
function sumaTotalconDescuento(){
    ahorroTotal=aplicarDescuento();
    return sumaTotal-ahorroTotal;

}

