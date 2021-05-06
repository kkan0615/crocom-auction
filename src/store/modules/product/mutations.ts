import { MutationTree } from 'vuex'
import { ProductState } from './state'
import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'

export enum ProductMutationTypes {
  SET_PRODUCT_LIST = 'PRODUCT_SET_PRODUCT_LIST',
  SET_CURRENT_PRODUCT_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_FORM',
}

export type ProductMutations<S = ProductState> = {
  [ProductMutationTypes.SET_PRODUCT_LIST](state: S, payload: Array<ProductInfo>): void
  [ProductMutationTypes.SET_CURRENT_PRODUCT_FORM](state: S, payload: ProductForm): void
}

export const productMutations: MutationTree<ProductState> & ProductMutations = {
  [ProductMutationTypes.SET_PRODUCT_LIST] (state, payload) {
    state.productList = payload
  },
  [ProductMutationTypes.SET_CURRENT_PRODUCT_FORM] (state, payload) {
    state.currentProductForm = payload
  },

}
