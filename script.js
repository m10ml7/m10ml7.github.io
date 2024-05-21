
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener('DOMContentLoaded', function () {
    // Simulación de productos
    const products = [
        { name: 'Cortina 1', category: 'cortinas', price: 20, image: 'sample1.webp' },
        { name: 'Cortina 2', category: 'cortinas', price: 25, image: 'sample2.webp' },
        { name: 'Sábana 1', category: 'sabanas', price: 15, image: 'sample3.webp' },
        { name: 'Sábana 2', category: 'sabanas', price: 18, image: 'sample1.webp' },
        { name: 'Producto del Hogar 1', category: 'hogar', price: 30, image: 'sample2.webp' },
        { name: 'Producto del Hogar 2', category: 'hogar', price: 35, image: 'sample3.webp' },
        { name: 'Oferta 1', category: 'ofertas', price: 10, image: 'sample1.webp' },
        { name: 'Oferta 2', category: 'ofertas', price: 12, image: 'sample2.webp' },
    ];

    const productsContainer = document.getElementById('products');

    // Función para renderizar los productos en la página
    function renderProducts(filter) {
        productsContainer.innerHTML = '';
        products.filter(product => filter === 'todos' || product.category === filter).forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <img src="images/${product.image}" alt="${product.name}" width="100px" height="100px">
                <p>${product.price}€</p>
            `;
            productsContainer.appendChild(productElement);
        });
    }



// Renderizar productos al cargar la página
    // Extraer el filtro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter') || 'todos'; // Si no se especifica ningún filtro, usar 'todos' como valor predeterminado
    renderProducts(filter);

    // Marcar el filtro predeterminado correctamente
    document.getElementById(filter).checked = true;

    // Evento de cambio en los filtros
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const filter = this.id;
            renderProducts(filter);
        });
    });
});
