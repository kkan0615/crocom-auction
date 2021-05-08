import { ActionContext, ActionTree } from 'vuex'
import { ProductMutations, ProductMutationTypes } from './mutations'
import { ProductState } from './state'
import { RootState } from '@/store'
import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'
import { selectDummyProductsByFilter } from '@/dummy/model/product/product'

export enum ProductActionTypes {
  LOAD_PRODUCT_LIST = 'PRODUCT_LOAD_PRODUCT_LIST',
  SET_PRODUCT_LIST = 'PRODUCT_SET_PRODUCT_LIST',
  SET_PRODUCT_LIST_CURRENT_PAGE = 'PRODUCT_SET_PRODUCT_LIST_CURRENT_PAGE',
  SET_CURRENT_PRODUCT_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_FORM',
}

export type AugmentedActionContext = {
  commit<K extends keyof ProductMutations>(
    key: K,
    payload?: Parameters<ProductMutations[K]>[1]
  ): ReturnType<ProductMutations[K]>
} & Omit<ActionContext<ProductState, RootState>, 'commit'>

export interface ProductActions {
  [ProductActionTypes.LOAD_PRODUCT_LIST](
    { commit }: AugmentedActionContext,
    payload: Array<ProductInfo>
  ): void
  [ProductActionTypes.SET_PRODUCT_LIST](
    { commit }: AugmentedActionContext,
    payload: Array<ProductInfo>
  ): void
  [ProductActionTypes.SET_PRODUCT_LIST_CURRENT_PAGE](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ProductActionTypes.SET_CURRENT_PRODUCT_FORM](
    { commit }: AugmentedActionContext,
    payload: ProductForm
  ): void
}

export const productActions: ActionTree<ProductState, RootState> & ProductActions = {
  async [ProductActionTypes.LOAD_PRODUCT_LIST] ({ commit }) {
    const responseProductList = await selectDummyProductsByFilter(30)
    console.log(responseProductList)
    commit(ProductMutationTypes.SET_PRODUCT_LIST, responseProductList)
  },
  [ProductActionTypes.SET_PRODUCT_LIST] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_PRODUCT_LIST, payload)
  },
  [ProductActionTypes.SET_PRODUCT_LIST_CURRENT_PAGE] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_PRODUCT_LIST_CURRENT_PAGE, payload)
  },
  [ProductActionTypes.SET_CURRENT_PRODUCT_FORM] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_CURRENT_PRODUCT_FORM, payload)
  },
}
