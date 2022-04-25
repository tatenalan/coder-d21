import ProductService from '../services/product.service.js'


class ProductController {
    constructor() {
        this.productService = new ProductService()
    }

    getProducts = async(req, res) => {
        try {
            const id = req.params?.id
            const products = await this.productService.getProducts(id)
            res.json(products)
        } catch (e) {
            console.log(`error to get products `, e)
        }
    }

    insertProduct = async(req, res) => {
        try {
            const product = req.body
            const productReturn = await this.productService.insertProduct(product)
            res.status(201).json(productReturn)
        } catch (e) {
            console.log(`error to insert product `, e)
        }       
    }

    updateProduct = async(req, res) => {
        try {
            const id = req.params.id
            const product = req.body

            const result = await this.productService.updateProduct(id, product)
            res.status(201).json(result)
        } catch (e) {
            console.log(`error to update the product `, e)
        }       
    }

    deleteProduct = async (req, res) => {
        try {
            const id = req.params.id
            const product = await this.productService.deleteProduct(id)

            res.json(product)
        } catch (e) {
            console.log(`error to delete the product `, e)
        }
    }
}

export default ProductController