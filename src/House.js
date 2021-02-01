class House {
    constructor(onSale, price) {
        this.onSale = onSale;
        this.price = price;
        this.owner = null;
    }

    isBought(person) {
        if(this.onSale && (person.savings >= this.price)) {
            this.owner = person;
            this.price = null;
            this.onSale = !this.onSale;
        }
    }
};

module.exports = { House };