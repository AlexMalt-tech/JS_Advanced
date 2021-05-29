
class OrderArticle {
    constructor(title, price, amount) {
        this.title = title;
        this.price = price;
        this.amount = amount;
    }
    render() {
        return `<div class="order_article">
        <h3>Товар: ${this.title}</h3>
        <span>Цена: ${this.price}</span>
        <span>Количество: ${this.amount}</span>
        </div>`;
    }
}

class Order {
    constructor() {
        this.items = [];
    }
    fetchOrder() {
        this.items = [
            { title: 'Item_1', price: 1, amount: 1},
            { title: 'Item_2', price: 2, amount: 1},
            { title: 'Item_3', price: 3, amount: 1},
            { title: 'Item_4', price: 4, amount: 1},
        ];
    }

    render() {
        let orderOut = '';
        this.items.forEach(item => {
            const orderArt = new OrderArticle(item.title, item.price, item.amount);
            
            orderOut += orderArt.render();
        });
        document.querySelector('.order').innerHTML = orderOut;
    }

    orderSum() {
        let sum = 0;
        this.items.forEach(artical => {
            sum += artical.price * artical.amount;
        });
        return sum;
    }

    sumOut() {
        document.querySelector('.sum').innerHTML = `Стоимость заказа: ${this.orderSum()} рублей`;
    }

    orderOut() {
        this.fetchOrder();
        this.render();
        this.sumOut();
    }
}



const order = new Order();
order.orderOut();

