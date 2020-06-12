import grpc from 'grpc'
import { loadSync } from '@grpc/proto-loader'

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
const { shoppingcart: namespace } = definition.com.example

const {
  Action,
  AddLineItem,
  Cart,
  Key,
  RemoveLineItem,
  ShoppingCart,
} = namespace

export { Action, AddLineItem, Cart, Key, RemoveLineItem, ShoppingCart }

export default namespace
