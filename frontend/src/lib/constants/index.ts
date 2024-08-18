export const BASE_URL = "http://localhost:8000/api/v1"

export const COLLECTION_LIST = ['Red', 'White', 'Rose', 'Sparkling', 'Not wine'];
export const FOOTER_LINKS = ['home', 'login', "collections", "signup"]
export const COLLECTIONS_DATA = [
  {
    id: "1",
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1723826614/cat1_81f3df8f-59d7-49e7-8f3d-531f04ca5549_dzziq6.png',
    title: 'red'
  },
  {
    id: "2",
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1723827393/cat2_ab8f4511-969d-4085-bc60-2a55814de4d7_g8f7dh.png',
    title: 'white'
  }
];

export const USERS = [
  {
    id: "1",
    first_name: "maosj",
    last_name: "shsh",
    email: "djjd"
  }
]

export const COLLECTIONS = [
  {
    id: "1",
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1723826614/cat1_81f3df8f-59d7-49e7-8f3d-531f04ca5549_dzziq6.png',
    name: 'red'
  },
  {
    id: "2",
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1723827393/cat2_ab8f4511-969d-4085-bc60-2a55814de4d7_g8f7dh.png',
    name: 'white'
  }
];

export const PRODUCTS = [
  {
    id: "1",
    name: "product 1",
    quantity: 10,
    marketed_price: 123,
    selling_price: 556,
    collection_id: "1"
  },
  {
    id: "2",
    name: "product 1",
    quantity: 10,
    marketed_price: 123,
    selling_price: 556,
    collection_id: "1"
  }
]

export const CART = [
  {
    id: "1",
    user_id: "1"
  }
]

export const addresses = [
  {
    id: "1",
    user_id: "1"
  }
]

export const orders = [
  {
    id: "1",
    user_id: "2",
    status: "success, faillute, pending, deliverd",
    billing_address_id: "1",
    shipping_address_id: "1"
  }
]