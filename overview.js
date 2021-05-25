const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

goods.forEach(item => {
    document.querySelector('.wapper').innerHTML += `<div class="product-item">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
});