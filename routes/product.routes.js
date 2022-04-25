import express from 'express'
const productRouter = express.Router()

import ProductController  from '../controllers/product.controller.js'

class ProductRouter {

    constructor() {
        this.productController = new ProductController()
    }
    
    start() {
        productRouter.get('/:id?', this.productController.getProducts)
        productRouter.post('/', this.productController.insertProduct)
        productRouter.put('/:id?', this.productController.updateProduct)
        productRouter.delete('/:id?', this.productController.deleteProduct)

        return productRouter
    }
        
}

export default ProductRouter