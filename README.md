# Products App server

## GraphQL Server for products, categories and users managment

### Made with

GraphQL, NodeJS, Apollo-Express, MongoDB, Typegoose and Typescript

### Made by: Agustin Gutierrez

### Includes

- User authorization and authentication with JWT
- Categories, Products and Users CRUD operations
- User and Products images upload to server and Cloundinary

## Scripts

```json
"scripts": {
    "start": "NODE_ENV=production node build/app.js",
    "build": "tsc -p . && ncp schema build/schema",
    "start:dev": "npm run build:dev",
    "build:dev": "nodemon 'app.ts' --exec 'ts-node' app.ts -e ts,json,graphql"
},
```

### Demo

[Products App](https://products-app-server.up.railway.app)

#### Full documentation of graphql queries can be found [here](https://studio.apollographql.com/graph/ProductosAppDocumentation)
