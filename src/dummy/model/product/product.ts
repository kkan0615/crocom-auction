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
      description: faker.commerce.productDescription(),
      userId: user.id,
      User: user,
      createdAt: dayjs(),
    } as ProductInfo)
  }
}
