import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export type CustomFileType = 'image' | 'video' | 'file'

export interface CustomFile extends File, SequelizeAttributes {
  type: CustomFileType
  href?: string
}
