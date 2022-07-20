{"version":1,"type":"collection","title":"ProductosApp","queries":[{"version":1,"type":"window","query":"query GetCategories {\n  getCategories {\n    categories {\n      id\n      name\n      user {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n      }\n      active\n    }\n    count\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDA2OTQsImV4cCI6MTY1ODg0NTQ5NH0.Sq7dYbnc10pcV5RJ3EdXpb9TJ8wmXzMABS4xzpiC9Tg","enabled":true}],"windowName":"GetCategories","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"4e6802f8-dd6a-45cc-9b20-d9b8c85bd648","created_at":1656348861909,"updated_at":1658244069216},{"version":1,"type":"window","query":"query GetUsers($limit: Int, $skip: Int) {\n  getUsers(limit: $limit, skip: $skip) {\n      users {\n        id\n        name\n        email\n        image\n        role{\n          id\n          name\n        }\n        \n      }\n      count\n    }\n}\n","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgxODU1OTksImV4cCI6MTY1ODc5MDM5OX0.AhNEj7cGuOsoF9tbkT8ftGh5IGMrxmGYa3mnR2zlh_Q","enabled":true}],"windowName":"GetUsers","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"508f48bb-05a1-47c0-896a-20de560d5c25","created_at":1656348966355,"updated_at":1658243422015},{"version":1,"type":"window","query":"query GetCategory($getCategoryId: ID!) {\n  getCategory(id: $getCategoryId) {\n    id\n    name\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    active\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"GetCategory","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"f3ce98f2-3e76-4895-bf24-59ebf109a841","created_at":1656349004412,"updated_at":1658244032744},{"version":1,"type":"window","query":"query GetUser($userId: ID!) {\n  getUser(id: $userId) {\n    id\n    name\n    email\n    image\n    role {\n      id\n      name\n    }\n    active\n    google\n  }\n}","apiUrl":"{{url}}/graphql","variables":"{\n  \"userId\": \"62a3a1ace9042f2600dd1e62\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"GetUser","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"9e0114a6-a269-42c3-9998-acb2f4875895","created_at":1656349029838,"updated_at":1657463264254},{"version":1,"type":"window","query":"query GetProduct($id: ID!) {\n  getProduct(id: $id) {\n    name\n    description\n    price\n    available\n    id\n    active\n    user {\n      id\n      name\n      role {\n        id\n        name\n      }\n    }\n    category {\n      id\n      name\n      active\n      user {\n        id\n        name\n        email\n        role {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"id\": \"6296e5d1ba91fc2cf6df5d0f\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTY2MDM3MzgsImV4cCI6MTY1NzIwODUzOH0.bFK-LCed0XRy-wHJRvZ7RpKZp24LJOJkaA8moexoy6o","enabled":true}],"windowName":"GetProduct","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"bb2f587b-7695-4fca-8aa1-4fe848745aa4","created_at":1656349081245,"updated_at":1658243583816},{"version":1,"type":"window","query":"query GetProducts($limit: Int, $skip: Int) {\n  getProducts(limit: $limit, skip: $skip) {\n    products {\n      id\n      name\n      description\n      image\n      price\n      available\n      active\n      user {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n        google\n      }\n      category {\n        id\n        name\n        user {\n          id\n          name\n          email\n          image\n          role {\n            id\n            name\n          }\n          active\n          google\n        }\n        active\n      }\n    }\n    count\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"GetProducts","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"51bb0663-1bcb-4994-b41e-756ae3e8d462","created_at":1656349184479,"updated_at":1658243604110},{"version":1,"type":"window","query":"mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      id\n      name\n      email\n      image\n      active\n      role {\n        id\n        name\n      }\n    }\n    token\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n \"email\": \"agustinguti123@gmail.com\",\n \"password\": \"groenlandia123\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTY2MDA0MDcsImV4cCI6MTY1NzIwNTIwN30.iw2Qf6cxOw7FwtA5A9N3mczNez4mBVxj10Xp1ii8bC8\"","enabled":true}],"windowName":"Login","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"af8c4362-c476-47cd-b38f-6c6e857a3187","created_at":1656349259092,"updated_at":1658243456042},{"version":1,"type":"window","query":"query Search($term: String!, $collection: Collections!) {\n  search(term: $term, collection: $collection) {\n    results {\n      ... on Product {\n        id\n        name\n        description\n        image\n        price\n        available\n        active\n        user {\n          id\n          name\n          email\n          image\n          role {\n            id\n            name\n          }\n          active\n          google\n        }\n        category {\n          id\n          name\n          user {\n            id\n            name\n            email\n            image\n            role {\n              id\n              name\n            }\n            active\n            google\n          }\n          active\n        }\n      }\n      ... on User {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n        google\n      }\n      ... on Category {\n        id\n        name\n        user {\n          active\n          email\n          google\n          id\n          image\n          name\n          role {\n            id\n            name\n          }\n        }\n        active\n      }\n    }\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"Search","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"68024936-5980-445a-81f6-663f59b3e77d","created_at":1656364805090,"updated_at":1658243919465},{"version":1,"type":"window","query":"mutation CreateCategory($category: AddCategoryInput!) {\n  createCategory(category: $category) {\n    id\n    name\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    active\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"category\": {\n    \"name\": \"categorizarda\",\n    \"user\": \"6296e5d1ba91fc2cf6df5d0f\"\n  }\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgxODU1OTksImV4cCI6MTY1ODc5MDM5OX0.AhNEj7cGuOsoF9tbkT8ftGh5IGMrxmGYa3mnR2zlh_Q","enabled":true}],"windowName":"CreateCategory","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"826e6dc1-ba39-48a0-b0b5-20c9d729dc23","created_at":1656364868028,"updated_at":1658244039659},{"version":1,"type":"window","query":"mutation UpdateCategory($category: UpdateCategoryInput!) {\n  updateCategory(category: $category) {\n    id\n    name\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    active\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"category\": {\n    \"id\": \"6297814cd9d7a777ca6b5f04\",\n    \"name\": \"Lactosos\",\n    \"user\": \"6296e5d1ba91fc2cf6df5d0f\"\n  }\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"UpdateCategory","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"f9a96017-214d-4ecc-adf9-139e608aa3de","created_at":1656364902322,"updated_at":1658243701594},{"version":1,"type":"window","query":"mutation DeleteCategory($deleteCategoryId: ID!) {\n  deleteCategory(id: $deleteCategoryId) {\n    id\n    name\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    active\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"deleteCategoryId\": \"62d5e81c49b76860e3787c1b\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgxODU1OTksImV4cCI6MTY1ODc5MDM5OX0.AhNEj7cGuOsoF9tbkT8ftGh5IGMrxmGYa3mnR2zlh_Q","enabled":true}],"windowName":"DeleteCategory","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"c9ac1c09-da73-477c-91fe-83e2991b87f4","created_at":1656364962619,"updated_at":1658244057782},{"version":1,"type":"window","query":"mutation CreateProduct($product: AddProductInput!) {\n  createProduct(product: $product) {\n    id\n    name\n    description\n    image\n    price\n    available\n    active\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"product\": {\n    \"category\": \"62c82d82cb2c00cfe35489e2\",\n    \"description\": \"\", \n    \"name\": \"Lololo\",\n    \"price\": 300,\n    \"user\": \"6296e5d1ba91fc2cf6df5d0f\"\n  }\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"CreateProduct","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"ea4c8824-4361-4fe7-a175-10c3e783d793","created_at":1656365135259,"updated_at":1658244047236},{"version":1,"type":"window","query":"mutation UpdateProduct($product: UpdateProductInput!) {\n  updateProduct(product: $product) {\n    id\n    name\n    description\n    image\n    price\n    available\n    active\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    category {\n      id\n      name\n      user {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n        google\n      }\n      active\n    }\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"product\": {\n  \t\"id\": \"62c3b8707f8405f29c12bc16\", \n  \t\"price\": 500000\n\t}\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"UpdateProduct","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"d53b670b-1525-4f50-9ccc-1c628f5fb5b5","created_at":1656365230209,"updated_at":1658243759208},{"version":1,"type":"window","query":"mutation DeleteProduct($id: ID!) {\n  deleteProduct(id: $id) {\n    id\n    name\n    description\n    image\n    price\n    available\n    active\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    category {\n      id\n      name\n      user {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n        google\n      }\n      active\n    }\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"id\": \"62c83db6d60ceeca2fb055e3\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"DeleteProduct","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"1e5a7a4c-c110-46e5-aacc-3d09a670d698","created_at":1656365277991,"updated_at":1658244062466},{"version":1,"type":"window","query":"mutation CreateUser($user: AddUserInput!) {\n  createUser(user: $user) {\n    user {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n    token\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"user\": null\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"CreateUser","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"80641943-d32f-443c-8049-a6f2b151cf99","created_at":1656365338731,"updated_at":1658244054031},{"version":1,"type":"window","query":"mutation UpdateUser($user: UpdateUserInput!) {\n  updateUser(user: $user) {\n    id\n    name\n    email\n    image\n    role {\n      id\n      name\n    }\n    active\n    google\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"user\": {\n    \"id\": \"62a3a1ace9042f2600dd1e62\",\n    \"name\": \"Agustinsin\"\n  }\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgxODU1OTksImV4cCI6MTY1ODc5MDM5OX0.AhNEj7cGuOsoF9tbkT8ftGh5IGMrxmGYa3mnR2zlh_Q","enabled":true}],"windowName":"UpdateUser","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"420562d4-213f-499a-a49b-0b3c6d5bfd19","created_at":1656365364750,"updated_at":1658243414571},{"version":1,"type":"window","query":"mutation DeleteUser($id: ID!) {\n  deleteUser(id: $id) {\n    id\n    name\n    email\n    image\n    role {\n      id\n      name\n    }\n    active\n    google\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"id\": \"62a3a1ace9042f2600dd1e62\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTcyODQzNTgsImV4cCI6MTY1Nzg4OTE1OH0.8GEaNgHoX5eulVbuoJz6HwuuGD7phypYvUCHMIzzvQ0","enabled":true}],"windowName":"DeleteUser","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"5127c511-7148-4d76-8569-cb9c9ff0eb06","created_at":1656365392403,"updated_at":1658244065697},{"version":1,"type":"window","query":"mutation GoogleSignIn($idToken: String!) {\n  googleSignIn(id_token: $idToken) {\n    id\n    name\n    email\n    image\n    role {\n      id\n      name\n    }\n    active\n    google\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{\n  \"idToken\": null\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"GoogleSignIn","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"65fed757-8aef-4f63-86d9-5ac33dd9e534","created_at":1656365427764,"updated_at":1658243642449},{"version":1,"type":"window","query":"mutation UploadImage($image: Upload!) {\n  uploadImage(image: $image) {\n   \timagePath\n  }\n}","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"UploadImage","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"c8e4768c-7a5c-429d-95fc-400a62190cf2","created_at":1656365454436,"updated_at":1658243980080},{"version":1,"type":"window","query":"mutation UpdateImage($updateImageId: ID!, $collection: Collections!, $image: Upload!) {\n  updateImage(id: $updateImageId, collection: $collection, image: $image) {\n    ... on Product {\n      id\n      name\n      description\n      image\n      price\n      available\n      active\n      user {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n        google\n      }\n      category {\n        id\n        name\n        user {\n          id\n          name\n          email\n          image\n          role {\n            id\n            name\n          }\n          active\n          google\n        }\n        active\n      }\n    }\n    ... on User {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n  }\n}","apiUrl":"{{url}}/graphql","variables":"{\n  \"updateImageId\": null,\n  \"collection\": null,\n  \"image\": null\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"UpdateImage","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"57a76a68-2c94-422b-aabc-bb8dc239e0a6","created_at":1656365510192,"updated_at":1658243932756},{"version":1,"type":"window","query":"mutation UpdateImageCloudinary($updateImageCloudinaryId: ID!, $collection: Collections!, $image: Upload!) {\n  updateImageCloudinary(id: $updateImageCloudinaryId, collection: $collection, image: $image) {\n    ... on Product {\n      id\n      name\n      description\n      image\n      price\n      available\n      active\n      user {\n        id\n        name\n        email\n        image\n        role {\n          id\n          name\n        }\n        active\n        google\n      }\n      category {\n        id\n        name\n        user {\n          id\n          name\n          email\n          image\n          role {\n            id\n            name\n          }\n          active\n          google\n        }\n        active\n      }\n    }\n    ... on User {\n      id\n      name\n      email\n      image\n      role {\n        id\n        name\n      }\n      active\n      google\n    }\n  }\n}","apiUrl":"{{url}}/graphql","variables":"{\n  \"updateImageCloudinaryId\": null,\n  \"collection\": null,\n  \"image\": null\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"UpdateImageCloudinary","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"378b9168-5901-4d84-8e21-d17d0b5f374c","created_at":1656365585278,"updated_at":1658243962629},{"version":1,"type":"window","query":"query CurrentUser {\n  currentUser {\n    id\n    name\n    email\n    role {\n      id\n      name\n    }\n  }\n}","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTY5OTMzNTIsImV4cCI6MTY1NzU5ODE1Mn0.EgL9nA68quV3TB3bKInmJjbpoVLkuyGbj1o8iRLJmOc","enabled":true}],"windowName":"CurrentUser","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"1b45f721-ac49-41c9-802d-6948dd08b082","created_at":1656992637850,"updated_at":1658244050331},{"version":1,"type":"window","query":"query GetRoles {\n  getRoles {\n    roles {\n      id\n      name\n    }\n    count\n  }\n}\n","apiUrl":"{{url}}/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"x-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjk2ZTVkMWJhOTFmYzJjZjZkZjVkMGYiLCJpYXQiOjE2NTgyNDM4MjQsImV4cCI6MTY1ODg0ODYyNH0.S05ynkRcf53ltJUyof7vcHqZ_Rl36YZwX3XNg269KV4","enabled":true}],"windowName":"GetRoles","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"168ceb01-cc1e-4149-b6ce-abffa2f62b76","created_at":1657034229198,"updated_at":1658243898489}],"preRequest":{"script":"","enabled":false},"postRequest":{"script":"","enabled":false},"id":"e2db36f0-b147-4232-b347-42f52317fe65","parentPath":"","created_at":1656336880684,"updated_at":1656336880684,"collections":[]}