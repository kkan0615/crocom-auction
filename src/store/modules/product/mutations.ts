import { MutationTree } from 'vuex'
import { ProductState } from './state'
import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'

export enum ProductMutationTypes {
  SET_PRODUCT_LIST = 'PRODUCT_SET_PRODUCT_LIST',
  SET_PRODUCT_LIST_CURRENT_PAGE = 'PRODUCT_SET_PRODUCT_LIST_CURRENT_PAGE',
  SET_CURRENT_PRODUCT_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_FORM',
  SET_CURRENT_PRODUCT = 'PRODUCT_SET_CURRENT_PRODUCT',
}

export type ProductMutations<S = ProductState> = {
  [ProductMutationTypes.SET_PRODUCT_LIST](state: S, payload: Array<ProductInfo>): void
  [ProductMutationTypes.SET_PRODUCT_LIST_CURRENT_PAGE](state: S, payload: number): void
  [ProductMutationTypes.SET_CURRENT_PRODUCT_FORM](state: S, payload: ProductForm): void
  [ProductMutationTypes.SET_CURRENT_PRODUCT](state: S, payload: ProductInfo): void
}

export const productMutations: MutationTree<ProductState> & ProductMutations = {
  [ProductMutationTypes.SET_PRODUCT_LIST] (state, payload) {
    state.productList = payload
  },
  [ProductMutationTypes.SET_PRODUCT_LIST_CURRENT_PAGE] (state, payload) {
    state.productListCurrentPage = payload
  },
  [ProductMutationTypes.SET_CURRENT_PRODUCT_FORM] (state, payload) {
    state.currentProductForm = payload
  },
  [ProductMutationTypes.SET_CURRENT_PRODUCT] (state, payload) {
    state.currentProduct = payload
  },
}
