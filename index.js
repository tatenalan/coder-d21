import express from 'express';
import config from './config/config.js'
import cors from 'cors'
import ProductRouter from './routes/product.routes.js';
import ProductController from './controllers/product.controller.js';
import graphql from 'graphql'
const { buildSchema } = graphql
import { graphqlHTTP } from 'express-graphql';

const app = express()

const schemaProduct = buildSchema(`
    type Product {
      id: ID!
      title: String,
      price: Int, 
      thumbnail: String
    }
    input ProductInput {
        title: String,
        price: Int
    }
    type Query {
        getProduct(id: ID!): Product,
        getProducts(field:String, value:String): [Product],
    }
    type Mutation {
        createProduct(data: ProductInput) : Product
        updateProduct(id: ID!, data: ProductInput) : Product,
        deleteProduct(id: ID!): Product,
    }
`
);

if(config.NODE_ENV == 'develop') app.use(cors())
// configura nuestro directorio estático
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
    schema: schemaProduct,
    rootValue: ProductController,
    graphiql: true
}))


// // Rutas
// const productRouter = new ProductRouter()
// app.get('/', (req, res) => res.send('Inicio'))
// app.use('/api/products', productRouter.start())

// Server
const server = app.listen(config.PORT, () => {
    console.log(`Server listen on ${config.PORT} (${config.NODE_ENV} - ${config.TYPE_DB})`)
})
server.on('error', e => console.error(`SERVER ERROR: `, e))