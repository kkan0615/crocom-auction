import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { CustomDate } from '@/interfaces/system/date'
import { UserInfo } from '@/interfaces/model/user/user'
import { Tag } from '@/interfaces/model/product/tag'

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
  User: UserInfo
  Tags: Array<Tag>
}

export interface ProductForm extends Product {
  files: Array<File>
  Tags: Array<Tag>
}
