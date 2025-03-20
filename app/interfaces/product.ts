export interface APIProduct {
  code: ProductCode
  subscriptionStatus: ProductStatus
  // more unused vars in api response that we don't use
}

export interface Product {
  image: string
  link: string
  text: string
  title: string
}
