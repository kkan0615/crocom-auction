import faker from 'faker'
import dayjs from 'dayjs'
import { ProductInfo } from '@/interfaces/model/product/product'
import { dummyUsers } from '@/dummy/model/user/user'
import { generateRandomIntNumber } from '@/utils/random'
import { dummyTags } from '@/dummy/model/product/tag'
import { dummyProductImages } from '@/dummy/model/product/images'
import { ProductImage } from '@/interfaces/model/product/image'
import { CustomFile } from '@/interfaces/system/file'

export const dummyProducts: Array<ProductInfo> = []

export const generateDummyProducts = () => {
  for (let i = 0; i < 100; i++) {
    const user = dummyUsers[generateRandomIntNumber(0, dummyUsers.length - 1)]
    const represntationImg =  {
      id: 101 + i,
      productId: i + 1,
      isRepresentation: true,
      file: {
        id: i + 1,
        name: 'test',
        href: faker.image.image(),
        fileType: 'image',
        createdAt: dayjs()
      } as CustomFile,
      createdAt: dayjs()
    } as ProductImage

    dummyProducts.push({
      id: i + 1,
      title: faker.commerce.productName(),
      endDatetime: dayjs().add(generateRandomIntNumber(1, 120), 'hours'),
      startPrice: generateRandomIntNumber(1, 200),
      increasePrice: generateRandomIntNumber(1, 200),
      content: faker.lorem.lines(generateRandomIntNumber(5, 10)),
      description: faker.commerce.productDescription(),
      userId: user.id,
      User: user,
      Tags: dummyTags.filter(dummyTag => dummyTag.name.includes('test')),
      Images: [
        {
          ...represntationImg,
        }
      ].concat(dummyProductImages.filter(dummyProductImage => dummyProductImage.productId === i + 1)),
      createdAt: dayjs(),
    } as ProductInfo)

    dummyProductImages.push(represntationImg)
  } // for loop ends
}

export const selectOneDummyProductsById = async (productId: number) => {
  return dummyProducts.find(dummyProduct => dummyProduct.id === productId)
}

export const selectDummyProductsByFilter = async (limit: number, offset = 0) => {
  return dummyProducts.slice(offset, limit)
}

export const selectCountDummyProducts = async () => {
  return dummyProducts.length
}
