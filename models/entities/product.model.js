class Product {
    constructor(name, price, thumbnail) {
        this.name = name        
        this.price = price
        this.thumbnail = thumbnail
    }

    static validate(product, req) {
        return true
    }
}

export default Product