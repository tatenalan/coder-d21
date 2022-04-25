import ProductDBMongoDAO from './productDBMongo.js'

class ProductFactoryDAO {
    static get(type) {
        switch(type.toLowerCase()) {
            case 'mongo': return new ProductDBMongoDAO('local', 'products')
            default: 'mongo';
        }
    }
}

export default ProductFactoryDAO