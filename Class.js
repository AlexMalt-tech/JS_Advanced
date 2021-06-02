const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Product {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item"  data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

class ProductList {
    constructor(container = '.item_box') {
        this.container = container;
        this.goods = [];

        this.fetchGoods();
        this.render();
    }

    fetchGoods() {
        let answer = new Promise((resolve, rejest) => {
            fetch(`${API}/catalogData.json`)
                .then(data => {
                    resolve(data.text());
                })
        })
        answer.then(data => {
            this.goods = JSON.parse(data);
            this.render();
        });

        // fetch(`${API}/catalogData.json`)
        // .then((response) => response.json())
        //     .then((data) => { 
        //         console.log(data);
        //         this.goods = data;
        //         this.render();
        //     })
        //     .catch((err) => console.log(err));

    }

    render() {
        const block = document.querySelector(this.container);

        this.goods.forEach(item => {
            let porductItem = new Product(item);
            block.insertAdjacentHTML('afterbegin', porductItem.render());
        })

    }
}

const catalog = new ProductList();