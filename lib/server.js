import grpc from 'grpc'
import { createStore } from 'redux'
import ShoppingCart, { reducers } from './service'

var userCarts = {}

function dispatch(call, callback) {
  const userId = call.request.key.user_id

  if (!userCarts[userId]) {
    userCarts[userId] = createStore(reducers.cart)
  }

  const store = userCarts[userId]

  store.dispatch({
    type: call.request.actiontype,
    ...call.request[call.request.actiontype],
  })

  callback()
}

function getState(call, callback) {
  const userId = call.request.user_id
  callback(null, userCarts[userId] ? userCarts[userId].getState() : {})
}

function main() {
  const port = process.env.PORT || 50052

  const server = new grpc.Server()
  server.addService(ShoppingCart.service, { dispatch, getState })
  server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure())
  server.start()
}

main()
