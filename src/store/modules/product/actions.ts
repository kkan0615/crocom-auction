import { ActionContext, ActionTree } from 'vuex'
import { ProductMutations, ProductMutationTypes } from './mutations'
import { ProductState } from './state'
import { RootState } from '@/store'
import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'

export enum ProductActionTypes {
  SET_PRODUCTS = 'PRODUCT_SET_PRODUCTS',
  SET_CURRENT_PRODUCT_FORM = 'PRODUCT_SET_CURRENT_PRODUCT_FORM',
}

export type AugmentedActionContext = {
  commit<K extends keyof ProductMutations>(
    key: K,
    payload?: Parameters<ProductMutations[K]>[1]
  ): ReturnType<ProductMutations[K]>
} & Omit<ActionContext<ProductState, RootState>, 'commit'>

export interface ProductActions {
  [ProductActionTypes.SET_PRODUCTS](
    { commit }: AugmentedActionContext,
    payload: Array<ProductInfo>
  ): void
  [ProductActionTypes.SET_CURRENT_PRODUCT_FORM](
    { commit }: AugmentedActionContext,
    payload: ProductForm
  ): void
}

export const productActions: ActionTree<ProductState, RootState> & ProductActions = {
  [ProductActionTypes.SET_PRODUCTS] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_PRODUCTS, payload)
  },
  [ProductActionTypes.SET_CURRENT_PRODUCT_FORM] ({ commit }, payload) {
    commit(ProductMutationTypes.SET_CURRENT_PRODUCT_FORM, payload)
  },
}
