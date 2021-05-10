import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { CustomDate } from '@/interfaces/system/date'
import { UserInfo } from '@/interfaces/model/user/user'
import { Tag } from '@/interfaces/model/product/tag'
import { ProductImage } from '@/interfaces/model/product/image'

export interface Product extends SequelizeAttributes {
  title: string
  userId: number
  startPrice: number
  increasePrice: number
  content: string
  endDatetime: CustomDate
  description?: string
}

export interface ProductInfo extends Product {
  currentPrice: number
  currentAttenders: number
  User: UserInfo
  Images: Array<ProductImage>
  Tags: Array<Tag>
  rating?: number
}

export interface ProductListInfo extends ProductInfo {
  hot: boolean
}

export interface ProductForm extends Product {
  Images: Array<ProductImage>
  Tags: Array<Tag>
}
