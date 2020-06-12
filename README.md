# CloudState with Redux

Uses the pattern [Redux](https://redux.js.org) to manage state for an entity.

## Install

```
$ npm install
```

## Use

Start the server
```
$ npm run server
```

Start the client
```
$ npm run client
```

# Expected Output

Running the client against the shopping cart server should yield the following:
```
Adding cheetos for user: 1
Adding doritos for user: 1
Cart for user: 1
{
  items: [
    { product_id: '10', name: 'cheetos', quantity: 1 },
    { product_id: '12', name: 'doritos', quantity: 2 }
  ]
}
Removing doritos for user: 1
Cart for user: 1
{ items: [ { product_id: '10', name: 'cheetos', quantity: 1 } ] }
```
