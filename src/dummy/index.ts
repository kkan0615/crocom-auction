import { dummyProducts, generateDummyProducts } from '@/dummy/model/product/product'
import { dummyUsers, generateDummyUsers } from '@/dummy/model/user/user'

export const generateDummyData = () => {
  generateDummyUsers()
  generateDummyProducts()

  console.log(dummyUsers)
  console.log(dummyProducts)
}
