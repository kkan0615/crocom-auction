import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { productState, ProductState } from '@/store/modules/product/state'
import { productMutations, ProductMutations } from '@/store/modules/product/mutations'
import { productGetters, ProductGetters } from '@/store/modules/product/getters'
import { productActions, ProductActions } from '@/store/modules/product/actions'

export type Store<S = ProductState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ProductMutations, P extends Parameters<ProductMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<ProductMutations[K]>
} & {
  getters: {
    [K in keyof ProductGetters]: ReturnType<ProductGetters[K]>;
  }
} & {
  dispatch<K extends keyof ProductActions>(
    key: K,
    payload?: Parameters<ProductActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ProductActions[K]>
}

export const productModule: Module<ProductState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: productState,
  getters: productGetters,
  mutations: productMutations,
  actions: productActions,
}
