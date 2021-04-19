import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface Product extends SequelizeAttributes{
  title: string
  userId: number
  startDatetime: Date
  endDatetime: Date
}

export interface ProductInfo extends Product{
  currentPrice: number
}
