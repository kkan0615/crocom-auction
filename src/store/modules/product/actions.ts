import { ActionContext, ActionTree } from 'vuex'
import { ProductMutations, ProductMutationTypes } from './mutations'
import { ProductState } from './state'
import { RootState } from '@/store'
import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'
import { selectDummyProductsByFilter, selectOneDummyProductsById } from '@/dummy/model/product/product'
import { BiddingForm } from '@/interfaces/model/product/bidding'

export enum ProductActionTypes {
  LOAD_PRODUCT_LIST = 'PRODUCT_LOAD_PRODUCT_LIST',
  SET_PRODUCT_LIST = 'PRODUCT_SET_PRODUCT_LIST',
  SET_PRODUCT_LIST_CURRENT_PAGE = 'PRODUCT_SET_PRODUCT_LIST_CURRENT_PAGE',
  SET_CURRENT_PRODUCT_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_FORM',
  LOAD_CURRENT_PRODUCT = 'PRODUCT_LOAD_CURRENT_PRODUCT',
  SET_CURRENT_PRODUCT = 'PRODUCT_SET_CURRENT_PRODUCT',
  SET_CURRENT_PRODUCT_BIDDING_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_BIDDING_FORM',
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
  [ProductActionTypes.LOAD_CURRENT_PRODUCT](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<boolean>
  [ProductActionTypes.SET_CURRENT_PRODUCT](
    { commit }: AugmentedActionContext,
    payload: ProductInfo
  ): void
  [ProductActionTypes.SET_CURRENT_PRODUCT_BIDDING_FORM](
    { commit }: AugmentedActionContext,
    payload: BiddingForm
  ): void
}

export const productActions: ActionTree<ProductState, RootState> & ProductActions = {
  async [ProductActionTypes.LOAD_PRODUCT_LIST] ({ commit }) {
    const responseProductList = await selectDummyProductsByFilter(30)
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
  async [ProductActionTypes.LOAD_CURRENT_PRODUCT] ({ commit }, payload) {
    const responseProductData = await selectOneDummyProductsById(payload)
    console.log('test', responseProductData)
    if (responseProductData)
      commit(ProductMutationTypes.SET_CURRENT_PRODUCT, responseProductData)

    return !!responseProductData
  },
  [ProductActionTypes.SET_CURRENT_PRODUCT] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_CURRENT_PRODUCT_FORM, payload)
  },
  [ProductActionTypes.SET_CURRENT_PRODUCT_BIDDING_FORM] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_CURRENT_PRODUCT_BIDDING_FORM, payload)
  },
}
