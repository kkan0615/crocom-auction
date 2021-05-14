import { SequelizeAttributes } from '@/interfaces/model/sequelize'
import { Address } from '@/interfaces/model/user/address'

export interface Bidding extends SequelizeAttributes {
  productId: number
  userId: number
  addressId: number
  price: number
}

export interface BiddingForm extends Bidding {
  address: Address
}
