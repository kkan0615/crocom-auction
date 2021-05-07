import { ProductForm, ProductInfo } from '@/interfaces/model/product/product'
import { Tag } from '@/interfaces/model/product/tag'
import { ProductImage } from '@/interfaces/model/product/image'

export interface ProductState {
  productList: Array<ProductInfo>
  productListCurrentPage: number
  currentProductForm: ProductForm
}

/**
 * productState
 */
export const productState: ProductState = {
  productList: [],
  productListCurrentPage: 1, // default is 1
  currentProductForm: {
    Tags: [] as Array<Tag>,
    Images: [] as Array<ProductImage>,
  } as ProductForm
}
