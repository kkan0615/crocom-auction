import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'
import { Tag } from '@/interfaces/model/product/tag'

export interface ProductState {
  products: Array<ProductInfo>
  currentProductForm: ProductForm
}

/**
 * navigator
 */
export const productState: ProductState = {
  products: [],
  currentProductForm: {
    Tags: [] as Array<Tag>,
  } as ProductForm
}
