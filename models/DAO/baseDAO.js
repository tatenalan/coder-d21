class ProductBaseDAO {

    constructor() { }

    getProducts = async (_id) => { throw new Error(`Method getProducts not implemented`) } 
    insertProduct = async (product) => { throw new Error(`Method insertProducts not implemented`) }
    updateProduct = async (_id, product) => { throw new Error(`Method updateProduct not implemented`) }
    deteleProduct = async (_id) => { throw new Error(`Method deteleProduct not implemented`) }

    getNextID(products = []) {
        const total = products.length

        return total ? parseInt(products[total-1]._id) + 1 : 1
    }

    getIndex(_id, products) {
        return products.findIndex(p => p._id == _id)
    }

}

export default ProductBaseDAO