import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface History extends SequelizeAttributes {
  userId: number
  productId: number
}
