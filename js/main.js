const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

const renderProduct = (title = 'Components', price = 0) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}


const productList = products.map((product) => {
    return renderProduct(product.title, product.price);
});

productList.forEach(element => {
    document.querySelector('.products').innerHTML += element;
});
