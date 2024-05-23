document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { 
            name: 'Product 1', 
            description: 'Description for product 1', 
            price: '$10',
            image: 'https://via.placeholder.com/150/0000FF/808080?text=Product+1'
        },
        { 
            name: 'Product 2', 
            description: 'Description for product 2', 
            price: '$20',
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+2'
        },
        { 
            name: 'Product 3', 
            description: 'Description for product 3', 
            price: '$30',
            image: 'https://via.placeholder.com/150/00FF00/000000?text=Product+3'
        }
    ];

    const catalogContainer = document.querySelector('#catalog .row');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');
        productCard.innerHTML = `
            <div class="card mb-4">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
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
