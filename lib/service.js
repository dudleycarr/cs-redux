import grpc from 'grpc'
import { loadSync } from '@grpc/proto-loader'

import * as reducers from '../entities/shoppingcart/reducers'

const packageDefinition = loadSync(
  __dirname + '/../entities/shoppingcart/entity.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)

const definition = grpc.loadPackageDefinition(packageDefinition)
const { ShoppingCart } = definition.com.example.shoppingcart

export { reducers }
export default ShoppingCart
