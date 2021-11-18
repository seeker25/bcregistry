import { ProductCode, ProductStatus } from '@/enums'

export interface APIProductI {
  code: ProductCode
  subscriptionStatus: ProductStatus
  // more unused vars in api response that we don't use
}

export interface ProductI {
  image: String,
  link: String,
  text: String,
  title: String
}
