import faker from 'faker'
import dayjs from 'dayjs'
import { ProductImage } from '@/interfaces/model/product/image'
import { CustomFile } from '@/interfaces/system/file'
import { generateRandomIntNumber } from '@/utils/random'
import { dummyProducts } from '@/dummy/model/product/product'

export const dummyProductImages: Array<ProductImage> = []

export const generateDummyProductImages = () => {
  for (let i = 0; i < 100; i++) {
    const randomProductId = generateRandomIntNumber(0, dummyProducts.length)
    const dummyProductImage = {
      id: i + 1,
      productId: randomProductId,
      isRepresentation: dummyProductImages.filter(dummyProductImage => dummyProductImage.productId === randomProductId).length <= 0,
      file: {
        id: i + 1,
        name: 'test',
        href: faker.image.image(),
        fileType: 'image',
        createdAt: dayjs()
      } as CustomFile,
      createdAt: dayjs()
    } as ProductImage
    dummyProductImages.push(dummyProductImage)

    const foundProduct = dummyProducts.find(dummyProduct => dummyProduct.id === randomProductId)
    if (!foundProduct)
      continue

    if (!foundProduct.Images)
      foundProduct.Images = []

    foundProduct.Images.push(dummyProductImage)
  }
}
