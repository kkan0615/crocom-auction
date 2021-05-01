import { MutationTree } from 'vuex'
import { ProductState } from './state'
import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'

export enum ProductMutationTypes {
  SET_PRODUCTS = 'PRODUCT_SET_PRODUCTS',
  SET_CURRENT_PRODUCT_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_FORM',
}

export type ProductMutations<S = ProductState> = {
  [ProductMutationTypes.SET_PRODUCTS](state: S, payload: Array<ProductInfo>): void
  [ProductMutationTypes.SET_CURRENT_PRODUCT_FORM](state: S, payload: ProductForm): void
}

export const productMutations: MutationTree<ProductState> & ProductMutations = {
  [ProductMutationTypes.SET_PRODUCTS] (state) {
    state.products = []
  },
  [ProductMutationTypes.SET_CURRENT_PRODUCT_FORM] (state, payload) {
    state.currentProductForm = payload
  },

}
