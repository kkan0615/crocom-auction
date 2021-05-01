import faker from 'faker'
import dayjs from 'dayjs'
import { ProductInfo } from '@/interfaces/model/product/product'
import { dummyUsers } from '@/dummy/model/user/user'
import { generateRandomIntNumber } from '@/utils/random'

export const dummyProducts: Array<ProductInfo> = []

export const generateDummyProducts = () => {
  for (let i = 0; i < 100; i++) {
    const user = dummyUsers[generateRandomIntNumber(0, dummyUsers.length - 1)]
    dummyProducts.push({
      id: i + 1,
      title: faker.commerce.productName(),
      endDatetime: dayjs(),
      startPrice: generateRandomIntNumber(1, 200),
      increasePrice: generateRandomIntNumber(1, 200),
      content: faker.lorem.lines(generateRandomIntNumber(5, 10)),
      description: faker.commerce.productDescription(),
      userId: user.id,
      User: user,
      createdAt: dayjs(),
    } as ProductInfo)
  }
}

export const selectDummyProductsById = async (productId: number) => {
  return dummyProducts.find(dummyProduct => dummyProduct.id === productId)
}
