// class Item {
//     costructor(product) {
//         this.id = product.id;
//         this.name = product.name;
//         this.price = product.price;
//         this.size = product.size;
//         this.img = product.img;
//     }

//     render() {
//         `<div class="item">
//             <h3 class="item_title">${product.name}</h3>
//             <p class="item_img"><img src="${product.img}" alt=""></p>
//             <p class="item_price">Цена: ${product.price}$</p>
//             <p class="item_size">Размер: ${product.size}</p>
//          </div>`
//     }
// }

// class ProductList {
//     constructor(container = '.catalog') {
//         this.container = container;
//         this.goods = [];
//         this.allProducts = [];

//         this.fetchGoods();
//         this.render();
//     }

//     fetchGoods() {
//         this.goods = [

//             { id: 'a001', name: 'Куртка', price: 500, size: 'L', img: './search_img/1.jpg' },
//             { id: 'a002', name: 'Куртка', price: 450, size: 'XL', img: './search_img/2.jpg' },
//             { id: 'a003', name: 'Джинсы', price: 225, size: 'S', img: './search_img/3.jpg' },
//             { id: 'a004', name: 'Джинсы', price: 195, size: 'M', img: './search_img/4.jpg' },
//             { id: 'a005', name: 'Футболка', price: 73, size: 'XXL', img: './search_img/5.jpg' },
//             { id: 'a006', name: 'Футболка', price: 64, size: 'L', img: './search_img/6.jpg' },
//             { id: 'a007', name: 'Кеды', price: 125, size: 'XL', img: './search_img/7.jpg' },
//             { id: 'a008', name: 'Кеды', price: 250, size: 'S', img: './search_img/8.jpg' },
//             { id: 'a009', name: 'Толстовка', price: 158, size: 'M', img: './search_img/9.jpg' },
//             { id: 'a010', name: 'Ушанка', price: 1500, size: 'XXL', img: './search_img/10.jpg' },
//         ];
//     }

//     render() {
//         const box = document.querySelector(this.container);

//         for (let product of this.goods) {
//             const object = new Item(product);

//             this.allProducts.push(object);
//             box.insertAdjacentHTML('beforeend', object.render());
//         }
//     }
// }

// const catalog = new ProductList();

const catalog = document.querySelector('.catalog');
let search = document.querySelector('.search');
const btnSearch = document.querySelector('.btnSearch');

const goods = [
    { id: 'a001', name: 'куртка', price: 500, size: 'L', img: './search_img/1.jpg' },
    { id: 'a002', name: 'куртка', price: 450, size: 'XL', img: './search_img/2.jpg' },
    { id: 'a003', name: 'джинсы', price: 225, size: 'S', img: './search_img/3.jpg' },
    { id: 'a004', name: 'джинсы', price: 195, size: 'M', img: './search_img/4.jpg' },
    { id: 'a005', name: 'футболка', price: 73, size: 'XXL', img: './search_img/5.jpg' },
    { id: 'a006', name: 'футболка', price: 64, size: 'L', img: './search_img/6.jpg' },
    { id: 'a007', name: 'кеды', price: 125, size: 'XL', img: './search_img/7.jpg' },
    { id: 'a008', name: 'кеды', price: 250, size: 'S', img: './search_img/8.jpg' },
    { id: 'a009', name: 'толстовка', price: 158, size: 'M', img: './search_img/9.jpg' },
    { id: 'a010', name: 'ушанка', price: 1500, size: 'XXL', img: './search_img/10.jpg' },
];

function render(elem) {
    let out = '';
    elem.forEach(item => {
        out += `<div class="item">
            <h3 class="item_title">${item.name}</h3>
            <p class="item_img"><img src="${item.img}" alt=""></p>
            <p class="item_price">Цена: ${item.price}$</p>
            <p class="item_size">Размер: ${item.size}</p>
         </div>`;
    });

    catalog.innerHTML = out;
};

render(goods);

btnSearch.onclick = searchOut;

function searchOut() {
    let isGood = [];
    let check = search.value;
    
    catalog.innerHTML = 'Товаров не найдено';

    goods.forEach(item => {
        if (check == item.name) {
                isGood.push(item);
                render(isGood);
                
        } if (check.length == 0) {
                render(goods);
        
        }
        
    });
   
};

