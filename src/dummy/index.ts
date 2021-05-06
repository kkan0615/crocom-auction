import { dummyProducts, generateDummyProducts } from '@/dummy/model/product/product'
import { dummyUsers, generateDummyUsers } from '@/dummy/model/user/user'
import { dummyTags, generateDummyTags } from '@/dummy/model/product/tag'
import { generateDummyProductImages } from '@/dummy/model/product/images'

export const generateDummyData = () => {
  generateDummyUsers()
  generateDummyProducts()
  generateDummyTags()
  generateDummyProductImages()
}
