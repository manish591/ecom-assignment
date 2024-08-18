import db from "./db";

export const COLLECTIONS_DATA = [
  {
    id: '1',
    image: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1723826614/cat1_81f3df8f-59d7-49e7-8f3d-531f04ca5549_dzziq6.png',
    name: 'red'
  },
  {
    id: '2',
    image: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1723827393/cat2_ab8f4511-969d-4085-bc60-2a55814de4d7_g8f7dh.png',
    name: 'white'
  }
];

export const PRODUCTS_DATA = [
  {
    id: "1",
    image: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png",
    name: "product 1",
    marked_price: 120,
    sale_price: 99,
    collection_id: "1"
  },
  {
    id: "2",
    image: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png",
    name: "product 2",
    marked_price: 526,
    sale_price: 499,
    collection_id: "1"
  },
  {
    id: "3",
    image: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png",
    name: "product 3",
    marked_price: 126,
    sale_price: 99,
    collection_id: "2"
  },
  {
    id: "4",
    image: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png",
    name: "product 2",
    marked_price: 600,
    sale_price: 499,
    collection_id: "2"
  }
]

async function seedCollections() {
  for (const data of COLLECTIONS_DATA) {
    await db.collection.upsert({
      where: {
        id: data.id,
      },
      create: data,
      update: {},
    });
  }
}

async function seedProducts() {
  for (const data of PRODUCTS_DATA) {
    await db.product.upsert({
      where: {
        id: data.id
      },
      create: data,
      update: {}
    })
  }
}

async function main() {
  await seedCollections();
  await seedProducts();
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })