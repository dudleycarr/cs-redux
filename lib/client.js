import grpc from 'grpc'
import { promisifyAll } from './util'
import { ShoppingCart } from './shoppingcart'

async function main() {
  const port = process.env.PORT || 50052

  const client = promisifyAll(
    new ShoppingCart(`localhost:${port}`, grpc.credentials.createInsecure())
  )

  const key = { user_id: 1 }
  console.log(`Adding cheetos for user: ${key.user_id}`)
  await client.dispatch({
    key,
    addLineItem: {
      product_id: 10,
      name: 'cheetos',
      quantity: 1,
    },
  })
  console.log(`Adding doritos for user: ${key.user_id}`)
  await client.dispatch({
    key,
    addLineItem: {
      product_id: 12,
      name: 'doritos',
      quantity: 2,
    },
  })
  console.log(`Cart for user: ${key.user_id}`)
  console.dir(await client.getState({ user_id: 1 }))

  console.log(`Removing doritos for user: ${key.user_id}`)
  await client.dispatch({
    key,
    removeLineItem: {
      product_id: 12,
    },
  })
  console.log(`Cart for user: ${key.user_id}`)
  console.dir(await client.getState(key))
}

main()
