import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface Tag extends SequelizeAttributes {
  name: string
}
