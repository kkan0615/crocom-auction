import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { ProductInfo } from '@/interfaces/model/product/product'
import { UserInfo } from '@/interfaces/model/user/user'
import { AddressInfo } from '@/interfaces/model/user/address'

export interface Order extends SequelizeAttributes {
  productId: number
  userId: number
  addressId: number
  description?: string
}

export interface OrderInfo extends Order {
  Product: ProductInfo
  User: UserInfo
  Address: AddressInfo
}
