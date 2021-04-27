import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'

export interface ProductState {
  products: Array<ProductInfo>
  currentProductForm: ProductForm
}

/**
 * navigator
 */
export const productState: ProductState = {
  products: [],
  currentProductForm: {} as ProductForm
}
