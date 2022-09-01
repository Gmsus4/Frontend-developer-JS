//Click
const btnMenuEmail = document.querySelector('.navbar-email');
const btnHamburguesa = document.querySelector('.menu');
const btnShopping = document.querySelector('.navbar-shopping-cart');
const btnCloseDetail = document.querySelector('.product-detail-close');

//Display
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');

//Event-Click
btnMenuEmail.addEventListener('click', tooggleDesktopMenu);
btnHamburguesa.addEventListener('click', tooggleMobileMenu);
btnShopping.addEventListener('click', tooggleCarritoBtn);
btnCloseDetail.addEventListener('click', closeDetail)

//Functions
function tooggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function tooggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function tooggleCarritoBtn(){
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function closeDetail(){
    productDetail.classList.add('inactive');
}

const productList = [];
// Manera que explica el profe en Platzi
/* productList.push({
    name: 'Bike',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Monitor',
    price: 200,
    image: 'https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
});
productList.push({
    name: 'Celular',
    price: 300,
    image: 'https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
});
productList.push({
    name: 'Computadora',
    price: 600,
    image: 'https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
});
productList.push({
    name: 'Bocinas',
    price: 150,
    image: 'https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
});
productList.push({
    name: 'Camiseta',
    price: 10,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
});
 */

//Mi manera utilizando clases
class Product {
    constructor(name,image,price,description){
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }
}

const bicicleta = new Product('Bicicleta','https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 400, 'Bicicleta para montañas, llantas duraderas, súper ligera');
const celular = new Product('Celular','https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', 300);
const computadora = new Product('Computadora','https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 600);
const bocinas = new Product('Bocina','https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 150);
const camiseta = new Product('Camiseta','https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 10);
const libro = new Product('Libro','https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 15);
const balonBasket = new Product('Balón de Basket','https://images.unsplash.com/photo-1567113379515-6e85e7168eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 25)

productList.push(bicicleta,celular,computadora,bocinas,camiseta,libro,balonBasket);

//Una manera de iterar todos los productos del array.

/* for(product of productList){
    console.log(product.name);
} */


//Otra manera de iterar todos los productos del array.

/* productList.forEach(function(e){
    console.log(e.name);
}); */

// **********************************************
function renderProducts(arr){
    arr.forEach(function(e){
        //Contenedor a aplicar
        const cardsContainer = document.querySelector('.cards-container');
    
        //Crear
        const productCard = document.createElement('div');
        const productInfo = document.createElement('div');
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const imgIcon = document.createElement('img');
    
        //-----Configurar
        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');
        div.append(p1, p2)
        p1.innerText = `$ ${e.price}`;
        p2.innerText = e.name;
        img.src = e.image;
        imgIcon.src = './icons/bt_add_to_cart.svg';
        cardsContainer.appendChild(productCard);
        productCard.append(img, productInfo);
        productInfo.append(div, figure);
        figure.append(imgIcon);
        console.log(e.name);

        //Funciones
        img.addEventListener('click', function(){
            console.log(e.name);
            productDetail.classList.remove('inactive');
            desktopMenu.classList.add('inactive');
            shoppingCartContainer.classList.add('inactive');
            mobileMenu.classList.add('inactive');
            let productImg = document.querySelector('.productImg');
            let productPrice = document.querySelector('.productPrice');
            let productName = document.querySelector('.productName');
            let productDescription = document.querySelector('.productDescription');

            productImg.src = e.image;
            productPrice.innerText = `$ ${e.price}`;
            productName.innerText = e.name;
            productDescription.innerText = e.description;
        });
    });
}

renderProducts(productList);