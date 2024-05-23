document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { 
            name: 'Product 1', 
            description: 'Description for product 1', 
            price: '$10',
            image: 'images/product1.png'
        },
        { 
            name: 'Product 2', 
            description: 'Description for product 2', 
            price: '$20',
            image: 'images/product2.png'
        }
    ];

    const catalogContainer = document.querySelector('#catalog .row');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-6');
        productCard.innerHTML = `
            <div class="card mb-4">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        `;
        catalogContainer.appendChild(productCard);
    });
});
