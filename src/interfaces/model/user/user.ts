import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface User extends SequelizeAttributes {
  userid: string
  password: string
  name: string
  nickname: string
  email: string
  phoneNumber: string
}

export type UserInfo = User
