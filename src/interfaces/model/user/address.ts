import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { UserInfo } from '@/interfaces/model/user/user'

export interface Address extends SequelizeAttributes {
  userId: number
  country: string
  destination: string
}

export interface AddressInfo extends Address {
  User: UserInfo
}
