import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'
import { Tag } from '@/interfaces/model/product/tag'
import { ProductImage } from '@/interfaces/model/product/image'

export interface ProductState {
  productList: Array<ProductInfo>
  currentProductForm: ProductForm
}

/**
 * navigator
 */
export const productState: ProductState = {
  productList: [],
  currentProductForm: {
    Tags: [] as Array<Tag>,
    Images: [] as Array<ProductImage>,
  } as ProductForm
}
