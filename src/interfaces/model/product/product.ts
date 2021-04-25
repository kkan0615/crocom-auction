import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { CustomDate } from '@/interfaces/system/date'
import { UserInfo } from '@/interfaces/model/user/user'

export interface Product extends SequelizeAttributes{
  title: string
  userId: number
  endDatetime: CustomDate
  description?: string
}

export interface ProductInfo extends Product {
  currentPrice: number
  User: UserInfo
}

export interface ProductForm extends Product {
  files: Array<File>
}
