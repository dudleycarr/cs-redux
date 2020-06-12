import grpc from 'grpc'
import {loadSync} from '@grpc/proto-loader'

const packageDefinition = loadSync(
  __dirname + '/../protos/shoppingcart.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)

const definition = grpc.loadPackageDefinition(packageDefinition)
export default definition.com.example.shoppingcart.ShoppingCart
