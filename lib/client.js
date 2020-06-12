import grpc from 'grpc'
import { promisifyAll } from './util'
import ShoppingCart from './service'

async function main() {
  const port = process.env.PORT || 50052

  const client = new ShoppingCart(
    `localhost:${port}`,
    grpc.credentials.createInsecure()
  )

  const { dispatch, getState } = promisifyAll(client)

  const key = { user_id: 1 }
  await dispatch({
    key,
    addLineItem: {
      product_id: 10,
      name: 'cheetos',
      quantity: 1,
    },
  })
  await dispatch({
    key,
    addLineItem: {
      product_id: 12,
      name: 'doritos',
      quantity: 2,
    },
  })
  console.dir(await getState({ user_id: 1 }))

  await dispatch({
    key,
    removeLineItem: {
      product_id: 12,
    },
  })
  console.dir(await getState({ user_id: 1 }))

  console.dir(await getState({ user_id: 2 }))
}

main()
