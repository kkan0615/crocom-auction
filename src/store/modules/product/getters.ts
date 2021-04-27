import { GetterTree } from 'vuex'
import { ProductState } from './state'
import { RootState } from '@/store'
import { ProductInfo } from '@/interfaces/model/product/product'

export type ProductGetters<S = ProductState> = {
  getProducts(state: S): Array<ProductInfo>
}

export const productGetters: GetterTree<ProductState, RootState> & ProductGetters = {
  getProducts: (state) => {
    return state.products
  },
}
