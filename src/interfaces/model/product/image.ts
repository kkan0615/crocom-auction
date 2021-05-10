import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { CustomFile } from '@/interfaces/system/file'

export interface ProductImage extends SequelizeAttributes {
  productId: number
  isRepresentation: boolean
  file: CustomFile
}
