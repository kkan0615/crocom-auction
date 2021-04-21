import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface Bidding extends SequelizeAttributes {
  productId: number
  userId: number
  price: number
}
